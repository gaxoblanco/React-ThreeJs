
import {useRef, useEffect} from 'react';

import * as THREE from 'three';

const Scene = () =>{
    const mountRef = useRef ()

    useEffect(()=>{
        const currentMount = mountRef.current
        //Scene
        const scene = new THREE.Scene()
        //camera
        const camera = new THREE.PerspectiveCamera(
            25, //fov
            currentMount.clientWidth / currentMount.clientHeight, //aspect de su contenedor
            0.1, //near
            1000 // far
        )
        scene.add(camera)

        //renderer
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(
            currentMount.clientWidth, 
            currentMount.clientHeight)
        currentMount.appendChild(renderer.domElement)
    }, [])

    return (
        <div
            className='Contenedor3D'
            ref = {mountRef}
            style = {{width: '100%', height: '100%'}}
        >
        </div>
    )
}

export {Scene};