<template>
    <div class="hello">
        <div class="login-paddin">
            <p class="login-tittle">Iniciar sesión</p>
            <form action="" method="post">
                <div class="input-login">
                    <label for="email">Email de la cuenta</label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
                    > 
                </div>
                <div class="input-login">
                    <label for="password">Contraseña</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                    >
                </div>
                <div class="button-submit">
                    <button type="submit" class="submit-iniciar-sesion"><span>Iniciar sesión</span></button>
                </div>
            </form>
        </div>
    </div>
</template>
    
<script>
    export default {
    name: 'LogIn'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.login-tittle{ 
    text-transform: uppercase;
    color: white;
    text-align: center;
    letter-spacing: 2px;
    font-size: 34px;
    margin-bottom: 35px;
    font-weight: 100;
}

.login-paddin{
    width: 35%;
    margin: auto;
    padding-top: 24px;
}

.login-paddin .input-login{
    padding-bottom: 18px;
}

.input-login label{
    color:  #b8b6b4;
    font-size: 14px;
    padding-bottom: 5px;
}

.input-login input{
    margin-top: 5px;
    background: #6c6e72;
    width: 100%;
    border-radius: 3px;
    padding: 8px 6px;
    box-shadow: 0;
    border: solid 1px #6c6e72;
    outline: none;
    color: #b8b6b4;
}

.input-login input:focus{
    background: #6c6e72;
}


.button-submit{
    text-align: center;
}

.button-submit button{
    margin-top: 25px;
    border-radius: 5px;
    background: linear-gradient( to right, #47bfff 5%, #1a44c2 60%);
    text-shadow: 1px 1px 0px rgb(0 0 0 / 30%);
    background-position: 25%;
    background-size: 330% 100%;
    width: 90%;
    padding: 8px 0px;
    border: solid 1px black;
}

.button-submit button span{
    text-align: center;
    color: white;
    font-size: 15px;
}

.login-paddin .button-submit button:hover{
        background: #47bfff 5%;
    }

</style>
  