import * as THREE from 'three';
import * as custoMaterial from './../assets/material';
import sunCreator from './objectCreator/sunCreator';

const geometry = new THREE.BoxGeometry( 18, 10, 16 );
const material = new THREE.MeshPhongMaterial( { 
    color: custoMaterial.yelow,
} );

export default function view(scene) {
    const sunStar = sunCreator();
    console.log(sunStar);
    scene.add(sunStar);
   //  scene.add(new THREE.Mesh( geometry, material ));
};