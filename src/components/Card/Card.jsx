import React from 'react';
import 'office-ui-fabric-react/dist/css/fabric.css';

const Card = ({ product_image, product_name, currency, offer, price }) => {
	return (
		<div className='ms-Grid'>
			<img src={product_image} title={product_name} alt={product_name} />

			<div className='info'>
				<h3>{product_name}</h3>
				<p>
					{currency} {offer && parseInt(offer) > 0 ? price - price * (offer / 100) : price}
				</p>
				{offer && parseInt(offer) > 0 ? (
					<span className='original_price'>
						{currency} {price}
					</span>
				) : null}
			</div>
		</div>
	);
};

export default Card;
