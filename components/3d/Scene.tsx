"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Dynamically import the Canvas component with no SSR
const Canvas = dynamic(() => import('@react-three/fiber').then(mod => mod.Canvas), {
  ssr: false
})

// Dynamically import the TechIcons component
const TechIcons = dynamic(() => import('./TechIcons').then(mod => mod.TechIcons), {
  ssr: false
})

export function Scene() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none" 
      style={{ 
        zIndex: 0,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
      }}
    >
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{
            background: 'transparent',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
            preserveDrawingBuffer: true,
          }}
        >
          <TechIcons />
        </Canvas>
      </Suspense>
    </div>
  )
} 