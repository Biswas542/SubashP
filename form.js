function validation() 
{
    let name=document.form.name.value;
    let number=document.form.number.value;
    let email=document.form.email.value;
    let password = document.form.password.value;
    let conform_password = document.form.conform_password.value;
    let radio = document.form.gender.value;
    if(name=="" || name.length<3) {
        alert("Invalid Name");
        return false;    
    }
    if(number=="" || number.length>10){
        alert("invalid Number");
        return false;
    }
    if(email=="" || email=="null"){
        alert("Invalid Email");
        return false;
    }
    if(password==""|| password.length<5){
        alert("invalid password");
        return false;
    }
   if(conform_password =="password"|| conform_password ==""){
    alert("incorrect password");
    return false;} }