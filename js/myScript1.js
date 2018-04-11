function validateLogin(){
		var fname= document.getElementById("fname1").value;
		var lname= document.getElementById("lname1").value;
		var eid= document.getElementById("email1").value;
		var pass= document.getElementById("pass1").value;
		if(fname==null||fname==""){
			document.getElementById("fn1").innerHTML="First name field cannot be blank.";
		}
		if(lname==null||lname==""){
			document.getElementById("ln1").innerHTML="Last name field cannot be blank.";
		}
		if( pass.length < 6 || pass ==null || pass==""){
			document.getElementById("pw1").innerHTML="must be of 6 characters.";
		}
		if(eid==null||eid==""){
			document.getElementById("e1").innerHTML="Email Id cannot be blank.";
		}
		var atposition=eid.indexOf("@");  
        var dotposition=eid.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=eid.length){
		document.getElementById("e1").innerHTML="input emailid in proper format.";
		return false;
		}
		return true;
	}


function validateRegistration(){
		var fname= document.getElementById("fname2").value;
		var lname= document.getElementById("lname2").value;
		var eid= document.getElementById("email2").value;
		var pass= document.getElementById("pass2").value;
		if(fname==null||fname==""){
			document.getElementById("fn2").innerHTML="First name field cannot be blank.";
		}
		if(lname==null||lname==""){
			document.getElementById("ln2").innerHTML="Last name field cannot be blank.";
		}
		if( pass.length < 6 || pass ==null || pass==""){
			document.getElementById("pw2").innerHTML="must be of 6 characters.";
		}
		if(eid==null||eid==""){
			document.getElementById("e2").innerHTML="Email Id cannot be blank.";
		}
		var atposition=eid.indexOf("@");  
        var dotposition=eid.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=eid.length){
		document.getElementById("e2").innerHTML="input emailid in proper format.";
		return false;
		}
		return true;
	}

	function validateInquiry(){
		var fname= document.getElementById("fname3").value;
		var lname= document.getElementById("lname3").value;
		var eid= document.getElementById("email3").value;
		var pass= document.getElementById("pass3").value;
		if(fname==null||fname==""){
			document.getElementById("fn3").innerHTML="First name field cannot be blank.";
		}
		if(lname==null||lname==""){
			document.getElementById("ln3").innerHTML="Last name field cannot be blank.";
		}
		if( pass.length < 6 || pass ==null || pass==""){
			document.getElementById("pw3").innerHTML="must be of 6 characters.";
		}
		if(eid==null||eid==""){
			document.getElementById("e3").innerHTML="Email Id cannot be blank.";
		}
		var atposition=eid.indexOf("@");  
        var dotposition=eid.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=eid.length){
		document.getElementById("e3").innerHTML="input emailid in proper format.";
		return false;
		}
		return true;
	}

	function validateFeedback(){
		var eid= document.getElementById("email4").value;
		var fb= document.getElementById("feedback").value;
		
		if(fb==null||fb==""){
			document.getElementById("comment").innerHTML="Feedback Section cannot be blank.";
		}

		if(eid==null||eid==""){
			document.getElementById("e4").innerHTML="Email Id cannot be blank.";
		}
		var atposition=eid.indexOf("@");  
        var dotposition=eid.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=eid.length){
		document.getElementById("e4").innerHTML="input emailid in proper format.";
		return false;
		}
		return true;
	}