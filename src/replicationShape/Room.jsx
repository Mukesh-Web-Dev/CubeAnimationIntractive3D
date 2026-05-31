export default function Room() {
  return (
    <group>
      <ambientLight intensity={1} />
      
      {/* SUGGESTION 5: Fixed lighting and dynamic shadow bounds */}
      <directionalLight position={[10, 10, 10]} intensity={3} castShadow>
        {/* The shadow camera dictates the bounding box where shadows are calculated. */}
        {/* We expand the args [-left, right, top, -bottom, near, far] so it covers the whole room */}
        <orthographicCamera attach="shadow-camera" args={[-15, 15, 15, -15, 0.1, 50]} />
      </directionalLight>

      {/* The Room Environment */}
      <mesh receiveShadow position={[0, -1, 0]} rotation={[-Math.PI * 0.5, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
      
      
    </group>
  );
}