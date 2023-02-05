<template>
    <div class="hello">
        <div class="comparar">
            <div>
                <div class="monePrin">
                    <select name="" id="moneCom" v-on:change="calcular()">
                        <SelectOpt />
                        
                    </select>
                    <input type="number" id="com" v-on:input="calcular()">
                </div>
            </div>
        </div>

        <h2>Comparar</h2>

        <div class="monedas">
            <div class="moneCom">
                <select name="" id="mone1" v-on:change="calcular()">
                    <SelectOpt />
                    
                </select>
                <input type="number" id="com1" v-on:input="calcular()">
                <div class="resultado"> {{ resul1 }}</div>
            </div>
            <div class="moneCom">
                    <select name="" id="mone2" v-on:change="calcular()">
                        <SelectOpt />
                    
                    </select>
                <input type="number" id="com2" v-on:input="calcular()">
                <div class="resultado">  {{ resul2 }}</div>
            </div>
            <div class="moneCom">
                <select name="" id="mone3" v-on:change="calcular()">
                    <SelectOpt />

                </select>
                <input type="number" id="com3" v-on:input="calcular()">
                <div class="resultado"> {{ resul3 }}</div>
            </div>
            <div class="moneCom">
                    <select name="" id="mone4" v-on:change="calcular()">
                        <SelectOpt />

                    </select>
                <input type="number" id="com4" v-on:input="calcular()">
                <div class="resultado">{{ resul4 }}</div>
            </div>
            <div class="moneCom">
                    <select name="" id="mone5" v-on:change="calcular()">
                        <SelectOpt />

                    </select>
                <input type="number" id="com5" v-on:input="calcular()">
                <div class="resultado">{{ resul5 }}</div>
            </div>
        </div>
    </div>
</template>
  
<script>

    import SelectOpt from "./SelectOpt.vue";

    export default {
        name: 'ComparacionValores',
        data(){
            return{
                monedas: null,
                resul1: null,
                resul2: null,
                resul3: null,
                resul4: null,
                resul5: null,
            }
        },
        components:{
        SelectOpt
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
                const moneCom = document.getElementById("moneCom")
                const com = document.getElementById("com")
                const mone1 = document.getElementById("mone1")
                const com1 = document.getElementById("com1")
                const mone2 = document.getElementById("mone2")
                const com2 = document.getElementById("com2")
                const mone3 = document.getElementById("mone3")
                const com3 = document.getElementById("com3")
                const mone4 = document.getElementById("mone4")
                const com4 = document.getElementById("com4")
                const mone5 = document.getElementById("mone5")
                const com5 = document.getElementById("com5")

                //la api tiene como moneda principal el dolar
                if (moneCom.value == 'USD') {
                    this.resul1 = (com.value - (com1.value / this.monedas[mone1.value]) ).toFixed(4)
                    this.resul2 = (com.value - (com2.value / this.monedas[mone2.value]) ).toFixed(4)
                    this.resul3 = (com.value - (com3.value / this.monedas[mone3.value]) ).toFixed(4)
                    this.resul4 = (com.value - (com4.value / this.monedas[mone4.value]) ).toFixed(4)
                    this.resul5 = (com.value - (com5.value / this.monedas[mone5.value]) ).toFixed(4)
                }else{
                    //calculo el cambio de las monedas si es distinto de usd
                    let cambio1 = this.monedas[mone1.value] / this.monedas[moneCom.value]
                    this.resul1 = (com.value - (com1.value / cambio1)).toFixed(4)
                    let cambio2 = this.monedas[mone2.value] / this.monedas[moneCom.value]
                    this.resul2 = (com.value - (com2.value / cambio2)).toFixed(4)
                    let cambio3 = this.monedas[mone3.value] / this.monedas[moneCom.value]
                    this.resul3 = (com.value - (com3.value / cambio3)).toFixed(4)
                    let cambio4 = this.monedas[mone4.value] / this.monedas[moneCom.value]
                    this.resul4 = (com.value - (com4.value / cambio4)).toFixed(4)
                    let cambio5 = this.monedas[mone5.value] / this.monedas[moneCom.value]
                    this.resul5 = (com.value - (com5.value / cambio5)).toFixed(4)
                }
                
            }

        },
        beforeMount(){
            this.callApi()
        }
    }
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comparar{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
}

h2{
    color: white;
    font-size: 36px;
    text-align: center;
}

.monedas{
    display: flex;
    justify-content: space-between;
    padding: 24px;
}

.resultado{
    font-size: 20px;
    color: white;
}

.monePrin input{
    width: 350px;
  margin: 10px;
  margin-top: 5px;
  background: #6c6e72;
  border-radius: 3px;
  padding: 8px 6px;
  box-shadow: 0;
  border: solid 1px #6c6e72;
  outline: none;
}

.moneCom input{
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
</style>
  