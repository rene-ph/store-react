
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import Grid from '@material-ui/core/Grid';
import Navbar from '../../components/Navbar/Navbar';
import { getListOfCategory } from '../../utils/data';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto',
    },
    categoryCard: {
        margin: theme.spacing(2)
    },
  
}));

const CategoryList = ({match}) => {

    const data = getListOfCategory(parseInt(match.params.id, 10));
    const classes = useStyles();

    return (
        <>
            <Navbar/>
            <Grid container 
                  className={classes.root} 
                  justifyContent='center'>
                { data ? ( data.map( item => {
                    return(
                        <Grid item xs={12} lg={3} className={classes.categoryCard}>
                            <CategoryItem
                                name = {item.name}
                                imageUrl = {item.imageUrl}
                                price = {item.price}
                            />
                        </Grid>
                       )
                    })
                ): null}
            </Grid>
        
        </>
    )
}

export default CategoryList;
