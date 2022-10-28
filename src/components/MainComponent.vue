<template>
  <header-view />
  <div id="app__container">
    <RouterView />
  </div>
  <footer-view />
</template>

<script>
import HeaderView from "../views/layouts/HeaderView.vue";
import FooterView from "../views/layouts/FooterView.vue";
export default {
  components: {
    HeaderView,
    FooterView,
  },
};
</script>

<style lang="css" scoped>
#app__container {
  margin: 4rem 0;
}
</style>
