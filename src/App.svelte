<script >
  //icons
  import FaRobot from 'svelte-icons/fa/FaRobot.svelte'
  import FaUser from 'svelte-icons/fa/FaUser.svelte'

  //my functions
  import gridEval from "./gridEval.js"

  //gridEval()
  let grid = [["","",""],["","",""],["","",""]]
  let connectedSquares = [["","",""],["","",""],["","",""]] 
  let turn = "X"
  let won = false
  let move = 0
  let score_p1 = 0
  let score_p2 = 0
  let score_human = 0
  let score_ai = 0
  let mode = "human"

  //phone compat var
  let pressed = [["","",""],["","",""],["","",""]];

  function gridUpdate(i1, i2, array, which_array) {
    if( array[i1][i2] === ""){
      //place x or o at selected spot
      array[i1][i2] = turn 
    
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
    }}
</script>

<main>
  
  <div class="menu"> 
    
    <div class="score-container">
      <button class="ai-human-btn"
	      on:click={()=>{
		if(mode === "human"){
		  mode = "ai"
		}
		else{
		  mode = "human"
		}
		grid = [["","",""],["","",""],["","",""]]
		pressed = [["","",""],["","",""],["","",""]]
		won=false
		turn = "X"
		connectedSquares = [["","",""],["","",""],["","",""]]
	      }}>
	      {#if mode === "ai"}
		<FaRobot/>
	      {:else}
		<FaUser/>
	      {/if}
      </button>
      
      <div>
	Score {mode === "ai" ? score_human : score_p1}:{ mode === "ai" ? score_ai : score_p2}
      </div>
    </div>
    
    <button class="restart-btn" 
	    on:click={()=>{
	      grid=[["","",""],["","",""],["","",""]]
	      pressed=[["","",""],["","",""],["","",""]]
	      won=false
	      turn="X"
	      connectedSquares=[["","",""],["","",""],["","",""]]
	      move = 0
	      }}>
    {won == false ? "reset" : "new game"}
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
	        move = move + 1
		let gameEval = gridEval(grid)
		if(gameEval.winner !== ""){
		  won = true;
		  connectedSquares = gameEval.grid
		  if(mode === "ai"){
		    if(gameEval.winner === "X"){
		      score_ai = score_ai + 1
		    }
		    else{
		      score_human = score_human + 1
		    }
		  }
		else{
		  if(gameEval.winner === "X"){
		    score_p1 = score_p1 + 1
		  }
		  else{
		    score_p2 = score_p2 + 1 
		  }
		}
	      }
	      else if(move === 9){
		won = true
	      }
	    }}} 
	      class={grid[index1][index2] === "O" || grid[index1][index2] === "X" ? "box" : "box-empty"}
	      id={won === false ? pressed[index1][index2] !== "" ? "pressed" : "not-pressed" : connectedSquares[index1][index2] !== "" ? "box-connected" : ""}
	      disabled={won === true ? true : false}>
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
  
  .score-container{
    display:flex;
  }

  .ai-human-btn{
    margin-right:10px;
    margin-top:1px;
    padding: 5px 5px 5px 5px;
    width:2.75em;
    height:2.75em;
    background:transparent;
    color: #fffffffd;
    border:1px solid gray;
    border-radius: 5px;
    cursor:pointer;
    vertical-align: middle;
  }

  .ai-human-btn:active{
    background:white;
    color:black;
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

  .restart-btn:active{
    color: black;
    background:white;
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

  #box-connected{
    background: #009900; 
  }
     
  #pressed:active {
    animation: notEmpty 0.1s forwards;
  }
  
  @keyframes notEmpty{
    100%{
      background-color: #990000;
    }
  }
  
  #not-pressed{
    cursor:pointer;
  }

  #not-pressed:hover {
    background-color: #00000099;
  }

  #not-pressed:active{
    animation: Empty 0.1s forwards; 
  }
  
  @keyframes Empty{
    100%{
      background-color: #009900;
    }
  }

  @media only screen and (min-aspect-ratio: 1/1){
    .menu{
      flex-direction: row;
      top: 7vh;
      font-size:30px;
    }

    .restart-btn{
      margin-top:0px;
      margin-left:20px;
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
