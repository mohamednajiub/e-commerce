import React from 'react';
import './App.scss';
import Layout from './containers/Layout/Layout';
import Card from './components/Card/Card';

function App() {
	return (
		<div className='App'>
			<Layout>
				<Card product_image='null' product_name='Jacket' currency='$' offer='10' price='100' />
			</Layout>
		</div>
	);
}

export default App;
