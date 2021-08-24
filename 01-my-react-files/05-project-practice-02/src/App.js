import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import HomeIcon from '@material-ui/icons/Home';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { TextField } from '@material-ui/core';

import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import { purple } from '@material-ui/core/colors';

import 'fontsource-roboto';

import { Typography } from '@material-ui/core';

import { Container } from '@material-ui/core';

import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    borderRadius: '10px',
    color: 'white',
    padding: '0 30px'
  }
});

const theme = createTheme({
  typography: {
    h4: {
      fontSize: 18
    }
  },
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: purple[500],
    }
  }
});


function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test styled button</Button>;
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <Menu />
                </IconButton>
                <Typography variant="h6">
                  MUI Theming
                </Typography>
                <Button>
                  Login
                </Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h4" component="h1">Welcome to Material UI!</Typography>
            <ButtonStyled />
            <Grid container spacing={4} justify="center">
              <Grid item xs={3} sm={6} md={9} lg={12}>
                <Paper style={{ height: 75, width: '100%' }}></Paper>
              </Grid>
              <Grid item xs={3} sm={6} md={9} lg={12}>
                <Paper style={{ height: 75, width: '100%' }}></Paper>
              </Grid>
              <Grid item xs={3} sm={6} md={9} lg={12}>
                <Paper style={{ height: 75, width: '100%' }}></Paper>
              </Grid>
            </Grid>

            <TextField variant="filled" type="email" label="Your email address" placeholder="your@email.com" />
            <br />
            <ButtonGroup variant="contained" color="primary">
              <Button startIcon={
                <HomeIcon />
              } href="#" color="secondary" size="large">Hello world!</Button>
              <Button startIcon={
                <ArrowForward />
              } href="#" size="large">Read more</Button>
            </ButtonGroup>
            <h1>This is a custom text line</h1>
            <img src={logo} className="App-logo" alt="logo" />

          </header>
        </div>
      </Container>
    </ThemeProvider >
  );
}

export default App;
