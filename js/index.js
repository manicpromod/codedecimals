

$(document).ready(function () {

//header changes
$('.navigation').append('<nav class="navbar navbar-inverse navbar-fixed-top"><div class="container">		<div class="navbar-header">			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">				<span class="sr-only">Toggle navigation</span>				<span class="icon-bar"></span>				<span class="icon-bar"></span>				<span class="icon-bar"></span>			</button>			<a class="navbar-brand">CodeDecimals</a>		</div>		<div id="navbar" class="collapse navbar-collapse">			<ul class="nav navbar-nav">				<li id="indexm"><a href="/index.html">Home</a></li>				<li id="javam"><a href="/html/CoreJava.html">Core Java</a></li>			<li id="J2EEm"><a href="/html/J2EE.html">J2EE</a></li>			<li id="bigdatam"><a href="/html/BigData.html">Big Data</a></li>						<li id="dsam"><a href="/html/DSA.html">DSA</a></li>				<li id="programsm"><a href="/html/Programs.html">Programs</a></li>				<li id="interviewm"><a href="/html/Interview.html">Interview</a></li>			<li id="testm"><a href="/html/Test.html">Test</a></li>		<li id="contactm"><a href="/html/Contact.php">Contact</a></li>	</ul>	</div> </div> </nav>');

var titleval=$("head title").text();
console.log(titleval);
if(titleval == 'Programs') {

	$('#programsm').addClass("active");
	$(this).css('color', 'red');

} else if(titleval == 'Interview') {

	$('#interviewm').addClass("active");

} else if(titleval == 'Contact') {

	$('#contactm').addClass("active");

} else if(titleval == 'Java') {

	$('#javam').addClass("active");

} else if(titleval == 'DSA') {

	$('#dsam').addClass("active");

} else if(titleval == 'BigData') {

	$('#bigdatam').addClass("active");

}else if(titleval == 'J2EE') {

	$('#J2EEm').addClass("active");
}else if(titleval == 'CodeDecimals') {

	$('#indexm').addClass("active");
}else if(titleval == 'Test') {

	$('#testm').addClass("active");
}

//Date year append in the footer
var year = new Date();
$('#year').append(year.getFullYear());

$(".list-group .list-group-item").click(function(e) {
   $(".list-group .list-group-item").removeClass("active");
   $(e.target).addClass("active");
});

//footer changes
$('.footertag').append('<footer class="footer"> <div class="container"> <div class="foot_text" style="text-align: center"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-google-plus"></i></a><a href="#"><i class="fa fa-skype"></i></a><span id ="copyright"> <span id="year"></span>&nbsp;Copyright CodeDecimals</span></div></div></footer>')
});
