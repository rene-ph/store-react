
import Grid from '@material-ui/core/Grid';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import Navbar from '../../components/Navbar/Navbar';
import useStyles from './CategoryList.style';
import { getListOfCategory } from '../../utils/utils';

const CategoryList = ({match}) => {

    const data = getListOfCategory(parseInt(match.params.id, 10));
    const classes = useStyles();

    return (
        <>
            <Navbar/>
            <Grid container className={classes.root} >
                { data ? ( data.map( (item, index) => {
                    return(
                        <Grid item xs={12} lg={3} className={classes.categoryCard} key={index}>
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
