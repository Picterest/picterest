<template>
  <div class="">
    <TopNav />
    <div class="flex flex-col p-4  items-center justify-center">
        <!-- profile picture -->
        <div class="w-40 h-40 bg-cover bg-center rounded-full" style="background-image: url(profile.jpg)" ></div>
        <div class="font-bold">{{DisplayName}}</div>
        <div>{{UserName}}</div>
    </div>

    <div class="px-20 w-full flex flex-wrap">
      <div v-for="(card, index) in cards" :key="index" class="w-1/5">
        <div class="w-full p-2">
          <Card :src="`${card.src}`" :board="`${card.recommended}`" class="w-full h-full"/>
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
import { collection, query, where, onSnapshot, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {db,storage} from '@/firebase'
import { ref, uploadString,getDownloadURL  } from "firebase/storage";

export default {
    components:{ TopNav, Card},
    data(){
        return{
            DisplayName: "",//"Firstname Lastname",
            UserName: "",//"@username",
            cards:[],
            imageUrl: "",
            profileImg : getAuth().photoURL,
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
  },

  methods :{
    onFilePicked(event){

    },
  },

}
</script>

<style src="../assets/tailwind.css" />