// Numerology
function CalculateNum(){
    const alphabet = {A:1, Á:1, J:1, S:1, B:2, K:2, T:2, C:3, L:3, U:3, Ú:3, D:4, 
        M:4, V:4, E:5, É:5, N:5, Ñ:5, W:5, F:6, O:6, Ó:6, X:6, G:7, P:7, Y:7, H:8, 
        Q:8, Z:8, I:9, í:9, R:9}

    const consonants = {J:1, S:1, B:2, K:2, T:2, C:3, L:3, D:4, 
        M:4, V:4, N:5, Ñ:5, W:5, F:6, X:6, G:7, P:7, Y:7, H:8, 
        Q:8, Z:8, R:9}

    const vowels = {A:1, Á:1, U:3, Ú:3, E:5, É:5, O:6, Ó:6, Y:7, I:9, í:9}

    var firstName = document.getElementById("inputFirstName").value
    var midName = document.getElementById("inputMidName").value
    var fLastName = document.getElementById("fLastName").value
    var fSurName = document.getElementById("fSurName").value
    var mLastName = document.getElementById("mLastName").value
    var mSurName = document.getElementById("mSurName").value
    var activeName = document.getElementById("activeName").value

    var day = document.getElementById("day").value
    var month = document.getElementById("month").value
    var year = document.getElementById("year").value

    const fullName = firstName + midName + fLastName + mLastName
    const fullNameNumber = firstName + " " + midName + " " + fLastName + " " + mLastName

    // Birthdate
    let lifeTrajectory = LifeTrajectory(day, month, year)
    let homeTrail = LifeTrajectory(day, month, year)
    let wayOfLife = WayOfLife(day, month, year)
    let deepSoulLonging = DeepSoulLonging(day, month, year)
    
    // Name Numbers
    let soulNumber = SoulNumber(fullName, vowels)
    let destinationNumber = DestinationNumber(fullName, alphabet)
    let personalityNumber = PersonalityNumber(fullName, consonants)
    NameNumber(consonants, vowels, fullNameNumber, 1, soulNumber, destinationNumber, personalityNumber)

    // House Table
    let inclution = Inclution(fullName, alphabet)
    let induction = Induction(inclution)
    let bridges = Bridges(inclution)
    let evolution = Evolution(inclution)
    let unconscious = Unconscious(inclution, alphabet, fullName)
    let induction2 = Induction(unconscious)
    HouseTable(inclution, induction, bridges, evolution, unconscious, induction2)

    // Name Number
    let activeSoulNumber = SoulNumber(activeName, vowels)
    let activeDestinationNumber = DestinationNumber(activeName, alphabet)
    let activePersonalityNumber = PersonalityNumber(activeName, consonants)
    NameNumber(consonants, vowels, activeName, 2, activeSoulNumber, activeDestinationNumber, activePersonalityNumber)

    // Active House Table
    let activeInclution = Inclution(activeName, alphabet)
    let activeInduction = Induction(activeInclution)
    ActiveHouseTable(activeInclution, activeInduction)

    // Pinnacles Pitfalls Table
    let cycleYear = CicleYears(lifeTrajectory)
    let pinacles = Pinacles(day, month, year)
    let pitfalls = Pitfalls(day, month, year)
    PinnaclesPitfallsTable(cycleYear, pinacles, pitfalls)

    // Family Heritage Table
    let familyName = firstName + midName + fLastName + fSurName + mLastName + mSurName
    let hpp = GetHPP(inclution)
    let ncs = GetNCS(inclution)
    let dm = GetDM(hpp, ncs)
    let eje = GetEJE(inclution)
    let mf = GetMF(familyName, hpp)
    let ms = GetMS(familyName, ncs)
    let mfe = GetMFE(mf, ms)
    let cosmicMission = CosmicMission(wayOfLife, destinationNumber)
    FamilyHeritageTable(hpp, ncs, dm, eje, mf, ms, mfe)

    // Cycles Life Table
    CyclesLifeTable(parseInt(year), inclution, wayOfLife)

    // Date Numbers
    document.getElementById("lifeTrajectory").innerHTML=lifeTrajectory[1]
    document.getElementById("homeTrail").innerHTML=homeTrail[1]
    document.getElementById("wayOfLife").innerHTML=wayOfLife[1]
    document.getElementById("deepSoulLonging").innerHTML=deepSoulLonging[1]

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

// Name Number
function NameNumber(consonants, vowels, fullName, nameType, soulNumber, destinationNumber, personalityNumber) {
    var vowelNumbers = []
    var consonantNumbers = []
    let isConsonant = false

    for( var i = 0; i < fullName.length; i++ )
    {
        var curChar = fullName.charAt(i).toUpperCase()

        if(curChar == "y" || curChar == "Y") {
            isConsonant = ValidateYLetter(fullName, curChar, i)

            if(isConsonant == true) {
                if(consonants[curChar] != undefined){
                    var consValue = consonants[curChar]
                    consonantNumbers.push(consValue)
                    vowelNumbers.push(" ")
                }
            } else {
                if(vowels[curChar] != undefined) {
                    var vowelValue = vowels[curChar]
                    consonantNumbers.push(" ")
                    vowelNumbers.push(vowelValue)
                }
            }
        } else {
            if(consonants[curChar] != undefined){
                var consValue = consonants[curChar]
                consonantNumbers.push(consValue)
                vowelNumbers.push(" ")
            }
            if(vowels[curChar] != undefined) {
                var vowelValue = vowels[curChar]
                consonantNumbers.push(" ")
                vowelNumbers.push(vowelValue)
            }
        }        

        if(fullName.charAt(i).toUpperCase() == " "){
            consonantNumbers.push(" ")
            vowelNumbers.push(" ")
        }
    }

    var html = '<table class="hide-table">'
    html += '<tr>'
    for( var i = 0; i < fullName.length; i++ ) {
        html += '<td>' + vowelNumbers[i] + '</td>'
    }
    html += '<td>' + soulNumber[0] + "/" + soulNumber[1] + '</td>'
    html += '<td>Número del alma</td>'
    html += '</tr>'

    html += '<tr>'
    for( var i = 0; i < fullName.length; i++ ) {
        html += '<td>' + fullName.charAt(i).toUpperCase() + '</td>'
    }
    html += '<td>' + destinationNumber[0] + "/" + destinationNumber[1] + '</td>'
    html += '<td>Vía del destino</td>'
    html += '</tr>'

    html += '<tr>'
    for( var i = 0; i < fullName.length; i++ ) {
        html += '<td>' + consonantNumbers[i] + '</td>'
    }
    html += '<td>' + personalityNumber[0] + "/" + personalityNumber[1] + '</td>'
    html += '<td>Número de la personalidad externa</td>'
    html += '</tr>'
    html += '</table>'

    if(nameType == 1) {
        document.getElementById("name-number-table").innerHTML = html
    } else {
        document.getElementById("active-name-number-table").innerHTML = html
    }
}
// SoulNumber
function SoulNumber(fullName, vowels) {
    var nameScore = 0
    let isConsonant = false
    
    for( var i = 0; i < fullName.length; i++ )
    {
        var curChar = fullName.charAt(i).toUpperCase()
        
        if(curChar == "y" || curChar == "Y") {
            isConsonant = ValidateYLetter(fullName, curChar, i)
        } else {
            isConsonant = false
        }

        if(isConsonant == false){
            var curValue = vowels[curChar]
    
            if(curValue != undefined) {
                nameScore = nameScore + curValue
            }
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
    let isConsonant = true
    
    for( var i = 0; i < fullName.length; i++ )
    {
        var curChar = fullName.charAt(i).toUpperCase()
        var curValue = consonants[curChar]

        if(curChar == "y" || curChar == "Y") {
            isConsonant = ValidateYLetter(fullName, curChar, i)
        }  else {
            isConsonant = true
        }

        if(isConsonant == true){
            var curValue = consonants[curChar]
    
            if(curValue != undefined) {
                nameScore = nameScore + curValue
            }
        }
    }
    var noReduced = nameScore
    var reduced = SingleDigit(noReduced)
    var personalityNumber = [noReduced, reduced]

    return personalityNumber
}
function ValidateYLetter(fullName, curChar, index){
    const nextLetter = fullName.charAt(index + 1);
    let isConsonant = false

    if(curChar === 'y' && fullName.charAt(index - 1) == undefined){ //First letter
        isConsonant = true
    } else if( nextLetter != undefined && (fullName.charAt(index + 1) === 'a' 
    || fullName.charAt(index + 1) === 'e' || fullName.charAt(index + 1) === 'i')
    || fullName.charAt(index + 1) === 'o' || fullName.charAt(index + 1) === 'u'){ // has a vowel after the 'y'
        isConsonant = true
    } else {
        isConsonant = false
    }
    return isConsonant
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

// HouseTable
function HouseTable(inclution, induction, bridges, evolution, unconscious, induction2) {
    var html = '<table class="table-fill">'
    
    html += '<tr>'
    html += '<th>Casa</th>'
    html += '<th>1</th>'
    html += '<th>2</th>'
    html += '<th>3</th>'
    html += '<th>4</th>'
    html += '<th>5</th>'
    html += '<th>6</th>'
    html += '<th>7</th>'
    html += '<th>8</th>'
    html += '<th>9</th>'
    html += '</tr>'

    html += '<tr>'
    html += '<td>Inclusion</td>'
    html += '<td>' + inclution[0] + '</td>'
    html += '<td>' + inclution[1] + '</td>'
    html += '<td>' + inclution[2] + '</td>'
    html += '<td>' + inclution[3] + '</td>'
    html += '<td>' + inclution[4] + '</td>'
    html += '<td>' + inclution[5] + '</td>'
    html += '<td>' + inclution[6] + '</td>'
    html += '<td>' + inclution[7] + '</td>'
    html += '<td>' + inclution[8] + '</td>'
    html += '</tr>'

    html += '<tr>'
    html += '<td>Inducción</td>'
    html += '<td>' + induction[0] + '</td>'
    html += '<td>' + induction[1] + '</td>'
    html += '<td>' + induction[2] + '</td>'
    html += '<td>' + induction[3] + '</td>'
    html += '<td>' + induction[4] + '</td>'
    html += '<td>' + induction[5] + '</td>'
    html += '<td>' + induction[6] + '</td>'
    html += '<td>' + induction[7] + '</td>'
    html += '<td>' + induction[8] + '</td>'
    html += '</tr>'

    html += '<tr>'
    html += '<td>Puentes</td>'
    html += '<td>' + bridges[0] + '</td>'
    html += '<td>' + bridges[1] + '</td>'
    html += '<td>' + bridges[2] + '</td>'
    html += '<td>' + bridges[3] + '</td>'
    html += '<td>' + bridges[4] + '</td>'
    html += '<td>' + bridges[5] + '</td>'
    html += '<td>' + bridges[6] + '</td>'
    html += '<td>' + bridges[7] + '</td>'
    html += '<td>' + bridges[8] + '</td>'
    html += '</tr>'

    html += '<tr>'
    html += '<td>Evolución</td>'
    html += '<td>' + evolution[0] + '</td>'
    html += '<td>' + evolution[1] + '</td>'
    html += '<td>' + evolution[2] + '</td>'
    html += '<td>' + evolution[3] + '</td>'
    html += '<td>' + evolution[4] + '</td>'
    html += '<td>' + evolution[5] + '</td>'
    html += '<td>' + evolution[6] + '</td>'
    html += '<td>' + evolution[7] + '</td>'
    html += '<td>' + evolution[8] + '</td>'
    html += '</tr>'

    html += '<tr>'
    html += '<td>Inconcientes</td>'
    html += '<td>' + unconscious[0] + '</td>'
    html += '<td>' + unconscious[1] + '</td>'
    html += '<td>' + unconscious[2] + '</td>'
    html += '<td>' + unconscious[3] + '</td>'
    html += '<td>' + unconscious[4] + '</td>'
    html += '<td>' + unconscious[5] + '</td>'
    html += '<td>' + unconscious[6] + '</td>'
    html += '<td>' + unconscious[7] + '</td>'
    html += '<td>' + unconscious[8] + '</td>'
    html += '</tr>'

    html += '<tr>'
    html += '<td>Induccion</td>'
    html += '<td>' + induction2[0] + '</td>'
    html += '<td>' + induction2[1] + '</td>'
    html += '<td>' + induction2[2] + '</td>'
    html += '<td>' + induction2[3] + '</td>'
    html += '<td>' + induction2[4] + '</td>'
    html += '<td>' + induction2[5] + '</td>'
    html += '<td>' + induction2[6] + '</td>'
    html += '<td>' + induction2[7] + '</td>'
    html += '<td>' + induction2[8] + '</td>'
    html += '</tr>'

    html += '</table>'
    document.getElementById("house-table").innerHTML = html
}
// Active House Table
function ActiveHouseTable(activeInclution, activeInduction) {
    var html = '<table class="table-fill">'
    
    html += '<tr>'
    html += '<th>Casa</th>'
    html += '<th>1</th>'
    html += '<th>2</th>'
    html += '<th>3</th>'
    html += '<th>4</th>'
    html += '<th>5</th>'
    html += '<th>6</th>'
    html += '<th>7</th>'
    html += '<th>8</th>'
    html += '<th>9</th>'
    html += '</tr>'

    html += '<tr>'
    html += '<td>Inclusion</td>'
    html += '<td>' + activeInclution[0] + '</td>'
    html += '<td>' + activeInclution[1] + '</td>'
    html += '<td>' + activeInclution[2] + '</td>'
    html += '<td>' + activeInclution[3] + '</td>'
    html += '<td>' + activeInclution[4] + '</td>'
    html += '<td>' + activeInclution[5] + '</td>'
    html += '<td>' + activeInclution[6] + '</td>'
    html += '<td>' + activeInclution[7] + '</td>'
    html += '<td>' + activeInclution[8] + '</td>'
    html += '</tr>'

    html += '<tr>'
    html += '<td>Inducción</td>'
    html += '<td>' + activeInduction[0] + '</td>'
    html += '<td>' + activeInduction[1] + '</td>'
    html += '<td>' + activeInduction[2] + '</td>'
    html += '<td>' + activeInduction[3] + '</td>'
    html += '<td>' + activeInduction[4] + '</td>'
    html += '<td>' + activeInduction[5] + '</td>'
    html += '<td>' + activeInduction[6] + '</td>'
    html += '<td>' + activeInduction[7] + '</td>'
    html += '<td>' + activeInduction[8] + '</td>'
    html += '</tr>'

    html += '</table>'
    document.getElementById("active-house-table").innerHTML = html
}

// Pinnacles and Pitfalls
function CicleYears(lifeTrajectory) {
    var cycle1 = 36 - lifeTrajectory[1]
    var cycle2 = cycle1 + 9
    var cycle3 = cycle2 + 9
    var cycle4 = cycle3 + 9

    var cycleEnd1 = cycle1 + 8
    var cycleEnd2 = cycleEnd1 + 9
    var cycleEnd3 = cycleEnd2 + 9
    var cycleEnd4 = cycleEnd3 + 9

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
//Pinnacles and Pitfalls Table
function PinnaclesPitfallsTable(cycleYear, pinacles, pitfalls) {
    var html = '<table class="table-fill">'
    
    html += '<tr>'
    html += '<th></th>'
    html += '<th>Primer ciclo</th>'
    html += '<th>Segundo ciclo</th>'
    html += '<th>Tercer ciclo</th>'
    html += '<th>Cuarto ciclo</th>'
    html += '</tr>'

    html += '<tr>'
    html += '<td>Años</td>'
    html += '<td>' + cycleYear[0] + '-' + cycleYear[4] + '</td>'
    html += '<td>' + cycleYear[1] + '-' + cycleYear[5] + '</td>'
    html += '<td>' + cycleYear[2] + '-' + cycleYear[6] + '</td>'
    html += '<td>' + cycleYear[3] + '-' + cycleYear[7] + '</td>'
    html += '</tr>'

    html += '<tr>'
    html += '<td>Pinaculos</td>'
    html += '<td>' + pinacles[0] + '</td>'
    html += '<td>' + pinacles[1] + '</td>'
    html += '<td>' + pinacles[2] + '</td>'
    html += '<td>' + pinacles[3] + '</td>'
    html += '</tr>'

    html += '<tr>'
    html += '<td>Escollos</td>'
    html += '<td>' + pitfalls[0] + '</td>'
    html += '<td>' + pitfalls[1] + '</td>'
    html += '<td>' + pitfalls[2] + '</td>'
    html += '<td>' + pitfalls[3] + '</td>'
    html += '</tr>'

    html += '</table>'
    document.getElementById("pinnacles-pitfalls-table").innerHTML = html
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
// Family Heritage Table
function FamilyHeritageTable(hpp, ncs, dm, eje, mf, ms, mfe) {
    var html = '<table class="table-fill">'
    
    html += '<tr>'
    html += '<th></th>'
    html += '<th>No reducido</th>'
    html += '<th>Reducido</th>'
    html += '</tr>'

    html += '<tr>'
    html += '<td>HPP</td>'
    html += '<td>' + hpp[0] + '</td>'
    html += '<td>' + hpp[1] + '</td>'
    html += '</tr>'

    html += '<tr>'
    html += '<td>NCS</td>'
    html += '<td>' + ncs[0] + '</td>'
    html += '<td>' + ncs[1] + '</td>'
    html += '</tr>'

    html += '<tr>'
    html += '<td>DM</td>'
    html += '<td>' + dm[0] + '</td>'
    html += '<td>' + dm[1] + '</td>'
    html += '</tr>'

    html += '<tr>'
    html += '<td>EJE</td>'
    html += '<td>' + eje[0] + '</td>'
    html += '<td>' + eje[1] + '</td>'
    html += '</tr>'

    html += '<tr>'
    html += '<td>MF</td>'
    html += '<td>' + mf[0] + '</td>'
    html += '<td>' + mf[1] + '</td>'
    html += '</tr>'

    html += '<tr>'
    html += '<td>MS</td>'
    html += '<td>' + ms[0] + '</td>'
    html += '<td>' + ms[1] + '</td>'
    html += '</tr>'

    html += '<tr>'
    html += '<td>MFE</td>'
    html += '<td>' + mfe[0] + '</td>'
    html += '<td>' + mfe[1] + '</td>'
    html += '</tr>'

    html += '</table>'
    document.getElementById("family-heritage-table").innerHTML = html
}
// Cycles Life Table
function CyclesLifeTable(year, inclution, wayOfLife) {
    var wayOfLifeNumber = wayOfLife[1]
    var currentYear = year
    // Population
    var html = '<table class="table-fill">'
    html += '<tr>'
    html += '<td class="hab-ciclos">Habitantes</td>'
    for (var i = 0; i < 10; i++) {
        if(i == 9) {
            html += '<td class="td-w">' + inclution[0] + '</td>'
        } else {
            html += '<td class="td-w">' + inclution[i] + '</td>'
        }
    }
    html += '</tr>'

    // Cycles
    html += '<tr>'
    html += '<td class="hab-ciclos">Ciclos</td>'
    for (var i = 0; i < 10; i++) {
        var cycle = i+1
        html += '<td class="td-w">' + cycle + '</td>'
    }
    html += '</tr>'
    html += '</table>'

    // Years
    var html2 = '<table class="table-fill">'
    html2 += '<tr>'
    html2 += '<td>Hab</td>'
    html2 += '<td>AP</td>'
    html2 += '</tr>'

    var newInclution = []
    var cycles = []

    if(wayOfLifeNumber == 1){
        newInclution = inclution
        cycles = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    } else if(wayOfLifeNumber == 2) {
        newInclution = [inclution[1], inclution[2], inclution[3], inclution[4], inclution[5], inclution[6], inclution[7], inclution[8], inclution[0]]
        cycles = [2, 3, 4, 5, 6, 7, 8, 9, 1]
    } else if(wayOfLifeNumber == 3) {
        newInclution = [inclution[2], inclution[3], inclution[4], inclution[5], inclution[6], inclution[7], inclution[8], inclution[0], inclution[1]]
        cycles = [3, 4, 5, 6, 7, 8, 9, 1, 2]
    } else if(wayOfLifeNumber == 4) {
        newInclution = [inclution[3], inclution[4], inclution[5], inclution[6], inclution[7], inclution[8], inclution[0], inclution[1], inclution[2]]
        cycles = [4, 5, 6, 7, 8, 9, 1, 2, 3]
    } else if(wayOfLifeNumber == 5) {
        newInclution = [inclution[4], inclution[5], inclution[6], inclution[7], inclution[8], inclution[0], inclution[1], inclution[2], inclution[3]]
        cycles = [5, 6, 7, 8, 9, 1, 2, 3, 4]
    } else if(wayOfLifeNumber == 6) {
        newInclution = [inclution[5], inclution[6], inclution[7], inclution[8], inclution[0], inclution[1], inclution[2], inclution[3], inclution[4]]
        cycles = [6, 7, 8, 9, 1, 2, 3, 4, 5]
    } else if(wayOfLifeNumber == 7) {
        newInclution = [inclution[6], inclution[7], inclution[8], inclution[0], inclution[1], inclution[2], inclution[3], inclution[4], inclution[5]]
        cycles = [7, 8, 9, 1, 2, 3, 4, 5, 6]
    } else if(wayOfLifeNumber == 8) {
        newInclution = [inclution[7], inclution[8], inclution[0], inclution[1], inclution[2], inclution[3], inclution[4], inclution[5], inclution[6]]
        cycles = [8, 9, 1, 2, 3, 4, 5, 6, 7]
    } else if(wayOfLifeNumber == 9) {
        newInclution = [inclution[8], inclution[0], inclution[1], inclution[2], inclution[3], inclution[4], inclution[5], inclution[6], inclution[7]]
        cycles = [9, 1, 2, 3, 4, 5, 6, 7, 8]
    }
    
    var countYear = 0
    for (var i = 0; i < 9; i++) {
        html2 += '<tr>'
        html2 += '<td>' + newInclution[i] + '</td>'
        html2 += '<td>' + cycles[i] + '</td>'

        for (var j = 0; j < 10; j++) {
            html2 += '<td>' + year + '</td>'
            year += 9
            countYear++
        }
        currentYear++
        year = currentYear
    }
    html2 += '</tr>'
    html2 += '</table>'
    
    document.getElementById("cyclesLife-table").innerHTML = html
    document.getElementById("cyclesLife-table2").innerHTML = html2
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