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

          <p class="signupbold">Enter Your Email To Reset Your Password</p>

          <div class="inputwrapper">
            <form @submit.prevent="sign_up">
           

              <img src="@/assets/iconamoon_email-thin.png" class="icons" style="top: 62px;" />
              <input type="email" placeholder="Email Address" class="forms" v-model="registerForm.email" />

    

          
              <div style="margin-top: 62px; justify-content: space-between; align-items: center; display: flex;">
             
                <button type="submit" class="signbutton" :disabled="loader">
                  {{ loader ? "Signing Up..." : "Sign Up" }}
                </button>


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

</style>