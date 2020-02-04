import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render () {
        const ingredientSummary = Object.keys( this.props.ingredients )
            .map( igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li> );
            } );

        return (
            <Aux>
                <h3>Jouw burger</h3>
                <p>Een heerlijke burger met de volgende ingredienten:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Totaal prijs: €{this.props.price.toFixed( 2 ).replace('.',',')}</strong></p>
                <p>Wil je afrekenen?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>ANNULEREN</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>VERDER NAAR BETALEN</Button>
            </Aux>
        );
    }
}

export default OrderSummary;