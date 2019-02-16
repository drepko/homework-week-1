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

// calls the rest() function with argument 'hero' when innImg is clicked
const innImg = document.getElementById('inn')
innImg.onclick = function() {
    rest(hero)
}

// this one works
function rest(object) {
    object.health = 10
    return object
}

// calls pickUpItem() function with argument 'hero' and 'hero.weapon' when daggerImg is clicked
const daggerImg = document.getElementById('dagger')
daggerImg.onclick = function() {
    pickUpItem(hero, hero.weapon)
    
}
// this one works
function pickUpItem(heroObject, weaponObject) {
    heroObject.inventory.push(weaponObject)
    weaponObject.type = 'dagger',
    weaponObject.damage = 2
}

// adds weapon as first item of inventory array (only if the array is not empty)
function equipWeapon(heroObject) {
   if(checkInventoryArray(heroObject)) {
       return null
   }
    heroObject.weapon = heroObject.inventory[0]
    
}


// checks if the array is empty
function checkInventoryArray(heroObject) {
    if (heroObject.inventory.length === 0) {
        return true
    }
}





