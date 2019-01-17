const {
	override,
	fixBabelImports,
	addLessLoader,
} = require('customize-cra');


module.exports = override(
	fixBabelImports('babel-plugin-import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true, // change importing css to less
	}),
	addLessLoader({
		javascriptEnabled: true,
		modifyVars: {
			'@primary-color': '#F00',
			'@text-color': '#F00',
		},
	}),
);
