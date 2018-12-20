<template>
  <div id="app">
    <div class="aside">
      <Aside></Aside>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Aside from '@/components/aside';
export default {
  name: 'App',
  components: {
    Aside
  }
}
</script>

<style lang="scss">
@import './assets/css/base.scss';
.container {
  width: 100%;
  overflow: hidden;
  min-height: 500px;
  background: $backgroundColor;
  padding-left: 130px;
  padding-right: 5px;
}
.aside {
  position: fixed;
  left: 0;
  top: 0;
  width: 120px;
  height: 100%;
  background: #383838;
  z-index: 9;
}
</style>

