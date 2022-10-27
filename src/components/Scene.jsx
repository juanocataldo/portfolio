import { useEffect } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useRef } from "react"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GUI } from 'dat.gui'
import "../css/Scene.css"

const Scene = () => {

    const mountRef = useRef(null);

    useEffect(() => {
        const currentMount = mountRef.current;
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            25, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000
        )
        scene.add(camera);
        
        camera.position.z = 13
        camera.position.x = 0
        camera.position.y = 3
        
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        
        currentMount.appendChild(renderer.domElement)
     

        const lightRight = new THREE.PointLight("turquoise", 1)
        lightRight.position.set(-17,0,0)
        scene.add(lightRight)
        
        const lightRight2 = new THREE.PointLight("red", 0.2)
        lightRight2.position.set(0,10,-15)
        scene.add(lightRight2)
        
        const lightLeft = new THREE.PointLight("pink", 2)
        lightLeft.position.set(175,-10,35)
        scene.add(lightLeft)
        
        const lightTop = new THREE.PointLight("white", 0.2)
        lightTop.position.set(0,10,0)
        scene.add(lightTop)
        
        // const lightFloating = new THREE.PointLight("turquoise", 1)
        // lightFloating.position.set(0,-5,35)
        // scene.add(lightFloating)

        const ambientLight = new THREE.AmbientLight("white", 0.5)
        scene.add(ambientLight)

        const gltfLoader = new GLTFLoader()
        let bust;
        let hand;
        gltfLoader.load("./scene/scene.gltf",
        (gltf) => {
            scene.add(gltf.scene)
            // gltf.scene.position.set(3, 10, 3)
            bust = gltf.scene
            bust.position.y = -0.9
            bust.position.x = 0
            bust.position.z = 0
        },
        () => {},
        () => {},
        )
        
        gltfLoader.load("./hand/scene.gltf",
        (gltf) => {
            scene.add(gltf.scene)
            // gltf.scene.position.set(3, 10, 3)
            hand = gltf.scene
            hand.position.y = -0.7
            hand.position.x = 0
            hand.position.z = 0
            hand.scale.set(-0.004,-0.004,-0.004)
            hand.rotateY(3)
            hand.rotateX(3)
            
        },
        () => {},
        () => {},
        )
        
        const sphere = new THREE.Mesh(
            new THREE.BoxBufferGeometry(3,3,3),
            new THREE.MeshNormalMaterial
        )
        // scene.add(sphere)
        sphere.position.set(0,0,-10)

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping= true;
        
        const animate = () => {
            requestAnimationFrame(animate)
            renderer.render(scene, camera)
            controls.update()
            if(bust && hand){
                bust.rotation.y += 0.003                
                // hand.rotation.y += 0.007                
                hand.rotation.y += 0.003                
                // hand.rotation.z += 0.007                
            }
        }
        renderer.setClearColor( 0xffffff, 0);
        animate();


        return () => {
            currentMount.removeChild(renderer.domElement)
        }
    }, [])

    return <div ref={mountRef} style={{width:"100vw", height:"700px", pointerEvents : "none"}}>
        
    </div>
}

export default Scene;