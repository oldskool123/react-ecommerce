import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart, item }) => {
	const classes = useStyles();

	const Emptycart = () => {
		<Typography variant="subtitle1">
			<Link to="/" className={classes.link}>
				Add items to cart
			</Link>
		</Typography>;
	};

	const FilledCart = () => {
		<>
			<Grid container spacing={3}>
				{cart.line_items.map(() => (
					<Grid item xs={12} sm={4} key={item.id}>
						<CartItem item={item} />
					</Grid>
				))}
			</Grid>
			<div className={classes.cardDetails}>
				<Typography variant="h4">
					Totalt: {cart.subtotal.formatted_with_symbol}
				</Typography>
				<div>
					<Button
						className={classes.emptyButton}
						size="large"
						type="button"
						variant="contained"
						color="secondary"
					>
						Empty cart
					</Button>
					<Button
						className={classes.checkoutButton}
						size="large"
						type="button"
						variant="contained"
						color="primary"
					>
						Checkout
					</Button>
				</div>
			</div>
		</>;
	};

	if (!cart.line_items) return 'Loading ...';

	return (
		<Container>
			<div className={classes.toolbar} />
			<Typography className={classes.title} variant="h3" gutterBottom>
				Shopping cart
			</Typography>
			{!cart.line_items.length ? <Emptycart /> : <FilledCart />}
		</Container>
	);
};

export default Cart;
