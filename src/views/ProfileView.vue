<template>
  <div class="">
    <TopNav />
    <div class="flex flex-col p-4  items-center justify-center">
        <!-- profile picture -->
        <div class="w-40 h-40 bg-cover bg-center rounded-full" style="background-image: url(profile.jpg)"></div>
        <div class="font-bold">{{DisplayName}}</div>
        <div>{{UserName}}</div>
        <button class="bg-secondary text-white py-2 px-4 rounded-full">Edit Profile</button>
    </div>
    <!-- For filter only user picture -->
    <div class="px-20 w-full flex flex-wrap"></div>
  </div>
</template>

<script>
import TopNav from '../components/TopNav.vue';
import { getAuth } from '@firebase/auth';
export default {
    components:{ TopNav },
    data(){
        return{
            DisplayName: "",//"Firstname Lastname",
            UserName: "",//"@username",
            cards:[],
        }
  },
  mounted(){
    const auth = getAuth();
    const user  = auth.currentUser;
    this.$data.DisplayName = user.displayName;
    this.$data.UserName = user.email;
  }
}
</script>

<style src="../assets/tailwind.css" />