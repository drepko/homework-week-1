// Write your JS here
const hero = {
    name: 'Skeletor',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'spoon',
        damage: 2,
    }
}


// this one works
function rest(object) {
    object.health = 10
    console.log(object.health)
    displayStats()
    return object
}

// calls pickUpItem() function with argument 'hero' and 'hero.weapon' when daggerImg is clicked
const daggerImg = document.getElementById('dagger')
daggerImg.onclick = () => {
    pickUpItem(hero, hero.weapon)
}
    

// this one works
function pickUpItem(heroObject, weaponObject) {
    heroObject.inventory.push(weaponObject)
    weaponObject.type = 'dagger',
    weaponObject.damage = 2
    console.log(heroObject.inventory)
}

// adds weapon as first item of inventory array (only if the array is not empty)
function equipWeapon(heroObject) {
   if(checkInventoryArray(heroObject)) {
       return null
   }
    heroObject.weapon = heroObject.inventory[0]    
    console.log(heroObject.weapon)
    displayStats()
}

// checks if the array is empty
function checkInventoryArray(heroObject) {
    if (heroObject.inventory.length === 0) {
        return true
    }
}

// - Write `displayStats` function that writes your hero's name, health, weapontype, 
// weapon damage to the page. Call it at the end of your script

function displayStats() {
    // gather data
    let name = hero.name
    const health = hero.health
    const weaponType = hero.weapon.type
    const weaponDamage = hero.weapon.damage

    //declare needed elements
    const nameP = document.createElement('p')
    const healthP = document.createElement('p')
    const weaponTypeP = document.createElement('p')
    const weaponDamageP = document.createElement('p')

    //adjust the created elements 
    nameP.innerHTML = name
    healthP.innerHTML = health
    weaponTypeP.innerHTML = weaponType
    weaponDamageP.innerHTML = weaponDamage

    // append as children of divs
    const nameDiv = document.getElementById('name')
    const healthDiv = document.getElementById('health')
    const weaponDiv = document.getElementById('weapon')
    const damageDiv = document.getElementById('damage')
    
    nameDiv.appendChild(nameP)
    healthDiv.appendChild(healthP)
    weaponDiv.appendChild(weaponTypeP)
    damageDiv.appendChild(weaponDamageP)
}

displayStats()

 // let user fill in name + display 
function submitName(event) {
    event.preventDefault()

   
    // gather data
    const inputField = document.getElementById('userName')
    let usersName = inputField.value

    hero.name = usersName

    displayStats()       
}        

// create enemy
const enemy = {
    name: 'Dragon',
    heroic: false,
    inventory: [],
    health: 5,
    weapon: {
        type: 'fire',
        damage: 5,
    }

}

// delete enemy's weapon by clicking
const fireImage = document.getElementById('fire')
fireImage.style.display = 'block'


function deleteFire() {
    if (hero.health > 8 && hero.health >= 10) {
        alert('Be carefull, fire can burn. You lost some health points. Try again!')
        hero.health-=5;
        displayStats()
    } 
    fireImage.style.display = 'none'
    alert('You made your enemy very weak!')
    enemy.weapon.type = '-'
    enemy.weapon.damage = '-'
    displayEnemyStats()
    
}

// destroy dragon by clicking
function destroyDragon() {
    if (fireImage.style.display === 'block') {
    alert('Watch out, get rid of his fire first!')
    } else {

    alert('Destroy dragon. Keep attacking him!')
    enemy.health-= 2
    hero.health -= 4
    console.log(enemy.health)
    displayEnemyStats()
    displayStats()

    if (hero.health <= 0) {
        alert('GAME OVER: You have been destroyed.')
    }

    if(enemy.health <= 0) {
        const dragon = document.getElementById('dragon')
        dragon.style.display = 'none'
        alert('YOU WIN: Your enemy has been destroyed!')
        
    }
    }
}

function displayEnemyStats() {
    // gather data
    enemyName = enemy.name
    enemyHealth = enemy.health
    enemyWeaponType = enemy.weapon.type
    enemyWeaponDamage = enemy.weapon.damage

    //declare needed elements
    const enemeyNameP = document.createElement('p')
    const enemyHealthP = document.createElement('p')
    const enemyWeaponTypeP = document.createElement('p')
    const enemyWeaponDamageP = document.createElement('p')

    //adjust the created elements 
    enemeyNameP.innerHTML = enemyName
    enemyHealthP.innerHTML = enemyHealth
    enemyWeaponTypeP.innerHTML = enemyWeaponType
    enemyWeaponDamageP.innerHTML = enemyWeaponDamage


    // append as children of divs
    const enemyNameDiv = document.getElementById('enemy-name')
    const enemyHealthDiv = document.getElementById('enemy-health')
    const enemyWeaponDiv = document.getElementById('enemy-weapon')
    const enemyDamageDiv = document.getElementById('enemy-damage')
 
    enemyNameDiv.appendChild(enemeyNameP)
    enemyHealthDiv.appendChild(enemyHealthP)
    enemyWeaponDiv.appendChild(enemyWeaponTypeP)
    enemyDamageDiv.appendChild(enemyWeaponDamageP)
}




// trying other features



displayEnemyStats()