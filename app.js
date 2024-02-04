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


// function sweetAlert() {
//     Swal.fire({
//         position: "center",
//         icon: "error",
//         title: "Sorry Dude, you don't have enough resources 😒",
//         showConfirmButton: false,
//     });
// }


// NOTE Purchase upgrades
function buyShovel() {
    const shovel = clickUpgrades.find(upgrade => upgrade.name == 'shovel')
    if (moonRocksTotal >= shovel.price) {
        moonRocksTotal -= shovel.price
        shovel.quantity++
        shovel.price *= 1.25
        shovel.price = Math.floor(shovel.price)
        document.getElementById('shovels').innerHTML = (shovel.quantity)
        document.getElementById('shovelsXRocks').innerHTML = (shovel.quantity * shovel.multiplier)
        updatePage()
    }
    else {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Sorry Dude, you don't have enough resources 😒",
            showConfirmButton: false,
        });
    }

}
function buyPickaxe() {
    const pickaxe = clickUpgrades.find(upgrade => upgrade.name == 'pickaxe')
    if (moonRocksTotal >= pickaxe.price) {
        moonRocksTotal -= pickaxe.price
        pickaxe.quantity++
        pickaxe.price *= 1.25
        pickaxe.price = Math.floor(pickaxe.price)
        document.getElementById('pickaxes').innerHTML = (pickaxe.quantity)
        document.getElementById('pickaxesXRocks').innerHTML = (pickaxe.quantity * pickaxe.multiplier)
        updatePage()
    }
    else {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Sorry Dude, you don't have enough resources 😒",
            showConfirmButton: false,
        });
    }

}
function buyRover() {
    const rover = automaticUpgrades.find(upgrade => upgrade.name == 'rover')
    if (moonRocksTotal >= rover.price) {
        moonRocksTotal -= rover.price
        rover.quantity++
        rover.price *= 1.25
        rover.price = Math.floor(rover.price)
        document.getElementById('rovers').innerHTML = (rover.quantity)
        document.getElementById('roversXRocks').innerHTML = (rover.quantity * rover.multiplier)
        updatePage()
    }
    else {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Sorry Dude, you don't have enough resources 😒",
            showConfirmButton: false,
        });
    }

}
function buyBullDozer() {
    const bulldozer = automaticUpgrades.find(upgrade => upgrade.name == 'bulldozer')
    if (moonRocksTotal >= bulldozer.price) {
        moonRocksTotal -= bulldozer.price
        bulldozer.quantity++
        bulldozer.price *= 1.25
        bulldozer.price = Math.floor(bulldozer.price)
        document.getElementById('bullDozers').innerHTML = (bulldozer.quantity)
        document.getElementById('bullDozersXRocks').innerHTML = (bulldozer.quantity * bulldozer.multiplier)
        updatePage()
    }
    else {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Sorry Dude, you don't have enough resources 😒",
            showConfirmButton: false,
        });
    }


}

// NOTE Rocks for clicking
function callClickUpgrades() {
    clickUpgrades.forEach(upgrade => {
        moonRocksTotal += upgrade.quantity * upgrade.multiplier

    });
    updatePage()
}
function mineMoon() {
    moonRocksTotal++
    callClickUpgrades()
    updatePage()
}


// NOTE Rocks for Automatic upgrades
function callAutomaticUpgradeMultiplier() {
    automaticUpgrades.forEach(upgrade => {
        moonRocksTotal += upgrade.quantity * upgrade.multiplier
    })
    updatePage()
}

// NOTE Updating the screen
function updateUpgradePrices() {
    clickUpgrades.forEach(upgrade => {
        document.getElementById(`${upgrade.name}Price`).innerHTML = Math.floor(upgrade.price)

    })
    automaticUpgrades.forEach(upgrade => {
        document.getElementById(`${upgrade.name}Price`).innerHTML = Math.floor(upgrade.price)
    })
}
function updateRocksPerClick() {
    let rocksPerClick = 1
    clickUpgrades.forEach(upgrade => {
        rocksPerClick += (upgrade.multiplier * upgrade.quantity)
        document.getElementById(`rocksPerClick`).innerHTML = rocksPerClick
    })
}
function updateRocksPer3s() {
    let rocksPer3s = 0
    automaticUpgrades.forEach(upgrade => {
        rocksPer3s += (upgrade.multiplier * upgrade.quantity)
        document.getElementById(`rocksPer3s`).innerHTML = rocksPer3s
    })
}
function updateMoonRocksTotal() {
    document.getElementById('moonRocks').innerHTML = Math.floor(moonRocksTotal)
}
function updatePage() {
    updateMoonRocksTotal()
    updateUpgradePrices()
    updateRocksPerClick()
    updateRocksPer3s()
}



updatePage()
setInterval(callAutomaticUpgradeMultiplier, 3000)
