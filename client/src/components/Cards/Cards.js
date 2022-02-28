import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import CardHero from './Card/CardHero'
import useStyles from './styles';

const Cards = ({ setCurrentId }) => {
    const cards = useSelector((state) => state.cards);
    const classes = useStyles();

    return (
        !cards.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {cards.map((card) => (
                    <Grid key={card._id} item xs={12} sm={6}>
                        <CardHero card={card} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Cards;