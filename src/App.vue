<template>
  <div id="app">
    <NavBar></NavBar>
	<div class="app-content grid-container">Content</div>
	<FrameFooter></FrameFooter>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FrameFooter from './components/FrameFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,
	FrameFooter
  }
}
</script>

<style>
	@import "../node_modules/@mdi/font/css/materialdesignicons.min.css";
	@import "../node_modules/foundation-sites/dist/css/foundation.min.css";
	
	html {
		height: 100%;
	}
	
	body {
		height: 100%;
	}
	
	#app {
		height: 100%;
	}
	
	.app-content {
		height: calc(100% - 80px);
	}
</style>
