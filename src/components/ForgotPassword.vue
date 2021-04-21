<template>
  <section class="forgot-password">
    <h1 class="forgot-password__subtitle">Восстановить пароль</h1>
    <article class="forgot-password__article">
      <transition name="fade">
        <p class="forgot-password__error" v-if="error">
          {{ error }}
        </p>
      </transition>
      <form @submit.prevent>
        <div class="forgot-password-mail">
          <label for="email" class="forgot-password-mail__label label"
            >Email</label
          >
          <input
            required
            type="email"
            placeholder="qwert@google.com"
            v-model.trim="email"
            id="email"
            class="forgot-password-mail__input input"
          />
        </div>

        <button
          type="submit"
          @click="sendEmail"
          class="forgot-password-mail__btn btn"
        >
          <transition name="fade" mode="out-in">
            <span v-if="!emailSending">Отправить</span>
            <span v-else>Отправка...</span>
          </transition>
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
      error: null,
      emailSending: false,
    };
  },
  methods: {
    sendEmail() {
      if (!this.email) {
        this.error = "Please type in a valid email address.";
        return;
      }
      this.error = null;
      this.emailSending = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.emailSending = false;
        })
        .catch((error) => {
          this.emailSending = false;
          this.error = error.message;
        });
    },
  },
};
</script>


<style lang="scss" scoped>
@import "@/styles/_mixins.scss";
@import "@/styles/_var.scss";
.forgot-password {
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

.forgot-password-mail {
  &__label {
    padding: 0px 0px 10px 0px;
  }

  &__input {
    margin: 0px 0px 24px 0px;
  }
}
</style>