function codeLandUsernameValidation(username){
    let nameRegex = /^[a-zA-Z\-_]+$/;
    
    
    if(username.match(nameRegex) != null){
        if (username.length < 4) 
        {
        console.log(false);
        }
        if(username.length > 25){
            console.log(false)
        }
    }else{
        console.log(true);
        }
}

codeLandUsernameValidation("u__hello_world123");
codeLandUsernameValidation("aa_");

module.exports = codeLandUsernameValidation;
