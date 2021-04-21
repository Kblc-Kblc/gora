<template>
  <div id="app">
    <div class="wrapper">
      <Header />
      <main class="page">
        <div class="_container">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
  methods: {
    setUser() {
      this.$store.dispatch("setUser");
    },
  },
  created() {
    this.setUser();
  },
};
</script>

<style lang="scss">
//<ПЕРЕМЕННЫЕ>===========================================================================================================

@import "./styles/_var.scss";
//</ПЕРЕМЕННЫЕ>===========================================================================================================

//<Подключаем шрифты>=======================================================================================
//&display=swap&subset=cyrillic-ext
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
$fontFamily: "Roboto";
//</Шрифт по умолчанию>==========================================================================================
@import "./styles/_null.scss";
//<МИКСИНЫ>===============================================================================================
@import "./styles/_mixins.scss";
//</МИКСИНЫ>===============================================================================================

body {
  color: #000;
  font-size: 14px;
}
//</ОБНУЛЕНИЕ, ОБЩИЕ ПАРАМЕТРЫ>===============================================================================================

//<ОБОЛОЧКА>===========================================================================================================
.wrapper {
  width: 100%;
  height: 100%;

  min-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: url("./assets/1.svg") 100% no-repeat;
  height: 100vh;
  @media (max-width: $md4+px) {
    overflow: auto;
    align-items: center;
  }
}
//</ОБОЛОЧКА>===========================================================================================================

//<ОСНОВНАЯ СЕТКА>===========================================================================================================
._container {
  max-width: $maxWidthContainer + px;
  margin: 0 auto;
  @media (max-width: $md1+px) {
    max-width: 970px;
  }
  @media (max-width: $md2+px) {
    max-width: 750px;
  }
  @media (max-width: $md3+px) {
    max-width: none;
    padding: 0 10px;
  }
}
//</ОСНОВНАЯ СЕТКА>===========================================================================================================

//<ОСНОВНОЙ БЛОК>====================================================================================================
.page {
  flex: 1 1 auto;
}
//===================================================================================================================================
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.label {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  @include adaptiv-font(16, 18, 18);
  line-height: 19px;

  color: #030102;

  display: block;
}
.input {
  background: #ffffff;
  border: 1px solid #e2e6ee;
  box-sizing: border-box;
  box-shadow: 0px 4px 18px rgba(158, 168, 189, 0.31);
  border-radius: 10px;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.8px;

  color: #030102;

  padding: 11px 11px;

  display: block;
  width: 100%;
}
.btn {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;

  background: #288fb4;
  border-radius: 10px;
  padding: 12px 24px;
  letter-spacing: 0.8px;

  display: block;
  margin: 0px auto;

  &:hover {
    text-decoration: underline;
  }
}

input:focus {
  background-color: rgb(243, 243, 243);
  border: 1px solid #121f28;
  outline: 0;
  transition-duration: 700ms;
}
//</ОСНОВНОЙ БЛОК>====================================================================================================
</style>
