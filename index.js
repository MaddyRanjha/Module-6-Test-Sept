
function validate(){
    
    let firstname=document.getElementById('first-name').value
    let lastname=document.getElementById('last-name').value
    let emailid=document.getElementById('email').value
    let pass=document.getElementById('password').value
    let confPass=document.getElementById('confirm-password').value
    let tnc=document.getElementById('t-and-c').checked
    // console.log(firstname);
    // console.log(lastname);
    // console.log(emailid);
    // console.log(cityname);
    // console.log(statename);
    // console.log(zipcode);

    

    if(firstname.length>=3){
        document.getElementById('first-name-valid').style.display='block'
        document.getElementById('first-name-invalid').style.display='none'
    }
    else{
        error=true
        document.getElementById('first-name-invalid').style.display='block'
        document.getElementById('first-name-valid').style.display='none'
    }

    if(lastname.length>=3){
        document.getElementById('last-name-valid').style.display='block'
        document.getElementById('last-name-invalid').style.display='none'
    }
    else{
        error=true
        document.getElementById('last-name-invalid').style.display='block'
        document.getElementById('last-name-valid').style.display='none'
    }

    if (((emailid.includes('@') && emailid.includes('.')) && emailid.indexOf('@')<emailid.lastIndexOf('.')) && (emailid.substr(emailid.indexOf('.')).length>2 && emailid.substr(0,emailid.indexOf('@')).length>0))
    {
        document.getElementById('email-valid').style.display='block'
        document.getElementById('email-invalid').style.display='none'
    }
    else{
        error=true
        document.getElementById('email-invalid').style.display='block'
        document.getElementById('email-valid').style.display='none'

    }

    if((pass.length>=8)&&((pass.includes('@')||pass.includes('#')||pass.includes('$')) && (pass.includes('0')||pass.includes('1')||pass.includes('2')||pass.includes('3')||pass.includes('4'))))
    {
        document.getElementById('password-valid').style.display='block'
        document.getElementById('password-invalid').style.display='none'
    }
    else{
        error=true
        document.getElementById('password-invalid').style.display='block'
        document.getElementById('password-valid').style.display='none'

    }

    if((pass===confPass)&&(pass.length>=8)){
        document.getElementById('confirm-password-valid').style.display='block'
        document.getElementById('confirm-password-invalid').style.display='none'
    }
    else{
        error=true
        document.getElementById('confirm-password-invalid').style.display='block'
        document.getElementById('confirm-password-valid').style.display='none'
    }
    
    if(tnc){
        document.getElementById('tNC-invalid').style.display='none'

    }
    else{
        document.getElementById('tNC-invalid').style.display='block'

    }

}

