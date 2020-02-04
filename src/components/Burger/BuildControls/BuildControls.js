import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salade', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Kaas', type: 'cheese' },
    { label: 'Vlees', type: 'meat' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Huidige prijs: <strong>€ {props.price.toFixed(2).replace('.', ',')}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>BESTEL DEZE BURGER!</button>
    </div>
);

export default buildControls;