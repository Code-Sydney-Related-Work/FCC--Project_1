function palindromecheck(str)
        {
            let ourStr = arguments[0].toLowerCase();  //Converting all Upper case letters to small
            console.log("The string being tested is " + ourStr);
            let ourRegex = /[A-Za-z0-9]/ig;   //[^A-Za-z0-9] or \W regex for matching non alphanumeric characters
            let AlphaNumArray = ourStr.match(ourRegex); // An array of all non-alphanumeric characters present
            //console.log("The NonAlphaNumArray is " + NonAlphaNumArray);
            console.log(AlphaNumArray);
           
            let palinFlag = false;
            let limit;
            XXXXXXXXXXXXXXXXXX  PORTION OF CODE DELETED TO PROTECT INTELLECTUAL PROPERTY  XXXXXXXXXXXXXXXX
            } return palinFlag;
        } 
        module.exports = palindromecheck;           
