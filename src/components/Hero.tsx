"use client"

import React from "react"
import Link from 'next/link'
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState, useMemo, useEffect } from "react"
import * as THREE from "three"

function Ground() {
  return (
    <>
      {/* Simplified ground with fewer layers for performance */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <circleGeometry args={[22.5, 32]} />
        <meshToonMaterial color="#E8F0FE" />
      </mesh>
      
      {/* Single shading layer */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
        <circleGeometry args={[18, 24]} />
        <meshToonMaterial color="#DADCE0" transparent opacity={0.6} />
      </mesh>
      
      {/* Fewer accent spots for performance */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[8, 0.01, -5]}>
        <circleGeometry args={[2, 8]} />
        <meshToonMaterial color="#FBBC04" transparent opacity={0.5} />
      </mesh>
      
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-6, 0.01, 8]}>
        <circleGeometry args={[1.5, 8]} />
        <meshToonMaterial color="#34A853" transparent opacity={0.5} />
      </mesh>
      
      {/* Edge ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.015, 0]}>
        <ringGeometry args={[22, 22.5, 32]} />
        <meshToonMaterial color="#202124" />
      </mesh>
    </>
  )
}

function Sky() {
  return (
    <>
      {/* Sky sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[200, 32, 32]} />
        <meshToonMaterial color="#87CEEB" side={THREE.BackSide} />
      </mesh>
      
      {/* Clouds */}
      <Cloud position={[-30, 40, -50]} />
      <Cloud position={[40, 35, -30]} />
      <Cloud position={[10, 45, -80]} />
      <Cloud position={[-60, 38, -20]} />
      <Cloud position={[70, 42, -60]} />
    </>
  )
}

function Cloud({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null)
  const [direction] = useState(() => [
    (Math.random() - 0.5) * 0.02, // Random X direction
    0, // No Y movement
    (Math.random() - 0.5) * 0.02  // Random Z direction
  ])
  const [initialPosition] = useState(position)
  
  useFrame(() => {
    if (!groupRef.current) return
    
    // Move cloud in its random direction
    groupRef.current.position.x += direction[0]
    groupRef.current.position.z += direction[2]
    
    // Endless loop - reset position when cloud goes too far
    const maxDistance = 150
    const distanceFromCenter = Math.sqrt(
      groupRef.current.position.x * groupRef.current.position.x + 
      groupRef.current.position.z * groupRef.current.position.z
    )
    
    if (distanceFromCenter > maxDistance) {
      // Reset to opposite side with some randomness
      const angle = Math.atan2(groupRef.current.position.z, groupRef.current.position.x) + Math.PI
      const spawnDistance = maxDistance * 0.8
      groupRef.current.position.x = Math.cos(angle) * spawnDistance + (Math.random() - 0.5) * 20
      groupRef.current.position.z = Math.sin(angle) * spawnDistance + (Math.random() - 0.5) * 20
      groupRef.current.position.y = initialPosition[1] + (Math.random() - 0.5) * 10 // Vary height slightly
    }
  })
  
  return (
    <group ref={groupRef} position={position}>
      {/* Multiple spheres to create cloud shape */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[8, 16, 16]} />
        <meshToonMaterial color="#ffffff" />
      </mesh>
      <mesh position={[6, 2, 0]}>
        <sphereGeometry args={[6, 16, 16]} />
        <meshToonMaterial color="#ffffff" />
      </mesh>
      <mesh position={[-5, 1, 2]}>
        <sphereGeometry args={[7, 16, 16]} />
        <meshToonMaterial color="#ffffff" />
      </mesh>
      <mesh position={[2, -3, -1]}>
        <sphereGeometry args={[5, 16, 16]} />
        <meshToonMaterial color="#ffffff" />
      </mesh>
      <mesh position={[-8, -2, 1]}>
        <sphereGeometry args={[4, 16, 16]} />
        <meshToonMaterial color="#ffffff" />
      </mesh>
    </group>
  )
}

interface StaticShape {
  id: number
  position: [number, number, number]
  rotation: [number, number, number]
  type: "box" | "sphere" | "cylinder" | "pyramid"
  scale: number
  color: string
}

interface RollingBallState {
  position: [number, number, number]
  velocity: [number, number, number]
  rotation: [number, number, number]
  angularVelocity: [number, number, number]
}

function MayanPyramid() {
  // Pyramid removed
  return null
}

function StaticShapes() {
  // Remove all the small obstacles, just keep the pyramid
  return <MayanPyramid />
}

interface Ball {
  position: [number, number, number]
  velocity: [number, number, number]
  rotation: [number, number, number]
  angularVelocity: [number, number, number]
}

function RollingBall() {
  const meshRef = useRef<THREE.Mesh>(null)
  const trailRef = useRef<THREE.Points>(null)
  const ballState = useRef<RollingBallState>({
    position: [0, 10, 0],
    velocity: [0, 0, 0],
    rotation: [0, 0, 0],
    angularVelocity: [0, 0, 0],
  })
  
  // Trail system - optimized
  const trail = useRef<Array<[number, number, number]>>([])
  const maxTrailLength = 50 // Reduced for performance
  
  // WASD controls - optimized
  const keys = useRef({
    w: false,
    a: false,
    s: false,
    d: false,
  })
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      if (key in keys.current) {
        keys.current[key as keyof typeof keys.current] = true
      }
    }
    
    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      if (key in keys.current) {
        keys.current[key as keyof typeof keys.current] = false
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  useFrame((state, delta) => {
    if (!meshRef.current) return

    const ball = ballState.current
    const frameRate = Math.min(delta * 60, 2) // Cap frame rate compensation
    
    // WASD movement - smoother
    const moveForce = 0.004 * frameRate
    if (keys.current.w) ball.velocity[2] -= moveForce
    if (keys.current.s) ball.velocity[2] += moveForce  
    if (keys.current.a) ball.velocity[0] -= moveForce
    if (keys.current.d) ball.velocity[0] += moveForce
    
    // Apply friction - frame rate independent
    const friction = Math.pow(0.98, frameRate)
    ball.velocity[0] *= friction
    ball.velocity[2] *= friction
    
    // Gravity - frame rate independent
    ball.velocity[1] -= 0.015 * frameRate
    
    // Update position
    ball.position[0] += ball.velocity[0] * frameRate
    ball.position[1] += ball.velocity[1] * frameRate
    ball.position[2] += ball.velocity[2] * frameRate
    
    // Optimized collision detection
    const ballRadius = 2
    const groundLevel = 0
    const diskRadius = 22.5
    const minY = groundLevel + ballRadius
    
    const distanceFromCenter = Math.sqrt(ball.position[0] * ball.position[0] + ball.position[2] * ball.position[2])
    
    if (distanceFromCenter > diskRadius) {
      // Ball fell off - quick respawn
      if (ball.position[1] < -20) {
        const respawnAngle = Math.random() * Math.PI * 2
        const respawnDistance = Math.random() * (diskRadius - 5)
        ball.position[0] = Math.cos(respawnAngle) * respawnDistance
        ball.position[2] = Math.sin(respawnAngle) * respawnDistance
        ball.position[1] = 15
        ball.velocity[0] = 0
        ball.velocity[1] = 0
        ball.velocity[2] = 0
        trail.current = []
      }
    } else {
      // Ground collision - smoother
      if (ball.position[1] < minY) {
        ball.position[1] = minY
        
        if (ball.velocity[1] < -0.02) {
          ball.velocity[1] = -ball.velocity[1] * 0.4 // Better bounce
        } else {
          ball.velocity[1] = 0
        }
        
        // Add to trail less frequently for performance
        if (trail.current.length === 0 || 
            Math.abs(trail.current[trail.current.length - 1][0] - ball.position[0]) > 0.5 ||
            Math.abs(trail.current[trail.current.length - 1][2] - ball.position[2]) > 0.5) {
          trail.current.push([ball.position[0], groundLevel - 0.1, ball.position[2]])
          if (trail.current.length > maxTrailLength) {
            trail.current.shift()
          }
        }
      }
    }
    
    // Smooth rotation based on velocity
    const rotationSpeed = 8
    ball.angularVelocity[0] = ball.velocity[2] * rotationSpeed
    ball.angularVelocity[2] = -ball.velocity[0] * rotationSpeed
    
    ball.rotation[0] += ball.angularVelocity[0] * frameRate * 0.01
    ball.rotation[2] += ball.angularVelocity[2] * frameRate * 0.01
    
    // Apply transforms - direct manipulation for performance
    meshRef.current.position.set(ball.position[0], ball.position[1], ball.position[2])
    meshRef.current.rotation.set(ball.rotation[0], ball.rotation[1], ball.rotation[2])
  })

  return (
    <>
      <mesh ref={meshRef} frustumCulled={false}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshToonMaterial color="#4285F4" />
      </mesh>
      
      {/* Trail points - optimized */}
      {trail.current.length > 0 && (
        <points ref={trailRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array(trail.current.flat()), 3]}
            />
          </bufferGeometry>
          <pointsMaterial 
            color="#5F6368" 
            size={0.4} 
            sizeAttenuation={true}
            transparent={true}
            opacity={0.6}
          />
        </points>
      )}
    </>
  )
}

function Scene() {
  return (
    <>
      <Sky />
      
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.5}
        color="#ffffff"
      />
      <directionalLight
        position={[-10, 5, -10]}
        intensity={0.5}
        color="#4080ff"
      />

      <Ground />
      <StaticShapes />
      <RollingBall />
    </>
  )
}

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Three.js Scene */}
      <div className="absolute inset-0">
        <Canvas 
          camera={{ position: [0, 12.8, 19.2], fov: 60 }} 
          gl={{ antialias: false, alpha: false }}
          frameloop="always"
        >
          <Scene />
        </Canvas>
      </div>

      {/* Glass Overlay Panel */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-8">
        <div className="glass-panel rounded-3xl p-8 md:p-12 max-w-6xl w-full">
          <div className="space-y-6 text-center">
            <div className="inline-block glass-panel rounded-full px-4 py-2">
              <p className="text-sm font-mono text-black/80 tracking-wider">
                November 15, 2025 | 10:00 AM – 5:00 PM (EST)
              </p>
            </div>

            <div className="devfest-body text-google-blue mb-2 font-medium">
              GDG Annapolis presents
            </div>

            <h1 className="devfest-heading-1 text-balance leading-tight mb-6">
              <span className="text-google-blue">DevFest Annapolis</span>
              <br />
              <span className="text-gray-700">2025</span>
            </h1>

            <p className="devfest-body-large text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Maryland&apos;s premier tech and innovation conference. Experience interactive learning, connect with industry leaders, and dive into the future of technology at Anne Arundel Community College.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button
                disabled
                className="devfest-btn-primary opacity-60 cursor-not-allowed pointer-events-auto"
              >
                🆓 Registration Coming Soon
              </button>
              <Link
                href="#activities"
                className="devfest-btn-secondary pointer-events-auto"
              >
                Explore Activities
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto pt-6">
              <div className="glass-panel rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">1k+</div>
                <div className="text-black/60 text-sm">Attendees</div>
              </div>
              <div className="glass-panel rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">30+</div>
                <div className="text-black/60 text-sm">Speakers</div>
              </div>
              <div className="glass-panel rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">25+</div>
                <div className="text-black/60 text-sm">Workshops</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hint Text */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
        <p className="text-sm text-white/80 font-mono tracking-wider animate-pulse drop-shadow-lg">
          USE WASD KEYS TO CONTROL THE BALL
        </p>
      </div>
    </div>
  )
}
