   		



















   		const loadingManager = new THREE.LoadingManager( () => {
	
		const loadingScreen = document.getElementById( 'loading-screen' );
		loadingScreen.classList.add( 'fade-out' );
		
		// optional: remove loader from DOM via event listener
		loadingScreen.addEventListener( 'transitionend', onTransitionEnd );
		
		} );


   		function onTransitionEnd( event ) {

		const element = event.target;
		element.remove();
	
		}







			var model;

			function loadObject(){
			    var loader = new THREE.GLTFLoader(loadingManager);

			    loader.load('citylow.gltf',
			        function ( gltf ) {


			            model = gltf;
			            scene.add( model.scene );


			            init();

			        },
			        function ( xhr ) {
			            //console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
			        },
			        function ( error ) {
			            //console.log( 'An error happened' );
			        }
			    );
			}

			loadObject()

			function init() {  
			    model.scene.scale.set(4,4,4)
    			model.scene.position.set(0,-40, -10)
    			model.scene.rotation.set(0,0, 0)	

			}







   			//TRANSITION DOM :

   			var work = document.querySelector("#work");

   			var canvas = document.querySelector(".canvas");

   			function transform(){

   				work.style.transform = 'translate(0px, -100%)';

   				canvas.style.transform = 'translate(0px, -100%)';

   				//work.classList.toggle('translate');

   			}



   			// GET CANVAS :

   			myCanvas = document.getElementById('myCanvas');

   			// CREATE NEW RENDERER
   			
   			var renderer = new THREE.WebGLRenderer({
      			canvas: myCanvas, 
      			antialias: false,
      			
    		});

			renderer.shadowMap.enabled = true;
			renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
			renderer.setSize( window.innerWidth, window.innerHeight );



			// CREATE NEW SCENE :

			var scene = new THREE.Scene();

 			// CREATE CAMERA

 			var camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );
			camera.position.set(0, 0, 4);

			// LOAD PNG :



			







			// CREATION DES SPRITES


			var spriteMap = new THREE.TextureLoader().load( "hello.png", );
			var spriteMaterial = new THREE.SpriteMaterial( { map: spriteMap, color: 0xb5b5b5 } );

			var spriteMap = new THREE.TextureLoader().load( "name.png",  );
			var spriteMaterialtwo = new THREE.SpriteMaterial( { map: spriteMap, color: 0xb5b5b5 } );

			var spriteMap = new THREE.TextureLoader().load( "iam.png",  );
			var spriteMaterialthree = new THREE.SpriteMaterial( { map: spriteMap, color: 0xb5b5b5} );

			var spriteMap = new THREE.TextureLoader().load( "passion.png",  );
			var spriteMaterialfour = new THREE.SpriteMaterial( { map: spriteMap, color: 0xb5b5b5} );

			var spriteMap = new THREE.TextureLoader().load( "thx.png", );
			var spriteMaterialfive = new THREE.SpriteMaterial( { map: spriteMap, color: 0xb5b5b5} );

			var spriteMap = new THREE.TextureLoader().load( "about.png",  );
			var spriteMaterialsix = new THREE.SpriteMaterial( { map: spriteMap, color: 0xb5b5b5} );			

			

			var sprite = new THREE.Sprite( spriteMaterial );
			sprite.scale.set(1, 1, 1)
			scene.add( sprite );

			var spritetwo = new THREE.Sprite( spriteMaterialtwo );
			spritetwo.scale.set(1, 1, 1)
			scene.add( spritetwo );
			spritetwo.position.y = -10;

			var spritethree = new THREE.Sprite( spriteMaterialthree );
			spritethree.scale.set(2, 2, 1)
			spritethree.position.set(0, 0, 0)
			scene.add( spritethree );
			spritethree.position.y = -20;

			var spritefour = new THREE.Sprite( spriteMaterialfour );
			spritefour.scale.set(2, 2, 1)
			spritefour.position.set(0, 0, 0)
			scene.add( spritefour);
			spritefour.position.y = -29;


			var spritefive = new THREE.Sprite( spriteMaterialfive );
			spritefive.scale.set(2, 2, 1)
			spritefive.position.set(0, 0, 0)
			scene.add( spritefive);
			spritefive.position.y = -40;

			var spritesix = new THREE.Sprite( spriteMaterialsix );
			spritesix.scale.set(0.8, 0.4, 1)
			spritesix.position.set(-20, 0, 0)
			spritesix.callback = objectClickHandler;
			scene.add( spritesix);
			spritesix.position.y = -41;

	








			//CREATE TWO LIGHT : 			

			var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
			scene.add( directionalLight );

			var light = new THREE.AmbientLight( 0xdedede ); // soft white light
			scene.add( light );


			// CREATE CUBE:

			var geometry = new THREE.BoxBufferGeometry( 0.5, 0.5, 0.5, loadingManager );
			var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );

			// EMPTY ARRAY FOR CUBE :

			var cubearray = [];

			// INSTANCE CUBE

			for (let i = 0; i < 50; i++){

			var cube = new THREE.Mesh( geometry, material, loadingManager );

			let x = Math.random() *  21 - 12
			let y = Math.random() *  10 - 5
			let z = Math.random() *  - 10

			cube.scale.set(0.08,0.08,0.08)

			cube.position.set(x,y,z);
			cube.rotation.set(x,y,z);

			cubearray.push(cube);

			scene.add( cube );

			}


			var cubearraytwo = [];

			// INSTANCE CUBE

			for (let i = 0; i < 50; i++){

			var cube = new THREE.Mesh( geometry, material );

			cube.scale.set(2,2,2)

			cube.position.y = -40;

			cubearraytwo.push(cube);

			scene.add( cube );

			}














			var geometry = new THREE.SphereBufferGeometry( 0.5, 32, 32 );
			var material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, side: THREE.DoubleSide, alphaTest: 0.5 });

			var alphaMap = new THREE.TextureLoader().load('alpha.png');
			material.alphaMap = alphaMap;
			material.alphaMap.magFilter = THREE.NearestFilter;
			material.alphaMap.wrapT = THREE.RepeatWrapping;
			material.alphaMap.repeat.y = 1;

			var sphere = new THREE.Mesh(geometry, material);
			sphere.position.y = -30;
			sphere.position.z = -11;
			sphere.position.x = 2.4;

			scene.add(sphere);


			var starsGeometry = new THREE.Geometry();


for ( var i = 0; i < 10000; i ++ ) {

	var star = new THREE.Vector3();
	star.x = THREE.Math.randFloatSpread( 200 );
	star.y = THREE.Math.randFloatSpread( 200 );
	star.z = THREE.Math.randFloatSpread( 50 );

	starsGeometry.vertices.push( star );

}

var starsMaterial = new THREE.PointsMaterial( { color: 0x888888, size: 0.5, sizeAttenuation: true, } );

var starField = new THREE.Points( starsGeometry, starsMaterial );

scene.add( starField );
















			// VALUE FOR MOUSE MOUVE CAMERA


			var mouseX = 0;
			var mouseY = 0;


			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;

			//FUNCTION MOUSE MOVE :

			  
			function onMouseMove(e){

				e.preventDefault();

				mouseX = ( event.clientX - windowHalfX );
				mouseY =  ( event.clientY - windowHalfY );

			}

			window.addEventListener('mousemove', onMouseMove, false);


			// VALUE FOR HSL COLOR 


			var h = {h: 200};
			var s = {s: 10};
			var l = {l: 2};


			// RESPONSIVE :

			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
				effectFXAA.uniforms['resolution'].value.set(1 / window.innerWidth, 1 /window.innerHeight);
				render();
			}
  			
  			window.addEventListener( 'resize', onWindowResize, false );
			

  			
		


			document.addEventListener('wheel', mousewheel, false)
  			


			// TWEENING THE ELEMENTS :
  			
			function mousewheel(e){




				var slide = 0;

				if(e.deltaY < 0 && camera.position.y == 0 && slide == 0){

				 TweenMax.fromTo(camera.position, 1, {y: camera.position.y,}, {y:'+=0', ease: Expo.easeInOut, onUpdate: function(){
				 	document.removeEventListener('wheel', mousewheel)}, onComplete: function(){document.addEventListener('wheel', mousewheel)}});

				
				}



				//SWITCH TO NEXT SLIDE (NAME) : 

				if(e.deltaY > 0 && camera.position.y == 0){			
					
				 TweenMax.fromTo(camera.position, 1, {y: camera.position.y,}, {y:'+=-10', ease: Expo.easeInOut, onUpdate: function(){
				 	document.removeEventListener('wheel', mousewheel)}, onComplete: function(){document.addEventListener('wheel', mousewheel)}});

					for (var i = 0; i < cubearray.length; i++) {

	  					TweenMax.fromTo(cubearray[i].position, 0.8, {y: cubearray[i].position.y,}, {y: "+= -10", ease: Expo.easeInOut});
				
						TweenMax.fromTo(cubearray[i].scale, 1, {y: cubearray[i].scale.y,}, {y: 10, ease: Expo.easeInOut});

						TweenMax.to(h, 0.5, {h: 200, ease: Expo.easeInOut, roundProps:"h"},);
						TweenMax.to(s, 0.5, {s: 10, ease: Expo.easeInOut, roundProps:"s"},);
						TweenMax.to(l, 0.5, {l: 2, ease: Expo.easeInOut, roundProps:"l"},);



	  					TweenMax.to(cubearray[i].scale, 1, {y: 0.08, ease: Expo.easeInOut, delay: 0.8},);		

					}					
					

				}


				if(e.deltaY < 0 && camera.position.y == -10){

				 TweenMax.fromTo(camera.position, 1, {y: camera.position.y,}, {y:'+=10', ease: Expo.easeInOut, onUpdate: function(){
				 	document.removeEventListener('wheel', mousewheel)}, onComplete: function(){document.addEventListener('wheel', mousewheel)}});

					for (var i = 0; i < cubearray.length; i++) {

	  					TweenMax.fromTo(cubearray[i].position, 0.8, {y: cubearray[i].position.y,}, {y: "+=10", ease: Expo.easeInOut});
				
						TweenMax.fromTo(cubearray[i].scale, 1, {y: cubearray[i].scale.y,}, {y: 10, ease: Expo.easeInOut});

						TweenMax.to(h, 0.5, {h: 200, ease: Expo.easeInOut, roundProps:"h"},);
						TweenMax.to(s, 0.5, {s: 10, ease: Expo.easeInOut, roundProps:"s"},);
						TweenMax.to(l, 0.5, {l: 2, ease: Expo.easeInOut, roundProps:"l"},);



	  					TweenMax.to(cubearray[i].scale, 1, {y: 0.08, ease: Expo.easeInOut, delay: 0.8},);		

					}	
				
				}


				//SWITCH TO NEXT SLIDE (FROM) : 
		

				if(e.deltaY > 0  && camera.position.y == -10){

				TweenMax.fromTo(camera.position, 1.5, {y: camera.position.y,}, {y:'+=-10', ease: Expo.easeInOut, onUpdate: function(){
				 	document.removeEventListener('wheel', mousewheel)}, onComplete: function(){document.addEventListener('wheel', mousewheel)}});



					for (var i = 0; i < cubearray.length; i++) {

	  					TweenMax.fromTo(cubearray[i].position, 1.5, {y: cubearray[i].position.y,}, {y: "+= -10" ,delay: 0.3, ease: Expo.easeInOut});

						TweenMax.to(cubearray[i].rotation, 0.8, {x: 0, y: 0, z: 0, ease: Expo.easeInOut});
						TweenMax.fromTo(cubearray[i].scale, 1.2, {y: cubearray[i].scale.y,}, {y: 15, ease: Expo.easeInOut});


						TweenMax.to(h, 0.5, {h: 200, ease: Expo.easeInOut, roundProps:"h"},);
						TweenMax.to(s, 0.5, {s: 10, ease: Expo.easeInOut, roundProps:"s"},);
						TweenMax.to(l, 0.5, {l: 2, ease: Expo.easeInOut, roundProps:"l"},);

	  					TweenMax.to(cubearray[i].scale, 1, {y: 0.1, ease: Expo.easeInOut, delay: 0.8},);



					}

				}


				if(e.deltaY < 0  && camera.position.y == -20){

				 TweenMax.fromTo(camera.position, 1, {y: camera.position.y,}, {y:'+=10', ease: Expo.easeInOut, onUpdate: function(){
				 	document.removeEventListener('wheel', mousewheel)}, onComplete: function(){document.addEventListener('wheel', mousewheel)}});



					for (var i = 0; i < cubearray.length; i++) {

	  					TweenMax.fromTo(cubearray[i].position, 0.5, {y: cubearray[i].position.y,}, {y: "+=10" ,delay: 0.3, ease: Expo.easeInOut});

						TweenMax.to(cubearray[i].rotation, 1, {

							x: Math.random() * 2,
							y: Math.random() * 2,
							z: Math.random() * 2, ease: Expo.easeInOut});





						TweenMax.fromTo(cubearray[i].scale, 1.2, {y: cubearray[i].scale.y,}, {y: 15, ease: Expo.easeInOut});


						TweenMax.to(h, 0.5, {h: 200, ease: Expo.easeInOut, roundProps:"h"},);
						TweenMax.to(s, 0.5, {s: 10, ease: Expo.easeInOut, roundProps:"s"},);
						TweenMax.to(l, 0.5, {l: 2, ease: Expo.easeInOut, roundProps:"l"},);

	  					TweenMax.to(cubearray[i].scale, 1, {y: 0.1, ease: Expo.easeInOut, delay: 0.8},);



					}
				
				}




				if(e.deltaY > 0 && camera.position.y == -20){

				TweenMax.fromTo(camera.position, 1.5, {y: camera.position.y,}, {y:'+=-10', ease: Elastic.easeOut.config(0.2, 0.3), onUpdate: function(){
				 	document.removeEventListener('wheel', mousewheel)}, onComplete: function(){document.addEventListener('wheel', mousewheel)}});


					for (var i = 0; i < cubearray.length; i++) {

	  					TweenMax.fromTo(cubearray[i].position, 1, {y: cubearray[i].position.y,}, {y: "+= -10" ,delay: 0.3, ease: Expo.easeInOut});

						
						TweenMax.fromTo(cubearray[i].scale, 1.5, {y: cubearray[i].scale.y,}, {y: 15, ease: Expo.easeInOut});

	  					TweenMax.to(cubearray[i].scale, 1, {y: 0.1, ease: Expo.easeInOut, delay: 0.8},);



					}


						

						TweenMax.fromTo(model.scene.position, 1.5, {y: model.scene.position.y,}, {y: -39, delay:0.2 ,ease: Elastic.easeOut.config(2, 0.4)});

					}


				if(e.deltaY < 0  && camera.position.y == -30){

				 TweenMax.fromTo(camera.position, 1, {y: camera.position.y,}, {y:'+=10', ease: Expo.easeInOut, onUpdate: function(){
				 	document.removeEventListener('wheel', mousewheel)}, onComplete: function(){document.addEventListener('wheel', mousewheel)}});


					for (var i = 0; i < cubearray.length; i++) {

	  					TweenMax.fromTo(cubearray[i].position, 1, {y: cubearray[i].position.y,}, {y: "+= 10" ,delay: 0.3, ease: Expo.easeInOut});

						
						TweenMax.fromTo(cubearray[i].scale, 1.5, {y: cubearray[i].scale.y,}, {y: 15, ease: Expo.easeInOut});

	  					TweenMax.to(cubearray[i].scale, 1, {y: 0.1, ease: Expo.easeInOut, delay: 0.8},);

					}

				
				}











				if(e.deltaY > 0 && camera.position.y == -30){

					for (var i = 0; i < cubearray.length; i++) {

						TweenMax.to(cubearray[i].rotation, 0.8, {x: Math.PI / 2, y: 0, z: 0, ease: Expo.easeInOut});
				
						TweenMax.fromTo(cubearray[i].scale, 0.5, {y: cubearray[i].scale.y,}, {y: 10, ease: Expo.easeInOut});

						TweenMax.to(cubearray[i].position, 1.5, {z: -20, ease: Expo.easeInOut,delay: 0.1});

	  					TweenMax.to(cubearray[i].scale, 0.8, {y: 0.1, ease: Expo.easeInOut, delay: 0.8},);

					}	

					for (var i = 0; i < cubearraytwo.length; i++) {

						TweenMax.to(cubearraytwo[i].position, 1.5, {

							x: Math.floor(Math.random() * (20 - -20 + 1) + -20),
							y: Math.floor(Math.random() * (-45 - -35 + 1) + -35),
							z: Math.floor(Math.random() * (-5 - -25 + 1) + -25),


							ease: Expo.easeInOut,delay: 1});


						TweenMax.to(cubearraytwo[i].rotation, 4, {

							x: Math.random() * 4,
							y: Math.random() * 4,
							z: Math.random() * 4,


							ease: Expo.easeInOut,delay: 0.2});

						TweenMax.to(spritesix.position, 1, {

							x: 0,
						
							ease: Expo.easeOut,delay: 0.2});

				


					}		


				TweenMax.fromTo(camera.position, 1.5, {y: camera.position.y,}, {y:'+=-10',delay: 1, ease: Elastic.easeOut.config(0.2, 0.3), onUpdate: function(){
				 	document.removeEventListener('wheel', mousewheel)}, onComplete: function(){document.addEventListener('wheel', mousewheel)}});


				TweenMax.fromTo(model.scene.position, 2, {z: model.scene.position.z,}, {z: -40 ,ease: Expo.easeInOut});




						TweenMax.to(h, 1, {h: 200, ease: Expo.easeInOut, roundProps:"h"},);
						TweenMax.to(s, 1, {s: 20, ease: Expo.easeInOut, roundProps:"s"},);
						TweenMax.to(l, 1, {l: 2, ease: Expo.easeInOut, roundProps:"l"},);

					}



					//INVERT :



				if(e.deltaY < 0  && camera.position.y == -40){





					


				TweenMax.fromTo(camera.position, 1.5, {y: camera.position.y,}, {y:-30, ease: Elastic.easeOut.config(0.2, 0.3), onUpdate: function(){
				 	document.removeEventListener('wheel', mousewheel)}, onComplete: function(){document.addEventListener('wheel', mousewheel)}});



				for (var i = 0; i < cubearray.length; i++) {

						TweenMax.to(cubearray[i].rotation, 1, {x: 0, y: 0, z: 0,delay: 2, ease: Expo.easeInOut});
				
						TweenMax.fromTo(cubearray[i].scale, 0.5, {y: cubearray[i].scale.y,}, {y: 10, ease: Expo.easeInOut});

						TweenMax.to(cubearray[i].position, 1.5, {z: Math.floor(Math.random() * (0 - -10 + 1) + -10), ease: Expo.easeInOut,delay: 0.1});

	  					TweenMax.to(cubearray[i].scale, 0.8, {y: 0.1, ease: Expo.easeInOut, delay: 0.8},);

					}	



					for (var i = 0; i < cubearraytwo.length; i++) {

						TweenMax.to(cubearraytwo[i].position, 1.5, {

							x: 0,
							y: -40,
							z: -5,


							ease: Expo.easeInOut,delay: 0.1});



						TweenMax.to(spritesix.position, 2, {

							x: -20,
						


							ease: Expo.easeInOut,delay: 0.2});


					}						










				TweenMax.fromTo(model.scene.position, 2, {z: model.scene.position.z,}, {z: -10 ,ease: Expo.easeInOut});





					}	


















					console.log(e.deltaY)


				


				


				camera.updateMatrixWorld();
				

			}















			// POST PROCESSING :

			const composer = new THREE.EffectComposer(renderer);
			composer.addPass(new THREE.RenderPass(scene, camera));

			// BLOOM

			var bloomPass = new THREE.UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 0.5, 0, 0.7 );

			// FXAA

			let effectFXAA = new THREE.ShaderPass(THREE.FXAAShader);
			effectFXAA.uniforms['resolution'].value.set(1 / window.innerWidth, 1 /window.innerHeight);
		
			//ADD PASS

			composer.addPass(bloomPass);
			composer.addPass(effectFXAA);

			// RENDER LAST ADDED PASS 

			effectFXAA.renderToScreen = true;



			// RENDER & ANIMATE

			function animate() {



				sphere.material.alphaMap.offset.y += 0.0015;
				sphere.rotation.z += 0.015;
				sphere.rotation.x += 0.015;



	

  				const density = 0.1;
 				scene.fog = new THREE.FogExp2("hsl("+h.h+","+s.s+"%,"+l.l+"%)", density);

				scene.background = new THREE.Color("hsl("+h.h+","+s.s+"%,"+l.l+"%)");

				targetX = mouseX * .001;
				targetY = mouseY * .001;

				camera.position.x += 0.05 * ( targetX - camera.position.x );

				// CUBE 2 POSITION


				requestAnimationFrame( animate );
				//renderer.render( scene, camera );

				composer.render();

			}
				
			animate();

			function objectClickHandler() {
			        transform();
			}

    		var raycaster = new THREE.Raycaster();
    		var mouse = new THREE.Vector2();


		    function onDocumentMouseDown(event) {
		        event.preventDefault();
		 
		        mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
		        mouse.y =  - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;
		 
		        raycaster.setFromCamera(mouse, camera);
		 
		        meshObjects = [spritesix]; // three.js objects with click handlers we are interested in
		         
		        var intersects = raycaster.intersectObjects(meshObjects);
		 
		        if (intersects.length > 0) {
		            intersects[0].object.callback();
		        }
		 
		    }
		 
		    document.addEventListener('mousedown', onDocumentMouseDown, false);



			function onDocumentMouseMove(event) {
			    event.preventDefault();
			 
			    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
			    mouse.y =  - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;
			 
			    raycaster.setFromCamera(mouse, camera);
			 
			    var intersects = raycaster.intersectObjects([spritesix]);
			    var canvas = document.body.getElementsByTagName('canvas')[0];
			 
			    if (intersects.length > 0) {
			        intersects[0].object.material.color.setHex(0xffffff);
			        canvas.style.cursor = "pointer";


			    } else {
			        canvas.style.cursor = "default";
			        spritesix.material.color.setHex(0x909090);
			    }
			 
			}
			 
			document.addEventListener('mousedown', onDocumentMouseDown, false);
			document.addEventListener('mousemove', onDocumentMouseMove, false);

















				function render() {

				renderer.render(scene, camera);
			}
			
			render();