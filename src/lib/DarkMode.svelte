<script>
  let buttonClick = false;

  const toggleMode = () => {
  document.querySelector("body").style.backgroundColor = buttonClick ? "rgb(46, 41, 78)" : "rgb(255, 255, 255)";
  document.querySelector("button").style.backgroundColor = buttonClick ? "rgb(255, 255, 255)" : "rgb(46, 41, 78)";
  document.querySelector("body").style.color = buttonClick ? "rgb(255, 255, 255)" : "rgb(46, 41, 78)";
  document.querySelector("button").style.color = buttonClick ? "rgb(46, 41, 78)" : "rgb(255, 255, 255)";
  buttonClick = !buttonClick;
  document.querySelector("body").style.transition = "background-color 200ms ease-in-out";
  };

</script>
<button on:click={toggleMode}>
  {buttonClick ? 'Dark Mode' : 'Light Mode'}
</button>

<style>
  button {
    transition: all 0.2s;
  }

  button:active {
  transform: scale(0.95);
}

</style>
