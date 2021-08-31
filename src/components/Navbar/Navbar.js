import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
     '& .MuiGrid-container': {
         alignItems: 'center'
    },
    '& svg': {
      cursor: 'pointer'
    }
  },
  navBar: {
    paddingLeft: theme.spacing(25),
    paddingRight: theme.spacing(25),
    backgroundColor: 'white',
    color: 'black',
  },
  iconLogIn: {
    paddingRight: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
        <>
            <div className={classes.root}>
                <AppBar position="static" classes={{ root: classes.navBar }}>
                    <Toolbar>
                        <Grid container>
                            <Grid container item xs={8} lg={2}>
                                <h2>ReactEShop</h2>
                            </Grid>
                        </Grid>
                        <AccountBoxIcon classes={{ root: classes.iconLogIn }}></AccountBoxIcon>
                        <ShoppingCartIcon></ShoppingCartIcon>
                    </Toolbar>
                </AppBar>
            </div>
        </>
  );
}

export default Navbar;
