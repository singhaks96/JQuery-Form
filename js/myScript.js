function openLoginForm()
{
	 if ($("#login_form").is(":hidden")){
              $("#login_form").slideDown("slow");
	}
	else{
		$("#login_form").slideUp("slow");
	}
}

function openRegisterForm()
{
	 if ($("#register_form").is(":hidden")){
              $("#register_form").slideDown("slow");
	}
	else{
		$("#register_form").slideUp("slow");
	}
}

function openInquiryForm()
{
	 if ($("#inquiry_form").is(":hidden")){
              $("#inquiry_form").slideDown("slow");
	}
	else{
		$("#inquiry_form").slideUp("slow");
	}
}

function openFeedbackForm()
{
	 if ($("#feedback_form").is(":hidden")){
              $("#feedback_form").slideDown("slow");
	}
	else{
		$("#feedback_form").slideUp("slow");
	}
}

$(document).ready(function(){
$(".login,.register,.inquiry,.feedback").click( function() { 
          $(this).css("color", "#d1230c");
          $(this).css("background-color", "#fff");
    });
});

