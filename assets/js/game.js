var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney =  10;

//you can also log multiple values at once
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble",];
var enemyHealth = 50;
var enemyAttack = 12;

var fight =  function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            window.alert (playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 10;
            console.log ("playerMoney", playerMoney);
            break;
        }
    }
    

    if (promptFight === "fight" || promptFight === "FIGHT") {

    //subtract the value of player attack from enemy health and use that result to update the value in the enemy health variable

    enemyHealth = enemyHealth - playerAttack;

    //log resulting message to console so we know it worked

    console.log (
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " remaining. "
    );

    //check enemys health

    if (enemyHealth <= 0 ) {
        window.alert(enemyName + " has died!");


        //award money
        playerMoney = playerMoney + 20;
        break;
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
        break;
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    }

    else {
        window.alert("You need to choose a valid option. Try again!");
    }

};
    }

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}