<template>
  <section class="dashboard">
    <article class="dashboard-body">
      <div class="dashboard-body__image">
        <img src="../assets/like.png" alt="" />
      </div>
    </article>
  </section>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      error: null,
      emailSending: false,
    };
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    sendVerifyEmail() {
      this.emailSending = true;
      const user = firebase.auth().currentUser;
      const actionCodeSettings = {
        url: `${process.env.VUE_APP_HOST_NAME}/sign-in/?email=${user.email}`,
      };
      user
        .sendEmailVerification(actionCodeSettings)
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

<style scoped lang="scss">
@import "@/styles/_mixins.scss";
@import "@/styles/_var.scss";
.dashboard {
}
.dashboard-body {
  &__image {
    align-items: center;
    text-align: center;
    img {
      height: 400px;
      weight: 400px;
    }
  }
}
</style>
