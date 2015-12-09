$(function () { // wait for document ready

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
	for (var i=1; i<slides.length ; i++) {
		if(i==2) continue;
		if(i==4) continue;
		if(i==12) continue;
		if(i==slides.length-1) continue;
		if(i==slides.length-2) continue;
		new ScrollMagic.Scene({
				triggerElement: slides[i]
			})
			//.setPin(slides[i], {pushFollowers: true})
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
		new ScrollMagic.Scene({
			triggerElement: slides[1], duration:300,offset:-50
		})
		.setTween(TweenMax.to("#box1", 1, {y:'-1000px', transformOrigin:"0% 100%"} ))
		.addIndicators({name:"box1"}) // add indicators (requires plugin)
		.addTo(controller);
		// new ScrollMagic.Scene({
		// 	triggerElement: "#trigger1", duration: 200, offset: 150
		// })
		// .setTween(TweenMax.to("#box1", 1, {css: {top:'-50vh'} }))
		// .addIndicators({name:"box1"}) // add indicators (requires plugin)
		// .addTo(controller);

	/*
	 * Page 3 
	 */
		new ScrollMagic.Scene({
			triggerElement: slides[2]
		})
		.setPin(slides[2])
		.on("enter", function () {
			$('#bgvid')[0].play();
			$('#bgvid')[0].volume = 0;
			$('#bgvid')[0].muted = true;
		})
		.on("leave", function () {
			$('#bgvid')[0].pause();
		})
		.addIndicators({name:"slides3"}) // add indicators (requires plugin)
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
		.addIndicators({name:"#map"})
		.addTo(controller);

		new ScrollMagic.Scene({
			triggerElement: "#p-5", duration: 200, offset: 300
		})
		.setTween(TweenMax.to("#map", 1, {css: {opacity: 0} }))
		.addIndicators({name:"#map"})
		.addTo(controller);

	/*
	 * Page 6
	 */

		new ScrollMagic.Scene({
			triggerElement: slides[5], duration:300,offset:-50
		})
		.setTween(TweenMax.to("#box3", 2, {y:'-1000px', transformOrigin:"0% 100%"} ))
		.addIndicators({name:"box3"}) // add indicators (requires plugin)
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
		.addIndicators({name:"#map"})
		.addTo(controller);

		new ScrollMagic.Scene({
			triggerElement: "#p-7", duration: 200, offset: 300
		})
		.setTween(TweenMax.to("#map", 1, {css: {opacity: 0} }))
		.addIndicators({name:"#map"})
		.addTo(controller);

	/*
	 * Page 8
	 */
		new ScrollMagic.Scene({
			triggerElement: slides[7], duration:300,offset:-50
		})
		.setTween(TweenMax.to("#box4", 2, {y:'-1000px', transformOrigin:"0% 100%"} ))
		.addIndicators({name:"box4"}) // add indicators (requires plugin)
		.addTo(controller);


	/*
	 * Page 9
	 */
		new ScrollMagic.Scene({
			triggerElement: slides[8], duration:200,offset:-50
		})
		.setTween(TweenMax.to("#box5", 1, {y:'-1000px', transformOrigin:"0% 100%"} ))
		.addIndicators({name:"box5"}) // add indicators (requires plugin)
		.addTo(controller);


	/*
	 * Page 11
	 */
		new ScrollMagic.Scene({
			triggerElement: slides[11], duration:200,offset:-50
		})
		.setTween(TweenMax.to("#box6", 1, {y:'-1000px', transformOrigin:"0% 100%"} ))
		.addIndicators({name:"box6"}) // add indicators (requires plugin)
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
		.addIndicators({name:"#map"})
		.addTo(controller);

		new ScrollMagic.Scene({
			triggerElement: "#p-13", duration: 200, offset: 300
		})
		.setTween(TweenMax.to("#map", 1, {css: {opacity: 0} }))
		.addIndicators({name:"#map"})
		.addTo(controller);
	/*
	 * Page 14
	 */
		new ScrollMagic.Scene({
			triggerElement: slides[14], duration:200, offset:-50
		})
		.setTween(TweenMax.to("#box7", 1, {y:'-1000px', transformOrigin:"0% 100%"} ))
		.addIndicators({name:"box7"}) // add indicators (requires plugin)
		.addTo(controller); 
		// new ScrollMagic.Scene({
		// 	triggerElement: "#trigger7", duration: 150, offset: -200
		// })
		// .setTween(TweenMax.to("#box7", 1, {css: {top:'40vh'} }))
		// .addIndicators({name:"box7"}) // add indicators (requires plugin)
		// .addTo(controller);

	/*
	 * Page 14-2
	 */
		// new ScrollMagic.Scene({
		// 	triggerElement: "#trigger7-e", duration: 200, offset: 400
		// })
		// .setTween(TweenMax.to("#box7", 1, {css: {top:'-50vh'} }))
		// .addIndicators({name:"box7"}) // add indicators (requires plugin)
		// .addTo(controller);

	/*
	 * Page 15
	 */
		new ScrollMagic.Scene({
			triggerElement: slides[16], duration:200, offset:-50
		})
		.setTween(TweenMax.to("#box8", 1, {y:'-1000px', transformOrigin:"0% 100%"} ))
		.addIndicators({name:"box8"}) // add indicators (requires plugin)
		.addTo(controller); 

	/*
	 * Page 16
	 */
		var hideAni = TweenMax.to('#p16-2', 1, {autoAlpha: 0});

		// scene used to pin the container
		var pinScene = new ScrollMagic.Scene({
		    triggerHook: 0,
		    triggerElement: '#p-16',
		    duration: 600
		})
	    .setPin('#p-16')
	    .addTo(controller)

		// scene used to fade the images
		var aniScene = new ScrollMagic.Scene({
		    triggerHook: 0,
		    triggerElement: '#p-16',
		    offset: 100,
		    duration: 300
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