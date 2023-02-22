// Numerology
function CalculateNum(){
    var alphabet = {A:1, J:1, S:1, B:2, K:2, T:2, C:3, L:3, U:3, D:4, 
        M:4, V:4, E:5, N:5, W:5, F:6, O:6, X:6, G:7, P:7, Y:7, H:8, 
        Q:8, Z:8, I:9, R:9}

    var firstName = document.getElementById("inputFirstName").value
    var midName = document.getElementById("inputMidName").value

    var fLastName = document.getElementById("fLastName").value
    var fSurName = document.getElementById("fSurName").value

    var mLastName = document.getElementById("mLastName").value
    var mSurName = document.getElementById("mSurName").value

    var day = document.getElementById("day").value
    var month = document.getElementById("month").value
    var year = document.getElementById("year").value

    var yIsVocal = false

    var inclution = Inclution(firstName, midName, fLastName, fSurName, mLastName, mSurName, alphabet)
    var induction = Induction(inclution)
    var bridges = Bridges(inclution)
    var evolution = Evolution(inclution)
    var unconscious = Unconscious(inclution, alphabet, firstName, midName, fLastName, fSurName, mLastName, mSurName)

    // var firstNameValue = CalculateTextValue(firstName, alphabet)
    // var midNameValue = CalculateTextValue(midName, alphabet)
    // var fLastNameValue = CalculateTextValue(fLastName, alphabet)
    // var fSurNameValue = CalculateTextValue(fSurName, alphabet)
    // var mLastNameValue = CalculateTextValue(mLastName, alphabet)
    // var mSurNameValue = CalculateTextValue(mSurName, alphabet)

    // var dateValue = CalculateDateValue(day, month, year)

    // console.log("firstNameValue " + firstNameValue)
    // console.log("midNameValue " + midNameValue)
    // console.log("fLastNameValue " + fLastNameValue)
    // console.log("fSurNameValue " + fSurNameValue)
    // console.log("mLastNameValue " + mLastNameValue)
    // console.log("mSurNameValue " + mSurNameValue)

    // console.log("dateValue " + dateValue)
}

function Inclution(firstName, midName, fLastName, fSurName, mLastName, mSurName, alphabet) {
    var house1 = 0
    var house2 = 0
    var house3 = 0
    var house4 = 0
    var house5 = 0
    var house6 = 0
    var house7 = 0
    var house8 = 0
    var house9 = 0

    //firstName
    for( var i = 0; i < firstName.length; i++ )
    {
        var curChar = firstName.charAt(i).toUpperCase()
        var curValue = alphabet[curChar]
        
        if(curValue == 1) {
            house1++
        } else if (curValue == 2) {
            house2++
        } else if (curValue == 3) {
            house3++
        } else if (curValue == 4) {
            house4++
        } else if (curValue == 5) {
            house5++
        } else if (curValue == 6) {
            house6++
        } else if (curValue == 7) {
            house7++
        } else if (curValue == 8) {
            house8++
        } else if (curValue == 9) {
            house9++
        }
    }

    //midName
    for( var i = 0; i < midName.length; i++ )
    {
        var curChar = firstName.charAt(i).toUpperCase()
        var curValue = alphabet[curChar]
        
        if(curValue == 1) {
            house1++
        } else if (curValue == 2) {
            house2++
        } else if (curValue == 3) {
            house3++
        } else if (curValue == 4) {
            house4++
        } else if (curValue == 5) {
            house5++
        } else if (curValue == 6) {
            house6++
        } else if (curValue == 7) {
            house7++
        } else if (curValue == 8) {
            house8++
        } else if (curValue == 9) {
            house9++
        }
    }

    //fLastName
    for( var i = 0; i < fLastName.length; i++ )
    {
        var curChar = firstName.charAt(i).toUpperCase()
        var curValue = alphabet[curChar]
        
        if(curValue == 1) {
            house1++
        } else if (curValue == 2) {
            house2++
        } else if (curValue == 3) {
            house3++
        } else if (curValue == 4) {
            house4++
        } else if (curValue == 5) {
            house5++
        } else if (curValue == 6) {
            house6++
        } else if (curValue == 7) {
            house7++
        } else if (curValue == 8) {
            house8++
        } else if (curValue == 9) {
            house9++
        }
    }

    //fSurName
    for( var i = 0; i < fSurName.length; i++ )
    {
        var curChar = firstName.charAt(i).toUpperCase()
        var curValue = alphabet[curChar]
        
        if(curValue == 1) {
            house1++
        } else if (curValue == 2) {
            house2++
        } else if (curValue == 3) {
            house3++
        } else if (curValue == 4) {
            house4++
        } else if (curValue == 5) {
            house5++
        } else if (curValue == 6) {
            house6++
        } else if (curValue == 7) {
            house7++
        } else if (curValue == 8) {
            house8++
        } else if (curValue == 9) {
            house9++
        }
    }

    //mLastName
    for( var i = 0; i < mLastName.length; i++ )
    {
        var curChar = firstName.charAt(i).toUpperCase()
        var curValue = alphabet[curChar]
        
        if(curValue == 1) {
            house1++
        } else if (curValue == 2) {
            house2++
        } else if (curValue == 3) {
            house3++
        } else if (curValue == 4) {
            house4++
        } else if (curValue == 5) {
            house5++
        } else if (curValue == 6) {
            house6++
        } else if (curValue == 7) {
            house7++
        } else if (curValue == 8) {
            house8++
        } else if (curValue == 9) {
            house9++
        }
    }

    //mSurName
    for( var i = 0; i < mSurName.length; i++ )
    {
        var curChar = firstName.charAt(i).toUpperCase()
        var curValue = alphabet[curChar]
        
        if(curValue == 1) {
            house1++
        } else if (curValue == 2) {
            house2++
        } else if (curValue == 3) {
            house3++
        } else if (curValue == 4) {
            house4++
        } else if (curValue == 5) {
            house5++
        } else if (curValue == 6) {
            house6++
        } else if (curValue == 7) {
            house7++
        } else if (curValue == 8) {
            house8++
        } else if (curValue == 9) {
            house9++
        }
    }

    var inclution = [house1, house2, house3, house4, house5, house6, house7, house8, house9]
    console.log(inclution)

    return inclution
}

// Induction
function Induction(inclution) {
    var house1 = CalculateInduction(inclution, 0)
    var house2 = CalculateInduction(inclution, 1)
    var house3 = CalculateInduction(inclution, 2)
    var house4 = CalculateInduction(inclution, 3)
    var house5 = CalculateInduction(inclution, 4)
    var house6 = CalculateInduction(inclution, 5)
    var house7 = CalculateInduction(inclution, 6)
    var house8 = CalculateInduction(inclution, 7)
    var house9 = CalculateInduction(inclution, 8)

    var induction = [house1, house2, house3, house4, house5, house6, house7, house8, house9]
    // console.log(induction)
    
    return induction
}
function CalculateInduction(inclution, index) {
    var house = []

    var val1 = 0
    var val2 = 0
    var val3 = 0

    val1 = inclution[index]
    if(val1 > 0){
        val2 = inclution[inclution[index]-1]

        if(val2 > 0) {
            val3 = inclution[inclution[inclution[index]-1]-1]
        }
    }
    house.push(val1, val2, val3)

    return house
}

// Bridges
function Bridges(inclution) {
    var house1 = CalculateBridges(inclution, 0)
    var house2 = CalculateBridges(inclution, 1)
    var house3 = CalculateBridges(inclution, 2)
    var house4 = CalculateBridges(inclution, 3)
    var house5 = CalculateBridges(inclution, 4)
    var house6 = CalculateBridges(inclution, 5)
    var house7 = CalculateBridges(inclution, 6)
    var house8 = CalculateBridges(inclution, 7)
    var house9 = CalculateBridges(inclution, 8)

    var bridges = [house1, house2, house3, house4, house5, house6, house7, house8, house9]
    // console.log(bridges)

    return bridges
}
function CalculateBridges(inclution, index) {
    var bridgeHouse = inclution[index] - (index + 1)

    if(bridgeHouse < 0){
        bridgeHouse = (bridgeHouse * -1)
    }

    return bridgeHouse
}

// Evolution
function Evolution(inclution) {
    var house1 = CalculateEvolution(inclution, 0)
    var house2 = CalculateEvolution(inclution, 1)
    var house3 = CalculateEvolution(inclution, 2)
    var house4 = CalculateEvolution(inclution, 3)
    var house5 = CalculateEvolution(inclution, 4)
    var house6 = CalculateEvolution(inclution, 5)
    var house7 = CalculateEvolution(inclution, 6)
    var house8 = CalculateEvolution(inclution, 7)
    var house9 = CalculateEvolution(inclution, 8)

    var evolution = [house1, house2, house3, house4, house5, house6, house7, house8, house9]
    console.log(evolution)

    return evolution
}
function CalculateEvolution(inclution, index) {
    var count = 0

    inclution.forEach(element => {
        if(element == (index + 1)) {
            count++
        }
    });
    
    var evoHouse = inclution[index] + count

    return evoHouse
}

// Unconscius
function Unconscious(inclution, alphabet, firstName, midName, fLastName, fSurName, mLastName, mSurName) {
    var house1 = 0
}

// SumTotal
function CalculateTextValue(name, alphabet){
    if(name != ""){
        var nameScore = 0
        
        for( var i = 0; i < name.length; i++ )
        {
            var curChar = name.charAt(i).toUpperCase()
            var curValue = alphabet[curChar]
            nameScore = nameScore + curValue
        }

        var singleDigitValue = nameScore
        var singleDigitNameScore = singleDigit(singleDigitValue)

        return singleDigitNameScore
    } else {
        console.log("Please enter a name")
    }
}

// Date
function CalculateDateValue(day, month, year){
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

// Single Digit
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