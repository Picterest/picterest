<template>
  <div class="modal-backdrop" @click="close">
    <div class="modal" @click.stop="">
      <header class="modal-header">
        <button type="button" class="btn-close" @click="close">x</button>
      </header>
      <section class="modal-body">
        <slot name="body" class="icon-body">
          <img
            src="../assets/pictures/xmark.png"
            alt="full-logo"
            id="error-icon"
          />
        </slot>
        <slot>
          <div class="detail-container">
            <div class="description">
              {{ msg }}
            </div>
          </div>
        </slot>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  props: ["msg"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style>
@font-face {
  font-family: "Quicksand";
  src: url(/src/assets/fonts/quicksand/Quicksand-Regular.ttf);
}
.detail-container {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-family: "Quicksand";
  width: 600px;
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
.description {
  text-align: center;
  font-size: xx-large;
  font-weight: bold;
  padding: 20px;
  height: 100%;
  margin-bottom: 10px;
}
#error-icon {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 25%;
  height: 25%;
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
  overflow-x: auto;
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
  align-items: center;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 40px;
  margin-right: 30px;
  cursor: pointer;
  font-weight: bold;
  color: #c43cda;
  background: transparent;
}
</style>
