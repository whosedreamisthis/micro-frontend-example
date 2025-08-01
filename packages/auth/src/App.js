import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import SignIn from './components/Signin';
import SignUp from './components/Signup';

export default ({ history }) => {
	return (
		<div>
			<StylesProvider>
				<Router history={history}>
					<Switch>
						<Route path="/auth/signin" component={SignIn} />
						<Route path="/auth/signup" component={SignUp} />
					</Switch>
				</Router>
			</StylesProvider>
		</div>
	);
};
