import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Popover } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import moment from 'moment';
import { useDispatch } from 'react-redux';
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
// import MuiAccordion from '@mui/material/Accordion';
// import MuiAccordionSummary from '@mui/material/AccordionSummary';
// import MuiAccordionDetails from '@mui/material/AccordionDetails';

import { deleteCard } from '../../../actions/cards'
import useStyles from './styles';

const CardHero = ({ card, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} height="140" image={card.images} title={card.nickname} />
            <div className={classes.overlay}>
                <Typography variant="h6">{card.nickname}</Typography>
                <Typography variant="body2">{moment(card.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button
                    style={{ color: 'white' }}
                    size="small"
                    onClick={() => setCurrentId(card._id)}>
                    <CreateIcon fontSize="medium" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body1">{card.realName}</Typography>
            </div>

                            {/* <PopupState variant="popover" popupId="demo-popup-popover">
                            {(popupState) => (
                            <div>
                            <Button variant="contained" {...bindTrigger(popupState)}>
                            Open Popover
                            </Button>
                            <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                            }}
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                            }}
                        >
                            <Typography className={classes.title} sx={{ p: 2 }} gutterBottom>{card.originDescription}</Typography>
                                                    <Typography className={classes.title} variant="h6" gutterBottom>{card.originDescription}</Typography>
                        <Typography className={classes.title} variant="h6" gutterBottom>{card.superpowers}</Typography>
                        <Typography className={classes.title} variant="h6" gutterBottom>{card.catchPhrase}</Typography>
                            </Popover>
                            </div>
                            )}
                            </PopupState> */}

                    <CardContent>
                        <Typography className={classes.title} variant="h6" gutterBottom>{card.originDescription}</Typography>
                        <Typography className={classes.title} variant="h6" gutterBottom>{card.superpowers}</Typography>
                        <Typography className={classes.title} variant="h6" gutterBottom>{card.catchPhrase}</Typography>
                    </CardContent>

            <CardActions className={classes.cardActions}>
                <Button
                    size="small"
                    color="primary"
                    onClick={() => dispatch(deleteCard(card._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default CardHero;