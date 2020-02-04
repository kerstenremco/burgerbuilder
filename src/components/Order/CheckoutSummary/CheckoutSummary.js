import React from 'react';
import Burger from '../../Burger/Burger';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hopen dat het lekker smaakt!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                </div>
            <Burger ingredients={props.ingredients} />
        </div>
        
    );
}

export default checkoutSummary;