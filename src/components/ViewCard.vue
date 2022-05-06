<template>
  <div class="modal-backdrop" @click="close">
    <div class="modal" @click.stop="">
      <header class="modal-header">
        <button type="button" class="btn-close" @click="close">x</button>
      </header>
      <section class="modal-body">
        <slot name="body">
          <img :src="src" alt="" class="picture" />
        </slot>
        <slot>
          <div class="detail-container">
            <div class="title">{{ title }}</div>
            <div class="username">{{ user }}</div>
            <div class="description">
              {{ description }}
            </div>
            <button type="button" class="save-btn" @click="downloadImg">
              Save
            </button>
          </div>
        </slot>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  props: ["src", "board", "user", "title", "description"],
  methods: {
    close() {
      this.$emit("close");
    },
    downloadImg() {
      var xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = function () {
        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(xhr.response);
        a.download = "imgDownloaded.jpeg"; // Name the file anything you'd like.
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
      };
      xhr.open("GET", this.src);
      xhr.send();
    },
  },
};
</script>
<style>
@font-face {
  font-family: "Quicksand";
  src: url(/src/assets/fonts/quicksand/Quicksand-Regular.ttf);
}
.picture {
  top: 0;
  bottom: 0;
  margin: auto;
  width: 600px;
  max-height: 800px;
  box-shadow: 14px 8px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
}

.detail-container {
  display: flex;
  flex-direction: column;
  font-family: "Quicksand";
  color: #ffff;
  width: 600px;
  background: #c43cda;
  box-shadow: 14px 8px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  padding: 25px;
}
.title {
  border-bottom: 5px solid white;
  font-weight: 600;
  font-size: xx-large;
  border-radius: 5px;
  margin-bottom: 10px;
}
.username {
  margin-bottom: 20px;
}
.description {
  border: 2px solid white;
  border-radius: 50px;
  padding: 20px;
  height: 100%;
  margin-bottom: 10px;
  font-size: medium;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  max-height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-body {
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: 1fr 0fr;
  position: relative;
  padding: 20px 10px;
  height: 100vh;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #c43cda;
  background: transparent;
}
.save-btn {
  color: white;
  background: linear-gradient(262.06deg, #941ae3 -11.14%, #7a09c2 103.75%);
  border: 1px solid white;
  border-radius: 50px;
}
</style>
