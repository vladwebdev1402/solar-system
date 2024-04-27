import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    ['Sphere001_Material_#50_0']: THREE.Mesh;
  };
  materials: {
    Material_50: THREE.MeshStandardMaterial;
  };
};

export function Mercury(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/mercury/scene.gltf') as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.25}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes['Sphere001_Material_#50_0'].geometry}
            material={materials.Material_50}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/mercury/scene.gltf');
