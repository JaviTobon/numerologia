// Numerology
function CalculateNum(){
    const alphabet = {A:1, Á:1, J:1, S:1, B:2, K:2, T:2, C:3, L:3, U:3, Ú:3, Ü:3, D:4, 
        M:4, V:4, E:5, É:5, N:5, Ñ:5, W:5, F:6, O:6, Ó:6, X:6, G:7, P:7, Y:7, H:8, 
        Q:8, Z:8, I:9, Í:9, R:9}

    const consonants = {J:1, S:1, B:2, K:2, T:2, C:3, L:3, D:4, 
        M:4, V:4, N:5, Ñ:5, W:5, F:6, X:6, G:7, P:7, Y:7, H:8, 
        Q:8, Z:8, R:9}

    const vowels = {A:1, Á:1, U:3, Ú:3, Ü:3, E:5, É:5, O:6, Ó:6, Y:7, I:9, Í:9}

    let firstName = document.getElementById("inputFirstName").value
    let midName = document.getElementById("inputMidName").value
    let fLastName = document.getElementById("fLastName").value
    let fSurName = document.getElementById("fSurName").value
    let mLastName = document.getElementById("mLastName").value
    let mSurName = document.getElementById("mSurName").value
    let activeName = document.getElementById("activeName").value

    let day = document.getElementById("day").value
    let month = document.getElementById("month").value
    let year = document.getElementById("year").value

    const fullName = firstName + midName + fLastName + mLastName
    const fullNameNumber = firstName + " " + midName + " " + fLastName + " " + mLastName

    // Birthdate
    let lifeTrajectory = LifeTrajectory(day, month, year)
    let homeTrail = HomeTrail(day, month, year)
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
    document.getElementById("lifeTrajectory").innerHTML=lifeTrajectory[0] + "/" + lifeTrajectory[1]
    document.getElementById("homeTrail").innerHTML=homeTrail[0] + "/" + homeTrail[1]
    document.getElementById("wayOfLife").innerHTML=wayOfLife[0] + "/" + wayOfLife[1]
    document.getElementById("deepSoulLonging").innerHTML=deepSoulLonging[0] + "/" + deepSoulLonging[1]

    // Cosmic Mission
    document.getElementById("cosmicMission").innerHTML=cosmicMission[1]
}

// LifeTrajectory
function LifeTrajectory(day, month, year){
    let dateValues = CalculateDateValues(day, month, year)
    let dayScore = dateValues[0]
    let monthScore = dateValues[1]
    let yearScore = dateValues[2]

    let noReduced = dayScore + monthScore + yearScore
    let reduced = SingleDigit(noReduced)
    let lifeTrajectory = [noReduced, reduced]

    return lifeTrajectory
}
// LifeTrajectory
function HomeTrail(day, month, year){
    let dateValues = CalculateDateValues(day, month, year)
    let dayScore = parseInt(day)
    let monthScore = parseInt(month)
    let yearScore = dateValues[2]

    let noReduced = dayScore + monthScore + yearScore
    let reduced = SingleDigit(noReduced)
    let homeTrail = [noReduced, reduced]

    return homeTrail
}
// WayOfLife
function WayOfLife(day, month, year){
    let noReduced = parseInt(day) + parseInt(month) + parseInt(year)
    let reduced = SingleDigit(noReduced)
    let wayOfLife = [noReduced, reduced]

    return wayOfLife
}
// DeepSoulLonging
function DeepSoulLonging(day, month, year){
    let dateValues = CalculateDateValues(day, month, year)
    let dayScore = parseInt(day)
    let monthScore = parseInt(month)
    let yearScore = dateValues[2]

    let noReduced = (dayScore + monthScore) + (monthScore + yearScore)
    let reduced = SingleDigit(noReduced)
    let deepSoulLonging = [noReduced, reduced]

    return deepSoulLonging
}

// Name Number
function NameNumber(consonants, vowels, fullName, nameType, soulNumber, destinationNumber, personalityNumber) {
    let vowelNumbers = []
    let consonantNumbers = []
    let isConsonant = false

    for( let i = 0; i < fullName.length; i++ )
    {
        let curChar = fullName.charAt(i).toUpperCase()

        if(curChar == "y" || curChar == "Y") {
            isConsonant = ValidateYLetter(fullName, curChar, i)

            if(isConsonant == true) {
                if(consonants[curChar] != undefined){
                    let consValue = consonants[curChar]
                    consonantNumbers.push(consValue)
                    vowelNumbers.push(" ")
                }
            } else {
                if(vowels[curChar] != undefined) {
                    let vowelValue = vowels[curChar]
                    consonantNumbers.push(" ")
                    vowelNumbers.push(vowelValue)
                }
            }
        } else {
            if(consonants[curChar] != undefined){
                let consValue = consonants[curChar]
                consonantNumbers.push(consValue)
                vowelNumbers.push(" ")
            }
            if(vowels[curChar] != undefined) {
                let vowelValue = vowels[curChar]
                consonantNumbers.push(" ")
                vowelNumbers.push(vowelValue)
            }
        }        

        if(fullName.charAt(i).toUpperCase() == " "){
            consonantNumbers.push(" ")
            vowelNumbers.push(" ")
        }
    }

    let html = '<table class="hide-table">'
    html += '<tr>'
    for( let i = 0; i < fullName.length; i++ ) {
        html += '<td>' + vowelNumbers[i] + '</td>'
    }
    html += '<td>' + soulNumber[0] + "/" + soulNumber[1] + '</td>'
    html += '<td>Número del alma</td>'
    html += '</tr>'

    html += '<tr>'
    for( let i = 0; i < fullName.length; i++ ) {
        html += '<td>' + fullName.charAt(i).toUpperCase() + '</td>'
    }
    html += '<td>' + destinationNumber[0] + "/" + destinationNumber[1] + '</td>'
    html += '<td>Vía del destino</td>'
    html += '</tr>'

    html += '<tr>'
    for( let i = 0; i < fullName.length; i++ ) {
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
    let nameScore = 0
    let isConsonant = false
    
    for( let i = 0; i < fullName.length; i++ )
    {
        let curChar = fullName.charAt(i).toUpperCase()
        
        if(curChar == "y" || curChar == "Y") {
            isConsonant = ValidateYLetter(fullName, curChar, i)
        } else {
            isConsonant = false
        }

        if(isConsonant == false){
            let curValue = vowels[curChar]
    
            if(curValue != undefined) {
                nameScore = nameScore + curValue
            }
        }
    }

    let noReduced = nameScore
    let reduced = SingleDigit(noReduced)
    let soulNumber = [noReduced, reduced]

    return soulNumber
}
// DestinationNumber
function DestinationNumber(fullName, alphabet){
    let nameScore = 0
    
    for( let i = 0; i < fullName.length; i++ )
    {
        let curChar = fullName.charAt(i).toUpperCase()
        let curValue = alphabet[curChar]

        if(curValue != undefined) {
            nameScore = nameScore + curValue
        }
    }

    let noReduced = nameScore
    let reduced = SingleDigit(noReduced)
    let destinationNumber = [noReduced, reduced]

    return destinationNumber
}
// PersonalityNumber
function PersonalityNumber(fullName, consonants) {
    let nameScore = 0
    let isConsonant = true
    
    for( let i = 0; i < fullName.length; i++ )
    {
        let curChar = fullName.charAt(i).toUpperCase()
        let curValue = consonants[curChar]

        if(curChar == "y" || curChar == "Y") {
            isConsonant = ValidateYLetter(fullName, curChar, i)
        }  else {
            isConsonant = true
        }

        if(isConsonant == true){
            let curValue = consonants[curChar]
    
            if(curValue != undefined) {
                nameScore = nameScore + curValue
            }
        }
    }
    let noReduced = nameScore
    let reduced = SingleDigit(noReduced)
    let personalityNumber = [noReduced, reduced]

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
    let house1 = 0
    let house2 = 0
    let house3 = 0
    let house4 = 0
    let house5 = 0
    let house6 = 0
    let house7 = 0
    let house8 = 0
    let house9 = 0

    //firstName
    for( let i = 0; i < fullName.length; i++ )
    {
        let curChar = fullName.charAt(i).toUpperCase()
        let curValue = alphabet[curChar]
        
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

    let inclution = [house1, house2, house3, house4, house5, house6, house7, house8, house9]

    return inclution
}

// Induction
function Induction(inclution) {
    let house1 = CalculateInduction(inclution, 0)
    let house2 = CalculateInduction(inclution, 1)
    let house3 = CalculateInduction(inclution, 2)
    let house4 = CalculateInduction(inclution, 3)
    let house5 = CalculateInduction(inclution, 4)
    let house6 = CalculateInduction(inclution, 5)
    let house7 = CalculateInduction(inclution, 6)
    let house8 = CalculateInduction(inclution, 7)
    let house9 = CalculateInduction(inclution, 8)

    let induction = [house1, house2, house3, house4, house5, house6, house7, house8, house9]

    return induction
}
function CalculateInduction(inclution, index) {
    let house = []

    let val1 = 0
    let val2 = 0
    let val3 = 0

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
    let house1 = CalculateBridges(inclution, 0)
    let house2 = CalculateBridges(inclution, 1)
    let house3 = CalculateBridges(inclution, 2)
    let house4 = CalculateBridges(inclution, 3)
    let house5 = CalculateBridges(inclution, 4)
    let house6 = CalculateBridges(inclution, 5)
    let house7 = CalculateBridges(inclution, 6)
    let house8 = CalculateBridges(inclution, 7)
    let house9 = CalculateBridges(inclution, 8)

    let bridges = [house1, house2, house3, house4, house5, house6, house7, house8, house9]

    return bridges
}
function CalculateBridges(inclution, index) {
    let bridgeHouse = inclution[index] - (index + 1)

    if(bridgeHouse < 0){
        bridgeHouse = (bridgeHouse * -1)
    }

    return bridgeHouse
}

// Evolution
function Evolution(inclution) {
    let house1 = CalculateEvolution(inclution, 0)
    let house2 = CalculateEvolution(inclution, 1)
    let house3 = CalculateEvolution(inclution, 2)
    let house4 = CalculateEvolution(inclution, 3)
    let house5 = CalculateEvolution(inclution, 4)
    let house6 = CalculateEvolution(inclution, 5)
    let house7 = CalculateEvolution(inclution, 6)
    let house8 = CalculateEvolution(inclution, 7)
    let house9 = CalculateEvolution(inclution, 8)

    let evolution = [house1, house2, house3, house4, house5, house6, house7, house8, house9]

    return evolution
}
function CalculateEvolution(inclution, index) {
    let count = 0

    inclution.forEach(element => {
        if(element == (index + 1)) {
            count++
        }
    });
    
    let evoHouse = inclution[index] + count

    return evoHouse
}

// Unconscius
function Unconscious(inclution, alphabet, fullName) {
    let house1 = CalculateUnconscious(inclution, alphabet, fullName, 0)
    let house2 = CalculateUnconscious(inclution, alphabet, fullName, 1)
    let house3 = CalculateUnconscious(inclution, alphabet, fullName, 2)
    let house4 = CalculateUnconscious(inclution, alphabet, fullName, 3)
    let house5 = CalculateUnconscious(inclution, alphabet, fullName, 4)
    let house6 = CalculateUnconscious(inclution, alphabet, fullName, 5)
    let house7 = CalculateUnconscious(inclution, alphabet, fullName, 6)
    let house8 = CalculateUnconscious(inclution, alphabet, fullName, 7)
    let house9 = CalculateUnconscious(inclution, alphabet, fullName, 8)

    let unconscious = [house1, house2, house3, house4, house5, house6, house7, house8, house9]

    return unconscious
}
function CalculateUnconscious(inclution, alphabet, fullName, index) {
    let curChar = ""
    let curValue = 0

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
    let html = '<table class="table-fill">'
    
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
    let html = '<table class="table-fill">'
    
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
    let initialYear = 36 - lifeTrajectory[1]
    let cycle1 = 0
    let cycle2 = initialYear + 1
    let cycle3 = cycle2 + 9
    let cycle4 = cycle3 + 9

    let cycleEnd1 = initialYear
    let cycleEnd2 = cycleEnd1 + 9
    let cycleEnd3 = cycleEnd2 + 9
    let cycleEnd4 = cycleEnd3 + 9

    let cycleYears = [cycle1, cycle2, cycle3, cycle4, cycleEnd1, cycleEnd2, cycleEnd3, cycleEnd4]

    return cycleYears
}
function Pinacles(day, month, year) {
    let dateValues = CalculateDateValues(day, month, year)
    let dayScore = SingleDigit(dateValues[0])
    let monthScore = SingleDigit(dateValues[1])
    let yearScore = SingleDigit(dateValues[2])

    let cycle1 = SingleDigit(dayScore + monthScore)
    let cycle2 = SingleDigit(dayScore + yearScore)
    let cycle3 = SingleDigit(cycle1 + cycle2)
    let cycle4 = SingleDigit(monthScore + yearScore)

    let pinacles = [cycle1, cycle2, cycle3, cycle4]

    return pinacles
}
function Pitfalls(day, month, year) {    
    let dateValues = CalculateDateValues(day, month, year)    
    let dayScore = SingleDigit(dateValues[0])
    let monthScore = SingleDigit(dateValues[1])
    let yearScore = SingleDigit(dateValues[2])

    let cycle1 = SingleDigit(dayScore - monthScore)
    if(cycle1 < 0){
        cycle1 = (cycle1 * -1)
    }

    let cycle2 = SingleDigit(dayScore - yearScore)
    if(cycle2 < 0){
        cycle2 = (cycle2 * -1)
    }

    let cycle3 = SingleDigit(cycle1 - cycle2)
    if(cycle3 < 0){
        cycle3 = (cycle3 * -1)
    }

    let cycle4 = SingleDigit(monthScore - yearScore)
    if(cycle4 < 0){
        cycle4 = (cycle4 * -1)
    }

    let pitfalls = [cycle1, cycle2, cycle3, cycle4]

    return pitfalls
}
//Pinnacles and Pitfalls Table
function PinnaclesPitfallsTable(cycleYear, pinacles, pitfalls) {
    let html = '<table class="table-fill">'
    
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
    let noReduced = 0

    for ( let i = 0; i < 4; i++ )
    {
        noReduced = noReduced + inclution[i]
    }

    let reduced = SingleDigit(noReduced)
    let hpp = [noReduced, reduced]

    return hpp
}
// NCS
function GetNCS(inclution) {
    let noReduced = 0
    
    for ( let i = 5; i < 9; i++ )
    {
        noReduced = noReduced + inclution[i]
    }

    let reduced = SingleDigit(noReduced)
    let ncs = [noReduced, reduced]

    return ncs
}
// DM
function GetDM(hpp, ncs) {
    let noReduced = hpp[0] + ncs[0]
    let reduced = SingleDigit(noReduced)
    let dm = [noReduced, reduced]

    return dm
}
// EJE
function GetEJE(inclution) {
    let noReduced = inclution[4]

    let reduced = SingleDigit(noReduced)
    let eje = [noReduced, reduced]

    return eje
}
// MF
function GetMF(fullName, hpp) {
    let noReduced = fullName.length + hpp[0]
    let reduced = SingleDigit(noReduced)
    let mf = [noReduced, reduced]

    return mf
}
// MS
function GetMS(fullName, ncs) {
    let noReduced = fullName.length + ncs[0]
    let reduced = SingleDigit(noReduced)
    let ms = [noReduced, reduced]

    return ms
}
// MFE
function GetMFE(mf, ms) {
    let noReduced = mf[0] + ms[0]
    let reduced = SingleDigit(noReduced)
    let mfe = [noReduced, reduced]

    return mfe
}
// CosmicMission
function CosmicMission(wayOfLife, destinationNumber) {
    let noReduced = wayOfLife[0] + destinationNumber[0]
    let reduced = SingleDigit(noReduced)
    let cosmicMission = [noReduced, reduced]

    return cosmicMission
}
// Family Heritage Table
function FamilyHeritageTable(hpp, ncs, dm, eje, mf, ms, mfe) {
    let html = '<table class="table-fill">'
    
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
    let wayOfLifeNumber = wayOfLife[1]
    
    // Population
    let html = '<table class="table-fill">'
    html += '<tr>'
    html += '<td class="hab-ciclos">Habitantes</td>'
    for (let i = 0; i < 10; i++) {
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
    for (let i = 0; i < 10; i++) {
        let cycle = i+1
        html += '<td class="td-w">' + cycle + '</td>'
    }
    html += '</tr>'
    html += '</table>'

    // Years
    let html2 = '<table class="table-fill">'
    html2 += '<tr>'
    html2 += '<td>Hab</td>'
    html2 += '<td>AP</td>'
    html2 += '</tr>'

    let newInclution = []
    let cycles = []

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
    
    let currentYear = year
    let countYear = 0
    let newCountYear = 0
    for (let i = 0; i < 9; i++) {
        html2 += '<tr>'
        html2 += '<td>' + newInclution[i] + '</td>'
        html2 += '<td>' + cycles[i] + '</td>'

        for (let j = 0; j < 10; j++) {
            html2 += '<td><span id="currentAge">' + newCountYear + '</span>' + year + '</td>'
            year += 9
            newCountYear += 9
        }
        currentYear++
        year = currentYear

        countYear++
        newCountYear = countYear
    }
    html2 += '</tr>'
    html2 += '</table>'
    
    document.getElementById("cyclesLife-table").innerHTML = html
    document.getElementById("cyclesLife-table2").innerHTML = html2
}

// UTILS //
// Calculate Date Values - Day, Month, Year
function CalculateDateValues (day, month, year) {
    let dayScore = 0
    let monthScore = 0
    let yearScore = 0
    
    if(day >= 10){
        for( let i = 0; i < day.length; i++ )
        {
            let curValue = day.toString().charAt(i)
            dayScore = dayScore + parseInt(curValue)
        }
    } else {
        dayScore = parseInt(day)
    }    

    if(month >= 10){
        for( let i = 0; i < month.length; i++ )
        {
            let curValue = month.toString().charAt(i)
            monthScore = monthScore + parseInt(curValue)
        }
    } else {
        monthScore = parseInt(month)
    }

    for( let i = 0; i < year.length; i++ )
    {
        let curValue = year.toString().charAt(i)
        yearScore = yearScore + parseInt(curValue)
    }

    let dateValues = [dayScore, monthScore, yearScore]

    return dateValues
}
// Single Digit
function SingleDigit(singleDigitValue) {
    while( singleDigitValue >= 10 )
    {
        let total = 0
        let str = '' + singleDigitValue
        
        for( let i = 0; i < str.length; i++ )
        {
            total = total + parseInt(str.charAt(i))
        }
        singleDigitValue = total
    }

    return singleDigitValue
}