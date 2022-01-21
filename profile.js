let favoriteGame = document.querySelector('form#guess')

function unhide(evt) {
    evt.preventDefault()
    alert("If you guessed Legend of Zelda, you'd be correct!")
    document.querySelector('.game').style.visibility = 'visible'
    document.querySelector('.favoriteGame').style.visibility = 'visible'
}
favoriteGame.addEventListener('submit', unhide)

let food = document.querySelector('.food')

function topChef(evt){
    alert('I can cook lots of stuff!')
    document.querySelector('.foodPic').style.visibility = "visible"
}

food.addEventListener('click',topChef)

let travel = document.querySelector('.travel')

function frequentTraveler(evt){
    alert("It'd be easier to list the places I haven't been!")
    document.querySelector('.travelPic').style.visibility = 'visible'
}

travel.addEventListener('click',frequentTraveler)

let creative = document.querySelector('.creative')

function beCreative(evt){
    alert("How else would I have made this website?")
    document.querySelector('.createPic').style.visibility = 'visible'
}
creative.addEventListener('click', beCreative)