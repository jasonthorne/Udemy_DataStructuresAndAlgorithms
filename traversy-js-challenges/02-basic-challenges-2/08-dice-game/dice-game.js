
/*
  { dice1: 1, dice2: 5, sum: 6, result: 'roll again' },
  { dice1: 5, dice2: 6, sum: 11, result: 'win' },
  { dice1: 1, dice2: 1, sum: 2, result: 'lose' }
*/

function getRandomInt(){
    min = Math.ceil(1); //lowest num
    max = Math.floor(6); //highest num
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function diceGameSimulation(rolls) {

    const wins = [7,11];
    const loses = [2,3,12];
    const results = [];

    for(let i=1;i<=rolls;i++){

        const roll = {
            dice1: getRandomInt(),
            dice2: getRandomInt()
        }

        roll.sum = roll.dice1+roll.dice2;

        if(loses.includes(roll.sum)){
            roll.result = 'lose';
        }else if(wins.includes(roll.sum)){
            roll.result = 'win';
        }else{
            roll.result = 'roll again';
        }
        results.push(roll);
    }
    return results;
}

module.exports = diceGameSimulation;
