/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/neptune/scene.gltf -t 
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
  };
  materials: {
    ['Scene_-_Root']: THREE.MeshStandardMaterial;
  };
};

export function Neptune(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/neptune/scene.gltf') as GLTFResult;
  return (
    <group {...props} dispose={null} scale={1}>
      <group>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials['Scene_-_Root']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/neptune/scene.gltf');