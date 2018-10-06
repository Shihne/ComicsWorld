$(function(){
	$('.nav-toggle').on('click', function(){
		$('#menu').toggleClass('active');
	});

	$(window).resize(function(){
		if($(this).width() > 996) {
			$('#menu').toggleClass();
		}
	});
	
	$(window).scroll(function(){
		if ($(this).scrollTop() < 100) {
			$('.up,#up').fadeOut();	
		} else { 
			$('.up,#up').fadeIn();
		}
	});
	$('.up,#up').on('click', function(){
		$('body,html').animate({scrollTop: 0}, 400);
	});

	(function( $ ){
		$.fn.slideshow = function() {
			if(!$('.slide:last').is(':visible')){
				$('.slide:visible').next('.slide').fadeIn();
				$('.slide:visible:first').fadeOut(1600);
			} else {
				$('.slide:first').fadeIn();
				$('.slide:last').fadeOut(1600);
			}
		};
	})(jQuery);
		
	window.setInterval(function(){
		$('.slider-wrapper').slideshow();
	}, 10000);
	
	
	
	$('.more').on('click', function() {
		var s = $(this).prev()[0].scrollHeight;
		$(this).prev().animate({
			'height' : s
		});
		$(this).parent().css({
			'height' : 'auto'
		}); 
		$(this).css({
			'display' : 'none'
		});
		$(this).next().css({
			'display' : 'block'
		});
		
	});
	$('.less').on('click', function(){
		$(this).parent().animate({
			'height' : '860px'
		});
		$(this).prev().prev().animate({
			'height' : '147px'
		});
		$(this).css({
			'display' : 'none'
		});
		$(this).prev().css({
			'display' : 'block'
		});
	});
	
	$(window).scroll(function(){
		if($(this).width() > 1243) {
			if($(this).scrollTop() > 195) {
				$('#filter').css({
					'position' : 'fixed',
					'margin-top' : '8px'
				});
			}
			if($(this).scrollTop() < 195) {
				$('#filter').css({
					'position' : 'absolute',
					'margin-top' : '200px'
				});
			}
		}
	});
	
	$('.all').click(function(){
		$('.comics,.character').show();
		$(this).css({
			'background-color' : 'purple'
		});
		$('#filter li a:not(.all)').css({
			'background-color' : 'rgba(0, 0, 0, 0)'
		});
	});
	$('#filter li a:not(.all)').click(function(){
		var a = this.className;
		$('.comics').ready(function(){
			if(this.className.indexOf("best") == -1) {
				this.hide();
			} else {
				this.show();
			}
		});
	});
	
	$('#best').on('click', function(){
		$('.comics:not(.important,.best)').hide();
		$('.important:hidden,.best:hidden').show();
		$(this).css({
			'background-color' : 'purple'
		});
		$('#all,#new,#reb').css({
			'background-color' : 'rgba(0, 0, 0, 0)'
		});
	});
	$('#all').on('click', function(){
		$('.comics,.character').show();
		$(this).css({
			'background-color' : 'purple'
		});
		$('#best,#new,#dc,#mc,#reb').css({
			'background-color' : 'rgba(0, 0, 0, 0)'
		});
	});
	$('#new').on('click', function(){
		$('.comics:not(.new)').hide();
		$('.new:hidden').show();
		$(this).css({
			'background-color' : 'purple'
		});
		$('#best,#all,#reb').css({
			'background-color' : 'rgba(0, 0, 0, 0)'
		});
	});
	$('#reb').click(function(){
		$('.comics:not(.reb)').hide();
		$('.reb:hidden').show();
		$(this).css({
			'background-color' : 'purple'
		});
		$('#best,#all,#new').css({
			'background-color' : 'rgba(0, 0, 0, 0)'
		});
	});
	
	$('#dc').on('click', function(){
		$('.character:not(.dc)').hide();
		$('.dc:hidden').show();
		$(this).css({
			'background-color' : 'purple'
		});
		$('#mc,#all').css({
			'background-color' : 'rgba(0, 0, 0, 0)'
		});
	});
	$('#mc').on('click', function(){
		$('.character:not(.mc)').hide();
		$('.mc:hidden').show();
		$(this).css({
			'background-color' : 'purple'
		});
		$('#dc,#all').css({
			'background-color' : 'rgba(0, 0, 0, 0)'
		});
	});
	
	
	
	$('.charlist').mouseover(function(){
		$('.charlist').show();
	});
	$('.charlist').mouseout(function(){
		$('.dropdown').hide();
	});
})

/* 
css
.slider {
	max-width: 1024px;
	width: 100%;
	margin: 2em auto;	
	border-style: solid;
	animation: bordercolor 4s infinite alternate;
	border-width: 3px;
	border-radius: 5px;
}

@keyframes bordercolor {
	0% {border-color: #2e2f92;}
	25% {border-color: #38afaa;}
	50% {border-color: #5b59a7;}
	75% {border-color: #f7b21c;}
	100% {border-color: #e12527;}
}

.slider-wrapper {
	height: 683px;
	position: relative;
}

.slide {
	float: left;
	position: absolute;
	width: 100%;
	height: 100%;
	opacity: 0;
	transition: opacity 1s linear;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
}


.slider-wrapper > .slide:first-child {
	opacity: 1;
}

.slider-text h1 {
	background-color: rgba(0, 0, 0, 0.9);
	clear: both;
	margin-top: 0;
	
}

.slider-text p {
	background-color: rgba(0, 0, 0, 0.9);
	height: 39px;
	clear: both;
	margin-top: 607px;
	font-size: 20px;
}


 html
<div class="slider" id="main-slider">
	<div class="slider-wrapper">
		<a href="#news" id="slide-1" class="slide">
			<div class="slider-text">
				<h1>Infinity: Countdown</h1>
				<p>Прелюдия к новому глобальному событию во вселенной Marvel</p>
			</div>
		</a>
		<a href="#news" id="slide-2" class="slide" target="_blank">
			<div class="slider-text">
				<h1>Doomsday Clock</h1>
				<p>Продолжение Watchmen и кроссовер со вселенной DC</p>
			</div>
		</a>
		<a href="#news" id="slide-3" class="slide">
			<div class="slider-text">
				<h1>Phoenix: Resurrection</h1>
				<p>Возрождение культового персонажа</p>
			</div>
		</a>
	</div>
</div>


(function() {
	
	function Slideshow( element ) {
		this.el = document.querySelector( element );
		this.init();
	}
	
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector( ".slider-wrapper" );
			this.slides = this.el.querySelectorAll( ".slide" );
			this.previous = this.el.querySelector( ".slider-previous" );
			this.next = this.el.querySelector( ".slider-next" );
			this.index = 0;
			this.total = this.slides.length;
			this.timer = null;
			
			this.action();
			this.stopStart();	
		},
		_slideTo: function( slide ) {
			var currentSlide = this.slides[slide];
			currentSlide.style.opacity = 1;
			
			for( var i = 0; i < this.slides.length; i++ ) {
				var slide = this.slides[i];
				if( slide !== currentSlide ) {
					slide.style.opacity = 0;
				}
			}
		},
		action: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.index++;
				if( self.index == self.slides.length ) {
					self.index = 0;
				}
				self._slideTo( self.index );
				
			}, 3000);
		},
		stopStart: function() {
			var self = this;
			self.el.addEventListener( "mouseover", function() {
				clearInterval( self.timer );
				self.timer = null;
				
			}, false);
			self.el.addEventListener( "mouseout", function() {
				self.action();
				
			}, false);
		}
		
		
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		
		var slider = new Slideshow( "#main-slider" );
		
	});
	
	
})();
*/
