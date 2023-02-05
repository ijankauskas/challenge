<template>
    <div class="hello">
      <div class="body">
        <div class="moneInput">
          <select name="" id="monedaUno" v-on:change="calcular()">
            <SelectOpt />
          </select>
          <input type="number" name="" id="cantidadUno" v-on:input="calcular()">

        </div>
        <div class="cambio">
          <button v-on:click="cambiar()" >Cambio</button>
          <div id="taza"> 1 USD = {{ taza }} </div>
        </div>
        <div class="moneInput">
          <select id="monedaDos" v-on:change="calcular()">
            <SelectOpt />
          </select>
          <input type="number" id="cantidadDos" v-on:input="calcular()">
        </div>
      </div>
    </div>
</template>
    
  <script>
  import SelectOpt from "./SelectOpt.vue";
  
  export default {
    name: 'ComparacionValores',
    props: {
      msg: String,
    },
    components:{
      SelectOpt
    },
    data(){
      return{
        monedas:null,
        taza: '1 USD'
      }
    },
    methods: {
      callApi: function(){
        fetch('https://v6.exchangerate-api.com/v6/21b65dd7cd9d8e07205c063f/latest/USD')
        .then(response => response.json())
        .then(data => {
            this.monedas = data.conversion_rates 
        })
        .catch(error => console.log('error:', error));
      },
      calcular(){
        const monedaUno = document.getElementById('monedaUno');
        const monedaDos = document.getElementById('monedaDos');
        const cantidadUno = document.getElementById('cantidadUno');
        const cantidadDos = document.getElementById('cantidadDos');
        this.taza = this.monedas[monedaDos.value] + ' ' + monedaDos.value

        //la api tiene como moneda principal el dolar
        if (monedaUno.value === 'USD') {
          cantidadDos.value = (cantidadUno.value * this.monedas[monedaDos.value] ).toFixed(4)
        }else{
          //calculo el cambio de las monedas si es distinto de usd
          let cambio = this.monedas[monedaDos.value] / this.monedas[monedaUno.value]
          cantidadDos.value = (cantidadUno.value * cambio).toFixed(4)
        }



      },
      cambiar(){
        const monedaUno = document.getElementById('monedaUno');
        const monedaDos = document.getElementById('monedaDos');
        
        const temp =  monedaUno.value
        monedaUno.value = monedaDos.value
        monedaDos.value = temp

        this.calcular()
        
      }
    }
    ,
    beforeMount(){
      this.callApi()
    }
  }
  </script>

  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body{
  width: 40%;
  margin: auto;
}

.moneInput{
  width: 100%;
  padding: 24px;
}

.moneInput input{
  width: 80%;
  margin: 10px;
  margin-top: 5px;
  background: #6c6e72;
  border-radius: 3px;
  padding: 8px 6px;
  box-shadow: 0;
  border: solid 1px #6c6e72;
  outline: none;
  color: #b8b6b4;
}

select{
  margin: 10px;
  margin-top: 5px;
  background: #6c6e72;
  border-radius: 3px;
  padding: 8px 6px;
  box-shadow: 0;
  border: solid 1px #6c6e72;
  outline: none;
  color: #b8b6b4;
}


.cambio{
  display: flex;
  align-items: center;
  justify-content: space-around;
}

button{
    border-radius: 5px;
    background: linear-gradient( to right, #47bfff 5%, #1a44c2 60%);
    text-shadow: 1px 1px 0px rgb(0 0 0 / 30%);
    background-position: 25%;
    background-size: 330% 100%;
    width: 20%;
    padding: 8px 0px;
    border: solid 1px black;
}

button:hover{
  background: #47bfff 5%;
}

#taza{
  color: white;
  font-size: 24px;
}



</style>
  