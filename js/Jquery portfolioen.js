// JavaScript Document
$(document).ready(function(){			
////////////////// IMAGE GALLERY SHOWING JUST ONE IMAGE				
			var images = {
	
	 1: [
		{
            href : 'portfolio_resources/1campaign_hitgas_expander.swf',
			title : 'Expandable rollover banner',
			width		: '728',
		  	height		: '300',
        },
        {
            href : 'portfolio_resources/1campaign_hitgas_small.swf',
			title : 'Animated banner',
			width		: '300',
		  	height		: '250',
        },
        {
            href : 'portfolio_resources/1campaign_hitgas_lateral.jpg',
			title : 'Web banner'
        },
        {
            href : 'portfolio_resources/1campaign_hitgas_post1.jpg',
			title : 'Facebook post'
        },
		{
            href : 'portfolio_resources/1campaign_hitgas_post2.jpg',
			title : 'Facebook post'
        },
		{
           href : 'portfolio_resources/1campaign_hitgas_post3.jpg',
			title : 'Facebook post'
        },
		{
            href : 'portfolio_resources/1campaign_hitgas_post4.jpg',
			title : 'Facebook post'
        },
		{
             href : 'portfolio_resources/1campaign_hitgas_face.jpg',
			title : 'Facebook cover'
        },
		{
            href : 'portfolio_resources/1campaign_hitgas_fmontaje.jpg',
			title : 'Facebook Fanpage'
        }	
    ],
    2: [    
        {
            href : 'portfolio_resources/1campaign_virgin_banner-rey.png',
            title : 'Customer service banner /  Virgin mobile website',
        },
        {
            href : 'portfolio_resources/1campaign_virgin-mail-recargas.png',
            title : 'Virgin plans banner /  Virgin mobile website',
        },
        {
           href : 'portfolio_resources/1campaign_virgin_email-oferta.png',
            title : 'Virgin mobile Mail'
        },
        {
            href : 'portfolio_resources/1campaign_virgin_mail-renovacion.png',
            title : 'Virgin mobile Mail'
        },       
    ],			
    3: [
		 {
            href : 'portfolio_resources/1campaign_colombiana_expander.swf',
			title : 'Expandable rollover banner',
			width		: '728',
		  	height		: '300',
        },
        {
           href : 'portfolio_resources/1campaign_colombiana_post.jpg',
			title : 'Facebook post'		   
        },
			{
           href : 'portfolio_resources/1campaign_colombiana_lateral1.jpg',
			title : 'Web banner'		   
        },	
		 {
           href : 'portfolio_resources/1campaign_colombiana_twitter.jpg',
			title : 'Twitter cover'	   
        },
		 {
          href : 'portfolio_resources/1campaign_colombiana_tmontaje.jpg',
			title : 'Twitter fanpage'	   
        }
		
		
    ],
    4: [	
		{
            href : 'portfolio_resources/1campaign_colores_small.swf',
			title : 'Animated banner',
			width		: '300',
		  	height		: '250',
        },
        {
             href : 'portfolio_resources/1campaign_colores_big.swf',
			title : 'Horizontal animated banner',
			width		: '728',
		  	height		: '90',
        },
        {
            href : 'portfolio_resources/1campaign_colores_post.jpg',
			title : 'Facebook post'
        },
        {
            href : 'portfolio_resources/1campaign_colores_twitter.jpg',
			title : 'Twitter cover'
        },
		{
             href : 'portfolio_resources/1campaign_colores_youtube.jpg',
			title : 'Youtube cover'
        },
		{
            href : 'portfolio_resources/1campaign_colores_ymontaje.jpg',
			title : 'Youtube channel'
        },       
    ],
	5: [
        {
            href : 'portfolio_resources/1campaign_tuttifrutti_expander.swf',
			title : 'Expandable rollover banner',
			width		: '728',
		  	height		: '300',
        },
        {
            href : 'portfolio_resources/1campaign_tuttifrutti_small.swf',
			title : 'Animated banner',
			width		: '300',
		  	height		: '250',		   
		   
        },
		 {
           href : 'portfolio_resources/1campaign_tuttifrutti_lateral2.jpg',
			title : 'Web banner',	   
        },
		 {
           href : 'portfolio_resources/1campaign_tuttifrutti_lateral1.jpg',
			title : 'Web banner',		   
        },
		{
            href : 'portfolio_resources/1campaign_tuttifrutti_post1.jpg',
			title : 'Facebook post',		   
        },
		{
            href : 'portfolio_resources/1campaign_tuttifrutti_post2.jpg',
			title : 'Facebook post',	   
		   
        },
		{
            href : 'portfolio_resources/1campaign_tuttifrutti_facebook.jpg',
			title : 'Facebook cover',		   
		   
        },
		{
            href : 'portfolio_resources/1campaign_tuttifrutti_fmontaje.jpg',
			title : 'Facebook fanpage',			   
        },
		
    ],
	6: [
        {
            href : 'portfolio_resources/1campaign_dpostobon_small.swf',
			title : 'Animated banner',
			width		: '300',
		  	height		: '250',
        },
        {
            href : 'portfolio_resources/1campaign_dpostobon_smallc.swf',
			title : 'Animated banner',
			width		: '300',
		  	height		: '250',		   
		   
        },
		 {
           href : 'portfolio_resources/1campaign_dpostobon_facebook.jpg',
			title : 'Facebook cover',		   
		   
        },
		 {
           href : 'portfolio_resources/1campaign_dpostobon_fmontaje.jpg',
			title : 'Facebook fanpage',		   
        },
		{
            href : 'portfolio_resources/1campaign_dpostobon_twitter.jpg',
			title : 'Twitter cover',		   
        },
		{
            href : 'portfolio_resources/1campaign_dpostobon_tmontaje.jpg',
			title : 'Twitter fanpage',		   
        }		
    ],
	7: [
        {
            href : 'portfolio_resources/1campaign_kalley_small.swf',
			title : 'Expandable rollover banner',
			width		: '300',
		  	height		: '250',
        },
        {
            href : 'portfolio_resources/1campaign_kalley_expander.swf',
			title : 'Animated banner',
			width		: '990',
		  	height		: '300',		   
		   
        },
		 {
           href : 'portfolio_resources/1campaign_kalley_lateral1.jpg',
			title : 'Web banner',		   
		   
        },
		 {
           href : 'portfolio_resources/1campaign_kalley_lateral2.jpg',
			title : 'Web banner',		   
        },
		{
            href : 'portfolio_resources/1campaign_kalley_expander2.swf',
			title : 'Advertisement mockup',
			width		: '1310',
		  	height		: '600',		   
        },			
    ],
     8: [
        {
            href : 'portfolio_resources/1campaign_madre01.png',
            title : "Mom's day facebook posts",
        },
        {
            href : 'portfolio_resources/1campaign_madre02.png',
            title : '',          
           
        },
         {
           href : 'portfolio_resources/1campaign_madre03.png',
            title : '',         
           
        },
         {
           href : 'portfolio_resources/1campaign_madre04.png',
            title : '',         
        },
        {
            href : 'portfolio_resources/1campaign_madre05.png',
            title : '',         
        },
        {
            href : 'portfolio_resources/1campaign_madre06.png',
            title : '',
        },    
        {
            href : 'portfolio_resources/1campaign_madre07.png',
            title : '',
          
        },              
    ]
};

$(".open_fancybox").click(function() {
    $.fancybox.open(images[ $(this).index() + 1], {
        padding : 0,
		maxWidth    : '93%',		
    });
    
    return false;
});
//////////////////
$(".fancybox")
    .attr('rel', 'gallery')
    .fancybox({
		nextClick   : true,
		maxWidth    : '93%',
	    openEffect  : 'none',
        closeEffect : 'none',
        nextEffect  : 'none',
        prevEffect  : 'none',
        padding     : 0,
        margin      : [20, 60, 60, 40], // Increase left/right margin		
	});		
});
