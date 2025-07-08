<template>
  <div class="mainbody">
    <div style="display: grid; grid-template-columns: 0.5fr 0.5fr; height: 100vh; overflow: hidden;">
      <div>
        <div style="margin-left: 20%;">
          <div class="heading">
            <img src="@/assets/Logo.png" />
            <div style="margin-top: 17px;">
              <p>
                Already have an account?
                <router-link to="/login" style="margin-left: 5px;">Sign in</router-link>
              </p>
            </div>
          </div>

     
          <p style="color: red; font-weight: bold; text-align: center; font-size: 27px">{{ errormsg }}</p>

          <p class="signupbold">Sign Up</p>

          <div class="inputwrapper">
            <form @submit.prevent="sign_up">
              <img src="@/assets/et_profile-male (1).png" class="icons" style="top: 15px;" />
              <input type="text" placeholder="Full Name" class="forms" v-model="registerForm.full_name" />

              <img src="@/assets/iconamoon_email-thin.png" class="icons" style="top: 62px;" />
              <input type="email" placeholder="Email Address" class="forms" v-model="registerForm.email" />

              <img src="@/assets/arcticons_password.png" class="icons" style="top: 105px;" />
              <input type="password" placeholder="Password" class="forms" v-model="registerForm.password" />

              <img src="@/assets/arcticons_password.png" class="icons" style="top: 150px;" />
              <input type="password" placeholder="Re-enter Password" class="forms" v-model="registerForm.repassword" />

          
              <div style="margin-top: 62px; justify-content: space-between; align-items: center; display: flex;">
             
                <button type="submit" class="signbutton" :disabled="loader">
                  {{ loader ? "Signing Up..." : "Sign Up" }}
                </button>

                <p>-Or-</p>

                <div style="width: 80px; justify-content: space-around; display: flex;">
                  <a href=""><img src="@/assets/logos_facebook (1).png" alt="" class="logolink" /></a>
                  <a href=""><img src="@/assets/flat-color-icons_google (1).png" alt="" class="logolink" /></a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div>
        <img src="@/assets/Rectangle 24148.png" alt="" class="toppurple" />
        <div>
          <img src="@/assets/Rectangle 24147.png" alt="" class="middlepurple" />
          <img src="@/assets/logos_miro-icon.png" style="position: absolute; top: 20px; left: 1250px; z-index: 3;" />
          <img src="@/assets/Group.png" style="position: absolute; top: 127px; left: 1038px; z-index: 3;" />
          <img src="@/assets/skill-icons_visualstudio-dark.png" style="position: absolute; top: 160px; left: 1360px; z-index: 3;" />
          <img src="@/assets/vscode-icons_file-type-sketch.png" style="position: absolute; top: 220px; left: 1200px; z-index: 3;" />
          <img src="@/assets/logos_tableau-icon.png" style="position: absolute; top: 320px; left: 1038px; z-index: 3;" />
          <img src="@/assets/simple-icons_wireshark.png" style="position: absolute; top: 270px; left: 1380px; z-index: 3;" />
          <img src="@/assets/skill-icons_python-light.png" style="position: absolute; top: 360px; left: 1270px; z-index: 3;" />
        </div>
        <img src="@/assets/Group 36304.png" alt="" class="bottompurple" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import axios from "axios"
import { useRouter } from "vue-router"

const router = useRouter()
const loader = ref(false)
const errormsg = ref("")

const registerForm = ref({
  full_name: "",
  email: "",
  password: "",
  repassword: "",
})

async function sign_up() {
  errormsg.value = ""

 
  if (registerForm.value.password !== registerForm.value.repassword) {
    errormsg.value = "Your passwords do not match"
    return
  }

  loader.value = true

  try {
    const data = await axios.post('https://zacraclearningwebsite.onrender.com/api/v1/user/signup', {
      name: registerForm.value.full_name,
      email: registerForm.value.email,
      password: registerForm.value.password,
    })

    console.log(data)
    localStorage.setItem("registered_email", registerForm.value.email)
    router.push('/otp-verification')

  } catch (error) {
    console.log("Signup error:", error.response?.data)

    const backendMessage = error.response?.data?.message || ""

    if (backendMessage.includes("email") && backendMessage.includes("exists")) {
      errormsg.value = "This email already has an account."
    } else {
      errormsg.value = backendMessage || "Something went wrong. Try again"
    }

  } finally {
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
.forms{
    margin-top: 19px;
    padding: 10px;
    padding-left: 30px;
    opacity: 0.7;
    width: 95%;
    height: 25px;
    border: none;
    border-bottom: 1px solid black;

}
.icons{
    position: absolute;
    width: 19px;
    height: 19px;
    left: 2px;
    

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
.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.spin-loader {
  animation: spin 1s linear infinite;
}
</style>