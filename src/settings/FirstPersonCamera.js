import {
	MathUtils,
	Spherical,
	Vector3
} from 'three';

const exportSettings = ['movementSpeed', 'lookSpeed', 'reverseRotate'];
const _lookDirection = new Vector3();
const _spherical = new Spherical();
const _target = new Vector3();
let _phi = Math.PI / 2;
let _theta = Math.PI;

class FirstPersonControls {
	constructor( object, domElement ) {
		this.object = object;
		this.domElement = domElement;
		this.enabled = true;
		this.movementSpeed = 5;
		this.lookSpeed = 5;
		this.autoForward = false;
		this.heightSpeed = false;
		this.heightCoef = 1.0;
		this.heightMin = 0.0;
		this.heightMax = 1.0;
		this.autoSpeedFactor = 0.0;
		this.moveForward = false;
		this.moveBackward = false;
		this.moveLeft = false;
		this.moveRight = false;
		this.reverseRotate = 1;

		const startPointer = {
			pointerX: 0,
			pointerY: 0,
		}

		this.onPointerDown = ( event ) => {
			if ( this.domElement !== document ) {
				this.domElement.focus();
				startPointer.pointerX = event.pageX;
				startPointer.pointerY = event.pageY;
			}
		};

		this.onPointerMove = ( event ) => {
			const pointerX = (startPointer.pointerX - event.pageX) * this.reverseRotate;
			const pointerY = (event.pageY - startPointer.pointerY) * this.reverseRotate;

			setSphericalThetaAndPhi( pointerX, pointerY, this.lookSpeed );

			startPointer.pointerX = event.pageX;
			startPointer.pointerY = event.pageY;
		};

		this.onKeyDown = ( event ) => {
			switch ( event.code ) {
				case 'ArrowUp':
				case 'KeyW': this.moveForward = true; break;

				case 'ArrowLeft':
				case 'KeyA': this.moveRight = true; break;

				case 'ArrowDown':
				case 'KeyS': this.moveBackward = true; break;

				case 'ArrowRight':
				case 'KeyD': this.moveLeft = true; break;

				case 'KeyR': this.moveUp = true; break;
				case 'KeyF': this.moveDown = true; break;
			}

		};

		this.onKeyUp = ( event ) => {
			switch ( event.code ) {
				case 'ArrowUp':
				case 'KeyW': this.moveForward = false; break;

				case 'ArrowLeft':
				case 'KeyA': this.moveRight = false; break;

				case 'ArrowDown':
				case 'KeyS': this.moveBackward = false; break;

				case 'ArrowRight':
				case 'KeyD': this.moveLeft = false; break;

				case 'KeyR': this.moveUp = false; break;
				case 'KeyF': this.moveDown = false; break;
			}
		};

		this.lookAt = ( x, y, z ) => {
			if ( x.isVector3 ) _target.copy( x );
			else _target.set( x, y, z );

			this.object.lookAt( _target );
			setOrientation( this );

			return this;
		};

		this.update = function () {
			const targetPosition = new Vector3();

			return function update( delta ) {
				if ( this.enabled === false ) return;

				if ( this.heightSpeed ) {
					const y = MathUtils.clamp( this.object.position.y, this.heightMin, this.heightMax );
					const heightDelta = y - this.heightMin;

					this.autoSpeedFactor = delta * ( heightDelta * this.heightCoef );
				} else this.autoSpeedFactor = 0.0;

				
				const actualMoveSpeed = delta * this.movementSpeed;
				if ( this.moveForward || ( this.autoForward && ! this.moveBackward ) )
					this.object.translateZ( - ( actualMoveSpeed + this.autoSpeedFactor ) );
				if ( this.moveBackward ) this.object.translateZ( actualMoveSpeed );

				if ( this.moveLeft ) this.object.translateX( - actualMoveSpeed );
				if ( this.moveRight ) this.object.translateX( actualMoveSpeed );

				if ( this.moveUp ) this.object.translateY( actualMoveSpeed );
				if ( this.moveDown ) this.object.translateY( - actualMoveSpeed );

				const position = this.object.position;
				_spherical.phi = _phi;
				_spherical.theta = _theta;
				targetPosition.setFromSpherical( _spherical ).add( position );

				this.object.lookAt( targetPosition );

			};
		}();

		function setOrientation( controls ) {
			const quaternion = controls.object.quaternion;
			_lookDirection.set( 0, 0, - 10 ).applyQuaternion( quaternion );
			_spherical.setFromVector3( _lookDirection );
		};

		setOrientation( this );
	};
};

function setSphericalThetaAndPhi( moveTheta, movePhi, mouseSpeed ) {
	_theta -= ( ( moveTheta / 1000 ) * mouseSpeed );
	_phi -= ( ( movePhi / 1000 ) * mouseSpeed );
};

function setSettingsFPC( index, value, controls ) {
	if( exportSettings.includes(index) ) {
		if(  index !== 'reverseRotate' && typeof value === 'boolean' )
			controls[index] = value ? 1 : -1;
		else if( typeof index === 'string' && typeof value === 'number' )
			controls[index] = value;
	}
};

export { FirstPersonControls, setSettingsFPC };