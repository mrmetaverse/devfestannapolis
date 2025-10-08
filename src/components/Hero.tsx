"use client"

import React from "react"
import Link from 'next/link'
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState, useEffect } from "react"
import * as THREE from "three"

function VirtualJoystick({ onMove }: { onMove: (input: { x: number; y: number }) => void }) {
  const [isDragging, setIsDragging] = useState(false)
  const [joystickPosition, setJoystickPosition] = useState({ x: 0, y: 0 })
  const joystickRef = useRef<HTMLDivElement>(null)
  const baseRef = useRef<HTMLDivElement>(null)
  
  const joystickSize = 120
  const knobSize = 50
  const maxDistance = (joystickSize - knobSize) / 2
  
  const handleStart = (clientX: number, clientY: number) => {
    setIsDragging(true)
    updateJoystickPosition(clientX, clientY)
  }
  
  const handleMove = (clientX: number, clientY: number) => {
    if (!isDragging) return
    updateJoystickPosition(clientX, clientY)
  }
  
  const handleEnd = () => {
    setIsDragging(false)
    setJoystickPosition({ x: 0, y: 0 })
    onMove({ x: 0, y: 0 })
  }
  
  const updateJoystickPosition = (clientX: number, clientY: number) => {
    if (!baseRef.current) return
    
    const rect = baseRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = clientX - centerX
    const deltaY = clientY - centerY
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    
    let normalizedX = deltaX / maxDistance
    let normalizedY = deltaY / maxDistance
    
    if (distance > maxDistance) {
      normalizedX = (deltaX / distance) * (maxDistance / maxDistance)
      normalizedY = (deltaY / distance) * (maxDistance / maxDistance)
    }
    
    const clampedX = Math.max(-maxDistance, Math.min(maxDistance, deltaX))
    const clampedY = Math.max(-maxDistance, Math.min(maxDistance, deltaY))
    
    setJoystickPosition({ x: clampedX, y: clampedY })
    onMove({ 
      x: Math.max(-1, Math.min(1, normalizedX)), 
      y: Math.max(-1, Math.min(1, normalizedY)) 
    })
  }
  
  return (
    <div
      ref={baseRef}
      className="relative"
      style={{ width: joystickSize, height: joystickSize }}
      onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
      onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => {
        e.preventDefault()
        const touch = e.touches[0]
        handleStart(touch.clientX, touch.clientY)
      }}
      onTouchMove={(e) => {
        e.preventDefault()
        const touch = e.touches[0]
        handleMove(touch.clientX, touch.clientY)
      }}
      onTouchEnd={(e) => {
        e.preventDefault()
        handleEnd()
      }}
    >
      {/* Joystick Base */}
      <div 
        className="absolute inset-0 rounded-full bg-gray-800/50 border-2 border-gray-600"
        style={{ width: joystickSize, height: joystickSize }}
      />
      
      {/* Joystick Knob */}
      <div
        ref={joystickRef}
        className="absolute rounded-full bg-gray-300 border-2 border-gray-500 transition-all"
        style={{
          width: knobSize,
          height: knobSize,
          left: (joystickSize - knobSize) / 2 + joystickPosition.x,
          top: (joystickSize - knobSize) / 2 + joystickPosition.y,
          transform: 'translate(0, 0)',
        }}
      />
    </div>
  )
}

function Ground({ isInRut }: { isInRut: boolean }) {
  const groundRef = useRef<THREE.Group>(null)
  const baseMaterialRef = useRef<THREE.MeshToonMaterial>(null)
  const accentMaterialRef = useRef<THREE.MeshToonMaterial>(null)
  const ringMaterialRef = useRef<THREE.MeshToonMaterial>(null)
  const edgeMaterialRef = useRef<THREE.MeshToonMaterial>(null)
  
  // Base HSV values (maintaining saturation and value)
  const baseHSV = { h: 0.6, s: 0.8, v: 0.9 }  // Base blue-ish hue
  const accentHSV = { h: 0.6, s: 0.6, v: 0.85 } // Slightly different saturation
  const ringHSV = { h: 0.6, s: 0.7, v: 0.7 }    // Ring variation
  
  useFrame((state) => {
    if (isInRut) {
      // Smooth hue rotation through the spectrum
      const time = state.clock.elapsedTime * 0.3 // Gentle rotation speed
      const hueOffset = (time % 6.28) / 6.28 // Full rotation over ~21 seconds
      
      // Calculate HSV colors with rotating hue
      const baseHue = (baseHSV.h + hueOffset) % 1
      const accentHue = (accentHSV.h + hueOffset + 0.1) % 1 // Slight offset for accent
      const ringHue = (ringHSV.h + hueOffset + 0.2) % 1     // More offset for ring
      
      // Update materials directly
      if (baseMaterialRef.current) {
        baseMaterialRef.current.color.setHSL(baseHue, baseHSV.s, baseHSV.v)
      }
      if (accentMaterialRef.current) {
        accentMaterialRef.current.color.setHSL(accentHue, accentHSV.s, accentHSV.v)
      }
      if (ringMaterialRef.current) {
        ringMaterialRef.current.color.setHSL(ringHue, ringHSV.s, ringHSV.v)
      }
      if (edgeMaterialRef.current) {
        edgeMaterialRef.current.color.setHSL(baseHue, baseHSV.s, baseHSV.v * 0.3)
      }
    } else {
      // Gentle fade back to normal colors
      if (baseMaterialRef.current) {
        baseMaterialRef.current.color.lerp(new THREE.Color('#E8F0FE'), 0.02)
      }
      if (accentMaterialRef.current) {
        accentMaterialRef.current.color.lerp(new THREE.Color('#DADCE0'), 0.02)
      }
      if (ringMaterialRef.current) {
        ringMaterialRef.current.color.lerp(new THREE.Color('#9AA0A6'), 0.02)
      }
      if (edgeMaterialRef.current) {
        edgeMaterialRef.current.color.lerp(new THREE.Color('#202124'), 0.02)
      }
    }
  })
  
  return (
    <group ref={groundRef}>
      {/* Simplified ground with fewer layers for performance */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <circleGeometry args={[22.5, 32]} />
        <meshToonMaterial ref={baseMaterialRef} color="#E8F0FE" />
      </mesh>
      
      {/* Single shading layer */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
        <circleGeometry args={[18, 24]} />
        <meshToonMaterial ref={accentMaterialRef} color="#DADCE0" transparent opacity={0.6} />
      </mesh>
      
      {/* Fewer accent spots for performance */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-6, 0.01, 8]}>
        <circleGeometry args={[1.5, 8]} />
        <meshToonMaterial color="#34A853" transparent opacity={0.5} />
      </mesh>
      
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[15, 0.01, 3]}>
        <circleGeometry args={[1.2, 8]} />
        <meshToonMaterial color="#FBBC04" transparent opacity={0.5} />
      </mesh>
      
      {/* Subtle trigger zone indicator - positioned at [8, 0, -5] */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[8, 0.02, -5]}>
        <ringGeometry args={[2.8, 3.2, 24]} />
        <meshToonMaterial 
          ref={ringMaterialRef}
          color="#9AA0A6" 
          transparent 
          opacity={isInRut ? 0.8 : 0.3} 
        />
      </mesh>
      
      {/* Edge ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.015, 0]}>
        <ringGeometry args={[22, 22.5, 32]} />
        <meshToonMaterial ref={edgeMaterialRef} color="#202124" />
      </mesh>
    </group>
  )
}

function Sky({ isInRut }: { isInRut: boolean }) {
  const skyMaterialRef = useRef<THREE.MeshToonMaterial>(null)
  
  useFrame(() => {
    if (skyMaterialRef.current) {
      if (isInRut) {
        const targetColor = new THREE.Color('#bf1363')
        skyMaterialRef.current.color.lerp(targetColor, 0.02)
      } else {
        const normalColor = new THREE.Color('#87CEEB')
        skyMaterialRef.current.color.lerp(normalColor, 0.02)
      }
    }
  })
  
  return (
    <>
      {/* Sky sphere - smaller and positioned better */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[120, 16, 16]} />
        <meshToonMaterial ref={skyMaterialRef} color="#87CEEB" side={THREE.BackSide} />
      </mesh>
      
      {/* Clouds - positioned lower and closer */}
      <Cloud position={[-25, 25, -30]} />
      <Cloud position={[30, 20, -25]} />
      <Cloud position={[10, 30, -40]} />
      <Cloud position={[-40, 22, -15]} />
      <Cloud position={[45, 28, -35]} />
      <Cloud position={[0, 35, -50]} />
    </>
  )
}

function Cloud({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null)
  const [isDissolving, setIsDissolving] = useState(false)
  const [opacity, setOpacity] = useState(1)
  const [direction] = useState(() => [
    (Math.random() - 0.5) * 0.02, // Random X direction
    0, // No Y movement
    (Math.random() - 0.5) * 0.02  // Random Z direction
  ])
  const [initialPosition] = useState(position)
  
  useFrame(() => {
    if (!groupRef.current) return
    
    // Handle dissolving animation
    if (isDissolving) {
      setOpacity(prev => {
        const newOpacity = prev - 0.02
        if (newOpacity <= 0) {
          // Reset cloud after dissolving
          setTimeout(() => {
            setIsDissolving(false)
            setOpacity(1)
          }, 3000) // Respawn after 3 seconds
        }
        return Math.max(0, newOpacity)
      })
      return // Don't move while dissolving
    }
    
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
  
  const handleClick = () => {
    if (!isDissolving) {
      setIsDissolving(true)
    }
  }
  
  return (
    <group ref={groupRef} position={position}>
      {/* Multiple spheres to create cloud shape - all clickable */}
      <mesh position={[0, 0, 0]} onClick={handleClick}>
        <sphereGeometry args={[8, 16, 16]} />
        <meshToonMaterial color="#ffffff" transparent opacity={opacity} />
      </mesh>
      <mesh position={[6, 2, 0]} onClick={handleClick}>
        <sphereGeometry args={[6, 16, 16]} />
        <meshToonMaterial color="#ffffff" transparent opacity={opacity} />
      </mesh>
      <mesh position={[-5, 1, 2]} onClick={handleClick}>
        <sphereGeometry args={[7, 16, 16]} />
        <meshToonMaterial color="#ffffff" transparent opacity={opacity} />
      </mesh>
      <mesh position={[2, -3, -1]} onClick={handleClick}>
        <sphereGeometry args={[5, 16, 16]} />
        <meshToonMaterial color="#ffffff" transparent opacity={opacity} />
      </mesh>
      <mesh position={[-8, -2, 1]} onClick={handleClick}>
        <sphereGeometry args={[4, 16, 16]} />
        <meshToonMaterial color="#ffffff" transparent opacity={opacity} />
      </mesh>
    </group>
  )
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

function RollingBall({ onRutChange, onPointsChange, joystickInput, points }: { 
  onRutChange: (inRut: boolean) => void;
  onPointsChange: React.Dispatch<React.SetStateAction<number>>;
  joystickInput: { x: number; y: number };
  points: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const trailRef = useRef<THREE.Points>(null)
  const [trail, setTrail] = useState<Array<[number, number, number]>>([])
  const ballState = useRef<RollingBallState>({
    position: [0, 10, 0],
    velocity: [0, 0, 0],
    rotation: [0, 0, 0],
    angularVelocity: [0, 0, 0],
  })
  
  // Track previous rut state for point scoring
  const wasInRut = useRef(false)
  const frameCounter = useRef(0)
  
  // Trail system - back to state for real-time updates
  const maxTrailLength = 50
  
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

    // Calculate ball scaling (6% larger every 100 points)
    const scaleMultiplier = 1 + (Math.floor(points / 100) * 0.06)

    const ball = ballState.current
    const frameRate = Math.min(delta * 60, 2) // Cap frame rate compensation
    
    // WASD and joystick movement - smoother
    const moveForce = 0.004 * frameRate
    
    // Keyboard controls
    if (keys.current.w) ball.velocity[2] -= moveForce
    if (keys.current.s) ball.velocity[2] += moveForce  
    if (keys.current.a) ball.velocity[0] -= moveForce
    if (keys.current.d) ball.velocity[0] += moveForce
    
    // Joystick controls (additive with keyboard)
    ball.velocity[0] += joystickInput.x * moveForce * 2 // X-axis (left/right)
    ball.velocity[2] += joystickInput.y * moveForce * 2 // Y-axis (forward/back)
    
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
    
    // Optimized collision detection with scaling
    const baseRadius = 2
    const ballRadius = baseRadius * scaleMultiplier
    const groundLevel = 0
    const diskRadius = 22.5
    
    // Check if ball is in the rut (positioned at [8, -0.3, -5])
    const rutX = 8
    const rutZ = -5
    const rutRadius = 3
    const distanceToRut = Math.sqrt(
      Math.pow(ball.position[0] - rutX, 2) + 
      Math.pow(ball.position[2] - rutZ, 2)
    )
    
    const isInRut = distanceToRut < rutRadius
    
    // Continuous points scoring while in circle (every 10 frames = ~6 points per second at 60fps)
    if (isInRut) {
      frameCounter.current++
      if (frameCounter.current % 10 === 0) {
        onPointsChange(prev => prev + 10)
      }
    } else {
      frameCounter.current = 0
    }
    wasInRut.current = isInRut
    
    // Notify parent component about rut status
    onRutChange(isInRut)
    
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
        setTrail([])
        // Reset points when falling off platform
        onPointsChange(0)
        wasInRut.current = false
      }
    } else {
      // Ground collision - same level everywhere now  
      const currentMinY = groundLevel + ballRadius
      
      if (ball.position[1] < currentMinY) {
        ball.position[1] = currentMinY
        
        if (ball.velocity[1] < -0.02) {
          ball.velocity[1] = -ball.velocity[1] * 0.4 // Better bounce
        } else {
          ball.velocity[1] = 0
        }
        
        // Add to trail less frequently for performance
        if (trail.length === 0 || 
            Math.abs(trail[trail.length - 1][0] - ball.position[0]) > 0.5 ||
            Math.abs(trail[trail.length - 1][2] - ball.position[2]) > 0.5) {
          setTrail(prevTrail => {
            const newTrail = [...prevTrail, [ball.position[0], groundLevel - 0.1, ball.position[2]] as [number, number, number]]
            return newTrail.length > maxTrailLength ? newTrail.slice(-maxTrailLength) : newTrail
          })
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
    
    // Scale ball based on points
    meshRef.current.scale.setScalar(scaleMultiplier)
  })

  return (
    <>
      <mesh ref={meshRef} frustumCulled={false}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshToonMaterial color="#4285F4" />
      </mesh>
      
      {/* Trail points - optimized */}
      {trail.length > 0 && (
        <points ref={trailRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array(trail.flat()), 3]}
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

function Scene({ points, setPoints, joystickInput }: { 
  points: number; 
  setPoints: React.Dispatch<React.SetStateAction<number>>; 
  joystickInput: { x: number; y: number };
}) {
  const [isInRut, setIsInRut] = useState(false)
  
  return (
    <>
      <Sky isInRut={isInRut} />
      
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

      <Ground isInRut={isInRut} />
      <StaticShapes />
      <RollingBall onRutChange={setIsInRut} onPointsChange={setPoints} joystickInput={joystickInput} points={points} />
    </>
  )
}

export default function Hero() {
  const [showOverlay, setShowOverlay] = useState(true)
  const [points, setPoints] = useState(0)
  const [joystickInput, setJoystickInput] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'h') {
        setShowOverlay(prev => !prev)
      }
    }

    // Double-tap detection for mobile
    let lastTapTime = 0
    const handleTouchEnd = () => {
      const currentTime = new Date().getTime()
      const tapLength = currentTime - lastTapTime
      
      if (tapLength < 500 && tapLength > 0) {
        // Double tap detected
        setShowOverlay(prev => !prev)
      }
      lastTapTime = currentTime
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('touchend', handleTouchEnd)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Three.js Scene */}
      <div className="absolute inset-0">
        <Canvas 
          camera={{ 
            position: [0, 26.25, 22.5], 
            fov: 90,
            near: 0.1,
            far: 500
          }} 
          gl={{ antialias: false, alpha: false }}
          frameloop="always"
        >
          <Scene points={points} setPoints={setPoints} joystickInput={joystickInput} />
        </Canvas>
      </div>

      {/* Simple Score Display */}
      <div className="absolute top-24 left-8 z-10 pointer-events-none">
        <div className="text-red-500 text-3xl md:text-6xl font-bold font-mono">
          {points.toString().padStart(6, '0')}
        </div>
      </div>

      {/* Virtual Joystick for Mobile */}
      <div className="absolute bottom-8 left-8 z-50 md:hidden">
        <VirtualJoystick onMove={setJoystickInput} />
      </div>

      {/* Glass Overlay Panel */}
      <div className={`absolute inset-0 z-40 pointer-events-none flex items-center justify-center p-4 md:p-8 transition-all duration-500 ${
        showOverlay ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="glass-panel rounded-2xl md:rounded-3xl p-6 md:p-12 max-w-6xl w-full mx-2 md:mx-0">
          <div className="space-y-4 md:space-y-6 text-center">
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

            <div className="flex justify-center items-center pt-4">
              <Link
                href="https://www.eventbrite.com/e/annapols-devfest-2025-tickets-1766314396909"
                target="_blank"
                rel="noopener noreferrer"
                className="devfest-btn-primary pointer-events-auto"
              >
                Register Free
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto pt-6">
              <div className="glass-panel rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-google-blue mb-1">500+</div>
                <div className="text-gray-600 text-sm">Developers</div>
              </div>
              <div className="glass-panel rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-google-red mb-1">20+</div>
                <div className="text-gray-600 text-sm">Sessions</div>
              </div>
              <div className="glass-panel rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-google-green mb-1">8hrs</div>
                <div className="text-gray-600 text-sm">Learning</div>
              </div>
            </div>
          </div>
        </div>

        {/* Venue Preview */}
        <div className="absolute bottom-8 right-8 hidden lg:block pointer-events-auto">
          <div className="devfest-card p-4 max-w-xs">
            <img 
              src="/dronemaxresdefault.jpg" 
              alt="AACC Campus" 
              className="w-full h-20 object-cover rounded-lg mb-3"
            />
            <div className="text-sm">
              <p className="font-semibold text-gray-900">Event Venue</p>
              <p className="text-gray-600">AACC CALT Building</p>
              <p className="text-google-blue text-xs">Arnold, MD</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hint Text - Desktop */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none hidden md:block">
        <p className="text-sm text-white/80 font-mono tracking-wider animate-pulse drop-shadow-lg">
          USE WASD KEYS TO CONTROL THE BALL • PRESS H TO HIDE/SHOW UI
        </p>
      </div>

      {/* Hint Text - Mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none block md:hidden">
        <p className="text-sm text-white/80 font-mono tracking-wider animate-pulse drop-shadow-lg">
          USE JOYSTICK TO CONTROL THE BALL • DOUBLE TAP TO HIDE/SHOW UI
        </p>
      </div>

    </div>
  )
}
