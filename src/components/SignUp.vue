<template>
  <section class="sign-up">
    <article class="sign-up__article">
      <header>
        <h2 class="sign-up__subtitle">Создать аккаунт</h2>
      </header>
      <transition name="fade">
        <p class="sign-up__error" v-if="error">
          {{ error }}
        </p>
      </transition>
      <form @submit.prevent>
        <div class="sign-up-mail">
          <label for="email" class="sign-up-mail__label label">Email</label>
          <input
            required
            type="email"
            placeholder="qwert@google.com"
            v-model="email"
            id="email"
            class="sign-up-mail__input input"
          />
        </div>
        <div class="sign-up-pass">
          <label class="sign-up-pass__label label">Password</label>
          <input
            required
            type="password"
            v-model.trim="password"
            minlength="6"
            id="password"
            placeholder="123456"
            class="sign-up-pass__input input"
          />
        </div>
        <button type="submit" @click="signUp" class="sign-up-pass__btn btn">
          Создать
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
    };
  },
  methods: {
    signUp() {
      this.error = null;
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          const user = firebase.auth().currentUser;
          const actionCodeSettings = {
            url: `${process.env.VUE_APP_HOST_NAME}/sign-in/?email=${user.email}`,
          };
          user.sendEmailVerification(actionCodeSettings);
        })
        .catch(() => {
          this.error = `Что-то не так`;
        });
    },
  },
};
</script>



<style lang="scss">
@import "@/styles/_mixins.scss";
@import "@/styles/_var.scss";

.error2 {
  border: 1px solid red;
  color: red;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  @include adaptiv-font(20, 18, 20);
  line-height: 23px;
  letter-spacing: 0.5px;

  background: #ffffff;
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

  margin: 0px 0px 24px 0px;
}

.sign-up {
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(77, 166, 186, 0.38);
  border-radius: 20px;
  max-width: 360px;
  margin: 0px auto;
  padding: 16px 30px 30px;
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

.sign-up-mail {
  &__label {
    padding: 0px 0px 10px 0px;
  }

  &__input {
    margin: 0px 0px 24px 0px;
  }
}
.sign-up-pass {
  &__label {
    padding: 0px 0px 10px 0px;
  }

  &__input {
    margin: 0px 0px 24px 0px;
  }

  &__btn {
  }
}
</style>