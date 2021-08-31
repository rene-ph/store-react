import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../../redux/cartSlice';

const useStyles = makeStyles({
    root: {
      textAlign: 'center',
      fontSize: '18px',
      '& h3': {
          margin: 0
      }
    },
    media: {
      height: 360,
    },
    price: {
        fontSize: '25px',
        color: '#666',
        display: 'block',
        paddingLeft: '2rem',
    }
});

const CategoryItem = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch()

    return (
        <Card className={classes.root}>
            <CardContent>
                <CardMedia
                    className={classes.media}
                    image={props.imageUrl}
                    title="article"/>
                    <h3>{props.name}</h3>
                <Grid container 
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center">
                    <Grid item xs={12} lg={10} justifyContent="space-around">
                        <b className={classes.price}>${props.price}</b>
                    </Grid>
                    <Grid item xs={12} lg={2}>
                        <CardActionArea>
                            <ShoppingCartTwoToneIcon onClick={() => {
                                dispatch(add({'one':1}))
                            }}/>
                        </CardActionArea>
                    </Grid>
                </Grid>
             </CardContent>
        </Card>
    )
}

export default CategoryItem;
