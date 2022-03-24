<template>
    <h1>Login to an Account </h1>
    <p v-if = "errMsg">{{ errMsg }} </p>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password"/></p>
    <p><button @click="login">Submit</button></p>
</template>

<script setup>
import { ref } from "vue";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { useRouter } from 'vue-router'

const router = useRouter();
const email = ref("");
const password = ref("");
const errMsg = ref()

const login = () => {
    signInWithEmailAndPassword(getAuth(),email.value,password.value)
    .then((data) => {
        console.log("Successfully login!")
        router.push('/')
    })
    .catch( (error) => {
        console.log(error.code);
        switch (error.code){
            case "auth/invalid-email" :
                errMsg.value = "Invalid email";
                break;
            case "auth/user-not-found" :
                errMsg.value = "No account with that email was found";
                break;
            case "auth/wrong-password" :
                errMsg.value = "Incorrect password";
                break;
            default:
                errMsg.value = "Email or password was incorrect";
                break;

        }
    }
    )
};

</script>
