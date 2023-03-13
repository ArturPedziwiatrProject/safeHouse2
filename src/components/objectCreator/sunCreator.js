import {
  ShaderMaterial, DoubleSide, Vector4, SphereBufferGeometry, Mesh,
  MeshBasicMaterial, Color, SphereGeometry,
} from 'three';

import sunVertex from '../../shaders/sun/vertex.glsl';
import sunFragment from '../../shaders/sun/fragment.glsl';

export default function sunCreator() {
  const sunShader = new ShaderMaterial({
    uniforms: {
      time: 1.0 ,
      resolution: new Vector4()
    },
    vertexShader: sunVertex,
    fragmentShader: sunFragment,
  });

  const sphere = new SphereGeometry( 21, 30, 30 );
  console.log(sunShader);
  const plane = new Mesh( sphere, sunShader );


  return plane;
}
