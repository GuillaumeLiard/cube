import * as THREE from 'three';
const OrbitControls = require('three-orbit-controls')(THREE);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var controls = new OrbitControls(camera)
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var geometry = new THREE.BufferGeometry();
// var vertices = new Float32Array( [
// 	-1.0, -1.0,  1.0,
// 	 1.0, -1.0,  1.0,
// 	 1.0,  1.0,  1.0,
//
// 	 1.0,  1.0,  1.0,
// 	-1.0,  1.0,  1.0,
// 	-1.0, -1.0,  1.0
// ] );
//
// // itemSize = 3 because there are 3 values (components) per vertex
// geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
var geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var material = new THREE.ShaderMaterial({
    uniforms: { "time": { value: 0.5 }, "time2": { value: 2 } },
    vertexShader: document.getElementById('vertexShader').textContent,
    fragmentShader: document.getElementById('fragmentShader').textContent
});

var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
console.log(cube.material);

var animate = function () {
    requestAnimationFrame( animate );

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    // uniforms.time.value += 0.01;
    cube.material.uniforms.time.value += 0.1;
    cube.material.uniforms.time2.value += 0.1;
    renderer.render(scene, camera);
};

animate();
