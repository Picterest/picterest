<template>
  <div class="">
    <TopNav />
    <div class="flex flex-col p-4  items-center justify-center">
        <!-- profile picture -->
        <div class="w-40 h-40 bg-cover bg-center rounded-full" style="background-image: url(profile.jpg)"></div>
        <div class="font-bold">{{DisplayName}}</div>
        <div>{{UserName}}</div>
        <div>{{follower}}</div>
        <button class="bg-secondary text-white py-2 px-4 rounded-full">Edit Profile</button>
    </div>
    <div class="px-20 w-full flex flex-wrap">
    </div>
  </div>
</template>

<script>
import TopNav from '../components/TopNav.vue';
export default {
    components:{ TopNav },
    data(){
        return{
            DisplayName: "Firstname Lastname",
            UserName: "@username",
            follower:"0 follower",
            cards:[],
        }
    }

}
</script>

<style src="../assets/tailwind.css" />