<template>
  <section class="sign-in">
    <article class="sign-in__article">
      <header>
        <h2 class="sign-in__subtitle">Войти</h2>
      </header>
      <transition name="fade">
        <p class="sign-in__error" v-if="error">
          {{ error }}
        </p>
      </transition>
      <form @submit.prevent>
        <div class="sign-in-mail">
          <label for="email" class="sign-in-mail__label label">Email</label>
          <input
            required
            type="email"
            placeholder="qwert@google.com"
            v-model.trim="email"
            id="email"
            class="sign-in-mail__input input"
          />
        </div>
        <div class="sign-in-pass">
          <label for="password" class="sign-in-pass__label label"
            >Password</label
          >
          <input
            required
            type="password"
            v-model.trim="password"
            minlength="6"
            id="password"
            placeholder="123456"
            class="sign-in-pass__input input"
          />
        </div>
        <router-link
          :to="{ name: 'forgotPassword' }"
          class="forgot-password-link"
          >Забыл пароль</router-link
        >
        <button type="submit" @click="signIn" class="sign-in-pass__btn btn">
          Войти
        </button>
      </form>
    </article>
  </section>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    signIn() {
      this.error = null;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace("dashboard");
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_mixins.scss";
@import "@/styles/_var.scss";
.sign-in {
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(77, 166, 186, 0.38);
  border-radius: 20px;
  max-width: 360px;
  margin: 0px auto;
  padding: 16px 30px 30px;
   @media (max-width: $md2+px) {
    margin: 0px 0px 30px 0px;
  }
  @media (max-width: $md3+px) {
    margin: 0px 0px 30px 0px;
  }
  @media (max-width: $md4+px) {
    margin: 0px 0px 30px 0px;
  }

  &__article {
  }

  &__subtitle {
    font-style: normal;
    font-weight: normal;
    @include adaptiv-font(20, 18, 20);
    line-height: 23px;
    letter-spacing: 0.5px;

    color: #030102;
    text-align: center;
    padding: 10px 0px 30px 0px;
  }

  &__error {
    color: red;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    @include adaptiv-font(20, 18, 20);
    letter-spacing: 0.5px;
  }
}

.sign-in-mail {
  &__label {
    padding: 0px 0px 10px 0px;
  }

  &__input {
    margin: 0px 0px 24px 0px;
  }
}
.sign-in-pass {
  &__label {
    padding: 0px 0px 10px 0px;
  }

  &__input {
    margin: 0px 0px 20px 0px;
  }

  &__btn {
  }
}

.forgot-password-link {
  display: block;
  padding: 0px 0px 20px 0px;
  text-align: center;
}
</style>