function calculateNum(){
    var firstName = document.getElementById("inputFirstName").value
    var midName = document.getElementById("inputMidName").value

    var fLastName = document.getElementById("fLastName").value
    var fSurName = document.getElementById("fSurName").value

    var mLastName = document.getElementById("mLastName").value
    var mSurName = document.getElementById("mSurName").value

    var firstNameValue = calculateTextValue(firstName)
    // var midNameValue = calculateTextValue(midName)
    // var fLastNameValue = calculateTextValue(fLastName)
    // var fSurNameValue = calculateTextValue(fSurName)
    // var mLastNameValue = calculateTextValue(mLastName)
    // var mSurNameValue = calculateTextValue(mSurName)

    alert(firstNameValue)
}

function calculateTextValue(name){
    if(name != ""){
        var x = {A:1, J:1, S:1, B:2, K:2, T:2, C:3, L:3, U:3, D:4, 
            M:4, V:4, E:5, N:5, W:5, F:6, O:6, X:6, G:7, P:7, Y:7, H:8, 
            Q:8, Z:8, I:9, R:9}

        var nameScore = 0;
        
        for( var i = 0; i < name.length; i++ )
        {
            var curChar = name.charAt(i).toUpperCase();
            var curValue = x[curChar];
            nameScore = nameScore + curValue;
            // console.log("value" + curValue)
        }
        // console.log("score" + nameScore)

        var singleDigitScore = nameScore;
        while( singleDigitScore >= 10 )
        {
            var total = 0;
            var str = '' + singleDigitScore;
            
            for( var i = 0; i < str.length; i++ )
            {
                // console.log(str.charAt(i))
                total = total + parseInt( str.charAt(i) );
                // console.log(total)
            }
            singleDigitScore = total;
        }

        // console.log(singleDigitScore);

        return singleDigitScore
    } else {
        console.log("Please enter a name")
    }
}