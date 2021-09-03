
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import Navbar from '../../components/Navbar/Navbar';
import useStyles from './CategoryList.style';
import { getByListOfCategoryById } from '../../redux/selector/categories.selector';

const CategoryList = ({match}) => {

    const category = useSelector(getByListOfCategoryById(parseInt(match.params.id, 10)));
    const classes = useStyles();

    return (
        <>
            <Navbar/>
            <Grid container className={classes.root} >
                { category ? ( category.map( (item, index) => {
                    return(
                        <Grid item xs={12} lg={3} className={classes.categoryCard} key={index}>
                            <CategoryItem
                                name = {item.name}
                                imageUrl = {item.imageUrl}
                                id={item.item_id}
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
