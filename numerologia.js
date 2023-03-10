// Numerology
function CalculateNum(){
    const alphabet = {A:1, Á:1, J:1, S:1, B:2, K:2, T:2, C:3, L:3, U:3, Ú:3, D:4, 
        M:4, V:4, E:5, É:5, N:5, Ñ:5, W:5, F:6, O:6, Ó:6, X:6, G:7, P:7, Y:7, H:8, 
        Q:8, Z:8, I:9, í:9, R:9}

    const consonants = {J:1, S:1, B:2, K:2, T:2, C:3, L:3, D:4, 
        M:4, V:4, N:5, Ñ:5, W:5, F:6, X:6, G:7, P:7, H:8, 
        Q:8, Z:8, R:9}

    const vowelsY = {A:1, Á:1, U:3, Ú:3, E:5, É:5, O:6, Ó:6, Y:7, I:9, í:9}
    const vowelsNoY = {A:1, Á:1, U:3, Ú:3, E:5, É:5, O:6, Ó:6, I:9, í:9}
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

    var fullName = firstName + midName + fLastName + mLastName 

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

    let inclution = Inclution(fullName, alphabet)
    let induction = Induction(inclution)
    let bridges = Bridges(inclution)
    let evolution = Evolution(inclution)
    let unconscious = Unconscious(inclution, alphabet, fullName)
    let induction2 = Induction(unconscious)

    let activeSoulNumber = SoulNumber(activeName, vowels)
    let activeNameNumber = DestinationNumber(activeName, alphabet)
    let activePersonalityNumber = PersonalityNumber(activeName, consonants)

    let activeInclution = Inclution(activeName, alphabet)
    let activeInduction = Induction(activeInclution)

    let cycleYear = CicleYears(lifeTrajectory)
    let pinacles = Pinacles(day, month, year)
    let pitfalls = Pitfalls(day, month, year)

    let familyName = firstName + midName + fLastName + fSurName + mLastName + mSurName
    let hpp = GetHPP(inclution)
    let ncs = GetNCS(inclution)
    let dm = GetDM(hpp, ncs)
    let eje = GetEJE(inclution)
    let mf = GetMF(familyName, hpp)
    let ms = GetMS(familyName, ncs)
    let mfe = GetMFE(mf, ms)
    let cosmicMission = CosmicMission(wayOfLife, destinationNumber)

    let cyclesLife = CyclesLife(parseInt(year), inclution)

    // Date Numbers
    document.getElementById("lifeTrajectory").innerHTML=lifeTrajectory[1]
    document.getElementById("homeTrail").innerHTML=homeTrail[1]
    document.getElementById("wayOfLife").innerHTML=wayOfLife[1]
    document.getElementById("deepSoulLonging").innerHTML=deepSoulLonging[1]

    // Name Number
    document.getElementById("soulNumber").innerHTML=soulNumber[0] + "/" + soulNumber[1]
    document.getElementById("destinationNumber").innerHTML=destinationNumber[0] + "/" + destinationNumber[1]
    document.getElementById("personalityNumber").innerHTML=personalityNumber[0] + "/" + personalityNumber[1]

    document.getElementById("inclution1").innerHTML=inclution[0]
    document.getElementById("inclution2").innerHTML=inclution[1]
    document.getElementById("inclution3").innerHTML=inclution[2]
    document.getElementById("inclution4").innerHTML=inclution[3]
    document.getElementById("inclution5").innerHTML=inclution[4]
    document.getElementById("inclution6").innerHTML=inclution[5]
    document.getElementById("inclution7").innerHTML=inclution[6]
    document.getElementById("inclution8").innerHTML=inclution[7]
    document.getElementById("inclution9").innerHTML=inclution[8]

    document.getElementById("induction1").innerHTML=induction[0]
    document.getElementById("induction2").innerHTML=induction[1]
    document.getElementById("induction3").innerHTML=induction[2]
    document.getElementById("induction4").innerHTML=induction[3]
    document.getElementById("induction5").innerHTML=induction[4]
    document.getElementById("induction6").innerHTML=induction[5]
    document.getElementById("induction7").innerHTML=induction[6]
    document.getElementById("induction8").innerHTML=induction[7]
    document.getElementById("induction9").innerHTML=induction[8]

    document.getElementById("bridges1").innerHTML=bridges[0]
    document.getElementById("bridges2").innerHTML=bridges[1]
    document.getElementById("bridges3").innerHTML=bridges[2]
    document.getElementById("bridges4").innerHTML=bridges[3]
    document.getElementById("bridges5").innerHTML=bridges[4]
    document.getElementById("bridges6").innerHTML=bridges[5]
    document.getElementById("bridges7").innerHTML=bridges[6]
    document.getElementById("bridges8").innerHTML=bridges[7]
    document.getElementById("bridges9").innerHTML=bridges[8]

    document.getElementById("evolution1").innerHTML=evolution[0]
    document.getElementById("evolution2").innerHTML=evolution[1]
    document.getElementById("evolution3").innerHTML=evolution[2]
    document.getElementById("evolution4").innerHTML=evolution[3]
    document.getElementById("evolution5").innerHTML=evolution[4]
    document.getElementById("evolution6").innerHTML=evolution[5]
    document.getElementById("evolution7").innerHTML=evolution[6]
    document.getElementById("evolution8").innerHTML=evolution[7]
    document.getElementById("evolution9").innerHTML=evolution[8]

    document.getElementById("unconscious1").innerHTML=unconscious[0]
    document.getElementById("unconscious2").innerHTML=unconscious[1]
    document.getElementById("unconscious3").innerHTML=unconscious[2]
    document.getElementById("unconscious4").innerHTML=unconscious[3]
    document.getElementById("unconscious5").innerHTML=unconscious[4]
    document.getElementById("unconscious6").innerHTML=unconscious[5]
    document.getElementById("unconscious7").innerHTML=unconscious[6]
    document.getElementById("unconscious8").innerHTML=unconscious[7]
    document.getElementById("unconscious9").innerHTML=unconscious[8]

    document.getElementById("induction21").innerHTML=induction2[0]
    document.getElementById("induction22").innerHTML=induction2[1]
    document.getElementById("induction23").innerHTML=induction2[2]
    document.getElementById("induction24").innerHTML=induction2[3]
    document.getElementById("induction25").innerHTML=induction2[4]
    document.getElementById("induction26").innerHTML=induction2[5]
    document.getElementById("induction27").innerHTML=induction2[6]
    document.getElementById("induction28").innerHTML=induction2[7]
    document.getElementById("induction29").innerHTML=induction2[8]

    // Active Name
    document.getElementById("activeSoulNumber").innerHTML=activeSoulNumber[0] + "/" + activeSoulNumber[1]
    document.getElementById("activeNameNumber").innerHTML=activeNameNumber[0] + "/" + activeNameNumber[1]
    document.getElementById("activePersonalityNumber").innerHTML=activePersonalityNumber[0] + "/" + activePersonalityNumber[1]

    document.getElementById("activeInclution1").innerHTML=activeInclution[0]
    document.getElementById("activeInclution2").innerHTML=activeInclution[1]
    document.getElementById("activeInclution3").innerHTML=activeInclution[2]
    document.getElementById("activeInclution4").innerHTML=activeInclution[3]
    document.getElementById("activeInclution5").innerHTML=activeInclution[4]
    document.getElementById("activeInclution6").innerHTML=activeInclution[5]
    document.getElementById("activeInclution7").innerHTML=activeInclution[6]
    document.getElementById("activeInclution8").innerHTML=activeInclution[7]
    document.getElementById("activeInclution9").innerHTML=activeInclution[8]

    document.getElementById("activeInduction1").innerHTML=activeInduction[0]
    document.getElementById("activeInduction2").innerHTML=activeInduction[1]
    document.getElementById("activeInduction3").innerHTML=activeInduction[2]
    document.getElementById("activeInduction4").innerHTML=activeInduction[3]
    document.getElementById("activeInduction5").innerHTML=activeInduction[4]
    document.getElementById("activeInduction6").innerHTML=activeInduction[5]
    document.getElementById("activeInduction7").innerHTML=activeInduction[6]
    document.getElementById("activeInduction8").innerHTML=activeInduction[7]
    document.getElementById("activeInduction9").innerHTML=activeInduction[8]

    // Pinnacles and Pitfalls
    document.getElementById("cycleYear1").innerHTML=cycleYear[0] + "-" + cycleYear[4]
    document.getElementById("cycleYear2").innerHTML=cycleYear[1] + "-" + cycleYear[5]
    document.getElementById("cycleYear3").innerHTML=cycleYear[2] + "-" + cycleYear[6]
    document.getElementById("cycleYear4").innerHTML=cycleYear[3] + "-" + cycleYear[7]

    document.getElementById("pinacles1").innerHTML=pinacles[0]
    document.getElementById("pinacles2").innerHTML=pinacles[1]
    document.getElementById("pinacles3").innerHTML=pinacles[2]
    document.getElementById("pinacles4").innerHTML=pinacles[3]

    document.getElementById("pitfalls1").innerHTML=pitfalls[0]
    document.getElementById("pitfalls2").innerHTML=pitfalls[1]
    document.getElementById("pitfalls3").innerHTML=pitfalls[2]
    document.getElementById("pitfalls4").innerHTML=pitfalls[3]

    // Family Heritage
    document.getElementById("hpp1").innerHTML=hpp[0]
    document.getElementById("hpp2").innerHTML=hpp[1]

    document.getElementById("ncs1").innerHTML=ncs[0]
    document.getElementById("ncs2").innerHTML=ncs[1]

    document.getElementById("dm1").innerHTML=dm[0]
    document.getElementById("dm2").innerHTML=dm[1]

    document.getElementById("eje1").innerHTML=eje[0]
    document.getElementById("eje2").innerHTML=eje[1]

    document.getElementById("mf1").innerHTML=mf[0]
    document.getElementById("mf2").innerHTML=mf[1]

    document.getElementById("ms1").innerHTML=ms[0]
    document.getElementById("ms2").innerHTML=ms[1]

    document.getElementById("mfe1").innerHTML=mfe[0]
    document.getElementById("mfe2").innerHTML=mfe[1]

    // Cosmic Mission
    document.getElementById("cosmicMission").innerHTML=cosmicMission[1]
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
function CicleYears(lifeTrajectory) {
    var cycle1 = 36 - lifeTrajectory[1]
    var cycle2 = cycle1 + 9
    var cycle3 = cycle2 + 9
    var cycle4 = cycle3 + 9

    var cycleEnd1 = cycle1 + 8
    var cycleEnd2 = cycleEnd1 + 8
    var cycleEnd3 = cycleEnd2 + 8
    var cycleEnd4 = cycleEnd3 + 8

    var cycleYears = [cycle1, cycle2, cycle3, cycle4, cycleEnd1, cycleEnd2, cycleEnd3, cycleEnd4]

    return cycleYears
}
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
    }
    if(cycle2 < 0){
        cycle2 = (cycle2 * -1)
    }
    if(cycle3 < 0){
        cycle3 = (cycle3 * -1)
    }
    if(cycle4 < 0){
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

function CyclesLife(year, inclution) {
    var currentYear = year
    // Population
    var html = "<table>"
    html += "<tr>"
    html += "<td>Habitantes</td>"
    for (var i = 0; i < 10; i++) {
        if(i == 9) {
            html += "<td>" + inclution[0] + "</td>"
        } else {
            html += "<td>" + inclution[i] + "</td>"
        }
    }
    html += "</tr>"

    // Cycles
    html += "<tr>"
    html += "<td>Ciclos</td>"
    for (var i = 0; i < 10; i++) {
        var cycle = i+1
        html += "<td>" + cycle + "</td>"
    }
    html += "</tr>"

    // Years
    html += "<tr>"
    html += "<td>Hab</td>"
    html += "<td>AP</td>"
    html += "<td></td>"
    html += "</tr>"

    var countYear = 0
    for (var i = 0; i < 10; i++) {
        var cycle = i+1
        html += "<tr>"

        if(i == 9) {
            html += "<td>" + inclution[0] + "</td>"
        } else {
            html += "<td>" + inclution[i] + "</td>"
        }
        html += "<td>" + cycle + "</td>"

        for (var j = 0; j < 10; j++) {
            html += "<td>" + year + "</td>"
            year += 9
            countYear++
        }
        currentYear++
        year = (currentYear)
    }
    html += "</tr>"

    html += "</table>"
    document.getElementById("cyclesLife-container").innerHTML = html
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