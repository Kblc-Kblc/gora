<template>
  <header class="header">
    <div class="_container">
      <nav class="header-nav">
        <div class="header-nav__columns">
          <router-link to="/" class="header-nav__logo">
            <i class="header-nav__home">
              <img src="../assets/logo.svg" alt="" />
            </i>
          </router-link>
        </div>
        <div class="header-nav__columns">
          <router-link to="/" class="header-nav__item">
            <img src="../assets/home3.svg" alt="" />
          </router-link>
          <router-link to="dashboard" class="header-nav__item" v-if="user"
            >{{ user.email }}</router-link
          >
          <router-link to="sign-up" class="header-nav__item" v-if="!user"
            >Регистрация</router-link
          >
          <router-link to="sign-in" class="header-nav__item" v-if="!user"
            >Войти</router-link
          >
          <button @click="signOut" class="header-nav__item" v-if="user">
            Выйти
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import firebase from "firebase";

export default {
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("sign-in");
        });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/_mixins.scss";
@import "@/styles/_var.scss";

h2 {
  color: #fff;
}
.header {
  padding: 3vh 0px;
}

.header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: $md4+px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__columns {
    padding: 0px 0px 10vh 0px;
    display: flex;
    align-items: center;
    @media (max-width: $md4+px) {
      padding: 0px 0px 20px 0px;
      flex-direction: column;
    }
  }

  &__item {
    margin: 0px 0px 10px 40px;
    padding: 0px 0px 10px 0px;
    @include adaptiv-font(22, 18, 24);
    font-style: normal;
    font-weight: normal;
    line-height: 19px;
    color: #fff;
    cursor: pointer;
    background: transparent;

    display: inline-block;
    position: relative;
    

    &:after {
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 2px;
      left: 50%;
      position: absolute;
      background: #fa7268;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }
    &:hover:after {
      width: 100%;
      left: 0;
    }
  }

  &__home {
  }
}
</style>