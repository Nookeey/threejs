'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import React, { useEffect, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';

export default function index() {

  const container = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
  const progress = useTransform(scrollYProgress, [0, 1], [0, 5])
  const smoothProgress = useSpring(progress, { damping: 20 });

  return (
    <div ref={container} className='h-full'>
      <div className='sticky top-0 h-screen'>
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={2} />
          <directionalLight position={[2, 1, 1]} />
          <Cube progress={smoothProgress} />
        </Canvas>
      </div>
    </div>
  )
}

function Cube({ progress }: { progress: any }) {

  const mesh = useRef<any>(null);

  // const options = {
  //   damping: 20
  // }

  // const mouse = {
  //   x: useSpring(useMotionValue(0), options),
  //   y: useSpring(useMotionValue(0), options),
  // }

  // useEffect(() => {
  //   const onMouseMove = (e: any) => {
  //     const { innerWidth, innerHeight } = window;
  //     const { clientX, clientY } = e;
  //     const x = -0.5 + clientX / innerWidth
  //     const y = -0.5 + clientY / innerHeight
  //     mouse.x.set(x);
  //     mouse.y.set(y);
  //   }

  //   window.addEventListener('mousemove', onMouseMove);

  //   return () => {
  //     window.removeEventListener('mouse', onMouseMove);
  //   }
  // })

  // useFrame((state, delta) => {
  //   if (mesh.current) {
  //     mesh.current.rotation.x += delta * 0.5;
  //     mesh.current.rotation.y += delta * 0.5;
  //     mesh.current.rotation.z += delta * 0.5;
  //   }
  // })

  const texture_1 = useLoader(TextureLoader, '/assets/1.jpg');
  const texture_2 = useLoader(TextureLoader, '/assets/2.jpg');
  const texture_3 = useLoader(TextureLoader, '/assets/3.jpg');
  const texture_4 = useLoader(TextureLoader, '/assets/4.jpg');
  const texture_5 = useLoader(TextureLoader, '/assets/5.jpg');
  const texture_6 = useLoader(TextureLoader, '/assets/6.jpg');

  return (
    <motion.mesh ref={mesh} rotation-y={progress} rotation-x={progress}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial map={texture_1} attach="material-0" />
      <meshStandardMaterial map={texture_2} attach="material-1" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial map={texture_4} attach="material-3" />
      <meshStandardMaterial map={texture_5} attach="material-4" />
      <meshStandardMaterial map={texture_6} attach="material-5" />
    </motion.mesh>
  )
}