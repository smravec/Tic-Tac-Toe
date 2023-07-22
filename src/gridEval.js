export default function gridEval(grid){
  let connectedSquares = [["","",""],["","",""],["","",""]]
  let who_won = ""
  
  //check vertically
  for( let column = 0; column < grid.length; column++){
    
    let counter_X = 0
    let counter_O = 0
   
    //count the x and o in the grid
    for( let row = 0; row < connectedSquares.length; row++ ){
      if(grid[row][column] === "X"){
	counter_X = counter_X + 1
      }  
      else if(grid[row][column] === "O"){
	counter_O = counter_O + 1
      }
    }
    
    //put the connected into array if any
    if( counter_X === 3 || counter_O === 3){
      if(counter_X === 3){
	who_won = "X"
      }
      else if (counter_O === 3){
	who_won = "O"
      }
      for(let row = 0; row < connectedSquares.length; row++){
	connectedSquares[row][column] = who_won
      }

      return {
	winner : who_won,
	grid : connectedSquares
      }
    }
  }

  //check horizontally
  for( let row = 0; row < grid.length; row++){
    
    let counter_X = 0
    let counter_O = 0
   
    //count the x and o in the grid
    for( let column = 0; column < connectedSquares.length; column++ ){
      if(grid[row][column] === "X"){
	counter_X = counter_X + 1
      }  
      else if(grid[row][column] === "O"){
	counter_O = counter_O + 1
      }
    }
    
    //put the connected into array if any
    if( counter_X === 3 || counter_O === 3){
      if(counter_X === 3){
	who_won = "X"
      }
      else if (counter_O === 3){
	who_won = "O"
      }
      for(let column = 0; column < connectedSquares.length; column++){
	connectedSquares[row][column] = who_won
      }

      return {
	winner : who_won,
	grid : connectedSquares
      }
    }
  }

  //check diagonally (only 2 possible diagonals)
  for( let diagonal = 0; diagonal < 2; diagonal++){ 
    
    let counter_X = 0
    let counter_O = 0
 
    //count the x and o in the grid
    if(diagonal === 0){
      for( let item = 0; item < grid.length; item++){
	if(grid[item][item] === "X"){
	  counter_X = counter_X + 1
	}
	else if(grid[item][item] === "O"){
	  counter_O = counter_O + 1
	}
      }
    }
    else{
      let item = 0
      for( let item1 = 2; item1 > -1; item1--){
	if(grid[item1][item] === "X"){
	  counter_X = counter_X + 1
	}
	else if(grid[item1][item] === "O"){
	  counter_O = counter_O + 1
	}
	item = item + 1
      }
    }
   
    //put the connected into array if any
    if( counter_X === 3 || counter_O === 3){
      if(counter_X === 3){
	who_won = "X"
      }
      else if (counter_O === 3){
	who_won = "O"
      }
      if(diagonal === 0){
	for( let item = 0; item < grid.length; item++){
	  connectedSquares[item][item] = who_won 
	}
      }
      else{
	let item = 0
	for( let item1 = 2; item1 > -1; item1--){
	  connectedSquares[item1][item] = who_won
	  item = item + 1
	} 
      }

      return {
	winner : who_won,
	grid : connectedSquares
      }
    }
  }

  //if nothing is found
  return {
    winner : who_won,
    grid : connectedSquares
  }
}
