<template>
  <div id="homepage-content">
    <div class="homepage">
      <div class="blurb-content">
        <h1>Howdy, Partner!</h1>
        <p>Have I seen you 'round these parts?</p>
        <span>
          <button @click="signup = true, signin=false" class="auth-button">I'm a new arrival</button>
          <button @click="signin = true, signup=false" class="auth-button">I'm already a miner</button>
        </span>
        <div v-if="signup">
          <p>Sign Up!</p>
        </div>
        <div v-if="signin">
          <p>Sign in!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: false,
      signup: false,
    }
  }
}
</script>

<style lang="scss">
  #homepage-content {
    display: grid; 
    grid-template-areas: "blurb";
    background-image: url('../assets/mountains.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 46em;
    justify-items: center;
    align-items: center;
  }

  .homepage {
    grid-area: blurb;
    text-align: center;
    h1 {
      font-family: "Rye", sans-serif;
      font-size: 3em;
    }
    p {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1.2em;
      margin-top: 1em;
    }
  }

  .blurb-content {
    background-color: white;
    padding: 2em;
    padding-top: 4em;
    padding-bottom: 4em;
    border-radius: 1em;
    border: .1em black solid;
  }

  .auth-button {
    padding: 1em;
    font-size: 1em;
    margin: 2em;
    background: none;
    border-radius: 1em;
    outline: none;
    cursor: pointer;
  }

</style>
