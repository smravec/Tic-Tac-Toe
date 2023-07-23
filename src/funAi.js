export default function funAi(grid){
  //Check if there are any squares that I can win
  

  //Check if there are any squares that cant block opponent win

 
  //Else play random move
  while(true){
    let random_row = Math.floor(Math.random() * 3);
    let random_column = Math.floor(Math.random() * 3);
    
    //check if you can play that move
    if(grid[random_row][random_column] === ""){
      return {
	column: random_column,
	row: random_row
      }
    }
  }
}
