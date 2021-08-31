import useStyles from './Navbar.styles';
import AppBar from '@material-ui/core/AppBar';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleBackHome = () => {
    history.push('/home');
  }

  return (
        <>
            <div className={classes.root}>
                <AppBar position="static" className={classes.navBar}>
                    <Toolbar>
                        <Grid container>
                            <Grid container item xs={8} lg={2}>
                                <h2 onClick={handleBackHome}>ReactEShop</h2>
                            </Grid>
                        </Grid>
                        <AccountBoxIcon/>
                        <ShoppingCartIcon/>
                    </Toolbar>
                </AppBar>
            </div>
        </>
  );
}

export default Navbar;