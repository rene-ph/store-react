import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Grid from '@material-ui/core/Grid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from './Navbar.styles';

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleBackHome = () => {
    history.push('/');
  }

  const handleCart = () =>{
      history.push('/viewcart');
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
                        <ShoppingCartIcon onClick={handleCart}/>
                    </Toolbar>
                </AppBar>
            </div>
        </>
  );
}

export default Navbar;
