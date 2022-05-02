import './App.css';
import React from 'react';
// component import
import NavMenu from './components/NavMenu';
import GuestHome from './pages/GuestHome';
// packages import
import 'bootstrap/dist/css/bootstrap.css';

function App() {
	return (
		<React.Fragment>
			<section className="layout">
				<div className="header">
					<NavMenu />
				</div>
				<div className="leftSide" />
				<div className="body">
					<GuestHome />
				</div>
				<div className="rightSide" />
			</section>
		</React.Fragment>
	);
}

export default App;
