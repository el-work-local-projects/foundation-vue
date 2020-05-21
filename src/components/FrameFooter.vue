<template>
	<div id="footer" class="grid-x grid-padding-x">
		<div class="cell small-6">
			<p>Report problems to the EMS Support Center (<span class="mdi mdi-phone" aria-hidden="false"></span> 555-555-5555)</p>
		</div>
		<div class="cell small-6">
			<p style="text-align: right;">Copyright <span class="mdi mdi-copyright" aria-hidden="false"></span> 
					{{ now | date }} Southern Company <span class="mdi mdi-billiards-rack"></span></p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'FrameFooter',
		data: () => {
			return {
				now: new Date()
			}
		},
		filters: {
			date: function(value) {
				return value.getYear() + 1900;
			}
		}
	}
</script>

<style scoped>
	#footer {
		height: 30px;
		border-top: 1px solid black;
	}
	p {
		font-size: 12px;
		margin: 0;
	}
</style>