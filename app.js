let moonRocksTotal = 0

let clickUpgrades = [
    {
        name: 'shovel',
        price: 50,
        quantity: 0,
        multiplier: 2,
    },
    {
        name: 'pickaxe',
        price: 500,
        quantity: 0,
        multiplier: 5,
    }
]

let automaticUpgrades = [
    {
        name: 'rover',
        price: 1000,
        quantity: 0,
        multiplier: 50,
    },
    {
        name: 'bulldozer',
        price: 12000,
        quantity: 0,
        multiplier: 500,
    }
]



function updateMoonRocks() {
    document.getElementById('moonRocks').innerHTML = Math.round(moonRocksTotal)
}



function buyShovels() {
    const shovel = clickUpgrades.find(upgrade => upgrade.name == 'shovel')
    if (moonRocksTotal >= shovel.price) {
        moonRocksTotal -= shovel.price
        shovel.quantity++
        shovel.price *= 1.25
    }
    updateMoonRocks()
}

function buyPickaxe() {
    const pickaxe = clickUpgrades.find(upgrade => upgrade.name == 'pickaxe')
    if (moonRocksTotal >= pickaxe.price) {
        moonRocksTotal -= pickaxe.price
        pickaxe.quantity++
        pickaxe.price *= 1.25
    }
    updateMoonRocks()
}




function mineMoon() {
    moonRocksTotal++
    callClickUpgradesMultiplier()
    updateMoonRocks()
}


function callClickUpgradesMultiplier() {
    clickUpgrades.forEach(upgrade => {
        moonRocksTotal += upgrade.quantity * upgrade.multiplier

    });
    updateMoonRocks()
}

function callAutomaticUpgradeMultiplier() {
    automaticUpgrades.forEach(upgrade => {
        moonRocksTotal += upgrade.quantity * upgrade.multiplier
    })
    updateMoonRocks()
}






