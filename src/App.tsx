import React, { FC, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import { Spin } from 'antd'
import Layout from '@/components/layout'
import './style/App.less'

const loadComponent = (name: string) =>
	Loadable({
		loader: () => import(`@/views/${name}`),
		loading: () => (
			<div
				style={{
					width: '100%',
					height: '400px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Spin size="large"></Spin>
			</div>
		)
	})

const App: FC = () => (
	<Suspense fallback={<Spin size="large"></Spin>}>
		<Router>
			<Switch>
				<Route
					path="/"
					render={() => (
						<Layout>
							<Switch>
								<Route path="/main" component={loadComponent('home/Home')} />
								<Route component={loadComponent('home/Home')} />
							</Switch>
						</Layout>
					)}
				></Route>
			</Switch>
		</Router>
	</Suspense>
)

export default App
