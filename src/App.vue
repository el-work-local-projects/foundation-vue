<template>
  <div id="app">
    <NavBar></NavBar>
	<div class="app-content grid-container" style="display: flex; align-items: center; justify-content: center;">
		<h3>Working with this framework stinks.</h3>
	</div>
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
