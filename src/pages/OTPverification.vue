<template>
  <div class="mainbody">

     <div style="display: grid;grid-template-columns: 0.5fr 0.5fr; height: 100vh;overflow: hidden;">
      <div >

         <div style="margin-left: 20% ">
         <div class="heading">
            <img src="@/assets/Logo.png" >
  
         </div>


         <p class="signupbold">Enter The Code Sent To Your Email</p>

        <div class="otpblocks">


       <input
       
       v-for ="(digit , index) in otp" :key="index"

       v-model = "otp[index]"
       maxlength="1"
       class="otp-input"

       @input = "handleInput($event, index)"
       @keydown.backspace="handleBackspace($event,index)"

       ref="otpRefs" />



        </div>

        <div v-if="errorMessage" class="error">{{errorMessage}}</div>
         <div v-if="successMessage" class="success">{{successMessage}}</div>


         <div style="margin-top: 62px;align-items: center;display: flex;justify-content:center">
            <button class="signbutton" @click="checkOtp">Submit</button>
        
         </div>
      </div>

      </div>
      <div>


         <img src="@/assets/Rectangle 24148.png" alt="" class="toppurple">
         <div>
         <img src="@/assets/Rectangle 24147.png" alt="" class="middlepurple">
         <img src="@/assets/logos_miro-icon.png" style="position: absolute; top: 20px;left: 1250px; z-index: 3;">
         <img src="@/assets/Group.png"  style="position: absolute; top: 127px;left: 1038px; z-index: 3;">
         <img src="@/assets/skill-icons_visualstudio-dark.png"  style="position: absolute; top: 160px;left: 1360px; z-index: 3;">
         <img src="@/assets/vscode-icons_file-type-sketch.png"  style="position: absolute; top: 220px;left: 1200px; z-index: 3;">
         <img src="@/assets/logos_tableau-icon.png"  style="position: absolute; top: 320px;left: 1038px; z-index: 3;">
         <img src="@/assets/simple-icons_wireshark.png"  style="position: absolute; top: 270px;left: 1380px; z-index: 3;">
         <img src="@/assets/skill-icons_python-light.png"  style="position: absolute; top: 360px;left: 1270px; z-index: 3;">
         </div>
         <img src="@/assets/Group 36304.png" alt="" class="bottompurple">
      </div>
   </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

import {ref, onMounted} from 'vue'

const otp = ref(["","","","","",""])

const otpRefs= ref({})

const handleInput = (event,index) => {
  const value = event.target.value

  if (value.length === 1 && index < otp.value.length - 1) {
      
      otpRefs.value[index + 1].focus()
  }
}

const handleBackspace = (event, index) =>{
  if(otp.value[index] === "" && index>0 ){
    otpRefs.value[index - 1].focus()
  }
}

onMounted(() => {
  if(otpRefs.value[0]){
    otpRefs.value[0].focus()

  }
}
)

const errorMessage = ref('')
const successMessage = ref('')

const email = localStorage.getItem('registered_email') || ''

const checkOtp = async() => {

const entered = otp.value.join('')
if(entered.length !== 6){
  errorMessage.value = 'Enter all 6 digits'
  successMessage.value = ""
  return
}
if(!email){
  errorMessage.value = 'Email not found. Please Try To Register Again'
  successMessage.value = ""
  return

}
  try {
    const response = await fetch('https://zacraclearningwebsite.onrender.com/api/v1/user/verifyotp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, otp: entered }),
    })
       const result = await response.json()
    console.log('OTP Response:', result)

    successMessage.value = 'OTP verified successfully!'
    errorMessage.value = ''

    localStorage.removeItem('registered_email') 
    router.push('/login') 
  } catch (error) {
    console.error('OTP Verification Error:', error)
    errorMessage.value = 'Verification failed. Please try again.'
    successMessage.value = ''
  }
}

</script>

<style scoped>
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
    justify-content: flex-start;  
    margin-top: 15%;
    margin-left: -40px;
   
}
.signupbold{

    text-align: center;
    margin-top: 100px;
    font-size: 18px;
    
}
.otpblocks{
display: flex;
gap: 10px;
justify-content: center;
margin-top: 20px;

}
.otp-input{
  width: 50px;
   height: 60px;
  font-size: 22px;
  text-align: center;
  border: 1px solid #4D148C;
  border-radius: 5px;
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
.error{
  color: red;
  margin-top:10px ;
}
.success{
  color: green;
  margin-top:10px ;
}
</style>