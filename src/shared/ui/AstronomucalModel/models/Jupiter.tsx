import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    JUPITER_0: THREE.SkinnedMesh;
    Armature_rootJoint: THREE.Bone;
  };
  materials: {
    JUPITER: THREE.MeshPhysicalMaterial;
  };
  animations: GLTFAction[];
};

type ActionName = 'ArmatureAction';
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

export function Jupiter(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/jupiter/scene.gltf') as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1}>
          <group name="Root">
            <group name="Armature">
              <primitive object={nodes.Armature_rootJoint} />
              <group name="JUPITER" />
              <skinnedMesh
                name="JUPITER_0"
                geometry={nodes.JUPITER_0.geometry}
                material={materials.JUPITER}
                skeleton={nodes.JUPITER_0.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/jupiter/scene.gltf');
