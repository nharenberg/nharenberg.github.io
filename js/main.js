function onLinkClick(event)
{
	//prevent default behavior
	event.preventDefault();

	//get href property
	var href = $(this).attr('href');

	//do the scrolling
	$(window).scrollTo(href, 1000)
}

//set up click event
$('ul li a').click(onLinkClick);

function scrollToTop()
{
$(window).scrollTo('html', 300)
}

$('#scrollToTop').click(scrollToTop);

function showOrHideButton()
{
	if($(window).scrollTop() > 229)
	{
		$('#scrollToTop').fadeIn();
	}

	else
		$('#scrollToTop').fadeOut();
}

$(window).scroll(showOrHideButton);
