<template>
	<div class="top-bar" id="header" style="background: $primary-color">
		<div class="top-bar-left">
			<ul class="dropdown menu" data-dropdown-menu>
				<li>
					<a href="#"><span class="mdi mdi-coffee"></span> EMS CAFE</a>
				</li>
				<li class="has-submenu">
					<a href="#0">Application</a>
					<ul class="submenu menu vertical" data-submenu>
						<li v-for="(app, index) in apps" :key="`app-${index}`">
							<a href="#0">{{ app }}</a>
						</li>
					</ul>
				</li>
				<li>
					<div class="input-group" style="margin: 0; align-items: center;">
						<span class="input-group-label mdi mdi-tab-plus"></span>
						<div class="switch tiny" style="margin: 0;">
							<input class="switch-input" id="same-window-switch" type="checkbox" name="same-window-switch">
							<label class="switch-paddle" for="same-window-switch"></label>
						</div>
						<span class="input-group-label mdi mdi-tab-unselected"></span>		
					</div>
				</li>
			</ul>
		</div>
		<div class="top-bar-right">
			<ul class="dropdown menu" data-dropdown-menu>
				<li>
					<a href="#" style="padding-right: 0;">
						<span class="mdi mdi-message" style="font-size: 18px"></span>
						<span style="position: relative; left: -8px; top: 5px;" class="badge success">5</span>
					</a>
				</li>
				<li class="has-submenu">
					<a href="#">
						<span class="mdi mdi-help-circle"></span>
					</a>
					<ul class="submenu menu vertical" data-submenu>
						<li><a href="#">CAFE User Guide</a></li>
						<li><a href="#">Application User Guide</a></li>
						<li><a href="#">CAFE Administration Guide</a></li>
						<li><a href="#">Application Administration Guide</a></li>
					</ul>
				</li>
				<li class="has-submenu">
					<a href="#">
						<span class="mdi mdi-account"></span> {{ user.name }}				
					</a>
					<ul class="submenu menu vertical" data-submenu>
						<li><a href="#">Log out</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'NavBar',
		data: () => {
			return {
				user: {
					name: 'dummy'
				},
				apps: [
					'ACE Viewer',
					'PCC Operating Report',
					'OASIS Administrator',
					'Shift Log'
				],
				samewindow: false
			}
		}
	}
</script>

<style>
</style>

<style scoped>
	#header {
		height: 50px;
	}
</style>