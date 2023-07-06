<script lang="ts">
  import gridEval from "./gridEval.js"
  gridEval()
  let grid = [["","",""],["","",""],["","",""]];
  let turn = "X"
  let won = false

  function gridUpdate(i1, i2) {
    if( grid[i1][i2] === ""){
      //place x or o at selected spot
      grid[i1][i2] = turn

      //change the turn
      if(turn === "X"){
	turn = "O"
      }
      else{
	turn = "X"
      }
    }
  }

</script>

<main>
  
  <div class="title">Select box to play</div>

  <div>
    {#each grid as row ,index1}
    <div>
    {#each row as item,index2}  
      <button on:click={() => {gridUpdate(index1,index2)}} class="box">
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
  }
  .title {
    color: white;
  }
  
  .box{
    width: 100px;
    height:100px;
    padding: 10px;
    background-color: transparent;
    border: 1px solid #99999988;
    margin: 3px;
    color: white;
    font-size: 30px;
    vertical-align: middle;
  }

  .box:hover {
    background-color:white;
  }
</style>
