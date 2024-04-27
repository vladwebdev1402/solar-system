import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
  };
  materials: {
    material: THREE.MeshStandardMaterial;
  };
};

export function Venus(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/venus/scene.gltf') as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.material}
          scale={1.245}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/venus/scene.gltf');
