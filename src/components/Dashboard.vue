<template>
  <section class="dashboard">
    <article class="dashboard-body">
      <div class="dashboard-body__image">
        <img src="../assets/checkmark.svg" alt="" />
      </div>
    </article>
  </section>
</template>

<script>
export default {};
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
    padding: 10vh 0px 0px 0px;
    img {
      height: 100px;
      width: 100px;
    }
  }
}
</style>
