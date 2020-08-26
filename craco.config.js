const CracoLessPlugin = require('craco-less')
const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
	webpack: {
		alias: {
			'@': resolve('src')
		}
	},
	babel: {
		plugins: [
			['import', { libraryName: 'antd', style: true }],
			['@babel/plugin-proposal-decorators', { legacy: true }]
		]
	},
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							// '@primary-color': '#1DA57A'
						},
						javascriptEnabled: true
					}
				}
			}
		}
	],
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:3003',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
}
