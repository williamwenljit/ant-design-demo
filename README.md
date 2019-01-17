# ant-design-demo

### 開發

1.
	* create-react-app
	* react-app-rewired
	* customize-cra
	* less-loader
	* antd

2.
	* webpack
	* less-loader
	* antd

3.
	* gulp
	* gulp-less
	* antd

### 使用 create-react-app 可能會遇到的問題

若要修改 ant design 既有的樣式，需先安裝 react-app-rewired 複寫 create-react-app
但是在 react-app-rewired 中的所有 method，已於 react-app-rewired@2.x 之後移到新的 package 'customize-cra'

```js
const { injectBabelPlugin } = require('react-app-rewired');
```
### 於安裝步驟
https://ant.design/docs/react/use-with-create-react-app-cn#%E4%BD%BF%E7%94%A8-babel-plugin-import

### injectBabelPlugin issue
https://github.com/timarney/react-app-rewired/issues/348#issuecomment-452276107

修改 less modifyVars
npm install less -g
npm install --save-dev less-loader

### 使用 babel-plugin-import 原因
https://ant.design/docs/react/getting-started-cn#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD
