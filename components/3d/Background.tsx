"use client"

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import * as random from 'maath/random/dist/maath-random.esm'

export function Background() {
  const ref = useRef<THREE.Points>(null)
  
  // Generate points with proper validation
  const sphere = useMemo(() => {
    const points = new Float32Array(5000 * 3) // Reduced number of points for better performance
    const validPoints = random.inSphere(points, { radius: 1.2 }) // Slightly reduced radius
    
    // Validate points to ensure no NaN values
    for (let i = 0; i < validPoints.length; i += 3) {
      if (isNaN(validPoints[i]) || isNaN(validPoints[i + 1]) || isNaN(validPoints[i + 2])) {
        // Replace NaN with 0
        validPoints[i] = 0
        validPoints[i + 1] = 0
        validPoints[i + 2] = 0
      }
    }
    
    return validPoints
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15 // Slowed down rotation
      ref.current.rotation.y -= delta / 20 // Slowed down rotation
    }
  })

  return (
    <>
      <ambientLight intensity={0.3} /> {/* Reduced ambient light intensity */}
      <pointLight position={[10, 10, 10]} intensity={0.5} /> {/* Reduced point light intensity */}
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color="#88ccff"
            size={0.015} // Reduced point size
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.4} // Added opacity
            blending={THREE.AdditiveBlending}
          />
        </Points>
      </group>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </>
  )
} 