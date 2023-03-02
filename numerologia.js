// Numerology
function CalculateNum(){
    const alphabet = {A:1, J:1, S:1, B:2, K:2, T:2, C:3, L:3, U:3, D:4, 
        M:4, V:4, E:5, N:5, W:5, F:6, O:6, X:6, G:7, P:7, Y:7, H:8, 
        Q:8, Z:8, I:9, R:9}

    const consonants = {J:1, S:1, B:2, K:2, T:2, C:3, L:3, D:4, 
        M:4, V:4, N:5, W:5, F:6, X:6, G:7, P:7, H:8, 
        Q:8, Z:8, R:9}

    const vowelsY = {A:1, U:3, E:5, O:6, Y:7, I:9}
    const vowelsNoY = {A:1, U:3, E:5, O:6, I:9}
    let vowels = {}

    var firstName = document.getElementById("inputFirstName").value
    var midName = document.getElementById("inputMidName").value
    var fLastName = document.getElementById("fLastName").value
    var fSurName = document.getElementById("fSurName").value
    var mLastName = document.getElementById("mLastName").value
    var mSurName = document.getElementById("mSurName").value
    var activeName = document.getElementById("activeName").value

    var yIsVocal = document.getElementById("cboxY")

    var day = document.getElementById("day").value
    var month = document.getElementById("month").value
    var year = document.getElementById("year").value

    var fullName = firstName + midName + fLastName + fSurName + mLastName + mSurName
    // var activeName = firstName + fLastName + mLastName

    if(yIsVocal.checked) {
        vowels = vowelsY
    } else {
        vowels = vowelsNoY
    }

    let lifeTrajectory = LifeTrajectory(day, month, year)
    let homeTrail = LifeTrajectory(day, month, year)
    let wayOfLife = WayOfLife(day, month, year)
    let deepSoulLonging = DeepSoulLonging(day, month, year)

    let soulNumber = SoulNumber(fullName, vowels)
    let destinationNumber = DestinationNumber(fullName, alphabet)
    let personalityNumber = PersonalityNumber(fullName, consonants)

    // console.log("lifeTrajectory " + lifeTrajectory)
    // console.log("wayOfLife " + wayOfLife)
    // console.log("deepSoulLonging " + deepSoulLonging)

    // console.log("soulNumber " + soulNumber)
    // console.log("destinationNumber " + destinationNumber)
    // console.log("personalityNumber " + personalityNumber)

    let inclution = Inclution(fullName, alphabet)
    let induction = Induction(inclution)
    let bridges = Bridges(inclution)
    let evolution = Evolution(inclution)
    let unconscious = Unconscious(inclution, alphabet, fullName)
    let induction2 = Induction(unconscious)

    // console.log(inclution)
    // console.log(induction)
    // console.log(bridges)
    // console.log(evolution)
    // console.log(unconscious)
    // console.log(induction2)

    let activeSoulNumber = SoulNumber(activeName, vowels)
    let activeNameNumber = DestinationNumber(activeName, alphabet)
    let activePersonalityNumber = PersonalityNumber(activeName, consonants)

    let activeInclution = Inclution(activeName, alphabet)
    let activeInduction = Induction(activeInclution)

    // console.log(activeSoulNumber)
    // console.log(activeNameNumber)
    // console.log(activePersonalityNumber)
    
    // console.log(activeInclution)
    // console.log(activeInduction)

    let cycleYear = 36 - lifeTrajectory
    let pinacles = Pinacles(day, month, year)
    let pitfalls = Pitfalls(day, month, year)
    // console.log(cycleYear)
    // console.log(pinacles)
    // console.log(pitfalls)

    let hpp = GetHPP(inclution)
    let ncs = GetNCS(inclution)
    let dm = GetDM(hpp, ncs)
    let eje = GetEJE(inclution)
    let mf = GetMF(fullName, hpp)
    let ms = GetMS(fullName, ncs)
    let mfe = GetMFE(mf, ms)
    let cosmicMission = CosmicMission(wayOfLife, destinationNumber)
    // console.log(hpp)
    // console.log(ncs)
    // console.log(dm)
    // console.log(eje)
    // console.log(mf)
    // console.log(ms)
    // console.log(mfe)
    // console.log(cosmicMission)
}

// LifeTrajectory
function LifeTrajectory(day, month, year){
    var dateValues = CalculateDateValues(day, month, year)
    var dayScore = dateValues[0]
    var monthScore = dateValues[1]
    var yearScore = dateValues[2]

    var noReduced = dayScore + monthScore + yearScore
    var reduced = SingleDigit(noReduced)
    var lifeTrajectory = [noReduced, reduced]

    return lifeTrajectory
}
// WayOfLife
function WayOfLife(day, month, year){
    var noReduced = parseInt(day) + parseInt(month) + parseInt(year)
    var reduced = SingleDigit(noReduced)
    var wayOfLife = [noReduced, reduced]

    return wayOfLife
}
// DeepSoulLonging
function DeepSoulLonging(day, month, year){
    var dateValues = CalculateDateValues(day, month, year)
    var dayScore = dateValues[0]
    var monthScore = dateValues[1]
    var yearScore = dateValues[2]

    var noReduced = (dayScore + monthScore) + (monthScore + yearScore)
    var reduced = SingleDigit(noReduced)
    var deepSoulLonging = [noReduced, reduced]

    return deepSoulLonging
}

// SoulNumber
function SoulNumber(fullName, vowels) {
    var nameScore = 0
    
    for( var i = 0; i < fullName.length; i++ )
    {
        var curChar = fullName.charAt(i).toUpperCase()
        var curValue = vowels[curChar]

        if(curValue != undefined) {
            nameScore = nameScore + curValue
        }
    }

    var noReduced = nameScore
    var reduced = SingleDigit(noReduced)
    var soulNumber = [noReduced, reduced]

    return soulNumber
}
// DestinationNumber
function DestinationNumber(fullName, alphabet){
    var nameScore = 0
    
    for( var i = 0; i < fullName.length; i++ )
    {
        var curChar = fullName.charAt(i).toUpperCase()
        var curValue = alphabet[curChar]
        if(curValue != undefined) {
            nameScore = nameScore + curValue
        }
    }

    var noReduced = nameScore
    var reduced = SingleDigit(noReduced)
    var destinationNumber = [noReduced, reduced]

    return destinationNumber
}
// PersonalityNumber
function PersonalityNumber(fullName, consonants) {
    var nameScore = 0
    
    for( var i = 0; i < fullName.length; i++ )
    {
        var curChar = fullName.charAt(i).toUpperCase()
        var curValue = consonants[curChar]

        if(curValue != undefined) {
            nameScore = nameScore + curValue
        }
    }
    var noReduced = nameScore
    var reduced = SingleDigit(noReduced)
    var personalityNumber = [noReduced, reduced]

    return personalityNumber
}

// Inclution
function Inclution(fullName, alphabet) {
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
    for( var i = 0; i < fullName.length; i++ )
    {
        var curChar = fullName.charAt(i).toUpperCase()
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

    return induction
}
function CalculateInduction(inclution, index) {
    var house = []

    var val1 = 0
    var val2 = 0
    var val3 = 0

    if(inclution[index] > 0){
        val1 = inclution[inclution[index] - 1]

        if(val1 > 0) {
            val2 = inclution[val1 - 1]
    
            if(val2 > 0) {
                val3 = inclution[val2 - 1]
            }
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
function Unconscious(inclution, alphabet, fullName) {
    var house1 = CalculateUnconscious(inclution, alphabet, fullName, 0)
    var house2 = CalculateUnconscious(inclution, alphabet, fullName, 1)
    var house3 = CalculateUnconscious(inclution, alphabet, fullName, 2)
    var house4 = CalculateUnconscious(inclution, alphabet, fullName, 3)
    var house5 = CalculateUnconscious(inclution, alphabet, fullName, 4)
    var house6 = CalculateUnconscious(inclution, alphabet, fullName, 5)
    var house7 = CalculateUnconscious(inclution, alphabet, fullName, 6)
    var house8 = CalculateUnconscious(inclution, alphabet, fullName, 7)
    var house9 = CalculateUnconscious(inclution, alphabet, fullName, 8)

    var unconscious = [house1, house2, house3, house4, house5, house6, house7, house8, house9]

    return unconscious
}
function CalculateUnconscious(inclution, alphabet, fullName, index) {
    var curChar = ""
    var curValue = 0

    if(inclution[index] > 0){
        curChar = fullName.charAt(inclution[index] - 1).toUpperCase()
        curValue = alphabet[curChar]
    } else if(inclution[index] <= 0){
        curChar = fullName.charAt(index).toUpperCase()

        if(curChar == undefined || curChar == "") {
            curValue = 0
        } else {
            curValue = alphabet[curChar]
        }
    }

    return curValue
}

// Pinnacles and Pitfalls
function Pinacles(day, month, year) {
    var dateValues = CalculateDateValues(day, month, year)
    var dayScore = SingleDigit(dateValues[0])
    var monthScore = SingleDigit(dateValues[1])
    var yearScore = SingleDigit(dateValues[2])

    var cycle1 = SingleDigit(dayScore + monthScore)
    var cycle2 = SingleDigit(dayScore + yearScore)
    var cycle3 = SingleDigit(cycle1 + cycle2)
    var cycle4 = SingleDigit(monthScore + yearScore)

    var pinacles = [cycle1, cycle2, cycle3, cycle4]

    return pinacles
}
function Pitfalls(day, month, year) {    
    var dateValues = CalculateDateValues(day, month, year)    
    var dayScore = SingleDigit(dateValues[0])
    var monthScore = SingleDigit(dateValues[1])
    var yearScore = SingleDigit(dateValues[2])

    var cycle1 = SingleDigit(dayScore - monthScore)
    var cycle2 = SingleDigit(dayScore - yearScore)
    var cycle3 = SingleDigit(cycle1 - cycle2)
    var cycle4 = SingleDigit(monthScore - yearScore)

    if(cycle1 < 0){
        cycle1 = (cycle1 * -1)
    } else if(cycle2 < 0){
        cycle2 = (cycle2 * -1)
    } else if(cycle3 < 0){
        cycle3 = (cycle3 * -1)
    } else if(cycle4 < 0){
        cycle4 = (cycle4 * -1)
    }

    var pitfalls = [cycle1, cycle2, cycle3, cycle4]

    return pitfalls
}

// Family Heritage //
// HPP
function GetHPP(inclution) {
    var noReduced = 0

    for ( var i = 0; i < 4; i++ )
    {
        noReduced = noReduced + inclution[i]
    }

    var reduced = SingleDigit(noReduced)
    var hpp = [noReduced, reduced]

    return hpp
}
// NCS
function GetNCS(inclution) {
    var noReduced = 0
    
    for ( var i = 5; i < 9; i++ )
    {
        noReduced = noReduced + inclution[i]
    }

    var reduced = SingleDigit(noReduced)
    var ncs = [noReduced, reduced]

    return ncs
}
// DM
function GetDM(hpp, ncs) {
    var noReduced = hpp[0] + ncs[0]
    var reduced = SingleDigit(noReduced)
    var dm = [noReduced, reduced]

    return dm
}
// EJE
function GetEJE(inclution) {
    var noReduced = inclution[4]

    var reduced = SingleDigit(noReduced)
    var eje = [noReduced, reduced]

    return eje
}
// MF
function GetMF(fullName, hpp) {
    var noReduced = fullName.length + hpp[0]
    var reduced = SingleDigit(noReduced)
    var mf = [noReduced, reduced]

    return mf
}
// MS
function GetMS(fullName, ncs) {
    var noReduced = fullName.length + ncs[0]
    var reduced = SingleDigit(noReduced)
    var ms = [noReduced, reduced]

    return ms
}
// MFE
function GetMFE(mf, ms) {
    var noReduced = mf[0] + ms[0]
    var reduced = SingleDigit(noReduced)
    var mfe = [noReduced, reduced]

    return mfe
}
// CosmicMission
function CosmicMission(wayOfLife, destinationNumber) {
    var noReduced = wayOfLife[0] + destinationNumber[0]
    var reduced = SingleDigit(noReduced)
    var cosmicMission = [noReduced, reduced]

    return cosmicMission
}

// UTILS //
// Calculate Date Values - Day, Month, Year
function CalculateDateValues (day, month, year) {
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

    var dateValues = [dayScore, monthScore, yearScore]

    return dateValues
}
// Single Digit
function SingleDigit(singleDigitValue) {
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