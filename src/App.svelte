<script >
  import gridEval from "./gridEval.js"
  import { onMount } from "svelte"

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

  onMount(() => {
    console.log("this is on mount")
    const canvas = document.querySelector('canvas')
    const context = canvas.getContext('2d');
  })

</script>

<main>
  
  <canvas>
  </canvas>

</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  canvas{
    border: white solid 1px;
    width: 50vw;
    height: 50vw;
  } 
</style>
