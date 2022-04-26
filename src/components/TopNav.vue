<template lang="html">
  <div class="px-3 py-4 flex items-center justify-between w-full">
    <div class="flex items-center">
      <button class="rounded-full hover:bg-light p-3 flex items-center justify-center" type="button" name="button" @click = "this.$router.push('home')">
        <img src="logo.png" alt="logo" class="h-6 w-6">
      </button>
      <button v-for="(item, i) in tabItems" :key="i" @click="selectedTab = item.key" :class="`${selectedTab === item.key ? 'bg-dark text-white' : 'text-dark hover:bg-light'} rounded-full py-3 px-4 font-semibold`" type="button" name="button">
        {{ item.name }}
      </button>
    </div>
    <div class="flex-grow relative">
      <span class="material-icons absolute mt-3 ml-3 text-muted">search</span>
      <input class="text-muted w-full hover:bg-lightHover rounded-full bg-light py-3 pr-3 pl-10" placeholder="Search" type="text" name="" value="">
    </div>
    <div class="flex items-center">
      <button type="button" name="button" class="relative rounded-full hover:bg-light flex items-center justify-center p-3">
        <span class="material-icons text-3xl text-muted">notifications</span>
        <div class="rounded-full h-5 w-5 bg-primary text-white flex items-center justify-center absolute mb-5 ml-5">4</div>
      </button>
      <button type="button" name="button" class="relative rounded-full hover:bg-light flex items-center justify-center p-3" @click = "this.$router.push('upload')">
        <span class="material-icons text-3xl text-muted">add_a_photo</span>
      </button>
      <button class="rounded-full hover:bg-light p-3 flex items-center justify-center" type="button" name="button" @click = "this.$router.push('profile')">
        <div class="w-6 h-6 bg-cover bg-center rounded-full" style="background-image: url(profile.jpg)"></div>
      </button>
      <div class="relative inline-block">
        <button type="button" name="button" class="w-6 h-6 hover:bg-light rounded-full flex items-center justify-center" @click = "toggleMenu = !toggleMenu">
          <span class="material-icons text-muted">expand_more</span>
        </button>
        <transition enter-active-class="transition duration-300 ease-out transform" enter-class="-translate-y-3 scale-95 opacity-0" enter-to-class="translate-y-0 scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform" leave-class="translate-y-0 opacity-100" leave-to-class="-translate-y-3 opacity-0">
          <div v-show="toggleMenu" class="absolute pt-2 right-0">
            <div class="relative py-1 bg-white border border-gray-200 rounded-md shadow-xl">
              <div class="absolute top-0 w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-white border-t border-l border-gray-200 rounded-sm pointer-events-none"></div>
              <div class="relative">
                <a class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out" @click = "logout">Logout</a>
                <!-- <a href="#" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">Submenu Link #2</a> -->
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth } from '@firebase/auth'
export default {
  data() {
    return {
      tabItems: [
        {name: 'Home', key: 'home'},
        {name: 'Today', key: 'today'}
      ],
      selectedTab: 'home', 
      toggleMenu: false
    }
  },
  methods:{
    logout(){
      try {
        getAuth().signOut();
        this.$router.push("/")
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
