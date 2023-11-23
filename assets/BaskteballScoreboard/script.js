var homePoints, guestPoints, homeFoul, guestFoul, periodCount
homePoints = 0
guestPoints = 0
homeFoul = 0
guestFoul = 0
periodCount = 1

homeScorePoints = document.getElementById("homeScorePoints")
guestScorePoints = document.getElementById("guestScorePoints")
homeFoulPoints = document.getElementById("homeFoulPoints")
guestFoulPoints = document.getElementById("guestFoulPoints")
periodCountPoints = document.getElementById("periodCount")

function changeAll() {
  homeScorePoints.textContent = homePoints
  guestScorePoints.textContent = guestPoints
  homeFoulPoints.textContent = homeFoul
  guestFoulPoints.textContent = guestFoul
  periodCountPoints.textContent = periodCount
}
changeAll()

// Home +1 Score
function homeAdd1() {
  homePoints += 1
  homeScorePoints.textContent = homePoints
}

// Home +2 Score
function homeAdd2() {
  homePoints += 2
  homeScorePoints.textContent = homePoints
}

// Home +3 Score
function homeAdd3() {
  homePoints += 3
  homeScorePoints.textContent = homePoints
}

// Guest +1 Score
function guestAdd1() {
  guestPoints += 1
  guestScorePoints.textContent = guestPoints
}

// Guest +2 Score
function guestAdd2() {
  guestPoints += 2
  guestScorePoints.textContent = guestPoints
}

// Guest +3 Score
function guestAdd3() {
  guestPoints += 3
  guestScorePoints.textContent = guestPoints
}


// Foul Home Add Counter =================================>
function homeFoulPlus() {
  homeFoul += 1
  homeFoulPoints.textContent = homeFoul
  if (homeFoul > 0) {
    foulLimiterMessage1.textContent = ""
  }
}

// Foul Home Minus Counter
function homeFoulMinus() {
  homeFoul -= 1
  homeFoulPoints.textContent = homeFoul
  if (homeFoul < 0) {
    homeFoulLimit()
  }
  else {
    foulLimiterMessage1.textContent = ""
  }
}

// Foul Guest Add Counter
function guestFoulPlus() {
  guestFoul += 1
  guestFoulPoints.textContent = guestFoul
  if (guestFoul > 0) {
    foulLimiterMessage2.textContent = ""
  }
}

// Foul Guest Minus Counter
function guestFoulMinus() {
  guestFoul -= 1
  guestFoulPoints.textContent = guestFoul
  if (guestFoul < 0) {
    guestFoulLimit()
  }
  else {
    foulLimiterMessage2.textContent = ""
  }
}

// Foul Limiter
var foulLimiterMessage1 = document.getElementById("foulLimiterMessage1")
var foulLimiterMessage2 = document.getElementById("foulLimiterMessage2")

function homeFoulLimit() {
  foulLimiterMessage1.textContent = "Home Fouls can't be less than 0."
  homeFoul = 0
  homeFoulPoints.textContent = homeFoul
}

function guestFoulLimit() {
  foulLimiterMessage2.textContent = "Guest Fouls can't be less than 0."
  guestFoul = 0
  guestFoulPoints.textContent = guestFoul
}


// Period minus =======================================>
function periodMinus() {
  periodCount -= 1
  periodCountPoints.textContent = periodCount
  if (periodCount < 0) {
    lowerLimit()
  }
  else {
    periodLimiterMessage.textContent = ""
  }
}

// Period add
function periodAdd() {
  periodCount += 1
  periodCountPoints.textContent = periodCount
  if (periodCount > 4) {
    upperLimit()
  }
  else {
    periodLimiterMessage.textContent = ""
  }
}

// Period Limiter
var periodLimiterMessage = document.getElementById("periodLimiterMessage")

function lowerLimit() {
  periodLimiterMessage.textContent = "Periods can't be less than 0."
  periodCount = 0
  periodCountPoints.textContent = periodCount
}

function upperLimit() {
  periodLimiterMessage.textContent = "Periods can't be more than 4."
  periodCount = 4
  periodCountPoints.textContent = periodCount
}

// New Game
function newGame() {
  homePoints = 0
  guestPoints = 0
  homeFoul = 0
  guestFoul = 0
  periodCount = 1
  changeAll()
  
  if (periodLimiterMessage.textContent === "Periods can't be less than 0.") {
    periodLimiterMessage.textContent = ""
  }
  
  if (foulLimiterMessage1.textContent === "Home Fouls can't be less than 0." || foulLimiterMessage2.textContent === "Guest Fouls can't be less than 0.") {
    
    foulLimiterMessage1.textContent = ""
    foulLimiterMessage2.textContent = ""
  }
}
