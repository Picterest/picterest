<template>
  <div class="desktop">
    <img
      src="../assets/pictures/picterest-pur-full.png"
      alt="full-logo"
      id="logo"
    />
    <div class="login-container">
      <h class="topic"> What is Picterest?</h>
      <p class="body">
        Picterest is a visual discovery engine for finding ideas like recipes,
        home and style inspiration, and more. With billions of Pictures on
        Picterest, you'll always find ideas to spark inspiration. When you
        discover Pictures you love, save them to boards to keep your ideas
        organised and easy to find. You can also create Pictures to share your
        ideas with other people on Picterest.
      </p>
      <h class="topic"> Browse your home feed</h>
      <p class="body">
        Your home feed is where you'll find Pictures, people and businesses we
        think you'll love, based on your recent activity. We'll also show you
        Pictures from the people and boards you choose to follow. You can also
        search for Pictures by typing keywords into the search bar. Try typing
        'birthday party' in the search bar to see ideas for birthday party
        decorations, party food recipes and birthday gift ideas.
      </p>
      <h class="topic"> Discover ideas</h>
      <p class="body">
        Use the search bar to discover ideas, people and trends. Explore
        suggested topics or search for topics of your own.
      </p>
      <h class="topic"> Create Pictures</h>
      <p class="body">
        Upload an image from your computer or mobile device to create a Picture.
        You can also create and save Pictures from images you find online. Add a
        title and a description to each Picture you create, and a website link
        if you have one.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style lang="css" scoped>
@font-face {
  font-family: "Quicksand";
  src: url(/src/assets/fonts/quicksand/Quicksand-Regular.ttf);
}
.desktop {
  position: absolute;
  background: url(/src/assets/pictures/register-bg.jpg);
  background-size: cover;
  width: 100%;
  height: auto;
}


.login-container {
  position: relative;
  max-width: 3000px;
  padding: 30px 60px;
  margin: 10px 100px;
  background: rgba(196, 60, 218, 0.16);
  box-sizing: border-box;
  border: 3px solid rgba(255, 255, 255, 0.59);
  font-family: "Quicksand";
  font-size: x-large;
  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 50px;
}

.topic {
  font-size: xx-large;
  font-weight: 1000;
  color: #c43cda;
}
.body {
  margin-bottom: 50px;
}
#logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
