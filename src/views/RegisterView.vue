<template>
  <div class="desktop">
    <btn class="previous-btn" @click="$router.go(-1)"><svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 24 24"
      >
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg></btn>
    <div class="register-container">
      <p id="register-label">Register</p>
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
          <p class="label">Display Name</p>
          <input
            type="text"
            v-model="display"
            class="placeholder"
            required="required"
          />
        </div>
        <div class="input">
          <p class="label">Password</p>
          <input
            type="password"
            class="placeholder"
            v-model="password"
            required="required"
          />
        </div>
        <div class="input">
          <p class="label">Confirm Password</p>
          <input
            type="password"
            class="placeholder"
            v-model="confirm"
            id="confirm-input"
            required="required"
          />
        </div>
      </div>
      <button @click="register" class="register-button" type="submit">
        <p id="register">Register</p>
      </button>
    </div>
  </div>
</template>

<script setup>
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");
const display = ref("");
const confirm = ref("");

const register = async () => {
  try {
    if (confirm.value == password.value) {
      await createUserWithEmailAndPassword(
        getAuth(),
        email.value,
        password.value
      )
        .then((data) => {
          console.log("Successfully registered!");
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
      await updateProfile(getAuth().currentUser, {
        displayName: display.value,
      })
        .then(() => {
          // console.log(getAuth().currentUser.displayName)
          router.push("/login");
        })
        .catch((err) => console.log(err));
    } else {
      alert("Confirm Password does not match.");
      confirm.value = "";
    }
  } catch (err) {
    console.log(err);
  }
  //--------use displayName from firebase----------//
  // import {getAuth} from 'firebase/auth';
  // const auth = getAuth();
  // const user  = auth.currentUser;
  // if (user !== null){
  //   console.log(user.displayName)
  //   console.log(user.email)
  //   console.log(user.uid)
  // }
};
</script>

<style lang="css" scoped>
@font-face {
  font-family: "Quicksand";
  src: url(/src/assets/fonts/quicksand/Quicksand-Regular.ttf);
}
.desktop {
  position: absolute;
  height: 100%;
  width: 100%;
  background: url(/src/assets/pictures/register-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  text-align: -webkit-center;
}
.previous-btn{
  position: fixed;
  left: 0rem;
  top: 0rem;
}
.register-container {
  position: relative;
  max-width: 3000px;
  width: 600px;
  margin: 80px 250px;
  padding: 30px 60px;
  background: rgba(196, 60, 218, 0.16);
  box-sizing: border-box;
  border: 3px solid rgba(255, 255, 255, 0.59);

  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 50px;
}

/* .input-container {

} */
.input {
  margin-top: 20px;
}

.register-button {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15vh;
  padding: 5px;
  width: 20vw;
  height: 5vh;
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
  font-size: x-large;
  line-height: 150%;
  color: #ffffff;
}
#register-label {
  width: 180px;
  height: 57.36px;

  font-family: "Quicksand";
  font-style: normal;
  font-weight: 600;
  font-size: xx-large;
  line-height: 48px;
  align-items: center;

  color: #2a1e17;
}

.placeholder {
  width: 100%;
  height: 4vh;
  padding: 0px 10px;
  font-size: x-large;
  background: #ffffff;
  border-radius: 5px;
  border: none;
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

#email-input:invalid {
  border: 1px solid red;
}

#logo {
  width: 200px;
  height: 62.25px;
}
</style>
