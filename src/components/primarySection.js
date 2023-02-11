import * as THREE from 'three';
import * as custoMaterial from './../assets/material';

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { 
    color: custoMaterial.yelow,
} );

export default function view(scene) {
    scene.add(new THREE.Mesh( geometry, material ));
};