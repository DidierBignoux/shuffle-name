function doWork(){
  var referee = 'Jon'; 
  var peeps = ['Zach', 'Rachael', 'Reyna', 'Gloria', 'Zeus', 'Leighton', 'Tim', 'Will', 'Emily', 'Eric', 'Bruce', 'Real'];
  var teamNames = [
    'Fire Breathing Rubber Duckies', 'Fire Breathing Rubber Duckies', 'Fire Breathing Rubber Duckies', 
    'The Cereal Killers', 'The Cereal Killers', 'The Cereal Killers', 
    'French Toast Mafia', 'French Toast Mafia', 'French Toast Mafia',
    'Blue Barracudas', 'Blue Barracudas', 'Blue Barracudas'
  ]

  var teams = {};
  peopleCount = peeps.length;
  for (var i = 0; i < peopleCount; i++){
    var randomPeepIndex = Math.floor(Math.random()*(peeps.length - 1));
    peep = peeps.splice(randomPeepIndex, 1)[0];
    var randomTeamIndex = Math.floor(Math.random()*(peeps.length - 1));
    
    team = teamNames.splice(randomTeamIndex, 1)[0];    
    teams[team] = teams[team] || []
    teams[team].push(peep);
  }
  return teams;
}

doWork();
