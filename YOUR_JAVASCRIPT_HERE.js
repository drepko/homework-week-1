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
    return object
}

// check if dagger is clickable
const daggerImg = document.getElementById('dagger')
daggerImg.onclick = function() {
    pickUpItem(hero, hero.weapon)
    
}

function pickUpItem(heroObject, weaponObject) {
    heroObject.inventory.push(weaponObject)
    weaponObject.type = 'dagger',
    weaponObject.damage = 2
}


function equipWeapon(heroObject) {
    if (heroObject.inventory.length < 0) {
        return false
    }
    heroObject.weapon = heroObject.inventory[0]
    // if (heroObject.inventory.length < 0) {
        
    // }
}




