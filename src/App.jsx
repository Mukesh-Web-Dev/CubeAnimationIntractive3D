import { Canvas } from "@react-three/fiber";
import { OrbitControls, Instances } from "@react-three/drei";
import { multiRootData } from "./replicationShape/data";
import { AnimationProvider } from "./replicationShape/AnimationContext";
import Room from "./replicationShape/Room";
import RecursiveBox from "./replicationShape/RecursiveBox";
import "./App.css";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#1a1a1a" }}>

      <h2 style={{ color: "white" }}>Click On Cube to Interact</h2>
      
      {/* SUGGESTION 2: Wrap the Canvas in the AnimationProvider Context */}
      <AnimationProvider>
        
        {/* Enable shadow maps globally on the Canvas */}
        <Canvas shadows camera={{ position: [4, 4, 4], fov: 50 }}>
          
          {/* Import our clean Room component */}
          <Room />

          {/* SUGGESTION 4: Instanced Mesh wrapper optimized for the GPU */}
          <Instances limit={100} castShadow receiveShadow>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="white" />
            
            {/* Map through our external data file */}
            {multiRootData.map((data, index) => (
              <group key={index} position={[0, 0, -1.2]}>
                <RecursiveBox config={data} />
              </group>
            ))}
          </Instances>

          <OrbitControls
            makeDefault 
            autoRotate={true} 
            autoRotateSpeed={3}
          />

        </Canvas>
      </AnimationProvider>
      
    </div>
  );
}