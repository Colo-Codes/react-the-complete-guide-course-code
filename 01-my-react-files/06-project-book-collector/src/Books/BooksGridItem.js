import { useState } from 'react';

import { Button, makeStyles, Grid, Card, CardContent, CardActions, Typography, CardHeader, Avatar } from '@material-ui/core';
import { TurnedIn } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '15rem',
        height: '100%',
    },
    cardFooter: {
        marginTop: 'auto',
    },
}));

const BooksGridItem = props => {
    const [raised, setRaised] = useState(false);

    const classes = useStyles();

    const toggleRaised = () => setRaised(!raised)

    const clickHandler = () => {
        props.onDelete(props.id);
    }

    return (
        <Grid item>
            <Card onMouseOver={toggleRaised} onMouseOut={toggleRaised} raised={raised} className={classes.root}>
                <CardHeader avatar={<Avatar color="secondary"><TurnedIn /></Avatar>}>
                </CardHeader>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body1">
                        {props.author}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardFooter}>
                    <Button variant="outlined" size="small" color="secondary" onClick={clickHandler}>
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default BooksGridItem;