$(function(){
	$(document).ready(function(){
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 2000);
    // setting slider starting point
    let slider = 1;

		// iterate all the slider images
		let _images = document.getElementsByClassName('slides');
		let images = $('#slider .slides').length - 0;
		const dots = document.getElementsByClassName('dot');
	
    // switch slides every 5 secs
    setInterval(() => {
        //get active slider position
        slider = slider < images ? slider + 1 : 1;
				console.log (slider);
				
				for (i = 0; i < dots.length; i++) {
					dots[i].className = dots[i].className.replace(" active", "");
				}
				dots[slider-1].className += " active";

				if (images == 1){dots[0].className = " active";}
        // instantly hide all slides
        $('#slider .slides').css('opacity', .0);

        // showing the current index
        $('#slider .slides').eq(slider - 1).css('opacity', 1);
		}, 5000)
		

		const $msg = $("#blink");

		$msg.css({opacity:1});
		let visible = true;

		setInterval(() => {
			if(visible){
					$msg.css({opacity:0});
			}else{
					$msg.css({opacity:1});
			}
			visible = !visible;
		}, 2000);

	})

	
})