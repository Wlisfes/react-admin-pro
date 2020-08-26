import React, { FC, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Spin } from 'antd'
import './style/App.less'
import Home from './views/home/Home'

const App: FC = () => (
	<Suspense fallback={<Spin size="large"></Spin>}>
		<Router>
			<Switch>
				<Route path="/" component={Home}></Route>
			</Switch>
		</Router>
	</Suspense>
)

export default App
