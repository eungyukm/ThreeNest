import * as THREE from 'three';
import { GLTFLoader } from 'https://unpkg.com/three@0.174.0/examples/jsm/loaders/GLTFLoader.js';

document.addEventListener('DOMContentLoaded', () => {
    const scene = new THREE.Scene();

    // 카메라 설정
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(0, 2, 5);
    camera.lookAt(0, 0, 0);

    // 렌더러 설정
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // DirectionalLight 추가 (태양광처럼 동작)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // AmbientLight 추가 (전체 밝기 보정)
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    // 모델 로드
    const loader = new GLTFLoader();
    loader.load(
        '/static/models/glb_test_2_model.glb',
        (gltf) => {
            const model = gltf.scene;

            // 모델 크기 및 위치 조정
            model.scale.set(2, 2, 2); // 크기 조정
            model.position.set(0, 0, 0); // 모델 위치 조정
            scene.add(model);

            console.log('Model loaded successfully');

            // 강제 렌더링
            renderer.render(scene, camera);

            // 애니메이션 설정
            function animateModel() {
                requestAnimationFrame(animateModel);
                model.rotation.y += 0.01;
                renderer.render(scene, camera);
            }
            animateModel();
        },
        (xhr) => {
            console.log(`Loading... ${(xhr.loaded / xhr.total * 100).toFixed(2)}% complete`);
        },
        (error) => {
            console.error('An error occurred:', error);
        }
    );

    // 창 크기 변경 대응
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
});
