// Write your JS here
const hero = {
    name: 'skeletor',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'knife',
        damage: 2,
    }
}


// this one works
function rest(object) {
    object.health = 10
    console.log(object.health)
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
   
    console.log(usersName)

    hero.name = usersName

    displayStats()    
}        

// create enemy
const enemy = {
    name: 'danimal',
    heroic: false,
    inventory: [],
    health: 8,
    weapon: {
        type: 'spoon',
        damage: 1,
    }

}