<template>
  <div class="desktop">
    <div class="menu">
      <div class="menu-item menu-name">   
        <img src="../assets/pictures/picterest-pur-full.png" class="logo-image">
      </div>
      <div class="menu-item ">
        <div class="menu-text"  @click="()=>$router.push('about')">
          About Us
        </div>
      </div>
      <div class="menu-item">
        <div class="menu-text" @click="()=>$router.push('about')">
          Contact Us
        </div>
      </div>
      <div class="menu-item">
        <div class="menu-text"  @click="()=>$router.push('login')">
          Login
        </div>
      </div>
    </div>
    
    <div class="word-container">
      <div class = " word">
      Explore the wild world of 
      </div>  
      <div class = " word2">
      FREE 
      </div> 
      <div class = " word3">
      ideas !
      </div>


    </div>
      <div class="letter">
        <!-- <img src="../assets/pictures/landingBG.png" class="letter-image"> -->
        <button class="btn" @click="()=>$router.push('login')">Get Started</button>
      </div>
  </div>
</template>

<script>

export default {
  name: 'LandingView',
  props: {
    msg: String
  }
}
</script>

<style lang="css" scoped>
@font-face {
  font-family: "Quicksand";
  src: url(/src/assets/fonts/quicksand/Quicksand-Regular.ttf);
}

.word-container {
  display: flex;
  position: absolute;
  align-items: word-container;
  justify-content: word-container;
  vertical-align: middle;
  width: 1500px;
  height: 500px;
}

.word{
  font-family: "Quicksand";
  font-size: 70px;
  font-weight: bold;
  color: black;
  position: absolute;
  top:20%;
  left: 10%;
  /* transform: translate(-50%, -50%); */
}
.word2{
  font-family: "Quicksand";
  font-size: 70px;
  font-weight: bold;
  color: #C43CDA;
  position: absolute;
  top: 42%;
  left: 10%;
  /* transform: translate(-50%, -50%); */
}
.word3{
  font-family: "Quicksand";
  font-size: 70px;
  font-weight: bold;
  color: black;
  position: absolute;
  top: 42%;
  left: 23%;
  /* transform: translate(-50%, -50%); */
}


.logo-image{
  width: 200px;
  height: 62.25px;
  margin-left: 15px;
}




.menu {
  display: flex;
  /* align-items: name; */
  justify-content: space-around;
  margin-top: 15px;
  height: 60px;
}

.menu-item {
  flex: 1;
  text-align: name;
  display: flex;
  justify-content: name;
  align-items: name;
}

.menu-text{
  font-weight: bold;
  font-family: "Quicksand";
  font-size: 23px;
  color: black;
  cursor: pointer;
  padding: 10px;
  border-bottom: 2px solid #7A09C2;
  width: fit-content;
}

.menu-name {
  flex: 1;
  display: flex;
}


.letter .btn {
  position: absolute;
  width: 293px;
  height: 70px;
  left: 580px;
  top: 750px;  
  box-shadow: 0px 4px 41px rgba(112, 10, 160, 0.4);
  border-radius: 93px;
  background: linear-gradient(262.06deg, #941AE3 -11.14%, #7A09C2 103.75%);
  color: white;
  font-size: 30px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;

}

.letter .btn:hover {
  background: #81708C;
} 
.desktop {
  position: absolute;
  height: 1080px;
  width: 100%;
 
  background-image: url("/src/assets/pictures/landingBG.png"); 
  background-color: #c530c8; /* Used if the image is unavailable */
  
  /* background-position: center; */

  background-size: cover; 
}

</style>
