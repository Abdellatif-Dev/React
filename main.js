import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();

// Create a cube geometry and material
/* const cubeGeometry = new THREE.BoxGeometry(1, 1, 1); */
// A
/* const vertices = new Float32Array([
  -0.875, 0, 0, -0.625, 0, 0, -0.125, 2, 0, 0.125, 2, 0, 0.625, 0, 0, 0.875, 0,
  0, -0.34, 0.75, 0, 0.34, 0.75, 0, -0.215, 1.1, 0, 0.215, 1.1, 0, -0.875, 0,
  -0.3, -0.625, 0, -0.3, -0.125, 2, -0.3, 0.125, 2, -0.3, 0.625, 0, -0.3, 0.875,
  0, -0.3, -0.34, 0.75, -0.3, 0.34, 0.75, -0.3, -0.215, 1.1, -0.3, 0.215, 1.1,
  -0.3,
]);
const index = [
  0, 1, 2, 1, 3, 2, 2, 4, 5, 2, 3, 5, 6, 7, 8, 7, 8, 9, 0, 1, 10, 1, 10, 11, 10,
  11, 12, 11, 12, 13, 12, 13, 2, 13, 2, 3, 12, 13, 14, 13, 14, 15, 14, 15, 4,
  15, 4, 5, 16, 17, 18, 17, 18, 19, 0, 10, 2, 10, 2, 12, 5, 15, 3, 3, 13, 15, 1,
  11, 6, 11, 6, 16, 8, 18, 3, 3, 18, 13, 4, 14, 7, 14, 7, 17, 9, 19, 2, 19, 2,
  12, 8, 18, 9, 18, 9, 19, 6, 16, 7, 16, 7, 17,
];
// B
const vertices1 = new Float32Array([
  -0.875, 0, 0, -0.625, 0, 0, -0.125, 2, 0, 0.125, 2, 0, 0.625, 0, 0, 0.875, 0,
  0, -0.34, 0.75, 0, 0.34, 0.75, 0, -0.215, 1.1, 0, 0.215, 1.1, 0, -0.875, 0,
  -0.3, -0.625, 0, -0.3, -0.125, 2, -0.3, 0.125, 2, -0.3, 0.625, 0, -0.3, 0.875,
  0, -0.3, -0.34, 0.75, -0.3, 0.34, 0.75, -0.3, -0.215, 1.1, -0.3, 0.215, 1.1,
  -0.3,
]);
const index1 = [
  0, 1, 2, 1, 3, 2, 2, 4, 5, 2, 3, 5, 6, 7, 8, 7, 8, 9, 0, 1, 10, 1, 10, 11, 10,
  11, 12, 11, 12, 13, 12, 13, 2, 13, 2, 3, 12, 13, 14, 13, 14, 15, 14, 15, 4,
  15, 4, 5, 16, 17, 18, 17, 18, 19, 0, 10, 2, 10, 2, 12, 5, 15, 3, 3, 13, 15, 1,
  11, 6, 11, 6, 16, 8, 18, 3, 3, 18, 13, 4, 14, 7, 14, 7, 17, 9, 19, 2, 19, 2,
  12, 8, 18, 9, 18, 9, 19, 6, 16, 7, 16, 7, 17,
];
const demiCircleGeometry = new THREE.CircleGeometry(2, 32, Math.PI, Math.PI);
// A
const bufferAttribute = new THREE.BufferAttribute(vertices, 3);
const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", bufferAttribute);
geometry.setIndex(index);
// B
const bufferAttribute1 = new THREE.BufferAttribute(vertices1, 3);
const geometry1 = new THREE.BufferGeometry();
geometry1.setAttribute("position", bufferAttribute1);
geometry1.setIndex(index1); */
const vertices = new Float32Array([
  -2.8, 2.5, -2.05, -2.8, 2.5, 2.05, 2.8, 2.5, -2.05, 2.8, 2.5, 2.05, 2.3, 3.8, 0, -2.3, 3.8, 0
  , 0, 2.5, 2.05, 0, 2.5, -2.05
]);
const index = [
  0, 1, 5, 1, 5, 6, 6, 5, 4, 4, 6, 3, 3, 4, 2, 2, 4, 7, 4, 7, 5, 0, 5, 7, 1, 0, 2, 2, 3, 1
];
const vertices1 = new Float32Array([
  0.73, 2.5, 2.72, 2.73, 2.5, 2.72, 1.73, 3.6, 2.72,
  2.73, 2.5, 0, 1.73, 3.6, 0, 0.73, 2.5, 0
]);
const index1 = [
  1, 2, 3, 2, 3, 4, 0, 2, 5, 2, 5, 4
];
const vertices2 = new Float32Array([0.73, 2.5, 2.70, 2.73, 2.5, 2.70, 1.73, 3.6, 2.70,]);
const index2 = [0, 1, 2];

const BOX = new THREE.BoxGeometry(16, 0.2, 16);
const BOXardya = new THREE.BoxGeometry(0.8, 0.05, 8);
const BOXHOME = new THREE.BoxGeometry(5.5, 2.5, 4);
const BOXHOME2 = new THREE.BoxGeometry(2, 2.5, 2);
const BOXMDAKHA = new THREE.BoxGeometry(0.5, 0.7, 0.5);
const BOXHITBRA = new THREE.BoxGeometry(16, 0.7, 0.1);
const BOXHITBRA1 = new THREE.BoxGeometry(7.6, 0.7, 0.1);
const BOXHITBRA2 = new THREE.BoxGeometry(0.1, 0.7, 16);
const BOXxrjm = new THREE.BoxGeometry(1, 0.7, 4.05);
const BOXxrjm1 = new THREE.BoxGeometry(5.55, 0.7, 1);
const BOXxrjm2 = new THREE.BoxGeometry(1, 0.7, 0.1);
const BOXbab = new THREE.BoxGeometry(0.78, 1.45, 0.1);
const geometryc = new THREE.CylinderGeometry( 0.25, 0.25, 0.02, 32 ); 
const bufferAttribute = new THREE.BufferAttribute(vertices, 3);
const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", bufferAttribute);
geometry.setIndex(index);
const bufferAttribute1 = new THREE.BufferAttribute(vertices1, 3);
const geometry1 = new THREE.BufferGeometry();
geometry1.setAttribute("position", bufferAttribute1);
geometry1.setIndex(index1);
const bufferAttribute2 = new THREE.BufferAttribute(vertices2, 3);
const geometry2 = new THREE.BufferGeometry();
geometry2.setAttribute("position", bufferAttribute2);
geometry2.setIndex(index2);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff2d00, wireframe: false }); //wireframe hya li ktkhlih ybano dok motltat
const cubeMaterial2 = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false }); //wireframe hya li ktkhlih ybano dok motltat
const cubeMaterial1 = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: false }); //wireframe hya li ktkhlih ybano dok motltat
const cubeMaterial5 = new THREE.MeshBasicMaterial({ color: 0xcec7b9, wireframe: false }); //wireframe hya li ktkhlih ybano dok motltat
const cubeMaterial3 = new THREE.MeshBasicMaterial({ color: 0x911c03, wireframe: false }); //wireframe hya li ktkhlih ybano dok motltat
const cubeMaterial4 = new THREE.MeshBasicMaterial({ color: 0xffa200, wireframe: false }); //wireframe hya li ktkhlih ybano dok motltat
const cubeMaterial6 = new THREE.MeshBasicMaterial({ color: 0xcf7208, wireframe: false }); //wireframe hya li ktkhlih ybano dok motltat
const material = new THREE.MeshBasicMaterial( {color: 0x0bf0cd} ); 
cubeMaterial.side = THREE.DoubleSide;
const cubeMesh = new THREE.Mesh(geometry, cubeMaterial); //A
const cubeMesh5 = new THREE.Mesh(geometry1, cubeMaterial); //A
const cubeMesh6 = new THREE.Mesh(geometry2, cubeMaterial1); //A
const cubeMesh1 = new THREE.Mesh(BOX, cubeMaterial2); //A
cubeMesh1.position.y = -0.1;
const cubeMesh2 = new THREE.Mesh(BOXHOME, cubeMaterial1); //A
cubeMesh2.position.y = 1.25;
const cubeMesh4 = new THREE.Mesh(BOXHOME2, cubeMaterial1); //A
cubeMesh4.position.y = 1.25;
cubeMesh4.position.z = 1.7;
cubeMesh4.position.x = 1.73;
const cubeMesh3 = new THREE.Mesh(BOXMDAKHA, cubeMaterial3); //A
cubeMesh3.position.y = 3.25;
cubeMesh3.position.z = 1;
cubeMesh3.position.x = -0.7;
const cubeMesh7 = new THREE.Mesh(BOXHITBRA, cubeMaterial4); //A
cubeMesh7.position.y = 0.35;
cubeMesh7.position.z = -7.95;
const cubeMesh8 = new THREE.Mesh(BOXHITBRA2, cubeMaterial4); //A
cubeMesh8.position.y = 0.35;
cubeMesh8.position.x = -7.95;
const cubeMesh9 = new THREE.Mesh(BOXHITBRA2, cubeMaterial4); //A
cubeMesh9.position.y = 0.35;
cubeMesh9.position.x = 7.95;
const cubeMesh10 = new THREE.Mesh(BOXHITBRA1, cubeMaterial4); //A
cubeMesh10.position.y = 0.35;
cubeMesh10.position.z = 7.95;
cubeMesh10.position.x = 4.2;
const cubeMesh11 = new THREE.Mesh(BOXHITBRA1, cubeMaterial4); //A
cubeMesh11.position.y = 0.35;
cubeMesh11.position.z = 7.95;
cubeMesh11.position.x = -4.2;
const cubeMesh12 = new THREE.Mesh(BOXardya, cubeMaterial5); //A
cubeMesh12.position.y = 0.025;
cubeMesh12.position.z = 4;
const cylinder = new THREE.Mesh( geometryc, material );
cylinder.rotation.x = Math.PI / 2
cylinder.position.z = 2.7;
cylinder.position.y = 3;
cylinder.position.x = 1.7;
const cubeMesh13 = new THREE.Mesh(BOXxrjm, material); //A
cubeMesh13.position.y = 1.05;
cubeMesh13.position.x = -1.6;
const cubeMesh14 = new THREE.Mesh(BOXxrjm1, material); //A
cubeMesh14.position.y = 1.05;
cubeMesh14.position.z = -1.2;
const cubeMesh15 = new THREE.Mesh(BOXxrjm1, material); //A
cubeMesh15.position.y = 1.05;
cubeMesh15.position.z = 0.7;
const cubeMesh16 = new THREE.Mesh(BOXxrjm2, material); //A
cubeMesh16.position.y = 1.05;
cubeMesh16.position.z = -2;
const cubeMesh17 = new THREE.Mesh(BOXxrjm2, material); //A
cubeMesh17.position.y = 1.05;
cubeMesh17.position.z = -2;
cubeMesh17.position.x = 1.7;
const cubeMesh18 = new THREE.Mesh(BOXxrjm2, material); //A
cubeMesh18.position.y = 1.05;
cubeMesh18.position.z = 2.7;
cubeMesh18.position.x = 1.7;
const cubeMesh19 = new THREE.Mesh(BOXbab, cubeMaterial6); //A
cubeMesh19.position.y = 0.75;
cubeMesh19.position.z = 2;



const group = new THREE.Group();
group.add(cubeMesh);
group.add(cubeMesh1);
group.add(cubeMesh2);
group.add(cubeMesh3);
group.add(cubeMesh4);
group.add(cubeMesh5);
group.add(cubeMesh6);
group.add(cubeMesh7);
group.add(cubeMesh8);
group.add(cubeMesh9);
group.add(cubeMesh10);
group.add(cubeMesh11);
group.add(cubeMesh12);
group.add(cubeMesh13);
group.add(cubeMesh14);
group.add(cubeMesh15);
group.add(cubeMesh16);
group.add(cubeMesh17);
group.add(cubeMesh18);
group.add(cubeMesh19);
group.add(cylinder);
scene.add(group);

// Set up the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 5;

// Query the canvas element
const canvas = document.querySelector("canvas.threejs");

// Initialize the renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Set the pixel ratio for high-DPI screens
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Initialize OrbitControls with the camera and canvas
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true; // Smoothens the camera movement
controls.autoRotate = false; // Prevent auto-rotation

// Handle window resizing
window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Update camera aspect ratio
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  // Update renderer size
  renderer.setSize(width, height);
});

// The render loop
const renderloop = () => {
  controls.update(); // Only needed if controls.enableDamping is true
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

// Start the render loop
renderloop();
