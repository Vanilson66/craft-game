import { useRef, useEffect } from "react"
import { useThree, useFrame } from "@react-three/fiber"
import { useSphere, useBox } from "@react-three/cannon"
import { Vector3 } from "three"
import { useKeyboard } from "../hooks/useKeyboard"

const JUMP_FORCE = 4 

export const Player = () => {
    const actions = useKeyboard()

    const { camera } = useThree()
    const [ ref, api ] = useSphere(() => ({
        mass: 1,
        position: [0,1,0],
        type: "Dynamic"
    }))
    
    const vel = useRef([0,0,0])

    useEffect(() => {
        api.velocity.subscribe(v => vel.current = v)
    }, [api.velocity])
    
    const pos = useRef([0,0,0])
    
    useEffect(() => {
        api.position.subscribe((p) => pos.current = p)
    }, [api.position])

    useFrame(() => {
        camera.position.copy(new Vector3(pos.current[0], pos.current[1]))

        if(actions.jump) {
            api.velocity.set(0, JUMP_FORCE, 0)
        } 
    })
    
    return (
        <mesh ref={ref}></mesh>
    )
}