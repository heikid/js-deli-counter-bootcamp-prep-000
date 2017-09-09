var katzDeli = []

function currentLine (line){
  if (!line.length){
  return "The line is currently empty."
}

  const numberAndNames = []

  for (let i=0, l=line.length; i<l; i++){
    numberAndNames.push (`${i+1}. ${line[i]}`)
  }
  return `The line is currently: ${numberAndNames.join(, )}`
};
