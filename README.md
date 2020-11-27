Burgerbuilder, een React app gebaseerd op het burgerbuilder project van [https://www.udemy.com/course/react-the-complete-guide-incl-redux/](Maximilian Schwarzmüller).

Een live-demo is te vinden op [https://burgerbuilder.remcokersten.nl/](https://burgerbuilder.remcokersten.nl/)

### Installatie

## React installatie

Deze applicatie is gebouwd in React. Run eerst `npm install`

## Google Firebase

Voor deze applicatie wordt gebruik gemaakt van een Google Firebase database.
Maak een realtime database met de volgende indeling:

    {
        ingredienten: {
            bacon: 0,
            cheese: 0,
            meat: 0,
            salad: 0
        },
        orders: {

        }
    }

Maak in de hoofdmap een bestand aan genaamd .env met hierin de volgende variabele:
`REACT_APP_FIREBASE_URL=URL_FIREBASE_APP`
