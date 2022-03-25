<template>
  <div class="desktop">
    <div class="register-container">
      <img
        src="../assets/pictures/picterest-pur-full.png"
        alt="full-logo"
        id="logo"
      />
      <p id="register-label">Register</p>
      <p id="email-label">Email</p>
      <input type="text" v-model="email" id="email-placeholder" />
      <p id="password-label">Password</p>
      <input type="password" id="password-placeholder" v-model="password" />
      <p id="display-label">Display Name</p>
      <input type="text" v-model="display" id="display-placeholder" />
      <p id="confirm-label">Confirm Password</p>
      <input type="password" id="confirm-placeholder" v-model="confirm" />
      <button @click="register" class="register-button">
        <p id="register">Register</p>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully registered!");
      router.push("/");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>
<style lang="css" scoped>
@font-face {
  font-family: "Quicksand";
  src: url(/src/assets/fonts/quicksand/Quicksand-Regular.ttf);
}
.desktop {
  position: relative;
  height: 850px;
  width: 100%;
  background: url(/src/assets/pictures/register-bg.jpg);
}

.register-container {
  position: relative;
  display: inline-block;
  max-width: 3000px;
  margin: 80px 250px;
  padding: 20px;
  overflow: hidden;
  background: rgba(196, 60, 218, 0.16);
  box-sizing: border-box;
  border: 3px solid rgba(255, 255, 255, 0.59);

  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 50px;
}
.register-button {
  width: 24%;
  height: 10%;
  margin: 450px 450px 40px;
  background: linear-gradient(262.06deg, #941ae3 -11.14%, #7a09c2 103.75%);
  box-shadow: 0px 4px 41px rgba(112, 10, 160, 0.4);
  border-radius: 93px;
  transition: 0.7s;
}
.register-button:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  transition: 0.7s;
}
#register {
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 700;
  font-size: medium;
  line-height: 150%;
  margin: 17px 97px;
  color: #ffffff;
}
#register-label {
  position: absolute;
  width: 180px;
  height: 57.36px;
  left: calc(50% - 180px / 2 - 430.75px);
  top: calc(50% - 57.36px / 2 - 160.32px);

  font-family: "Quicksand";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 48px;
  display: flex;
  align-items: center;

  color: #2a1e17;
}

#email-placeholder {
  position: absolute;
  width: 35%;
  height: 35px;
  left: calc(50% - 498.75px / 2 - 271.38px);
  top: calc(50% - 62.34px / 2 - 30.63px);

  background: #ffffff;
  border-radius: 5px;
}
#password-placeholder {
  position: absolute;
  width: 35%;
  height: 35px;
  left: calc(50% - 498.75px / 2 - 271.38px);
  top: calc(50% - 62.34px / 2 + 100.54px);

  background: #ffffff;
  border-radius: 5px;
}
#display-placeholder {
  position: absolute;
  width: 35%;
  height: 35px;
  left: calc(50% - 498.75px / 2 + 360.62px);
  top: calc(50% - 62.34px / 2 - 30.63px);
  background: #ffffff;
  border-radius: 5px;
}
#confirm-placeholder {
  position: absolute;
  width: 35%;
  height: 35px;
  left: calc(50% - 498.75px / 2 + 360.62px);
  top: calc(50% - 62.34px / 2 + 100.54px);

  background: #ffffff;
  border-radius: 5px;
}

#email-label {
  position: absolute;
  width: 100px;
  height: 47.06px;
  left: calc(50% - 100px / 2 - 472px);
  top: calc(50% - 47.06px / 2 - 85.47px);

  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;

  color: #2a1e17;
}
#password-label {
  position: absolute;
  width: 100px;
  height: 47px;
  left: calc(50% - 100px / 2 - 472px);
  top: 54%;

  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;

  color: #2a1e17;
}
#display-label {
  position: absolute;
  width: 300px;
  height: 47.06px;
  left: calc(50% - 498.75px / 2 + 360.62px);
  top: calc(50% - 47.06px / 2 - 85.47px);

  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;

  color: #2a1e17;
}
#confirm-label {
  position: absolute;
  width: 300px;
  height: 47px;
  left: calc(50% - 498.75px / 2 + 360.62px);
  top: 54%;

  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;

  color: #2a1e17;
}

#logo {
  position: absolute;
  width: 200px;
  height: 62.25px;
  left: calc(50% - 100px / 2 - 472px);
  top: 50px;
}
</style>
