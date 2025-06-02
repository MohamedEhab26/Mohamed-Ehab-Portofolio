"use client"

import { useRef, useState, useEffect, ReactElement } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Text, Float, Html } from '@react-three/drei'
import * as THREE from 'three'

// Define types for better type safety
type Position = [number, number, number]
type SectionPositions = Record<string, Record<string, Position>>

// Define section positions for the tech icons with proper typing
const sectionPositions: SectionPositions = {
  hero: {
    React: [-4, 3, 0],
    Next: [4, 3, 0],
    TypeScript: [0, 3, 0],
    Angular: [-4, 0, 0],
    Vue: [4, 0, 0],
    GitHub: [0, 0, 0],
    ReactNative: [-4, -3, 0],
    Tailwind: [0, -3, 0],
    Vercel: [4, -3, 0],
    VSCode: [-2, 1.5, 0],
    Cursor: [2, 1.5, 0],
    Flutter: [-2, -1.5, 0],
    Dart: [2, -1.5, 0]
  },
  about: {
    React: [-6, 2, 2],
    Next: [6, 2, 2],
    TypeScript: [0, 4, 2],
    Angular: [-6, -2, 2],
    Vue: [6, -2, 2],
    GitHub: [0, 0, 2],
    ReactNative: [-3, 3, 2],
    Tailwind: [3, 3, 2],
    Vercel: [0, -4, 2],
    VSCode: [-3, -3, 2],
    Cursor: [3, -3, 2],
    Flutter: [-6, 0, 2],
    Dart: [6, 0, 2]
  },
  projects: {
    React: [0, 4, -2],
    Next: [4, 2, -2],
    TypeScript: [-4, 2, -2],
    Angular: [2, -2, -2],
    Vue: [-2, -2, -2],
    GitHub: [0, 0, -2],
    ReactNative: [4, -2, -2],
    Tailwind: [-4, -2, -2],
    Vercel: [2, 2, -2],
    VSCode: [-2, 2, -2],
    Cursor: [0, -4, -2],
    Flutter: [3, 0, -2],
    Dart: [-3, 0, -2]
  },
  contact: {
    React: [-3, 3, 3],
    Next: [3, 3, 3],
    TypeScript: [0, 0, 3],
    Angular: [-3, -3, 3],
    Vue: [3, -3, 3],
    GitHub: [0, 3, 3],
    ReactNative: [-3, 0, 3],
    Tailwind: [3, 0, 3],
    Vercel: [0, -3, 3],
    VSCode: [-1.5, 1.5, 3],
    Cursor: [1.5, 1.5, 3],
    Flutter: [-1.5, -1.5, 3],
    Dart: [1.5, -1.5, 3]
  }
}

// Define the tech icon type
interface TechIconProps {
  name: string
  id: keyof typeof sectionPositions.hero
  rotation: Position
  scale: number
  color: string
  icon: ReactElement
}

// Define the tech icons with proper typing
const techIcons: TechIconProps[] = [
  {
    name: 'React',
    id: 'React',
    rotation: [0, 0, 0],
    scale: 0.8,
    color: '#61DAFB',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M12 2.5c-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5-4.3-9.5-9.5-9.5zm0 17c-4.1 0-7.5-3.4-7.5-7.5S7.9 4.5 12 4.5s7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5z"/>
        <path d="M12 6.5c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5zm0 9c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/>
        <circle cx="12" cy="12" r="1.5"/>
      </svg>
    )
  },
  {
    name: 'Next.js',
    id: 'Next',
    rotation: [0, 0, 0],
    scale: 0.8,
    color: '#000000',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M12 2L2 19.8h20L12 2zm0 4.2l7.2 12.6H4.8L12 6.2z"/>
      </svg>
    )
  },
  {
    name: 'Angular',
    id: 'Angular',
    rotation: [0, 0, 0],
    scale: 0.8,
    color: '#DD0031',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M12 2L2 19.8h20L12 2zm0 4.2l7.2 12.6H4.8L12 6.2z"/>
        <path d="M12 2L2 19.8h20L12 2zm0 4.2l7.2 12.6H4.8L12 6.2z" fill="#A6120D"/>
        <path d="M12 2L2 19.8h20L12 2zm0 4.2l7.2 12.6H4.8L12 6.2z" fill="#DD0031"/>
      </svg>
    )
  },
  {
    name: 'Vue.js',
    id: 'Vue',
    rotation: [0, 0, 0],
    scale: 0.8,
    color: '#41B883',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M12 2L2 19.8h20L12 2zm0 4.2l7.2 12.6H4.8L12 6.2z"/>
        <path d="M12 2L2 19.8h20L12 2zm0 4.2l7.2 12.6H4.8L12 6.2z" fill="#34495E"/>
      </svg>
    )
  },
  {
    name: 'React Native',
    id: 'ReactNative',
    rotation: [0, 0, 0],
    scale: 0.8,
    color: '#61DAFB',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M12 2.5c-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5-4.3-9.5-9.5-9.5zm0 17c-4.1 0-7.5-3.4-7.5-7.5S7.9 4.5 12 4.5s7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5z"/>
        <path d="M12 6.5c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5zm0 9c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/>
        <circle cx="12" cy="12" r="1.5"/>
      </svg>
    )
  },
  {
    name: 'Vercel',
    id: 'Vercel',
    rotation: [0, 0, 0],
    scale: 0.8,
    color: '#000000',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M12 2L2 19.8h20L12 2zm0 4.2l7.2 12.6H4.8L12 6.2z"/>
      </svg>
    )
  },
  {
    name: 'VS Code',
    id: 'VSCode',
    rotation: [0, 0, 0],
    scale: 0.8,
    color: '#007ACC',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M12 2.5c-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5-4.3-9.5-9.5-9.5zm0 17c-4.1 0-7.5-3.4-7.5-7.5S7.9 4.5 12 4.5s7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5z"/>
        <path d="M12 6.5c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5zm0 9c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/>
        <circle cx="12" cy="12" r="1.5"/>
      </svg>
    )
  },
  {
    name: 'Cursor',
    id: 'Cursor',
    rotation: [0, 0, 0],
    scale: 0.8,
    color: '#00FF00',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M12 2.5c-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5-4.3-9.5-9.5-9.5zm0 17c-4.1 0-7.5-3.4-7.5-7.5S7.9 4.5 12 4.5s7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5z"/>
        <path d="M12 6.5c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5zm0 9c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/>
        <circle cx="12" cy="12" r="1.5"/>
      </svg>
    )
  },
  {
    name: 'TypeScript',
    id: 'TypeScript',
    rotation: [0, 0, 0],
    scale: 0.8,
    color: '#3178C6',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M0 0h24v24H0V0z"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="white"/>
      </svg>
    )
  },
  {
    name: 'Flutter',
    id: 'Flutter',
    rotation: [0, 0, 0],
    scale: 0.8,
    color: '#02569B',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.47-6.468 6.46-6.46h-7.37z"/>
      </svg>
    )
  },
  {
    name: 'Dart',
    id: 'Dart',
    rotation: [0, 0, 0],
    scale: 0.8,
    color: '#00B4AB',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 2.304.947.86.166 1.873.43 2.377.737 0 0-1.4-.654-3.057-.87-2.386-.282-5.094-.111-6.65.71zm0 2.81v10.969s-.574.594-1.221.725c-.611.18-1.54.361-2.256.361-1.236 0-1.92-.246-2.256-.361-.267-.086-.573-.18-.87-.289v-11.6s1.693.506 2.684.675c1.262.205 3.92.361 4.919.361zm0 12.375c0 .502.42.902.922.902h15.649c.675 0 .675-1.348 0-1.348H5.158c-.502 0-.922.4-.922.902zm.675-3.516h15.575c.893 0 .893-1.796 0-1.796H4.78c-.893 0-.893 1.796 0 1.796z"/>
      </svg>
    )
  },
  {
    name: 'GitHub',
    id: 'GitHub',
    rotation: [0, 0, 0],
    scale: 0.8,
    color: '#181717',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  {
    name: 'Tailwind CSS',
    id: 'Tailwind',
    rotation: [0, 0, 0],
    scale: 0.8,
    color: '#06B6D4',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    )
  }
]

function TechIcon({ icon, id, rotation, scale, color, name }: TechIconProps) {
  const groupRef = useRef<THREE.Group>(null)
  const bubbleRef = useRef<THREE.Group>(null)
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const { viewport } = useThree()
  const scrollRef = useRef(0)
  const currentSectionRef = useRef<keyof typeof sectionPositions>('hero')
  const targetPositionRef = useRef(new THREE.Vector3())
  const currentPositionRef = useRef(new THREE.Vector3())

  // Initialize positions
  useEffect(() => {
    const initialPosition = sectionPositions.hero[id]
    targetPositionRef.current.set(...initialPosition)
    currentPositionRef.current.set(...initialPosition)
  }, [id])

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY
      
      const sections = document.querySelectorAll('section[id]')
      let currentSection: keyof typeof sectionPositions = 'hero'
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          const sectionId = section.id as keyof typeof sectionPositions
          if (sectionId in sectionPositions) {
            currentSection = sectionId
          }
        }
      })
      
      if (currentSection !== currentSectionRef.current) {
        currentSectionRef.current = currentSection
        const newPosition = sectionPositions[currentSection][id]
        targetPositionRef.current.set(...newPosition)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [id])

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smoothly interpolate to target position
      currentPositionRef.current.lerp(targetPositionRef.current, 0.05)
      groupRef.current.position.copy(currentPositionRef.current)
      
      // Base floating animation
      const baseY = Math.sin(state.clock.elapsedTime + currentPositionRef.current.x) * 0.001
      groupRef.current.position.y += baseY
      
      // Scroll-based rotation
      const scrollY = scrollRef.current * 0.001
      groupRef.current.rotation.y += delta * 0.2
      groupRef.current.rotation.x = Math.sin(scrollY) * 0.2
      groupRef.current.rotation.z = Math.cos(scrollY) * 0.2
    }
  })

  return (
    <group
      ref={groupRef}
      rotation={rotation}
      scale={scale}
    >
      {/* Outer bubble with glass effect */}
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
      >
        <sphereGeometry args={[0.8, 64, 64]} />
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={hovered ? 0.3 : 0.15}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={0.9}
          thickness={0.5}
        />
      </mesh>

      {/* Inner bubble for depth effect */}
      <mesh>
        <sphereGeometry args={[0.75, 64, 64]} />
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={hovered ? 0.2 : 0.1}
          metalness={0.8}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={0.95}
          thickness={0.5}
        />
      </mesh>

      {/* Icon container - now part of the group */}
      <group position={[0, 0, 0.6]}>
        <Html
          center
          transform
          style={{
            width: '28px',
            height: '28px',
            color: 'white',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))'
          }}
        >
          {icon}
        </Html>
      </group>

      {/* Hover text - now part of the group */}
      {hovered && (
        <Text
          position={[0, -1.2, 0]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {name}
        </Text>
      )}

      {/* Glow effect - now part of the group */}
      <mesh>
        <sphereGeometry args={[0.85, 32, 32]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered ? 0.1 : 0.05}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  )
}

export function TechIcons() {
  return (
    <group>
      {techIcons.map((icon) => (
        <TechIcon key={icon.id} {...icon} />
      ))}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} />
      <spotLight
        position={[0, 5, 0]}
        angle={0.5}
        penumbra={1}
        intensity={0.5}
        castShadow
      />
    </group>
  )
} 