import './assets/main.css';
import * as THREE from 'three';
import * as custoMaterial from './assets/material.js';
import view from './components/primarySection.js';
import { FirstPersonControls, setSettingsFPC } from './settings/FirstPersonCamera';
import { EventListenersMenager } from './settings/EventListenersMenager'
import { FPC } from './enums/settings'

var sun;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 240, window.innerWidth / window.innerHeight, 0.1, 30000 );
const renderer = new THREE.WebGLRenderer({ antialias: false });
const controls = new FirstPersonControls(camera, renderer.domElement);
const eventMenager = new EventListenersMenager( controls, renderer, renderer.domElement, camera );

init();

function init() {
    setRenderer();
    addLight();
    setCamera();
    setControls();
    view(scene);
    animate();
    document.getElementById("mainView").appendChild( renderer.domElement );
}

function setRenderer() {
    renderer.setSize( window.innerWidth - 10, window.innerHeight );
    renderer.setClearColor( 0x02213f, 1 );
}

function setCamera() {
   camera.position.set(0, 0, 40);
}

function addLight() {
    sun = new THREE.RectAreaLight( 0xffffff, 500,  10, 10 );
    const suner = new THREE.PointLight(custoMaterial.light, 2);
    const mainLight = new THREE.PointLight(custoMaterial.light, 2);
    const secondaryLight = new THREE.PointLight(custoMaterial.light, .5);
    const thridlight = new THREE.PointLight(custoMaterial.light, 2.5);
    
    sun.position.set(1, 1, 2);
    mainLight.position.set(-40, -20, 20);
    secondaryLight.position.set(40, 20, 10);
    thridlight.position.set(40, 20, -10);

    scene.add( mainLight );
    scene.add( secondaryLight );
    scene.add( thridlight );
}

function setControls() {}

function animate() {
    requestAnimationFrame(animate);
    controls.update(.2);
    render();  
}
  
function render() {
    renderer.render(scene, camera);
}

function setSettings( index, value, object ) {
	switch(object) {
        case FPC:
            setSettingsFPC(index, value, controls);
            break;
        default:
            alert('coś poszło nie tak xd');
    }
};

