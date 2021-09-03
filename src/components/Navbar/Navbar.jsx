import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import {
    AppBar,
    Badge,
    Grid,
    Toolbar
} from '@material-ui/core'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './Navbar.styles';
import { getCartQuantity } from '../../redux/selector/cart.selector';

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
 
  const quantity = useSelector(getCartQuantity);
  

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
                            <Grid item xs={8} lg={11}>
                                <h2 onClick={handleBackHome}>ReactEShop</h2>
                            </Grid>
                            <Grid item xs={4} lg={1}>
                                <AccountBoxIcon/> 
                                    <Badge badgeContent={quantity} 
                                           color="primary" 
                                           className={classes.badge}>
                                        <ShoppingCartIcon onClick={handleCart}/>
                                    </Badge>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        </>
  );
}

export default Navbar;
