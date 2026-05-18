/* eslint-disable @typescript-eslint/no-explicit-any */
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import "./home.css";

function Model(props: any) {
  const { scene } = useGLTF("/outdoor_ac_unit.glb");
  return <primitive object={scene} {...props} />;
}

export default function HomePage() {
  return (
    <div id="homePage">
      <h1>Home Page</h1>
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }} style={{ width: "100%", height: "80vh" }}>
        <color attach={"background"} args={["#2b2b2b"]} />
        <PresentationControls speed={1.5} global zoom={1} polar={[-0.1, Math.PI / 4]}>
          <Stage environment={null}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}
