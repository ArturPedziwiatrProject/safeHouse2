
class EventListenersMenager {
  constructor( controls, renderer, domElement, camera ) {
    this.controls = controls;
    this.renderer = renderer;
    this.domElement = domElement;
		this.camera = camera;
		this.mouseDragOn = false;

    this.onPointerDown = (event) => {
			if ( event.button === 2 ) 
				this.mouseDragOn = true; 
			else 
				this.mouseDragOn = false;

			this.controls.onPointerDown(event)
		}

    this.onPointerMove = (event) => {
			this.mouseDragOn && this.controls.onPointerMove(event)
		}

    this.onPointerUp = (event) => {
			this.mouseDragOn = false;
		}

    this.onKeyDown = (event) => {
			this.controls.onKeyDown(event)
		}

    this.onKeyUp = (event) => {
			this.controls.onKeyUp(event)
		}

    this.onResize = () => {
			renderer.setSize( window.innerWidth, window.innerHeight );
		}

		this.contextmenu = ( event ) => {
			event.preventDefault();
		}

    this.dispose = function () {
			this.domElement.removeEventListener( 'contextmenu', this.contextmenu );
			this.domElement.removeEventListener( 'pointerdown', this.onPointerDown );
			this.domElement.removeEventListener( 'pointermove', this.onPointerMove );
			this.domElement.removeEventListener( 'pointerup', this.onPointerUp );

			window.removeEventListener( 'keydown', this.onKeyDown );
			window.removeEventListener( 'keyup', this.onKeyUp );
      window.removeEventListener( 'resize', this.onResize );
		};

    this.domElement.addEventListener( 'contextmenu', this.contextmenu );
		this.domElement.addEventListener( 'pointerdown', this.onPointerDown );
		this.domElement.addEventListener( 'pointermove', this.onPointerMove );
		this.domElement.addEventListener( 'pointerup', this.onPointerUp );

		window.addEventListener( 'keydown', this.onKeyDown );
		window.addEventListener( 'keyup', this.onKeyUp );
    window.addEventListener( 'resize', this.onResize );
  }
}

export { EventListenersMenager };