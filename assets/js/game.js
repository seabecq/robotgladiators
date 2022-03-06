var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//you can also log multiple values at once
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight =  function() {
    //alert the players they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //subtract the value of player attack from enemy health and use that result to update the value in the enemy health variable

    enemyHealth = enemyHealth - playerAttack;

    //log resulting message to console so we know it worked

    console.log (
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " remaining. "
    );

    //check enemys health

    if (enemyHealth <= 0 ) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //subtract the value of enemy attack from player health and use that result to update player health variable

    playerHealth = playerHealth - enemyAttack;

    //log resulting message in console

    console.log (
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    //check players health

    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

fight ();