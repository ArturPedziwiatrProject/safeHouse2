import './assets/main.css';
import * as THREE from 'three';
import * as custoMaterial from './assets/material';
import view from './components/primarySection';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

var scene, renderer, camera, sun, controls;

init();

function init() {
    scene = new THREE.Scene();
    addRenderer();
    addCamera();
    addLight();
    addEvent();
    addControls();
    view(scene);
    animate();
    document.getElementById("mainView").appendChild( renderer.domElement );
}

function addRenderer() {
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function addCamera() {
    camera = new THREE.PerspectiveCamera( 24, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.set(0, 0, 40);
}

function addLight() {
    sun = new THREE.PointLight(custoMaterial.light, 2);
    const mainLight = new THREE.PointLight(custoMaterial.light, 2);
    const secondaryLight = new THREE.PointLight(custoMaterial.light, .5);

    mainLight.position.set(-40, -20, 20);
    secondaryLight.position.set(40, 20, 10);

    scene.add( mainLight );
    scene.add( secondaryLight );
}

function addEvent() {
    window.addEventListener("resize", function(){
        renderer.setSize( window.innerWidth, window.innerHeight );
        animate();
    });
}

function addControls() {
    controls = new OrbitControls(camera, renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    render();  
}
  
function render() {
    renderer.render(scene, camera);
}
