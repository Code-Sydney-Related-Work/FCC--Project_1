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
            //console.log("The length of the Array is " + AlphaNumArray.length);
            if(AlphaNumArray.length % 2 == 0) // Code for checking potential palindrome - Array length is an even number
            {
                limit = AlphaNumArray.length/2;
                for(let j = 0; j < limit; j++)
                {
                    //console.log(AlphaNumArray[j] + "," + AlphaNumArray[2*limit - 1 - j]);
                    if(AlphaNumArray[j] === AlphaNumArray[2*limit - 1 - j]){palinFlag = true; }
                    else{palinFlag = false; break;}
                }
            }
                else if(AlphaNumArray.length % 2 != 0) // Code for checking potential palindrome - Array length is an odd number
            {
                limit = Math.round(AlphaNumArray.length/2);
                limit = (limit) - 1 ;
                //console.log(limit);
                for(let j = 0; j < limit; j++)
                {   
                    //console.log(AlphaNumArray[j] + "," + AlphaNumArray[2*limit - j]);
                    if(AlphaNumArray[j] === AlphaNumArray[2*limit - j]){palinFlag = true; ;}//console.log(palinFlag)
                    else{palinFlag = false; break;}
                }
            } return palinFlag;
        } 
        module.exports = palindromecheck;           