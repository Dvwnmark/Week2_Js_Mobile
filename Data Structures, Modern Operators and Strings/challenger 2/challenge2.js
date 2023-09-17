const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
        'Hummels',
        'Witsel',
        'Schulz',
        'Hakimi',
        'Reus',
        'Thorgan Hazard',
        'Brandt',
        'Favre',
    ],
    scored: ['Lewandowski', 'Gnarby', 'Hummels', 'Lewandowski'],
    score: '4:0',
    odds: {
        team1: 1.33,
        draw: 3.25,
        team2: 6.5,
    },
};
// Task 1: Loop over the scored array and print each player name with the goal number
game.scored.forEach((player, index) => {
    console.log(`Goal ${index + 1}: ${player}`);
  });
  
  // Task 2: Calculate and log the average odd
  const odds = Object.values(game.odds);
  const averageOdd =
    odds.reduce((total, odd) => total + odd, 0) / odds.length;
  console.log(`Average odd: ${averageOdd.toFixed(2)}`);
  
  // Task 3: Print the odds in a nice formatted way
  for (const [team, odd] of Object.entries(game.odds)) {
    const teamName =
      team === 'x' ? 'draw' : game[team]; // Get team name from game object
    console.log(`Odd of victory ${teamName}: ${odd}`);
  }
  
  // Task 4: Create an object called 'scorers' with player names as properties and goal count as values
  const scorers = {};
  game.scored.forEach((player) => {
    scorers[player] = (scorers[player] || 0) + 1;
  });
  console.log(scorers);