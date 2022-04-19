<template>
  <div class="">
    <TopNav />
    <div class="px-20 w-full flex flex-wrap">
      <div v-for="(arr, index) in subArrays" :key="index" class="w-1/5">
        <div v-for="(card, i) in arr" :key="i" class="w-full">
          <div class="w-full p-2">
            <Card :src="`${card.src}`" :board="`${card.recommended}`" class="w-full h-full"/>
            <div class="text-sm leading-tight pt-2">
              <p class="font-bold"> {{ card.title }} </p>
              <p> {{ card.user }} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from '../components/TopNav.vue';
import Card from '../components/CardItem.vue';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import {db} from '@/firebase'

export default {

  name: 'App',
  components: {
    TopNav,
    Card
  },
  

  //Read the data from the firebase
  created() {
    const q = collection(db, "posts");
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const cards = [];
    querySnapshot.forEach((doc) => {
      const post = doc.data()
      let entry = {                       //Mapping to the correct format
        src : post.imageDownloadUrl,
        title: post.imageName,
        user: post.userName,
        recommended: "Travel"
      }

      cards.push(entry);

    });
    this.cards = cards;
    console.log("currentImage : ",JSON.stringify(cards),"\n");
    });
  },

  //mapping data
  computed: {
    subArrays() {
      var length = Math.ceil(this.cards.length / 5);

      const result = new Array(length)
        .fill()
        .map((i) => {
          console.log(i)
          return this.cards.splice(0, length)
        })

        return result
    }
  },

  data() {
    return {
      cards: []
    }
  }
}
</script>

<style src="../assets/tailwind.css" />