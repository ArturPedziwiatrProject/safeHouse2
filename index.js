/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/main.css":
/*!*****************************!*\
  !*** ./src/assets/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://safehouse/./src/assets/main.css?");

/***/ }),

/***/ "./src/shaders/sun/fragment.glsl":
/*!***************************************!*\
  !*** ./src/shaders/sun/fragment.glsl ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"#define GLSLIFY 1\\nuniform float time;\\nuniform float progress;\\nuniform sampler2D texture1;\\nuniform vec4 resolution;\\nvarying vec2 vUv;\\nvarying vec3 vPosition;\\nfloat PI = 3.141592653589793238;\\n\\nvec4 mod289(vec4 x) {\\nreturn x - floor(x * (1.0 / 289.0)) * 289.0;\\n}\\n\\nfloat mod289(float x) {\\nreturn x - floor(x * (1.0 / 289.0)) * 289.0;\\n}\\n\\nvec4 permute(vec4 x) {\\nreturn mod289(((x*34.0)+1.0)*x);\\n}\\n\\nfloat permute(float x) {\\nreturn mod289(((x*34.0)+1.0)*x);\\n}\\n\\nvec4 taylorInvSqrt(vec4 r)\\n{\\nreturn 1.79284291400159 - 0.85373472095314 * r;\\n}\\n\\nfloat taylorInvSqrt(float r)\\n{\\nreturn 1.79284291400159 - 0.85373472095314 * r;\\n}\\n\\nvec4 grad4(float j, vec4 ip)\\n{\\nconst vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\\nvec4 p,s;\\n\\np.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\\np.w = 1.5 - dot(abs(p.xyz), ones.xyz);\\ns = vec4(lessThan(p, vec4(0.0)));\\np.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\\n\\nreturn p;\\n}\\n\\n// (sqrt(5) - 1)/4 = F4, used once below\\n#define F4 0.309016994374947451\\n\\nfloat snoise(vec4 v)\\n{\\nconst vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4\\n0.276393202250021,  // 2 * G4\\n0.414589803375032,  // 3 * G4\\n-0.447213595499958); // -1 + 4 * G4\\n\\n// First corner\\nvec4 i  = floor(v + dot(v, vec4(F4)) );\\nvec4 x0 = v -   i + dot(i, C.xxxx);\\n\\n// Other corners\\n\\n// Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)\\nvec4 i0;\\nvec3 isX = step( x0.yzw, x0.xxx );\\nvec3 isYZ = step( x0.zww, x0.yyz );\\n//  i0.x = dot( isX, vec3( 1.0 ) );\\ni0.x = isX.x + isX.y + isX.z;\\ni0.yzw = 1.0 - isX;\\n//  i0.y += dot( isYZ.xy, vec2( 1.0 ) );\\ni0.y += isYZ.x + isYZ.y;\\ni0.zw += 1.0 - isYZ.xy;\\ni0.z += isYZ.z;\\ni0.w += 1.0 - isYZ.z;\\n\\n// i0 now contains the unique values 0,1,2,3 in each channel\\nvec4 i3 = clamp( i0, 0.0, 1.0 );\\nvec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\\nvec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\\n\\n//  x0 = x0 - 0.0 + 0.0 * C.xxxx\\n//  x1 = x0 - i1  + 1.0 * C.xxxx\\n//  x2 = x0 - i2  + 2.0 * C.xxxx\\n//  x3 = x0 - i3  + 3.0 * C.xxxx\\n//  x4 = x0 - 1.0 + 4.0 * C.xxxx\\nvec4 x1 = x0 - i1 + C.xxxx;\\nvec4 x2 = x0 - i2 + C.yyyy;\\nvec4 x3 = x0 - i3 + C.zzzz;\\nvec4 x4 = x0 + C.wwww;\\n\\n// Permutations\\ni = mod289(i);\\nfloat j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\\nvec4 j1 = permute( permute( permute( permute (\\ni.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\\n+ i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\\n+ i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\\n+ i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\\n\\n// Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope\\n// 7*7*6 = 294, which is close to the ring size 17*17 = 289.\\nvec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\\n\\nvec4 p0 = grad4(j0,   ip);\\nvec4 p1 = grad4(j1.x, ip);\\nvec4 p2 = grad4(j1.y, ip);\\nvec4 p3 = grad4(j1.z, ip);\\nvec4 p4 = grad4(j1.w, ip);\\n\\n// Normalise gradients\\nvec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\\np0 *= norm.x;\\np1 *= norm.y;\\np2 *= norm.z;\\np3 *= norm.w;\\np4 *= taylorInvSqrt(dot(p4,p4));\\n\\n// Mix contributions from the five corners\\nvec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\\nvec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\\nm0 = m0 * m0;\\nm1 = m1 * m1;\\nreturn 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\\n+ dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;\\n\\n}\\n\\nvoid main () {\\n  float noisy = snoise( vec4( vUv*10., 1.,time ));\\n  float noisy2 = snoise( vec4(vPosition * 5.,time ));\\n  gl_FragColor = vec4( snoise( vec4( vUv*10., 1.,time )) );\\n  gl_FragColor =  vec4( noisy2 );\\n}\");\n\n//# sourceURL=webpack://safehouse/./src/shaders/sun/fragment.glsl?");

/***/ }),

/***/ "./src/shaders/sun/vertex.glsl":
/*!*************************************!*\
  !*** ./src/shaders/sun/vertex.glsl ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"#define GLSLIFY 1\\nuniform float time;\\nuniform vec2 pixels;\\nvarying vec2 vUv;\\nvarying vec3 vPosition;\\nfloat PI = 3.141592653589793238;\\n\\nvoid main() {\\n  vUv = uv;\\n  vPosition = position;\\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\\n}\");\n\n//# sourceURL=webpack://safehouse/./src/shaders/sun/vertex.glsl?");

/***/ }),

/***/ "./src/assets/material.js":
/*!********************************!*\
  !*** ./src/assets/material.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"light\": () => (/* binding */ light),\n/* harmony export */   \"yelow\": () => (/* binding */ yelow)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nconst yelow = new three__WEBPACK_IMPORTED_MODULE_0__.Color('hsl(40, 100%, 60%)');\nconst light = new three__WEBPACK_IMPORTED_MODULE_0__.Color('hsl(306, 100%, 60%)');\n\n\n\n//# sourceURL=webpack://safehouse/./src/assets/material.js?");

/***/ }),

/***/ "./src/components/objectCreator/sunCreator.js":
/*!****************************************************!*\
  !*** ./src/components/objectCreator/sunCreator.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sunCreator)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _shaders_sun_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaders/sun/vertex.glsl */ \"./src/shaders/sun/vertex.glsl\");\n/* harmony import */ var _shaders_sun_fragment_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaders/sun/fragment.glsl */ \"./src/shaders/sun/fragment.glsl\");\n\n\n\n\n\nfunction sunCreator() {\n  const sunShader = new three__WEBPACK_IMPORTED_MODULE_2__.ShaderMaterial({\n    uniforms: {\n      time: 1.0 ,\n      resolution: new three__WEBPACK_IMPORTED_MODULE_2__.Vector4()\n    },\n    vertexShader: _shaders_sun_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    fragmentShader: _shaders_sun_fragment_glsl__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  });\n\n  const sphere = new three__WEBPACK_IMPORTED_MODULE_2__.SphereGeometry( 21, 30, 30 );\n  console.log(sunShader);\n  const plane = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh( sphere, sunShader );\n\n\n  return plane;\n}\n\n\n//# sourceURL=webpack://safehouse/./src/components/objectCreator/sunCreator.js?");

/***/ }),

/***/ "./src/components/primarySection.js":
/*!******************************************!*\
  !*** ./src/components/primarySection.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ view)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _assets_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/material */ \"./src/assets/material.js\");\n/* harmony import */ var _objectCreator_sunCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectCreator/sunCreator */ \"./src/components/objectCreator/sunCreator.js\");\n\n\n\n\nconst geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry( 18, 10, 16 );\nconst material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshPhongMaterial( { \n    color: _assets_material__WEBPACK_IMPORTED_MODULE_0__.yelow,\n} );\n\nfunction view(scene) {\n    const sunStar = (0,_objectCreator_sunCreator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    console.log(sunStar);\n    scene.add(sunStar);\n   //  scene.add(new THREE.Mesh( geometry, material ));\n};\n\n//# sourceURL=webpack://safehouse/./src/components/primarySection.js?");

/***/ }),

/***/ "./src/enums/settings.js":
/*!*******************************!*\
  !*** ./src/enums/settings.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FPC\": () => (/* binding */ FPC)\n/* harmony export */ });\nconst FPC = 'FirstPersonCamera';\n\n\n\n//# sourceURL=webpack://safehouse/./src/enums/settings.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/main.css */ \"./src/assets/main.css\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _assets_material_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/material.js */ \"./src/assets/material.js\");\n/* harmony import */ var _components_primarySection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/primarySection.js */ \"./src/components/primarySection.js\");\n/* harmony import */ var _settings_FirstPersonCamera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/FirstPersonCamera */ \"./src/settings/FirstPersonCamera.js\");\n/* harmony import */ var _settings_EventListenersMenager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/EventListenersMenager */ \"./src/settings/EventListenersMenager.js\");\n/* harmony import */ var _enums_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enums/settings */ \"./src/enums/settings.js\");\n\n\n\n\n\n\n\n\nvar sun;\nconst scene = new three__WEBPACK_IMPORTED_MODULE_6__.Scene();\nconst camera = new three__WEBPACK_IMPORTED_MODULE_6__.PerspectiveCamera( 240, window.innerWidth / window.innerHeight, 0.1, 30000 );\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_6__.WebGLRenderer({ antialias: false });\nconst controls = new _settings_FirstPersonCamera__WEBPACK_IMPORTED_MODULE_3__.FirstPersonControls(camera, renderer.domElement);\nconst eventMenager = new _settings_EventListenersMenager__WEBPACK_IMPORTED_MODULE_4__.EventListenersMenager( controls, renderer, renderer.domElement, camera );\n\ninit();\n\nfunction init() {\n    setRenderer();\n    addLight();\n    setCamera();\n    setControls();\n    (0,_components_primarySection_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(scene);\n    animate();\n    document.getElementById(\"mainView\").appendChild( renderer.domElement );\n}\n\nfunction setRenderer() {\n    renderer.setSize( window.innerWidth - 10, window.innerHeight );\n    renderer.setClearColor( 0x02213f, 1 );\n}\n\nfunction setCamera() {\n   camera.position.set(0, 0, 40);\n}\n\nfunction addLight() {\n    sun = new three__WEBPACK_IMPORTED_MODULE_6__.RectAreaLight( 0xffffff, 500,  10, 10 );\n    const suner = new three__WEBPACK_IMPORTED_MODULE_6__.PointLight(_assets_material_js__WEBPACK_IMPORTED_MODULE_1__.light, 2);\n    const mainLight = new three__WEBPACK_IMPORTED_MODULE_6__.PointLight(_assets_material_js__WEBPACK_IMPORTED_MODULE_1__.light, 2);\n    const secondaryLight = new three__WEBPACK_IMPORTED_MODULE_6__.PointLight(_assets_material_js__WEBPACK_IMPORTED_MODULE_1__.light, .5);\n    const thridlight = new three__WEBPACK_IMPORTED_MODULE_6__.PointLight(_assets_material_js__WEBPACK_IMPORTED_MODULE_1__.light, 2.5);\n    \n    sun.position.set(1, 1, 2);\n    mainLight.position.set(-40, -20, 20);\n    secondaryLight.position.set(40, 20, 10);\n    thridlight.position.set(40, 20, -10);\n\n    scene.add( mainLight );\n    scene.add( secondaryLight );\n    scene.add( thridlight );\n}\n\nfunction setControls() {}\n\nfunction animate() {\n    requestAnimationFrame(animate);\n    controls.update(.2);\n    render();  \n}\n  \nfunction render() {\n    renderer.render(scene, camera);\n}\n\nfunction setSettings( index, value, object ) {\n\tswitch(object) {\n        case _enums_settings__WEBPACK_IMPORTED_MODULE_5__.FPC:\n            (0,_settings_FirstPersonCamera__WEBPACK_IMPORTED_MODULE_3__.setSettingsFPC)(index, value, controls);\n            break;\n        default:\n            alert('coś poszło nie tak xd');\n    }\n};\n\n\n\n//# sourceURL=webpack://safehouse/./src/main.js?");

/***/ }),

/***/ "./src/settings/EventListenersMenager.js":
/*!***********************************************!*\
  !*** ./src/settings/EventListenersMenager.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EventListenersMenager\": () => (/* binding */ EventListenersMenager)\n/* harmony export */ });\n\nclass EventListenersMenager {\n  constructor( controls, renderer, domElement, camera ) {\n    this.controls = controls;\n    this.renderer = renderer;\n    this.domElement = domElement;\n\t\tthis.camera = camera;\n\t\tthis.mouseDragOn = false;\n\n    this.onPointerDown = (event) => {\n\t\t\tif ( event.button === 2 ) \n\t\t\t\tthis.mouseDragOn = true; \n\t\t\telse \n\t\t\t\tthis.mouseDragOn = false;\n\n\t\t\tthis.controls.onPointerDown(event)\n\t\t}\n\n    this.onPointerMove = (event) => {\n\t\t\tthis.mouseDragOn && this.controls.onPointerMove(event)\n\t\t}\n\n    this.onPointerUp = (event) => {\n\t\t\tthis.mouseDragOn = false;\n\t\t}\n\n    this.onKeyDown = (event) => {\n\t\t\tthis.controls.onKeyDown(event)\n\t\t}\n\n    this.onKeyUp = (event) => {\n\t\t\tthis.controls.onKeyUp(event)\n\t\t}\n\n    this.onResize = () => {\n\t\t\trenderer.setSize( window.innerWidth, window.innerHeight );\n\t\t}\n\n\t\tthis.contextmenu = ( event ) => {\n\t\t\tevent.preventDefault();\n\t\t}\n\n    this.dispose = function () {\n\t\t\tthis.domElement.removeEventListener( 'contextmenu', this.contextmenu );\n\t\t\tthis.domElement.removeEventListener( 'pointerdown', this.onPointerDown );\n\t\t\tthis.domElement.removeEventListener( 'pointermove', this.onPointerMove );\n\t\t\tthis.domElement.removeEventListener( 'pointerup', this.onPointerUp );\n\n\t\t\twindow.removeEventListener( 'keydown', this.onKeyDown );\n\t\t\twindow.removeEventListener( 'keyup', this.onKeyUp );\n      window.removeEventListener( 'resize', this.onResize );\n\t\t};\n\n    this.domElement.addEventListener( 'contextmenu', this.contextmenu );\n\t\tthis.domElement.addEventListener( 'pointerdown', this.onPointerDown );\n\t\tthis.domElement.addEventListener( 'pointermove', this.onPointerMove );\n\t\tthis.domElement.addEventListener( 'pointerup', this.onPointerUp );\n\n\t\twindow.addEventListener( 'keydown', this.onKeyDown );\n\t\twindow.addEventListener( 'keyup', this.onKeyUp );\n    window.addEventListener( 'resize', this.onResize );\n  }\n}\n\n\n\n//# sourceURL=webpack://safehouse/./src/settings/EventListenersMenager.js?");

/***/ }),

/***/ "./src/settings/FirstPersonCamera.js":
/*!*******************************************!*\
  !*** ./src/settings/FirstPersonCamera.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FirstPersonControls\": () => (/* binding */ FirstPersonControls),\n/* harmony export */   \"setSettingsFPC\": () => (/* binding */ setSettingsFPC)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nconst exportSettings = ['movementSpeed', 'lookSpeed', 'reverseRotate'];\nconst _lookDirection = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\nconst _spherical = new three__WEBPACK_IMPORTED_MODULE_0__.Spherical();\nconst _target = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\nlet _phi = Math.PI / 2;\nlet _theta = Math.PI;\n\nclass FirstPersonControls {\n\tconstructor( object, domElement ) {\n\t\tthis.object = object;\n\t\tthis.domElement = domElement;\n\t\tthis.enabled = true;\n\t\tthis.movementSpeed = 5;\n\t\tthis.lookSpeed = 5;\n\t\tthis.autoForward = false;\n\t\tthis.heightSpeed = false;\n\t\tthis.heightCoef = 1.0;\n\t\tthis.heightMin = 0.0;\n\t\tthis.heightMax = 1.0;\n\t\tthis.autoSpeedFactor = 0.0;\n\t\tthis.moveForward = false;\n\t\tthis.moveBackward = false;\n\t\tthis.moveLeft = false;\n\t\tthis.moveRight = false;\n\t\tthis.reverseRotate = 1;\n\n\t\tconst startPointer = {\n\t\t\tpointerX: 0,\n\t\t\tpointerY: 0,\n\t\t}\n\n\t\tthis.onPointerDown = ( event ) => {\n\t\t\tif ( this.domElement !== document ) {\n\t\t\t\tthis.domElement.focus();\n\t\t\t\tstartPointer.pointerX = event.pageX;\n\t\t\t\tstartPointer.pointerY = event.pageY;\n\t\t\t}\n\t\t};\n\n\t\tthis.onPointerMove = ( event ) => {\n\t\t\tconst pointerX = (startPointer.pointerX - event.pageX) * this.reverseRotate;\n\t\t\tconst pointerY = (event.pageY - startPointer.pointerY) * this.reverseRotate;\n\n\t\t\tsetSphericalThetaAndPhi( pointerX, pointerY, this.lookSpeed );\n\n\t\t\tstartPointer.pointerX = event.pageX;\n\t\t\tstartPointer.pointerY = event.pageY;\n\t\t};\n\n\t\tthis.onKeyDown = ( event ) => {\n\t\t\tswitch ( event.code ) {\n\t\t\t\tcase 'ArrowUp':\n\t\t\t\tcase 'KeyW': this.moveForward = true; break;\n\n\t\t\t\tcase 'ArrowLeft':\n\t\t\t\tcase 'KeyA': this.moveRight = true; break;\n\n\t\t\t\tcase 'ArrowDown':\n\t\t\t\tcase 'KeyS': this.moveBackward = true; break;\n\n\t\t\t\tcase 'ArrowRight':\n\t\t\t\tcase 'KeyD': this.moveLeft = true; break;\n\n\t\t\t\tcase 'KeyR': this.moveUp = true; break;\n\t\t\t\tcase 'KeyF': this.moveDown = true; break;\n\t\t\t}\n\n\t\t};\n\n\t\tthis.onKeyUp = ( event ) => {\n\t\t\tswitch ( event.code ) {\n\t\t\t\tcase 'ArrowUp':\n\t\t\t\tcase 'KeyW': this.moveForward = false; break;\n\n\t\t\t\tcase 'ArrowLeft':\n\t\t\t\tcase 'KeyA': this.moveRight = false; break;\n\n\t\t\t\tcase 'ArrowDown':\n\t\t\t\tcase 'KeyS': this.moveBackward = false; break;\n\n\t\t\t\tcase 'ArrowRight':\n\t\t\t\tcase 'KeyD': this.moveLeft = false; break;\n\n\t\t\t\tcase 'KeyR': this.moveUp = false; break;\n\t\t\t\tcase 'KeyF': this.moveDown = false; break;\n\t\t\t}\n\t\t};\n\n\t\tthis.lookAt = ( x, y, z ) => {\n\t\t\tif ( x.isVector3 ) _target.copy( x );\n\t\t\telse _target.set( x, y, z );\n\n\t\t\tthis.object.lookAt( _target );\n\t\t\tsetOrientation( this );\n\n\t\t\treturn this;\n\t\t};\n\n\t\tthis.update = function () {\n\t\t\tconst targetPosition = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\n\n\t\t\treturn function update( delta ) {\n\t\t\t\tif ( this.enabled === false ) return;\n\n\t\t\t\tif ( this.heightSpeed ) {\n\t\t\t\t\tconst y = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.clamp( this.object.position.y, this.heightMin, this.heightMax );\n\t\t\t\t\tconst heightDelta = y - this.heightMin;\n\n\t\t\t\t\tthis.autoSpeedFactor = delta * ( heightDelta * this.heightCoef );\n\t\t\t\t} else this.autoSpeedFactor = 0.0;\n\n\t\t\t\t\n\t\t\t\tconst actualMoveSpeed = delta * this.movementSpeed;\n\t\t\t\tif ( this.moveForward || ( this.autoForward && ! this.moveBackward ) )\n\t\t\t\t\tthis.object.translateZ( - ( actualMoveSpeed + this.autoSpeedFactor ) );\n\t\t\t\tif ( this.moveBackward ) this.object.translateZ( actualMoveSpeed );\n\n\t\t\t\tif ( this.moveLeft ) this.object.translateX( - actualMoveSpeed );\n\t\t\t\tif ( this.moveRight ) this.object.translateX( actualMoveSpeed );\n\n\t\t\t\tif ( this.moveUp ) this.object.translateY( actualMoveSpeed );\n\t\t\t\tif ( this.moveDown ) this.object.translateY( - actualMoveSpeed );\n\n\t\t\t\tconst position = this.object.position;\n\t\t\t\t_spherical.phi = _phi;\n\t\t\t\t_spherical.theta = _theta;\n\t\t\t\ttargetPosition.setFromSpherical( _spherical ).add( position );\n\n\t\t\t\tthis.object.lookAt( targetPosition );\n\n\t\t\t};\n\t\t}();\n\n\t\tfunction setOrientation( controls ) {\n\t\t\tconst quaternion = controls.object.quaternion;\n\t\t\t_lookDirection.set( 0, 0, - 10 ).applyQuaternion( quaternion );\n\t\t\t_spherical.setFromVector3( _lookDirection );\n\t\t};\n\n\t\tsetOrientation( this );\n\t};\n};\n\nfunction setSphericalThetaAndPhi( moveTheta, movePhi, mouseSpeed ) {\n\t_theta -= ( ( moveTheta / 1000 ) * mouseSpeed );\n\t_phi -= ( ( movePhi / 1000 ) * mouseSpeed );\n};\n\nfunction setSettingsFPC( index, value, controls ) {\n\tif( exportSettings.includes(index) ) {\n\t\tif(  index !== 'reverseRotate' && typeof value === 'boolean' )\n\t\t\tcontrols[index] = value ? 1 : -1;\n\t\telse if( typeof index === 'string' && typeof value === 'number' )\n\t\t\tcontrols[index] = value;\n\t}\n};\n\n\n\n//# sourceURL=webpack://safehouse/./src/settings/FirstPersonCamera.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;