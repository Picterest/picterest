`<template>
  <div class="desktop">
    <Transition>
      <ErrorLogin
        v-show="isModalVisible"
        @close="closeModal"
        :msg="errMsg"
        class="z-40"
      >
      </ErrorLogin>
    </Transition>
    <div class="login-container">
      <img
        src="../assets/pictures/picterest-pur-full.png"
        alt="full-logo"
        id="logo"
      />
      <p id="login-label">Login</p>
      <div class="input-container">
        <div class="input">
          <p class="label">Email</p>
          <input
            type="email"
            v-model="email"
            class="placeholder"
            id="email-input"
          />
        </div>
        <div class="input">
          <p class="label">Password</p>
          <input type="password" class="placeholder" v-model="password" />
        </div>
        <!-- <router-link to="/register" class="link">Forgot Password?</router-link> -->
      </div>
      <button @click="login" class="login-button">
        <p id="login">Login</p>
      </button>
      <p class="register-prompt">
        Don’t have an account yet?
        <router-link to="/register" class="link">Register for free</router-link>
      </p>
    </div>
    <div>
      <img
        src="../assets/pictures/Amongus.png"
        alt="amongus-pic"
        id="amongus"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import ErrorLogin from "../components/ErrorLogin.vue";

const router = useRouter();
const email = ref("");
const password = ref("");
const errMsg = ref();
const isModalVisible = ref();

errMsg.value = "";
isModalVisible.value = false;

const login = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully login!");
      router.push("/home");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email!";
          showModal();
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found!";
          showModal();
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password!";
          showModal();
          break;
        default:
          errMsg.value = "Email or password was incorrect!";
          showModal();
          break;
      }
    });
};

const showModal = () => {
  isModalVisible.value = true;
};
const closeModal = () => {
  isModalVisible.value = false;
};
</script>

<style lang="css" scoped>
@font-face {
  font-family: "Quicksand";
  src: url(/src/assets/fonts/quicksand/Quicksand-Regular.ttf);
}
.desktop {
  position: absolute;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
  width: 100%;
  background: url(/src/assets/pictures/register-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.input-container {
  display: grid;
  grid-column-gap: 10rem;
}
.input {
  margin-top: 30px;
}

.login-container {
  position: relative;
  max-width: 3000px;
  margin: 80px 0px 80px 200px;
  padding: 30px 60px;
  background: rgba(196, 60, 218, 0.16);
  box-sizing: border-box;
  border: 3px solid rgba(255, 255, 255, 0.59);

  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 50px;
}
#login {
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 700;
  font-size: x-large;
  line-height: 150%;
  color: #ffffff;
}
#login-label {
  width: 180px;
  height: 57.36px;
  margin-top: 20px;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 600;
  font-size: xx-large;
  line-height: 48px;
  align-items: center;

  color: #2a1e17;
}
.login-button {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
  margin-bottom: 2vh;
  padding: 5px;
  width: 20vw;
  height: 5vh;
  background: linear-gradient(262.06deg, #941ae3 -11.14%, #7a09c2 103.75%);
  box-shadow: 0px 4px 41px rgba(112, 10, 160, 0.4);
  border-radius: 93px;
  transition: 0.7s;
}
.login-button:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  transition: 0.7s;
}
.placeholder {
  width: 100%;
  height: 5vh;
  padding: 0px 10px;
  font-size: x-large;
  background: #ffffff;
  border-radius: 5px;
}

.label {
  width: 300;
  height: 47.06px;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 400;
  font-size: x-large;
  line-height: 22px;
  display: flex;
  align-items: center;

  color: #2a1e17;
}

#logo {
  width: 200px;
  height: 62.25px;
  left: calc(50% - 100px / 2 - 472px);
  top: 50px;
}

#amongus {
  width: 100%;
  max-width: 500px;
  height: auto;
  margin: 25vh 0vw 8vh 15vw;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.register-prompt {
  text-align: center;
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 600;
  font-size: large;
  line-height: 18px;
}

.link {
  width: 200px;
  height: 18px;
  font-family: "Quicksand";
  font-style: normal;

  text-decoration-line: underline;

  color: #2a1e17;
}

#email-input:invalid {
  border: 1px solid red;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
