<template>
  <div class="">
    <TopNav @searchByTag="searchByTag" />
    <div class="px-20 w-full flex flex-wrap">
      <Transition>
        <View
          v-show="isModalVisible"
          @close="closeModal"
          :src="this.selectedSrc"
          :board="this.selectedBoard"
          :user="this.selectedUser"
          :title="this.selectedTitle"
          :description="this.selectedDescription"
          class="z-40"
        >
        </View>
      </Transition>
      <div v-for="(arr, index) in subArrays" :key="index" class="w-1/5">
        <div v-for="(card, i) in arr" :key="i" class="w-full">
          <div class="w-full p-2">
            <Card
              :src="`${card.src}`"
              :board="`${card.recommended}`"
              :user="`${card.user}`"
              :title="`${card.title}`"
              :description="`${card.description}`"
              :show="showModal"
              class="w-full h-full"
            />
            <div class="text-sm leading-tight pt-2">
              <p class="font-bold">{{ card.title }}</p>
              <p>{{ card.user }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav.vue";
import Card from "../components/CardItem.vue";
import View from "../components/ViewCard.vue";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "@/firebase";

export default {
  name: "App",
  components: {
    TopNav,
    Card,
    View,
  },

  //Read the data from the firebase
  created() {
    this.getImageFromFirebase();
  },

  //mapping data
  computed: {
    subArrays() {
      var length = Math.ceil(this.cards.length / 5);

      const result = new Array(length).fill().map((i) => {
        console.log(i);
        return this.cards.splice(0, length);
      });

      return result;
    },
  },

  //check login user
  mounted() {
    var user = getAuth().currentUser;
    if (user) {
      // User is signed in.
      console.log("User is signed in");
    } else {
      // No user is signed in.
      console.log("No user signed in");
      alert("You need to sign in first!");
      // this.$router.push("/login")
    }
  },

  methods: {
    showModal(src, board, user, title, description) {
      this.selectedSrc = src;
      this.selectedBoard = board;
      this.selectedUser = user;
      this.selectedTitle = title;
      this.isModalVisible = true;
      if (description == "") {
        this.selectedDescription = "No description";
      } else {
        this.selectedDescription = description;
      }
    },
    closeModal() {
      this.isModalVisible = false;
    },
    searchByTag(searchBar) {
      this.getImageFromFirebase(searchBar);
    },

    getImageFromFirebase(searchBar = "") {
      var q;
      var searchString = searchBar;
      console.log(searchString);
      if (searchString == "") {
        q = collection(db, "posts");
      } else {
        console.log("searching..");
        q = query(
          collection(db, "posts"),
          where("imageTag", "==", searchString.toLowerCase())
        );
      }

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const cards = [];
        querySnapshot.forEach((doc) => {
          const post = doc.data();
          let entry = {
            //Mapping to the correct format
            src: post.imageDownloadUrl,
            title: post.imageName,
            user: post.userName,
            recommended: post.imageTag,
            description: post.imageDescription,
          };

          cards.push(entry);
        });
        this.cards = cards;
        //console.log("currentImage : ", JSON.stringify(cards), "\n");
      });
    },
  },

  data() {
    return {
      isModalVisible: false,
      cards: [],
      selectedSrc: "",
      selectedBoard: "",
      selectedUser: "",
      selectedTitle: "",
      selectedDescription: "",
    };
  },
};
</script>

<style lang="css" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
