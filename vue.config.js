module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'vf': './node_modules/vue2-foundation/components'
			}
		}
	},
	devServer: {
		port: 8081
	}
}