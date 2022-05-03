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

    <div v-for="(card, i) in arr" :key="i" class="w-full">
      <div class="w-full p-2">
        <Card :src="`${card.src}`" :board="`${card.recommended}`" class="w-full h-full"/>
          <div class="text-sm leading-tight pt-2">
            <p class="font-bold"> {{ card.title }} </p>
            <p> {{ card.user }} </p>
          </div>
      </div>
    </div>    

    <!-- For filter only user picture -->
    <div class="px-20 w-full flex flex-wrap"></div>
  </div>

</template>

<script>
import TopNav from '../components/TopNav.vue';
import Card from '../components/CardItem.vue';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {db} from '@/firebase'

export default {
    components:{ TopNav,Card },
    data(){
        return{
            DisplayName: "",//"Firstname Lastname",
            UserName: "",//"@username",
            cards:[],
        }
  },

  created() {
    const q = query(collection(db, "posts"),where("userId","==", getAuth().currentUser.uid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const cards = [];
    querySnapshot.forEach((doc) => {
      const post = doc.data()
      let entry = {                       //Mapping to the correct format
        src : post.imageDownloadUrl,
        title: post.imageName,
        user: "User1",
        recommended: "Travel"
      }

      cards.push(entry);

    });
    this.cards = cards;
    console.log("Image from this user : ",JSON.stringify(cards),"\n");
    });
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