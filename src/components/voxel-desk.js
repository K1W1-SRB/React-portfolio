import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import k1w1desk from '../images/k1w1 desk.glb'


export default function voxelDesk() {
    const canvas = document.querySelector('.webgl')
    const scene = new THREE.Scene();

    const loader = new GLTFLoader();
    loader.load(k1w1desk, function ( glb ) {
        console.log(glb)
        const root = glb.scene;
        root.scale.set(1,1,1)

        scene.add(root)
    }, function ( xhr ) {
        console.log( ( xhr.loaded/xhr.total * 100 ) + '% loaded' );
    }, function (error) {
        console.log( 'An error happened' );
    }
);

    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(1,1,5)
    scene.add(light)

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        camera.position.set(0,1,2)
        scene.add(camera)

            const renderer = new THREE.WebGLRenderer()  


            function animate() {
                requestAnimationFrame(animate)
                renderer.render( scene, camera, light );
            };
            animate();
}