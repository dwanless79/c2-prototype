/*!
 * [ Thanks to the community on StackOverflow - Reg ]
 */
// Avoid `console` errors in browsers that lack a console.
(function() {
	var method;
	var noop = function() {};
	var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
	var length = methods.length;
	var console = (window.console = window.console || {});
	while (length--) {
		method = methods[length];
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());
$(document).ready(function() {

		//=========== [ LocalScroll ]
	// Scroll to top actions
	$(function() {
		$(".js-scroll").localScroll({ /* targets the links INSIDE controls*/
			duration: 500
		});
	});

	//=========== [ LocalScroll ]
	// Scroll to top actions
	$(function() {
		$("#top").localScroll({
			duration: 500
		});
		$("#wrapper").localScroll({
			duration: 500,
			offset: {
				top: 90
			}
		});
	});


	//=========== [ Card toggles ]
	$('.js-cat-link').click(function(event) {
		event.preventDefault();
		var catclass = $(this).data('category');
		$('.js-card-fade').hide();
		//alert(catclass);
		$('.grid__col.'+ catclass).fadeIn(500);
	$('ul.categories li a').removeClass('current');
	$('ul.categories li a.'+ catclass).addClass('current');
	});

	$('.js-show-all').click(function(event) {
		event.preventDefault();
		$('ul.categories li a').removeClass('current');
		$('.js-card-fade').hide();
		$('.js-card-fade').fadeIn(500);
	});

	//=========== [ Workspaces ]
	$('.js-workspace-card-link').click(function(event) {
		//event.preventDefault();
		var workspace = $(this).data('workspace');
		$('.js-workspace-fade').hide();
		//alert(workspace);
		$('.js-workspace-fade.'+ workspace).fadeIn(500);
		$('.js-workspace-card-link').removeClass('current');
		$('.js-workspace-card-link.'+ workspace).addClass('current');
	});

	//=========== [ Accordion, uses JQuery UI ]
	$(function() {
		$(".accordion").accordion({
			heightStyle: "content",
			active: false,
			icons: false,
			collapsible: true,
			animate: 700
		});
	});

	//=========== [ BxSlider ]
	// with and without navigations
	
	$(function() {
		var slider = $('.bxslider-twitter').bxSlider({
			auto: false,
			speed: 500,
			infiniteLoop: true,
			controls: true,
			pager: false,
			mode: 'fade',
			preloadImages: 'all'
		});

	});

});