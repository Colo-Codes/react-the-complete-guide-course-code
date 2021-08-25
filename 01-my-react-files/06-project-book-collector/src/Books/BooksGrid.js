import { Container, Grid } from '@material-ui/core';
import { useState } from 'react';
import BooksGridItem from './BooksGridItem';

const BooksGrid = props => {

    // const [newBook, setNewBook] = useState(false);


    return (
        <Container>
            <Grid container>
                <BooksGridItem title={props.newBookInfo.title} author={props.newBookInfo.author} />
            </Grid>
        </Container>
    );
}

export default BooksGrid;