import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import useStyles  from './CategoryItem.styles';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import { useDispatch } from 'react-redux';
import { add } from '../../redux/cartSlice';

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
                    <Grid item xs={12} lg={10}>
                        <b className={classes.price}>${props.price}</b>
                    </Grid>
                    <Grid item xs={12} lg={2}>
                        <CardActionArea>
                            <ShoppingCartTwoToneIcon onClick={() => {
                                dispatch(add({'name': props.name, 'price': props.price}))
                            }}/>
                        </CardActionArea>
                    </Grid>
                </Grid>
             </CardContent>
        </Card>
    )
}

export default CategoryItem;
