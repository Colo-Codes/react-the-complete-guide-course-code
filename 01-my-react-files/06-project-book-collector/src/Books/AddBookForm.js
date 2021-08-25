import { Container, makeStyles, TextField, Button, Grid } from '@material-ui/core';
import { Book } from '@material-ui/icons';
import React, { useState } from 'react';
import Header from '../UI/Header';

// Use Dialogs

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
    buttons: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const AddBookForm = props => {
    const [bookInfo, setBookInfo] = useState({ title: '', author: '', id: '' });
    const classes = useStyles();

    const titleChangeHandler = e => {
        setBookInfo({ ...bookInfo, title: e.target.value });
    };

    const authorChangeHandler = e => {
        setBookInfo({ ...bookInfo, author: e.target.value });
    };

    const submitHandler = e => {
        e.preventDefault();
        // Setting an id that later will be used as key
        const id = Math.random().toString();
        bookInfo.id = id;
        // Lifting this state to be used in BooksGridItem
        props.onNewBook(bookInfo);
        // Reset input fields
        setBookInfo({ title: '', author: '' });
    };

    const clickCloseHandler = () => {
        props.onHideForm();
    }

    return (
        <Container maxWidth="xs">
            <div className={classes.paper}>
                <Header headerIcon={<Book />} headerContent={'Add a new book'} textContent={'Write the title and author below'} />
                <form className={classes.form} onSubmit={submitHandler}>
                    <TextField variant="outlined" margin="normal" fullWidth id="book-title" label="Book Title" placeholder="Eloquent JavaScript" onChange={titleChangeHandler} value={bookInfo.title} />
                    <TextField variant="outlined" margin="normal" fullWidth id="author" label="Author" placeholder="Master the language of the web" onChange={authorChangeHandler} value={bookInfo.author} />
                    <Grid container className={classes.buttons}>
                        <Grid item xs>
                            <Button variant="contained" color="secondary" onClick={clickCloseHandler}>Close</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" type="submit">Add new book</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default AddBookForm;