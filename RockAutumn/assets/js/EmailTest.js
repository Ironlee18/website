function validation(){
    var form = document.getElementById(ContactFRM)
    var emailField = document.getElementById(EmailSUB).value
    var text = document.getElementById(TXTFRM)
    var reg = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(emailField.match(reg)){
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML="Your email address is valid"
		text.style.color ="#0f0"
    }else{
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML="Your email address is invalid"
        text.style.color ="#f00"
    }
    if(emailField==""){
        text.innerHTML=""
        form.classList.remove("valid")
        form.classList.remove("invalid")
    }
}