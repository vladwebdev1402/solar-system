import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
  };
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial;
  };
};

export function Moon(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/moon/scene.gltf') as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.038, -1.367, 0.182]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.19}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials['Material.001']}
          position={[-0.013, 0.229, -0.26]}
          scale={1.12}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/moon/scene.gltf');
