"use client"
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Line } from '@react-three/drei'
import styles from './wireframe.module.css'

function Shape() {
  const wireframe = new THREE.WireframeGeometry(new THREE.BoxGeometry(3.25, 3.25, 3.25))
  const mesh = useRef()

  const vertices = Array.from(wireframe.attributes.position.array)
  const pairs = []
  for (let i = 0; i < vertices.length; i += 6) {
    pairs.push([
      new THREE.Vector3(vertices[i], vertices[i + 1], vertices[i + 2]),
      new THREE.Vector3(vertices[i + 3], vertices[i + 4], vertices[i + 5]),
    ])
  }

  useFrame((state, delta) => {
    mesh.current.rotation.y += delta * 0.5
  })

  return (
    <mesh ref={mesh}>
      {pairs.map((pair, index) => (
        <Line
          key={index}
          points={[pair[0], pair[1]]}
          color="white"
          lineWidth={3}
        />
      ))}
    </mesh>
  )
}

export default function Wireframe() {
  return (
    <div id={styles.wrapper}>
      <div id={styles.canvas}>
        <Canvas>
          <Shape />
        </Canvas>
      </div>
    </div>
  )
}
