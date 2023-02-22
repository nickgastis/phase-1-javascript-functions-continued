function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  saturdayFun('bathe my dog!')

  function mondayWork(task = 'go to the office') {
    return `This Monday, I will ${task}.`
    }
mondayWork('work from home')

function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  }
}
  
