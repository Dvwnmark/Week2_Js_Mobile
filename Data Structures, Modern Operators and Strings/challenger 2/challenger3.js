const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🟨 Yellow card'],
    [69, '🟥 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🟨 Yellow card'],
  ]);
  
  // Task 1: Create an array of unique game events
  const events = [...new Set(gameEvents.values())];
  
  // Task 2: Remove the unfair yellow card from minute 64
  gameEvents.delete(64);
  
  // Task 3: Compute and log the average event frequency
  const totalMinutes = 90;
  const eventCount = gameEvents.size;
  const averageEventFrequency = totalMinutes / eventCount;
  console.log(`An event happened, on average, every ${averageEventFrequency} minutes`);
  
  // Task 4: Loop over gameEvents and log each element with half information
  for (const [minute, event] of gameEvents) {
    const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`[${half}] ${minute}: ${event}`);
  }
  