import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getCards } from './actions/cards';
import Cards from './components/Cards/Cards';
import Form from './components/Form/Form';
import superheros2 from './images/superheros2.png';
import superheros1 from './images/superheros1.png';
import dc from './images/dc.png';
import marvel from './images/marvel.png';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCards());
    }, [currentId, dispatch]);

    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <img className={classes.image} src={dc} alt="dc" />
                <img className={classes.image} src={superheros1} alt="superheros1" />
                <Typography className={classes.heading}  variant="h2" align="center">Superheros</Typography>
                <img className={classes.image} src={superheros2} alt="superheros2" />
                <img className={classes.image} src={marvel} alt="marvel" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Cards setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};


export default App;