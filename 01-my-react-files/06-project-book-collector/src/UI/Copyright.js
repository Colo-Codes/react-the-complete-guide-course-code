import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Made with '}
            <Link color="inherit" href="https://material-ui.com/" target="_blank">
                Material UI
            </Link>{' and '}
            <Link color="inherit" href="https://reactjs.org/" target="_blank">
                ReactJS
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright;