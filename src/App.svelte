<script >
  import gridEval from "./gridEval.js"

  //gridEval()
  let grid = [["","",""],["","",""],["","",""]];
  let turn = "X"
  let won = false
  let score_ai = 0
  let score_human = 0

  //phone compat var
  let pressed = [["","",""],["","",""],["","",""]];

  function gridUpdate(i1, i2, array, which_array) {
    if( array[i1][i2] === ""){
      //place x or o at selected spot
      array[i1][i2] = turn 
    }
    if (which_array === "grid")
    {
      grid = array
      //change the turn
      if(turn === "X"){
	turn = "O"
      }
      else{
	turn = "X"
      }
    }
    else{
      pressed = array
    }
  }
</script>

<main>
  
  <div class="menu"> 
    Score {score_human}:{score_ai}
    <button class="restart-btn" 
	    on:click={()=>{
	      grid = [["","",""],["","",""],["","",""]]
	      pressed = [["","",""],["","",""],["","",""]]
	      won=false}}>
    {won == false ? "reset" : "restart"}
    </button>
  </div>

  <div class="gridContainer">
    {#each grid as row ,index1}
    <div>
    {#each row as item,index2}  
      <button on:click={() => { 
	      if(won === false){
		gridUpdate(index1,index2,grid,"grid") 
		setTimeout(() => { gridUpdate(index1,index2, pressed,"pressed") }, 300);
		}}} 
	      class={grid[index1][index2] === "O" || grid[index1][index2] === "X" ? "box" : "box-empty"}
	      id={pressed[index1][index2] === "O" || pressed[index1][index2] === "X" ? "pressed" : ""}>
	{item}
      </button> 
    {/each}
    </div>
    {/each}
  </div>

</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow:hidden;
  }

  .menu{
    color: white;
    position: absolute;
    top:9vh;
    display:flex;
    flex-direction:column;
    font-size:30px;
  }

  .restart-btn{
    font-size:20px;
    margin-top:20px;
    background:transparent;
    border:1px solid gray;
    border-radius:5px;
    padding: 5px;
    color:white;
    cursor:pointer;
  }
  
  .gridContainer{
    width:50vw;
    height:50vw;
    position:absolute;
  }

  .box-empty, .box{
    width: calc(50vw/3);
    height: calc(50vw/3);
    background-color: transparent;
    border: 1px solid #99999988;
    color: white;
    font-size: 30px;
    vertical-align: middle;
  }

  .box-empty:hover{
    background-color: #00000055;;
  }
     
  #pressed:active {
    animation: notEmpty 0.1s forwards;
  }

  @keyframes notEmpty{
    100%{
      background-color: #990000;
    }
  }

  @media only screen and (min-aspect-ratio: 1/1){
    .menu{
      flex-direction: row;
      top: 7vh;
      font-size:30px;
    }

    .gridContainer{
      width:50vh;
      height:50vh;
    }

    .box-empty, .box{
      width: calc(50vh/3);
      height: calc(50vh/3);
    }
  }

</style>
