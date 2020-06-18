import React from 'react';
import './App.scss';
import Card from './components/Card/Card';

function App() {
	return (
		<div className='App'>
			<Card product_image='null' product_name='Jacket' currency='$' offer='10' price='100' />
		</div>
	);
}

export default App;
