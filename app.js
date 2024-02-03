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



function updatePage() {
    document.getElementById('moonRocks').innerHTML = Math.floor(moonRocksTotal)
    logUpgradePrices()
}


function logUpgradePrices() {
    clickUpgrades.forEach(upgrade => {
        document.getElementById(`${upgrade.name}Price`).innerHTML = Math.floor(upgrade.price)
        // rocksPerClick += (upgrade.multiplier * upgrade.quantity)
        // document.getElementById
    })
    automaticUpgrades.forEach(upgrade => {
        document.getElementById(`${upgrade.name}Price`).innerHTML = Math.floor(upgrade.price)
    })
}

function buyShovels() {
    const shovel = clickUpgrades.find(upgrade => upgrade.name == 'shovel')

    if (moonRocksTotal >= shovel.price) {
        moonRocksTotal -= shovel.price
        shovel.quantity++
        shovel.price *= 1.25
        shovel.price = Math.floor(shovel.price)
    }
    else {
        alert(`Sorry Dude, you don't have enough resources 😒`)
    }
    document.getElementById('shovels').innerHTML = (shovel.quantity)
    document.getElementById('shovelsXRocks').innerHTML = (shovel.quantity * shovel.multiplier)
    updatePage()
}

function buyPickaxe() {
    const pickaxe = clickUpgrades.find(upgrade => upgrade.name == 'pickaxe')
    if (moonRocksTotal >= pickaxe.price) {
        moonRocksTotal -= pickaxe.price
        pickaxe.quantity++
        pickaxe.price *= 1.25
        pickaxe.price = Math.floor(pickaxe.price)
    }
    else {
        alert(`Sorry Dude, you don't have enough resources 😒`)
    }
    document.getElementById('pickaxes').innerHTML = (pickaxe.quantity)
    document.getElementById('pickaxesXRocks').innerHTML = (pickaxe.quantity * pickaxe.multiplier)
    updatePage()
}

function buyRover() {
    const rover = automaticUpgrades.find(upgrade => upgrade.name == 'rover')
    if (moonRocksTotal >= rover.price) {
        moonRocksTotal -= rover.price
        rover.quantity++
        rover.price *= 1.25
        rover.price = Math.floor(rover.price)
    }
    else {
        alert(`Sorry Dude, you don't have enough resources 😒`)
    }
    document.getElementById('rovers').innerHTML = (rover.quantity)
    document.getElementById('roversXRocks').innerHTML = (rover.quantity * rover.multiplier)
    updatePage()
}

function buyBullDozer() {
    const bulldozer = automaticUpgrades.find(upgrade => upgrade.name == 'bulldozer')
    if (moonRocksTotal >= bulldozer.price) {
        moonRocksTotal -= bulldozer.price
        bulldozer.quantity++
        bulldozer.price *= 1.25
        bulldozer.price = Math.floor(bulldozer.price)
    }
    else {
        alert(`Sorry Dude, you don't have enough resources 😒`)
    }
    document.getElementById('bullDosers').innerHTML = (bulldozer.quantity)
    document.getElementById('bullDosersXRocks').innerHTML = (bulldozer.quantity * bulldozer.multiplier)
    updatePage()
}



function mineMoon() {
    moonRocksTotal++
    callClickUpgradesMultiplier()
    updatePage()
}


function callClickUpgradesMultiplier() {
    clickUpgrades.forEach(upgrade => {
        moonRocksTotal += upgrade.quantity * upgrade.multiplier

    });
    updatePage()
}

function callAutomaticUpgradeMultiplier() {
    automaticUpgrades.forEach(upgrade => {
        moonRocksTotal += upgrade.quantity * upgrade.multiplier
    })
    updatePage()
}

setInterval(callAutomaticUpgradeMultiplier, 3000)

logUpgradePrices()


