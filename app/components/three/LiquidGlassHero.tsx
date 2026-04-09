'use client';

import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

const LiquidOrb = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.04, 28), []);
  const base = useMemo(
    () => Float32Array.from((geometry.attributes.position.array as ArrayLike<number>) || []),
    [geometry],
  );

  useEffect(() => {
    return () => {
      geometry.dispose();
    };
  }, [geometry]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const position = geometry.attributes.position as THREE.BufferAttribute;

    for (let i = 0; i < position.count; i += 1) {
      const index = i * 3;
      const x = base[index] ?? 0;
      const y = base[index + 1] ?? 0;
      const z = base[index + 2] ?? 0;

      const wave = Math.sin(t * 0.8 + x * 3.5 + y * 2.9 + z * 3.2) * 0.07;
      const ripple = Math.cos(t * 0.55 + x * 4.2 - z * 3.7) * 0.05;
      const scale = 1 + wave + ripple;

      position.setXYZ(i, x * scale, y * scale, z * scale);
    }

    position.needsUpdate = true;
    geometry.computeVertexNormals();

    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.17;
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.22;
      meshRef.current.rotation.z = Math.cos(t * 0.25) * 0.16;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <MeshTransmissionMaterial
        transmission={0.99}
        roughness={0.16}
        ior={1.5}
        thickness={0.65}
        chromaticAberration={0.03}
        anisotropy={0.24}
        distortion={0.2}
        distortionScale={0.45}
        temporalDistortion={0.16}
        attenuationDistance={0.75}
        attenuationColor="#0e4356"
        color="#adf4ff"
        samples={8}
        resolution={512}
      />
    </mesh>
  );
};

const OrbitRing = () => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    if (ringRef.current) {
      ringRef.current.rotation.x = 1.2 + Math.sin(t * 0.35) * 0.08;
      ringRef.current.rotation.y = t * 0.14;
      ringRef.current.rotation.z = t * 0.11;
      ringRef.current.position.y = Math.sin(t * 0.35) * 0.08;
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[1.75, 0.1, 32, 190]} />
      <MeshTransmissionMaterial
        transmission={0.96}
        roughness={0.18}
        ior={1.47}
        thickness={0.34}
        chromaticAberration={0.018}
        anisotropy={0.15}
        distortion={0.12}
        distortionScale={0.2}
        temporalDistortion={0.1}
        attenuationDistance={1}
        attenuationColor="#153a4a"
        color="#d6f3ff"
      />
    </mesh>
  );
};

const LiquidGlassHero = () => {
  return (
    <div className="relative h-[24rem] w-full max-w-[34rem] sm:h-[30rem] lg:h-[34rem]">
      <div className="pointer-events-none absolute -left-8 top-4 h-52 w-52 rounded-full radial-glow-cyan blur-3xl" />
      <div className="pointer-events-none absolute -bottom-8 right-2 h-48 w-48 rounded-full radial-glow-emerald blur-3xl" />

      <Canvas camera={{ position: [0, 0, 4], fov: 40 }} gl={{ alpha: true, antialias: true }} dpr={[1, 1.8]}>
        <ambientLight intensity={0.42} />
        <pointLight position={[2.4, 2.2, 3]} intensity={2.8} color="#62dcff" />
        <pointLight position={[-2.6, -1.2, 2]} intensity={1.8} color="#15d6b9" />
        <directionalLight position={[0, 2.8, 1.4]} intensity={0.9} color="#ffe2ab" />

        <group>
          <LiquidOrb />
          <OrbitRing />
        </group>

        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default LiquidGlassHero;
