import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
const Layout = (props) => {
	return (
		<>
			<Header />
			<div class='ms-Grid'>{props.children}</div>
			<Footer />
		</>
	);
};

export default Layout;
