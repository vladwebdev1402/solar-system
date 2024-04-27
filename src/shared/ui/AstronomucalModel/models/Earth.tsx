import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    EARTHLayer1_TERRE_0: THREE.Mesh;
    EARTHLayer2_NUAGES_0: THREE.Mesh;
    EARTHLayer3_01_0: THREE.Mesh;
    EARTHLayer4_02_0: THREE.Mesh;
    EARTHLayer5_03_0: THREE.Mesh;
    EARTHLayer6_04_0: THREE.Mesh;
    EARTHLayer7_05_0: THREE.Mesh;
    EARTHLayer8_06_0: THREE.Mesh;
  };
  materials: {
    TERRE: THREE.MeshStandardMaterial;
    NUAGES: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    material_3: THREE.MeshStandardMaterial;
    material_4: THREE.MeshStandardMaterial;
    material_5: THREE.MeshStandardMaterial;
    material_6: THREE.MeshStandardMaterial;
    material_7: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName = 'Base Stack';
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

export function Earth(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/earth/scene.gltf') as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.00033}>
          <group
            name="5fbd3316863b4d98adffc1dec302e69efbx"
            rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="EARTHLayer1">
                  <mesh
                    name="EARTHLayer1_TERRE_0"
                    geometry={nodes.EARTHLayer1_TERRE_0.geometry}
                    material={materials.TERRE}
                  />
                </group>
                <group name="EARTHLayer2">
                  <mesh
                    name="EARTHLayer2_NUAGES_0"
                    geometry={nodes.EARTHLayer2_NUAGES_0.geometry}
                    material={materials.NUAGES}
                  />
                </group>
                <group name="EARTHLayer3">
                  <mesh
                    name="EARTHLayer3_01_0"
                    geometry={nodes.EARTHLayer3_01_0.geometry}
                    material={materials.material}
                  />
                </group>
                <group name="EARTHLayer4">
                  <mesh
                    name="EARTHLayer4_02_0"
                    geometry={nodes.EARTHLayer4_02_0.geometry}
                    material={materials.material_3}
                  />
                </group>
                <group name="EARTHLayer5">
                  <mesh
                    name="EARTHLayer5_03_0"
                    geometry={nodes.EARTHLayer5_03_0.geometry}
                    material={materials.material_4}
                  />
                </group>
                <group name="EARTHLayer6">
                  <mesh
                    name="EARTHLayer6_04_0"
                    geometry={nodes.EARTHLayer6_04_0.geometry}
                    material={materials.material_5}
                  />
                </group>
                <group name="EARTHLayer7">
                  <mesh
                    name="EARTHLayer7_05_0"
                    geometry={nodes.EARTHLayer7_05_0.geometry}
                    material={materials.material_6}
                  />
                </group>
                <group name="EARTHLayer8">
                  <mesh
                    name="EARTHLayer8_06_0"
                    geometry={nodes.EARTHLayer8_06_0.geometry}
                    material={materials.material_7}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/earth/scene.gltf');
