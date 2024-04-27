import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Mars_LOD0_MarsLOD1_0: THREE.Mesh;
  };
  materials: {
    MarsLOD1: THREE.MeshStandardMaterial;
  };
};

export function Mars(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/mars/scene.gltf') as GLTFResult;
  return (
    <group {...props} dispose={null} scale={0.5}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Mars_LOD0_MarsLOD1_0.geometry}
              material={materials.MarsLOD1}
              position={[0, -2.5, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/mars/scene.gltf');
