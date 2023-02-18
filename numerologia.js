function calculateNum(){
    var firstName = document.getElementById("inputFirstName").value
    var midName = document.getElementById("inputMidName").value

    var fLastName = document.getElementById("fLastName").value
    var fSurName = document.getElementById("fSurName").value

    var mLastName = document.getElementById("mLastName").value
    var mSurName = document.getElementById("mSurName").value

    var day = document.getElementById("day").value
    var month = document.getElementById("month").value
    var year = document.getElementById("year").value

    var firstNameValue = calculateTextValue(firstName)
    // var midNameValue = calculateTextValue(midName)
    // var fLastNameValue = calculateTextValue(fLastName)
    // var fSurNameValue = calculateTextValue(fSurName)
    // var mLastNameValue = calculateTextValue(mLastName)
    // var mSurNameValue = calculateTextValue(mSurName)

    var dateValue = calculateDateValue(day, month, year)

    console.log("firstNameValue " + firstNameValue)
    console.log("dateValue " + dateValue)
}

function calculateTextValue(name){
    if(name != ""){
        var x = {A:1, J:1, S:1, B:2, K:2, T:2, C:3, L:3, U:3, D:4, 
            M:4, V:4, E:5, N:5, W:5, F:6, O:6, X:6, G:7, P:7, Y:7, H:8, 
            Q:8, Z:8, I:9, R:9}

        var nameScore = 0
        
        for( var i = 0; i < name.length; i++ )
        {
            var curChar = name.charAt(i).toUpperCase()
            var curValue = x[curChar]
            nameScore = nameScore + curValue
        }

        var singleDigitValue = nameScore
        var singleDigitNameScore = singleDigit(singleDigitValue)

        return singleDigitNameScore
    } else {
        console.log("Please enter a name")
    }
}

function calculateDateValue(day, month, year){
    var dayScore = 0
    var monthScore = 0
    var yearScore = 0
    
    if(day >= 10){
        for( var i = 0; i < day.length; i++ )
        {
            var curValue = day.toString().charAt(i)
            dayScore = dayScore + parseInt(curValue)
        }
    } else {
        dayScore = parseInt(day)
    }

    if(month >= 10){
        for( var i = 0; i < month.length; i++ )
        {
            var curValue = month.toString().charAt(i)
            monthScore = monthScore + parseInt(curValue)
        }
    } else {
        monthScore = parseInt(month)
    }

    for( var i = 0; i < year.length; i++ )
    {
        var curValue = year.toString().charAt(i)
        yearScore = yearScore + parseInt(curValue)
    }

    var singleDigitValue = dayScore + monthScore + yearScore

    var singleDigitDateScore = singleDigit(singleDigitValue)

    return singleDigitDateScore
}

function singleDigit(singleDigitValue) {
    while( singleDigitValue >= 10 )
    {
        var total = 0
        var str = '' + singleDigitValue
        
        for( var i = 0; i < str.length; i++ )
        {
            total = total + parseInt(str.charAt(i))
        }
        singleDigitValue = total
    }

    return singleDigitValue
}