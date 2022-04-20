<template>
  <div class="desktop">
    <div class="register-container">
      <img
        src="../assets/pictures/picterest-pur-full.png"
        alt="full-logo"
        id="logo"
      />
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
    } else {
      console.log("not goodd");
      alert("Confirm Password does not match.");
      confirm.value = "";
    }

    await updateProfile(getAuth().currentUser, {
      displayName: display.value,
    })
      .then(() => {
        // console.log(getAuth().currentUser.displayName)
        router.push("/login");
      })
      .catch((err) => console.log(err));
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
  height: 850px;
  width: 100%;
  background: url(/src/assets/pictures/register-bg.jpg);
}
.register-container {
  position: relative;
  max-width: 3000px;
  margin: 80px 250px;
  padding: 30px 60px;
  background: rgba(196, 60, 218, 0.16);
  box-sizing: border-box;
  border: 3px solid rgba(255, 255, 255, 0.59);

  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 50px;
}

.input-container {
  display: grid;
  grid-column-gap: 10rem;
  grid-template-columns: repeat(2, 1fr);
}
.input {
  margin-top: 20px;
}

.register-button {
  position: relative;
  padding: 17px;
  width: 24%;
  height: 10%;
  margin: 100px 400px 40px;
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
  color: #ffffff;
}
#register-label {
  width: 180px;
  height: 57.36px;

  font-family: "Quicksand";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 48px;
  align-items: center;

  color: #2a1e17;
}

.placeholder {
  width: 70%;
  height: 35px;
  padding: 0px 10px;

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
  font-size: 18px;
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
