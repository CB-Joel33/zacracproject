<template>
  <div class="mainbody">
    <div class="grid grid-cols-2 h-screen overflow-hidden">
      <div>
        <div style="margin-left: 20%;">
          <div class="heading">
            <img src="@/assets/Logo.png">
            <div style="margin-top: 17px;">
              <p>
                Don't have an account?
                <router-link to="/register" style="margin-left: 5px;">Sign Up</router-link>
              </p>
            </div>
          </div>

          <div v-if="errormsg" style="color:red; margin: 10px">
            {{ errormsg }}
          </div>

          <p class="signupbold">Log in</p>

          <div class="inputwrapper">
            <form @submit.prevent="sign_in">
              <img src="@/assets/et_profile-male (1).png" class="icons" style="top: 15px;">
              <input type="email" placeholder="Email Address" class="forms" v-model="loginForm.email">

              <img src="@/assets/arcticons_password.png" class="icons" style="top: 65px;">
              <input type="password" placeholder="Password" class="forms" v-model="loginForm.password">

              <div style="margin-top: 10px">
               <p>Forgot Password? <router-link to="/forgot-password" target="_blank" style="">Click here </router-link></p>
              </div>

              <div style="margin-top: 62px; justify-content: space-between; align-items: center; display: flex;">
                <button class="signbutton" type="submit" :disabled="loader">
                  {{ loader ? "Signing In..." : "Sign In" }}
                </button>
                <p>-Or-</p>
                <div style="width: 80px; justify-content: space-around; display: flex;">
                  <img src="@/assets/logos_facebook (1).png" alt="" class="logolink">
                  <img src="@/assets/flat-color-icons_google (1).png" alt="" class="logolink">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div>
        <img src="@/assets/Rectangle 24148.png" alt="" class="toppurple">
        <div >
          <img src="@/assets/Rectangle 24147.png" alt="" class="middlepurple">
          <img src="@/assets/logos_miro-icon.png" style="position: absolute; top: 20px; left: 1250px; z-index: 3;">
          <img src="@/assets/Group.png" style="position: absolute; top: 127px; left: 1038px; z-index: 3;">
          <img src="@/assets/skill-icons_visualstudio-dark.png" style="position: absolute; top: 160px; left: 1360px; z-index: 3;">
          <img src="@/assets/vscode-icons_file-type-sketch.png" style="position: absolute; top: 220px; left: 1200px; z-index: 3;">
          <img src="@/assets/logos_tableau-icon.png" style="position: absolute; top: 320px; left: 1038px; z-index: 3;">
          <img src="@/assets/simple-icons_wireshark.png" style="position: absolute; top: 270px; left: 1380px; z-index: 3;">
          <img src="@/assets/skill-icons_python-light.png" style="position: absolute; top: 360px; left: 1270px; z-index: 3;">
        </div>
        <img src="@/assets/Group 36304.png" alt="" class="bottompurple">
      </div>
    </div>
  </div>
</template>


<script setup>
import {ref} from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'

const loader = ref(false)
const router = useRouter()
const errormsg = ref("")

const loginForm = ref ({
    email: "",
    password: "",

})


async function sign_in(){
    errormsg.value=""
    loader.value = true
   
   
   try {
    const response = await axios.post("https://zacraclearningwebsite.onrender.com/api/v1/user/signin" , {
        email: loginForm.value.email ,
        password: loginForm.value.password
    })

 const token = response.data.token;
localStorage.setItem('token', token);
localStorage.setItem('loginTime', Date.now());
router.push('/');
   } catch(error)

   {
 const message = error.response?.data?.message?.toLowerCase()

 if(message?.includes("password")){
    errormsg.value= "Wrong Password"
 }
 else if (message?.includes("email")){
    errormsg.value= "No Account Exist For This Email"
 } else{
    errormsg.value = "An error has occured. Please try Again"
 } }
 finally{
    loader.value = false
 

   }
   }


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins:wght@400;600;700&display=swap');

*{
    margin: 0;
    padding: 0;
    
}

h1 , h2, h3 , h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
}
body {
    font-family: 'Poppins', sans-serif;
}
.heading{
    display: flex;
    align-items: center;
    justify-content: space-around;  
    margin-top: 15%;
    margin-left: -40px;
   
}
.signupbold{

    font-weight: bolder;
    margin-top: 100px;
    font-size: 26px;
    
}
.inputwrapper{
 position: relative;
 gap: 20px;
 flex-direction: column;
 display: flex;

}
.icons{
    position: absolute;
    width: 19px;
    height: 19px;
    left: 2px;
    

}

.forms{
    margin-top: 19px;
    padding: 10px;
    padding-left: 30px;
    opacity: 0.7;
    width: 95%;
    height: 25px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;


}
.signbutton{
    width: 230px;
    height: 45px;
    border-radius: 50px;
    background-color: #4D148C;
    color: white;
    font-size: 15px;
}
.logolink{
    height: 25px;
    width: 25px;
}
.toppurple{

    position: relative;
    margin-left: 120px;
    z-index: 2;
}
.middlepurple{
    position: relative;
    margin-left: 130px;
    height: 100vh;
    width: 626px;
    margin-top: -93px;
    z-index: 1;
}
.bottompurple{

    position: relative;
    margin-left: 64px;
    z-index: 4;
    height: auto;
    width: 692px;
    height: 450px;
    margin-top: -430px;
}
</style>