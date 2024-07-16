import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Edges } from "@react-three/drei";

function Box() {
  return (
    <mesh position={[2, 0, 0]} rotation={[0.5, 0, 0]} scale={[-2, 2, 2]}>
      <boxGeometry args={[1, 1, 1]} />
      <Edges color="black" />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

createRoot(document.getElementById("root")).render(
  <Canvas>
    <ambientLight intensity={Math.PI / 2} />
    <spotLight
      position={[10, 10, 10]}
      angle={0.15}
      penumbra={1}
      decay={0}
      intensity={Math.PI}
    />
    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
    <Box />
  </Canvas>
);
