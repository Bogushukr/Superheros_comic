import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createCard, updateCard } from '../../actions/cards';

const Form = ({ currentId, setCurrentId }) => {
    const [cardData, setCardData] = useState({
        nickname: '',
        realName: '',
        originDescription: '',
        superpowers: '',
        catchPhrase: '',
        images: ''
    });
    const card = useSelector((state) => currentId ? state.cards.find((c) => c._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => { 
        if (card) setCardData(card);
    }, [card])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updateCard(currentId, cardData));
        } else {
            dispatch(createCard(cardData));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setCardData({
        nickname: '',
        realName: '',
        originDescription: '',
        superpowers: '',
        catchPhrase: '',
        images: ''
    });
    }
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creting' } a Hero</Typography>
                <TextField
                    name="nickname"
                    variant="outlined"
                    label="Nickname"
                    fullWidth
                    value={ cardData.nickname }
                    onChange={(e) => setCardData({ ...cardData, nickname: e.target.value })}
                />
                    <TextField
                    name="realName"
                    variant="outlined"
                    label="Real name"
                    fullWidth
                    value={ cardData.realName }
                    onChange={(e) => setCardData({ ...cardData, realName: e.target.value })}
                />
                    <TextField
                    name="originDescription"
                    variant="outlined"
                    label="Origin description"
                    fullWidth
                    value={ cardData.originDescription }
                    onChange={(e) => setCardData({ ...cardData, originDescription: e.target.value })}
                />
                    <TextField
                    name="superpowers"
                    variant="outlined"
                    label="Superpowers"
                    fullWidth
                    value={ cardData.superpowers }
                    onChange={(e) => setCardData({ ...cardData, superpowers: e.target.value })}
                />
                    <TextField
                    name="catchPhrase"
                    variant="outlined"
                    label="Catch phrase"
                    fullWidth
                    value={ cardData.catchPhrase }
                    onChange={(e) => setCardData({ ...cardData, catchPhrase: e.target.value })}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setCardData({ ...cardData, images: base64 })}
                        
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                >
                    {currentId ? 'Back' : 'Clear' }
                </Button>
            </form>
        </Paper>
    );
}

export default Form;