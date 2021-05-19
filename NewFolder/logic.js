function generatePassword() {
    const length = 10,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (const i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

javascript:(
    function(){
        prompt('Here is your shiny new password:', 
            Math.random().toString(36).slice(2) + 
            Math.random().toString(36).slice(2)
        );
    }
)();