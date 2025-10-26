import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const FloatingIcon = ({ position, text, color }: { position: [number, number, number], text: string, color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime + position[1]) * 0.1;
    }
  });

  return (
    <Float
      speed={1}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={color} transparent opacity={0.8} />
        <Text
          position={[0, 0, 0.6]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>
      </mesh>
    </Float>
  );
};

const FloatingIcons = () => {
  const icons = [
    { position: [-2, 1, 0] as [number, number, number], text: "⚛️", color: "#61dafb" },
    { position: [2, -1, 0] as [number, number, number], text: "💻", color: "#9333ea" },
    { position: [0, 2, -1] as [number, number, number], text: "🚀", color: "#3b82f6" },
    { position: [-1, -2, 1] as [number, number, number], text: "✨", color: "#eab308" },
  ];

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9333ea" />
      
      {icons.map((icon, index) => (
        <FloatingIcon
          key={index}
          position={icon.position}
          text={icon.text}
          color={icon.color}
        />
      ))}
      
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default FloatingIcons;