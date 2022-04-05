<template>
  <div class="desktop">
    <div class="menu">
      <div class="menu-item menu-name">   
        <img src="../assets/pictures/picterest-pur-full.png" class="logo-image">
      </div>
      <div class="menu-item">
        <div class="menu-text">
          How it work
        </div>
      </div>
      <div class="menu-item ">
        <div class="menu-text">
          About Us
        </div>
      </div>
      <div class="menu-item">
        <div class="menu-text">
          Contact Us
        </div>
      </div>
    </div>
    
    <div class="name">
      <div class = " word">
      Explore the wild world of 
      </div>  
      <div class = " word2">
      FREE 
      </div> 
      <div class = " word3">
      ideas !
      </div>
      <div class="letter">
        <img src="../assets/pictures/landingBG.png" class="letter-image">
        <button class="btn">Get Started</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: {
    msg: String
  }
}
</script>

<style scoped>

.name {
  display: flex;
  align-items: name;
  justify-content: name;
  vertical-align: middle;
  width: 100vw;
  height: calc(100vh - 60px);
}

.word{
  font-size: 70px;
  font-weight: bold;
  color: black;
  position: absolute;
  top: 40%;
  left: 38%;
  transform: translate(-50%, -50%);
}
.word2{
  font-size: 70px;
  font-weight: bold;
  color: #C43CDA;
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translate(-50%, -50%);
}
.word3{
  font-size: 70px;
  font-weight: bold;
  color: black;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
}

.letter-image {
  width: 100%;
}
.logo-image{
  width: 80%;
  height: 100%;
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
  font-size: 25px;
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

</style>
