$('.header').append('<a href="index.html" class="title">Greenivism</a>');
$('.header').append('<a href="spreadtheword.html" class="header-link">Spread the word</a>');
$('.header').append('<a href="getinvolved.html" class="header-link">Get Involved</a>');
$('.header').append('<a href="greenivistmanifesto.html" class="header-link">Greenivist Manifesto</a>');
$('.header').append('<a href="donate.html" class="header-link">Donate</a>');

$('.footer').append('<a href="#" class="footerlink">2013 Greenivism Corp.</a>');

$('.donatebox').append('<p class="rightboxheading">Help us</p>')
$('.donatebox').append('<a href="donate.html" class="greenbutton donatebutton">Donate</a>')

$('.socialbox').append('<p class="rightboxheading">Socialize</p>');
$('.socialbox').append('<a href="https://www.facebook.com/greenivism" target="_blank"><img src="https://s3.amazonaws.com/greenivism/img/facebook.png"></a>');
$('.socialbox').append('<a href="https://twitter.com/greenivism" target="_blank"><img src="https://s3.amazonaws.com/greenivism/img/twitter.png"></a>');
$('.socialbox').append('<a href="http://greenivism.tumblr.com/" target="_blank"><img src="https://s3.amazonaws.com/greenivism/img/tumblr.png"></a>');
$('.socialbox').append('<a href="http://www.flickr.com/photos/greenivism/" target="_blank"><img src="https://s3.amazonaws.com/greenivism/img/flickr.png"></a>');
$('.socialbox').append('<div id="mc_embed_signup">');
$('.socialbox').append('<form action="http://greenivism.us6.list-manage2.com/subscribe/post?u=5b3ba72b39763f9abdd70d31d&amp;id=5b520216ce" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>');
$('.socialbox').append('<div class="mc-field-group">');
$('.socialbox').append('<input style="padding:8px 10px;width:236px;margin:0 0 10px 0;" type="email" value="Enter your E-mail address" name="EMAIL" class="required email" id="mce-EMAIL" onfocus="clearDefault(this)" onblur="replaceInputMsg(this)">');
$('.socialbox').append('</div>');
$('.socialbox').append('<div id="mce-responses" class="clear">');
$('.socialbox').append('<div class="response" id="mce-error-response" style="display:none"></div>');
$('.socialbox').append('<div class="response" id="mce-success-response" style="display:none"></div>');
$('.socialbox').append('</div>	<div class="clear"><input class="greenbutton joinemail" type="submit" value="Join the email list" name="subscribe" id="mc-embedded-subscribe" class="button"></div></form></div>');

$('body').append('<script type="text/javascript">function clearDefault(el) {if (el.defaultValue==el.value) el.value = "";}function replaceInputMsg(el) {if (el.value == "") el.value = "Enter your E-mail address";}</script>')