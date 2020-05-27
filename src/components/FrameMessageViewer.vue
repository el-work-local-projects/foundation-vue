<template>
	<div class="reveal" id="frameMessageModal" data-reveal>
		<div class="card">
			<div class="card-divider">
				<h5>CAFE Messages</h5>
				<button class="close-button" data-close type="button">
					<span class="mdi mdi-close"></span>
				</button>
			</div>
			<div class="card-section">
				<div v-for="(msgs, app) in groupedMessages" :key="app">
					<h5>{{ app }}</h5>
					<hr/>
					<div v-for="msg in msgs" :key="msg.message" class="callout" :class="msg.type">
						{{ msg.message }}
						<button class="close-button small" type="button" @click="deleteMessage(msg)">
							<span class="mdi mdi-close"></span>
						</button>
					</div>
				</div>
			</div>
			<div class="card-divider">
				<button class="button expanded" type="button" @click="undoDismissals">Undo Dismissals</button>
			</div>
		</div>
	</div>
</template>

<script>
	function loadMessages() {
		return [
			{
				type: 'info',
				message: 'Test message 1',
				applications: [
					'EOS Viewer',
					'Shift Log'
				]
			},
			{
				type: 'success',
				message: 'Test message 2',
				applications: [
					'CAFE'
				]
			}
		];
	}

	export default {
		name: 'FrameMessageViewer',
		data: () => {
			return {
				messages: []
			}
		},
		created() {
			this.messages = loadMessages();
		},
		computed: {
			groupedMessages() {
				let grouped = {};
				for (let msg of this.messages) {
					for (let app of msg.applications) {
						if (!grouped[app]) {
							grouped[app] = [];
						}
						grouped[app].push(msg);
					}
				}
				return grouped;
			}
		},
		methods: {
			deleteMessage(msg) {
				this.messages.splice(this.messages.indexOf(msg), 1);
			},
			undoDismissals() {
				this.messages = [
					{
						type: 'info',
						message: 'Test message 1',
						applications: [
							'EOS Viewer',
							'Shift Log'
						]
					},
					{
						type: 'success',
						message: 'Test message 2',
						applications: [
							'CAFE'
						]
					}
				];
			}
		}
	}
</script>

<style scoped>
	.reveal {
		padding: 0;
	}
</style>