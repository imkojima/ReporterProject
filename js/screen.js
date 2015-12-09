$(function () { // wait for document ready

	/*
	 *  Variables
	 */
	var windowHeight = $(window).innerHeight();
	var defaultDuration = 1.8 * windowHeight;

 	var path = $('#animated_path path')[0];
 	var length = path.getTotalLength();

	path.style.transition = path.style.WebkitTransition = 'none';
	path.style.strokeDasharray = length + ' ' + length;
	path.style.strokeDashoffset = length;

	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});

	// change behaviour of controller to animate scroll instead of jump
	controller.scrollTo(function (newpos) {
		TweenMax.to(window, 1, {scrollTo: {y: newpos}});
	});

	/*
	 *  bind scroll to anchor links
	 */
	$(document).on("click", "a[href^='#']", function (e) {
		var id = $(this).attr("href");
		if ($(id).length > 0) {
			e.preventDefault();

			// trigger scroll
			controller.scrollTo(id);

				// if supported by the browser we can even update the URL.
			if (window.history && window.history.pushState) {
				history.pushState("", document.title, id);
			}
		}
	});

	// get all slides
	var slides = document.querySelectorAll("section.panel");

	// create scene for every slide
	for (var i=0; i<slides.length ; i++) {
		if(i==4) continue;
		if(i==12) continue;
		//p17
		if(i==17) continue;
		//p17-2
		if(i==18) continue;
		//p21
		if(i==22) continue;
		//p25
		if(i==26) continue;
		//p28
		if(i==29) continue;
		//p31
		if(i==32) continue;
		//p38
		if(i==39) continue;

		if(i==slides.length-1) continue;
		if(i==slides.length-2) continue;
		new ScrollMagic.Scene({
				triggerElement: slides[i]
			})
			.setPin(slides[i], {pushFollowers: true})
			.addTo(controller);
	}

	/*
	 * Page 1
	 */
		new ScrollMagic.Scene({
			triggerElement: slides[0]
		})
		.addTo(controller);

	/*
	 * Page 2
	 */
	 	TweenMax.to("#box1", 1, {y: windowHeight, transformOrigin:"0% 100%"}); 
		new ScrollMagic.Scene({triggerElement: slides[1], duration: defaultDuration})
		.setTween(TweenMax.to("#box1", 1, {y: -2*windowHeight, transformOrigin:"0% 100%"} ))
		// .addIndicators({name:"box1"}) // add indicators (requires plugin)
		.addTo(controller);

	/*
	 * Page 3 
	 */
		new ScrollMagic.Scene({
			triggerElement: "#p-4"
		})
		.setPin("#p-4")
		.on("enter", function () {
			$('#bgvid')[0].play();
			$('#bgvid')[0].volume = 0;
			$('#bgvid')[0].muted = true;
		})
		.on("leave", function () {
			$('#bgvid')[0].pause();
		})
		// .addIndicators({name:"slides3"}) // add indicators (requires plugin)
		.addTo(controller);

	/*
	 * Page 5 - 6
	 */
		new ScrollMagic.Scene({
			triggerElement: "#p-5", duration: 200, offset: -200
		})
		.setPin("#map")
		.setTween(TweenMax.to("#map", 1, {css: {opacity: 1} }))
		.on('enter', function(){
			path.style.transition = path.style.WebkitTransition = 'none';
			path.style.strokeDasharray = length + ' ' + length;
			path.style.strokeDashoffset = length;
		})
		.on('leave', function(){
			path.getBoundingClientRect();
			path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
			path.style.strokeDashoffset = '1760';
		})
		// .addIndicators({name:"#map"})
		.addTo(controller);

		new ScrollMagic.Scene({
			triggerElement: "#p-5", duration: 200, offset: 300
		})
		.setTween(TweenMax.to("#map", 1, {css: {opacity: 0} }))
		// .addIndicators({name:"#map"})
		.addTo(controller);

	/*
	 * Page 6
	 */
	 	TweenMax.to("#box3", 1, {y: windowHeight, transformOrigin:"0% 100%"}); 
		new ScrollMagic.Scene({triggerElement: slides[5], duration: defaultDuration})
		.setTween(TweenMax.to("#box3", 1, {y: -2*windowHeight, transformOrigin:"0% 100%"} ))
		// .addIndicators({name:"box3"}) // add indicators (requires plugin)
		.addTo(controller);

	/*
	 * Page 7-8
	 */
		new ScrollMagic.Scene({
			triggerElement: "#p-7", duration: 200, offset: -200
		})
		.setPin("#map")
		.setTween(TweenMax.to("#map", 1, {css: {opacity: 1} }))
		.on('enter', function(){
			path.style.transition = path.style.WebkitTransition = 'none';
			path.style.strokeDasharray = length + ' ' + length;
			path.style.strokeDashoffset = '1760';
		})
		.on('leave', function(){
			path.getBoundingClientRect();
			path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
			path.style.strokeDashoffset = '1490';
		})
		// .addIndicators({name:"#map"})
		.addTo(controller);

		new ScrollMagic.Scene({
			triggerElement: "#p-7", duration: 200, offset: 300
		})
		.setTween(TweenMax.to("#map", 1, {css: {opacity: 0} }))
		// .addIndicators({name:"#map"})
		.addTo(controller);

	/*
	 * Page 8
	 */
	 	TweenMax.to("#box4", 1, {y: windowHeight, transformOrigin:"0% 100%"}); 
		new ScrollMagic.Scene({triggerElement: slides[7], duration: defaultDuration})
		.setTween(TweenMax.to("#box4", 1, {y: -2*windowHeight, transformOrigin:"0% 100%"} ))
		// .addIndicators({name:"box4"}) // add indicators (requires plugin)
		.addTo(controller);

	/*
	 * Page 9
	 */
	 	TweenMax.to("#box5", 1, {y: windowHeight, transformOrigin:"0% 100%"}); 
		new ScrollMagic.Scene({triggerElement: slides[8], duration: defaultDuration})
		.setTween(TweenMax.to("#box5", 1, {y: -2*windowHeight, transformOrigin:"0% 100%"} ))
		// .addIndicators({name:"box5"}) // add indicators (requires plugin)
		.addTo(controller);

	/*
	 * Page 11
	 */
	 	TweenMax.to("#box6", 1, {y: windowHeight, transformOrigin:"0% 100%"}); 
		new ScrollMagic.Scene({triggerElement: slides[11], duration: defaultDuration})
		.setTween(TweenMax.to("#box6", 1, {y: -2*windowHeight, transformOrigin:"0% 100%"} ))
		// .addIndicators({name:"box6"}) // add indicators (requires plugin)
		.addTo(controller);

	/*
	 * Page 12-13
	 */
		new ScrollMagic.Scene({
			triggerElement: "#p-12", duration: 200, offset: -200
		})
		.setPin("#map")
		.setTween(TweenMax.to("#map", 1, {css: {opacity: 1} }))
		.on('enter', function(){
			path.style.transition = path.style.WebkitTransition = 'none';
			path.style.strokeDasharray = length + ' ' + length;
			path.style.strokeDashoffset = '1490';
		})
		.on('leave', function(){
			path.getBoundingClientRect();
			path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
			path.style.strokeDashoffset = '1300';
		})
		// .addIndicators({name:"#map"})
		.addTo(controller);

		new ScrollMagic.Scene({
			triggerElement: "#p-13", duration: 200, offset: 300
		})
		.setTween(TweenMax.to("#map", 1, {css: {opacity: 0} }))
		// .addIndicators({name:"#map"})
		.addTo(controller);
	/*
	 * Page 14
	 */
	 	TweenMax.to("#box7", 1, {y: windowHeight, transformOrigin:"0% 100%"}); 
		new ScrollMagic.Scene({triggerElement: "#p-14", duration: defaultDuration})
		.setTween(TweenMax.to("#box7", 5, {y: -2*windowHeight, transformOrigin:"0% 100%"} ))
		// .addIndicators({name:"box7"}) // add indicators (requires plugin)
		.addTo(controller);

		var hideAni = TweenMax.to('#p14-1', 1, {autoAlpha: 0});

		// scene used to pin the container
		var pinScene = new ScrollMagic.Scene({
		    triggerHook: 0,
		    triggerElement: '#p-14',
		    duration: 0
		})
	    //.setPin('#p-14')
	    .addTo(controller)

		// scene used to fade the images
		var aniScene = new ScrollMagic.Scene({
		    triggerHook: 0,
		    triggerElement: '#p-14',
		    offset: windowHeight/8,
		    duration: windowHeight/4
		})
	    .setTween(hideAni)
	    .addTo(controller)

	/*
	 * Page 15
	 */
	 	TweenMax.to("#box8", 1, {y: windowHeight, transformOrigin:"0% 100%"}); 
		new ScrollMagic.Scene({triggerElement: "#p-15", duration: defaultDuration})
		.setTween(TweenMax.to("#box8", 1, {y: -2*windowHeight, transformOrigin:"0% 100%"} ))
		// .addIndicators({name:"box8"}) // add indicators (requires plugin)
		.addTo(controller);

		var hideAni = TweenMax.to('#p15-1', 1, {autoAlpha: 0});

		// scene used to pin the container
		var pinScene = new ScrollMagic.Scene({
		    triggerHook: 0,
		    triggerElement: '#p-15',
		    duration: 0
		})
	    //.setPin('#p-15')
	    .addTo(controller)

		// scene used to fade the images
		var aniScene = new ScrollMagic.Scene({
		    triggerHook: 0,
		    triggerElement: '#p-15',
		    offset: windowHeight/8,
		    duration: windowHeight/4
		})
	    .setTween(hideAni)
	    .addTo(controller)

	/*
	 * Page 16
	 */
		var hideAni = TweenMax.to('#p16-1', 1, {autoAlpha: 0});

		// scene used to pin the container
		var pinScene = new ScrollMagic.Scene({
		    triggerHook: 0,
		    triggerElement: '#p-16',
		    duration: 0
		})
	    //.setPin('#p-16')
	    .addTo(controller)

		// scene used to fade the images
		var aniScene = new ScrollMagic.Scene({
		    triggerHook: 0,
		    triggerElement: '#p-16',
		    offset: windowHeight/8,
		    duration: windowHeight/4
		})
	    .setTween(hideAni)
	    .addTo(controller)

	/*
	 * Page 17
	 */
		new ScrollMagic.Scene({
			triggerElement: "#p-17", duration: 200, offset: -200
		})
		.setPin("#map")
		.setTween(TweenMax.to("#map", 1, {css: {opacity: 1} }))
		.on('enter', function(){
			path.style.transition = path.style.WebkitTransition = 'none';
			path.style.strokeDasharray = length + ' ' + length;
			path.style.strokeDashoffset = '1300';
		})
		.on('leave', function(){
			path.getBoundingClientRect();
			path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
			path.style.strokeDashoffset = '1170';
		})
		// .addIndicators({name:"#map"})
		.addTo(controller);

		new ScrollMagic.Scene({
			triggerElement: "#p-17-2", duration: 200, offset: 0
		})
		.on('enter', function(){
			path.style.transition = path.style.WebkitTransition = 'none';
			path.style.strokeDasharray = length + ' ' + length;
			path.style.strokeDashoffset = '1170';
		})
		.on('leave', function(){
			path.getBoundingClientRect();
			path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
			path.style.strokeDashoffset = '1100';
		})
		//.addIndicators({name:"#trigger"})
		.addTo(controller);

		new ScrollMagic.Scene({
			triggerElement: "#p-18", duration: 200, offset: -700
		})
		.setTween(TweenMax.to("#map", 1, {css: {opacity: 0} }))
		// .addIndicators({name:"#map"})
		.addTo(controller);

	/*
	 * Page 18
	 */
	 	TweenMax.to("#box9", 1, {y: windowHeight, transformOrigin:"0% 100%"}); 
		new ScrollMagic.Scene({triggerElement: "#p-18", duration: defaultDuration})
		.setTween(TweenMax.to("#box9", 1, {y: -2*windowHeight, transformOrigin:"0% 100%"} ))
		// .addIndicators({name:"box9"}) // add indicators (requires plugin)
		.addTo(controller);

	/*
	 * Page 19
	 */
	 	TweenMax.to("#box10", 1, {y: windowHeight, transformOrigin:"0% 100%"}); 
		new ScrollMagic.Scene({triggerElement: "#p-19", duration: defaultDuration})
		.setTween(TweenMax.to("#box10", 1, {y: -2*windowHeight, transformOrigin:"0% 100%"} ))
		// .addIndicators({name:"box10"}) // add indicators (requires plugin)
		.addTo(controller);

	/*
	 * Page 20
	 */
	 	TweenMax.to("#box11", 1, {y: windowHeight, transformOrigin:"0% 100%"}); 
		new ScrollMagic.Scene({triggerElement: "#p-20", duration: defaultDuration})
		.setTween(TweenMax.to("#box11", 1, {y: -2*windowHeight, transformOrigin:"0% 100%"} ))
		// .addIndicators({name:"box11"}) // add indicators (requires plugin)
		.addTo(controller);

		var hideAni = TweenMax.to('#p20-1', 1, {autoAlpha: 0});

		// scene used to pin the container
		var pinScene = new ScrollMagic.Scene({
		    triggerHook: 0,
		    triggerElement: '#p-20',
		    duration: 0
		})
	    //.setPin('#p-16')
	    .addTo(controller)

		// scene used to fade the images
		var aniScene = new ScrollMagic.Scene({
		    triggerHook: 0,
		    triggerElement: '#p-20',
		    offset: windowHeight/8,
		    duration: windowHeight/4
		})
	    .setTween(hideAni)
	    .addTo(controller)

	/*
	 * Page 21
	 */
		new ScrollMagic.Scene({
			triggerElement: "#p-21", duration: 200, offset: -200
		})
		.setPin("#map")
		.setTween(TweenMax.to("#map", 1, {css: {opacity: 1} }))
		.on('enter', function(){
			path.style.transition = path.style.WebkitTransition = 'none';
			path.style.strokeDasharray = length + ' ' + length;
			path.style.strokeDashoffset = '1100';
		})
		.on('leave', function(){
			path.getBoundingClientRect();
			path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
			path.style.strokeDashoffset = '1030';
		})
		//.addIndicators({name:"#trigger"})
		.addTo(controller);

		new ScrollMagic.Scene({
			triggerElement: "#p-21", duration: 200, offset: 300
		})
		.setTween(TweenMax.to("#map", 1, {css: {opacity: 0} }))
		// .addIndicators({name:"#map"})
		.addTo(controller);

	/*
	 * Page 22
	 */
	 	TweenMax.to("#box12", 1, {y: windowHeight, transformOrigin:"0% 100%"}); 
		new ScrollMagic.Scene({triggerElement: "#p-22", duration: defaultDuration})
		.setTween(TweenMax.to("#box12", 1, {y: -2*windowHeight, transformOrigin:"0% 100%"} ))
		// .addIndicators({name:"box12"}) // add indicators (requires plugin)
		.addTo(controller);

	/*
	 * Page 23
	 */
	 	TweenMax.to("#box13", 1, {y: windowHeight, transformOrigin:"0% 100%"}); 
		new ScrollMagic.Scene({triggerElement: "#p-23", duration: defaultDuration})
		.setTween(TweenMax.to("#box13", 1, {y: -2*windowHeight, transformOrigin:"0% 100%"} ))
		// .addIndicators({name:"box13"}) // add indicators (requires plugin)
		.addTo(controller);

	/*
	 * Page 25
	 */
		new ScrollMagic.Scene({
			triggerElement: "#p-25", duration: 200, offset: -200
		})
		.setPin("#map")
		.setTween(TweenMax.to("#map", 1, {css: {opacity: 1} }))
		.on('enter', function(){
			path.style.transition = path.style.WebkitTransition = 'none';
			path.style.strokeDasharray = length + ' ' + length;
			path.style.strokeDashoffset = '1030';
		})
		.on('leave', function(){
			path.getBoundingClientRect();
			path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
			path.style.strokeDashoffset = '800';
		})
		//.addIndicators({name:"#trigger"})
		.addTo(controller);

		new ScrollMagic.Scene({
			triggerElement: "#p-25", duration: 200, offset: 300
		})
		.setTween(TweenMax.to("#map", 1, {css: {opacity: 0} }))
		// .addIndicators({name:"#map"})
		.addTo(controller);

	/*
	 * Page 26
	 */
	 	TweenMax.to("#box14", 1, {y: windowHeight, transformOrigin:"0% 100%"}); 
		new ScrollMagic.Scene({triggerElement: "#p-26", duration: defaultDuration})
		.setTween(TweenMax.to("#box14", 1, {y: -2*windowHeight, transformOrigin:"0% 100%"} ))
		// .addIndicators({name:"box14"}) // add indicators (requires plugin)
		.addTo(controller);

	/*
	 * Page 28
	 */
		new ScrollMagic.Scene({
			triggerElement: "#p-28", duration: 200, offset: -200
		})
		.setPin("#map")
		.setTween(TweenMax.to("#map", 1, {css: {opacity: 1} }))
		.on('enter', function(){
			path.style.transition = path.style.WebkitTransition = 'none';
			path.style.strokeDasharray = length + ' ' + length;
			path.style.strokeDashoffset = '800';
		})
		.on('leave', function(){
			path.getBoundingClientRect();
			path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
			path.style.strokeDashoffset = '670';
		})
		//.addIndicators({name:"#trigger"})
		.addTo(controller);

		new ScrollMagic.Scene({
			triggerElement: "#p-28", duration: 200, offset: 300
		})
		.setTween(TweenMax.to("#map", 1, {css: {opacity: 0} }))
		// .addIndicators({name:"#map"})
		.addTo(controller);

	/*
	 * Page 29
	 */
	 	TweenMax.to("#box15", 1, {y: windowHeight, transformOrigin:"0% 100%"}); 
		new ScrollMagic.Scene({triggerElement: "#p-29", duration: defaultDuration})
		.setTween(TweenMax.to("#box15", 1, {y: -2*windowHeight, transformOrigin:"0% 100%"} ))
		// .addIndicators({name:"box15"}) // add indicators (requires plugin)
		.addTo(controller);

		var hideAni = TweenMax.to('#p29-1', 1, {autoAlpha: 0});

		// scene used to pin the container
		var pinScene = new ScrollMagic.Scene({
		    triggerHook: 0,
		    triggerElement: '#p-29',
		    duration: 0
		})
	    //.setPin('#p-16')
	    .addTo(controller)

		// scene used to fade the images
		var aniScene = new ScrollMagic.Scene({
		    triggerHook: 0,
		    triggerElement: '#p-29',
		    offset: windowHeight/8,
		    duration: windowHeight/4
		})
	    .setTween(hideAni)
	    .addTo(controller)

	/*
	 * Page 30
	 */
	 	TweenMax.to("#box16", 1, {y: windowHeight, transformOrigin:"0% 100%"}); 
		new ScrollMagic.Scene({triggerElement: "#p-30", duration: defaultDuration})
		.setTween(TweenMax.to("#box16", 1, {y: -2*windowHeight, transformOrigin:"0% 100%"} ))
		// .addIndicators({name:"box16"}) // add indicators (requires plugin)
		.addTo(controller);

		var hideAni = TweenMax.to('#p30-1', 1, {autoAlpha: 0});

		// scene used to pin the container
		var pinScene = new ScrollMagic.Scene({
		    triggerHook: 0,
		    triggerElement: '#p-30',
		    duration: 0
		})
	    //.setPin('#p-16')
	    .addTo(controller)

		// scene used to fade the images
		var aniScene = new ScrollMagic.Scene({
		    triggerHook: 0,
		    triggerElement: '#p-30',
		    offset: windowHeight/8,
		    duration: windowHeight/4
		})
	    .setTween(hideAni)
	    .addTo(controller)

	/*
	 * Page 31
	 */
		new ScrollMagic.Scene({
			triggerElement: "#p-31", duration: 200, offset: -200
		})
		.setPin("#map")
		.setTween(TweenMax.to("#map", 1, {css: {opacity: 1} }))
		.on('enter', function(){
			path.style.transition = path.style.WebkitTransition = 'none';
			path.style.strokeDasharray = length + ' ' + length;
			path.style.strokeDashoffset = '670';
		})
		//.addIndicators({name:"#trigger"})
		.addTo(controller);

	/*
	 * Page 32
	 */
		new ScrollMagic.Scene({
			triggerElement: "#p-32", duration: 200, offset: -200
		})
		.setPin("#map")
		.setTween(TweenMax.to("#map", 1, {css: {opacity: 1} }))
		.on('leave', function(){
			path.getBoundingClientRect();
			path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
			path.style.strokeDashoffset = '610';
		})
		//.addIndicators({name:"#trigger"})
		.addTo(controller);

		new ScrollMagic.Scene({
			triggerElement: "#p-32", duration: 200, offset: 300
		})
		.setTween(TweenMax.to("#map", 1, {css: {opacity: 0} }))
		// .addIndicators({name:"#map"})
		.addTo(controller);

	/*
	 * Page 35
	 */
	 	TweenMax.to("#box17", 1, {y: windowHeight, transformOrigin:"0% 100%"}); 
		new ScrollMagic.Scene({triggerElement: "#p-35", duration: defaultDuration})
		.setTween(TweenMax.to("#box17", 1, {y: -2*windowHeight, transformOrigin:"0% 100%"} ))
		// .addIndicators({name:"box17"}) // add indicators (requires plugin)
		.addTo(controller);

	/*
	 * Page 36
	 */
	 	TweenMax.to("#box18", 1, {y: windowHeight, transformOrigin:"0% 100%"}); 
		new ScrollMagic.Scene({triggerElement: "#p-36", duration: defaultDuration})
		.setTween(TweenMax.to("#box18", 1, {y: -2*windowHeight, transformOrigin:"0% 100%"} ))
		// .addIndicators({name:"box18"}) // add indicators (requires plugin)
		.addTo(controller);

	/*
	 * Page 38
	 */
		new ScrollMagic.Scene({
			triggerElement: "#p-38", duration: 200, offset: -200
		})
		.setPin("#map")
		.setTween(TweenMax.to("#map", 1, {css: {opacity: 1} }))
		.on('enter', function(){
			path.style.transition = path.style.WebkitTransition = 'none';
			path.style.strokeDasharray = length + ' ' + length;
			path.style.strokeDashoffset = '610';
		})
		.on('leave', function(){
			path.getBoundingClientRect();
			path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 3s ease-in-out';
			path.style.strokeDashoffset = '0';
		})
		//.addIndicators({name:"#trigger"})
		.addTo(controller);

		new ScrollMagic.Scene({
			triggerElement: "#p-38", duration: 200, offset: 600
		})
		.setTween(TweenMax.to("#map", 1, {css: {opacity: 0} }))
		// .addIndicators({name:"#map"})
		.addTo(controller);

	/*
	 * Page 39
	 */
	 	TweenMax.to("#box19", 1, {y: windowHeight, transformOrigin:"0% 100%"}); 
		new ScrollMagic.Scene({triggerElement: "#p-39", duration: defaultDuration})
		.setTween(TweenMax.to("#box19", 1, {y: -2*windowHeight, transformOrigin:"0% 100%"} ))
		// .addIndicators({name:"box19"}) // add indicators (requires plugin)
		.addTo(controller);

	/*
	 * Page 40
	 */
		var hideAni = TweenMax.to('#p40-1', 1, {autoAlpha: 0});

		// scene used to pin the container
		var pinScene = new ScrollMagic.Scene({
		    triggerHook: 0,
		    triggerElement: '#p-40',
		    duration: 0
		})
	    //.setPin('#p-16')
	    .addTo(controller)

		// scene used to fade the images
		var aniScene = new ScrollMagic.Scene({
		    triggerHook: 0,
		    triggerElement: '#p-40',
		    offset: windowHeight/8,
		    duration: windowHeight/4
		})
	    .setTween(hideAni)
	    .addTo(controller)

	/*
	 * Page 41
	 */
		new ScrollMagic.Scene({
			triggerElement: slides[slides.length-2]
		})
		.addTo(controller);

	/*
	 * Page  42
	 */ 
		new ScrollMagic.Scene({
			triggerElement: slides[slides.length-1]
		})
		.addTo(controller);

});