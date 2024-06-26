/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/saturn/scene.gltf -t 
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_16: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_25: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_23: THREE.Mesh;
  };
  materials: {
    material: THREE.MeshStandardMaterial;
    material_0: THREE.MeshStandardMaterial;
  };
};

export function Saturn(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/saturn/scene.gltf') as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.006}>
        <group
          position={[-0.484, -3.627, 0]}
          rotation={[-1.571, -1.386, 0.001]}
          scale={220.595}>
          <mesh
            geometry={nodes.Object_16.geometry}
            material={materials.material}
            position={[0.017, 0, 0.001]}
            rotation={[1.571, -0.002, -1.386]}
            scale={0.005}
          />
          <mesh
            geometry={nodes.Object_5.geometry}
            material={materials.material}
            position={[0.017, 0, 0.001]}
            rotation={[1.571, -0.002, -1.386]}
            scale={0.005}
          />
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials.material}
            position={[0.017, 0, 0.001]}
            rotation={[1.571, -0.002, -1.386]}
            scale={0.005}
          />
          <mesh
            geometry={nodes.Object_11.geometry}
            material={materials.material}
            position={[0.017, 0, 0.001]}
            rotation={[1.571, -0.002, -1.386]}
            scale={0.005}
          />
          <mesh
            geometry={nodes.Object_14.geometry}
            material={materials.material}
            position={[0.017, 0, 0.001]}
            rotation={[1.571, -0.002, -1.386]}
            scale={0.005}
          />
        </group>
        <group scale={100}>
          <mesh
            geometry={nodes.Object_25.geometry}
            material={materials.material_0}
            scale={0.01}
          />
          <mesh
            geometry={nodes.Object_20.geometry}
            material={materials.material_0}
            scale={0.01}
          />
          <mesh
            geometry={nodes.Object_23.geometry}
            material={materials.material_0}
            scale={0.01}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/saturn/scene.gltf');
