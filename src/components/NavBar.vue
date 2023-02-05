<template>
  <div class="hello">
    <nav class="container-menu">
      <div class="desktop-link">
        <router-link class="a" to="/">
          <p>Login</p>
          <div class="underline"></div>
        </router-link>
      </div>
      <div class="desktop-link">
          <router-link class="a" to="/ComparacionValores">
            <p>Comparacion Valores</p>
            <div class="underline"></div>
          </router-link>
      </div>
      <div class="desktop-link">
          <router-link class="a" to="/ConvertidorDivisas">
            <p>Convertidor Divisas</p>
            <div class="underline"></div>
          </router-link>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'NavBar',
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


nav{
  background-color: black;
}

.container-menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.container-menu .desktop-link{
    cursor: pointer;
    height: 80px;
    display: flex;
    align-items: center;
}

.container-menu .desktop-link .a{
    text-decoration: none;
    width: 100%;
    height: 100%;
    letter-spacing: 0.08em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.container-menu .desktop-link .a p{
    color: white;
    font-size: 18px;
    text-transform: uppercase;
    padding: 7.5px 16px;
    text-align: center;
    margin: auto;
    margin-right: 5px;
}

.container-menu .desktop-link .a .underline{
    padding: 2px;
}

.container-menu .desktop-link .a:hover p{
    background-color: rgba(128,128,128,.3);
    border-radius: 6.4px;
}

.container-menu .desktop-link .a:hover .underline{
    background-color: white;
    border-radius: 6.4px;
}

</style>
