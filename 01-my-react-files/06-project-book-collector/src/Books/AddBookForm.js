import { Container } from '@material-ui/core';
// import { useTheme } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { Book } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from "@material-ui/core";

// Use Dialogs

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        width: theme.spacing(8),
        height: theme.spacing(8),
        backgroundColor: theme.palette.primary.main,
    },
    icon: {
        color: 'white',
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const AddBookForm = props => {
    const classes = useStyles();

    return (
        <Container maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <Book className={classes.icon} />
                </Avatar>
                <Typography variant="h5" component="h2">Add a new book to the system</Typography>
                <form className={classes.form}>
                    <TextField variant="outlined" margin="normal" fullWidth id="book-title" label="Book Title" placeholder="Eloquent JavaScript" />
                    <TextField variant="outlined" margin="normal" fullWidth id="description" label="Short Description" placeholder="Master the language of the web" />
                    <Button className={classes.submit} variant="contained" color="primary" type="submit" fullWidth>Add new book</Button>
                </form>
            </div>
        </Container>
    );
}

export default AddBookForm;