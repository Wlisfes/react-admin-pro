const {
	override,
	fixBabelImports,
	addLessLoader,
	addDecoratorsLegacy,
	addWebpackAlias,
	overrideDevServer
} = require('customize-cra')
const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const addProxy = () => configFunction => {
	configFunction.proxy = {
		'/api': {
			target: 'http://localhost:3003',
			changeOrigin: true,
			pathRewrite: { '^/api': '' }
		}
	}

	return configFunction
}

module.exports = {
	webpack: override(
		addDecoratorsLegacy(),
		addWebpackAlias({
			'@': resolve('src')
		}),
		fixBabelImports('import', {
			libraryName: 'antd',
			libraryDirectory: 'es',
			style: 'css'
		}),
		addLessLoader({
			javascriptEnabled: true,
			modifyVars: { '@primary-color': '#1DA57A' },
			localIdentName: '[local]--[hash:base64:5]' // 自定义 CSS Modules 的 localIdentName
		})
	),
	devServer: overrideDevServer(addProxy())
}
