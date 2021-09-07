
import { useState, useCallback, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import Navbar from '../../components/Navbar/Navbar';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import useStyles from './CategoryList.style';
import { getByListOfCategoryById, getListOfCategories } from '../../redux/selector/categories.selector';

const CategoryList = ({match}) => {

    const category = useSelector(getByListOfCategoryById(parseInt(match.params.id, 10)));
    const categoryList = useSelector(getListOfCategories());
    const categoryTitle = categoryList[parseInt(match.params.id, 10) -1];
    const classes = useStyles();

    const [showFiveItems, setShowFiveItems] = useState(true);

    useEffect(() => {
        if (category.length <= 5 ) {
            setShowFiveItems(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleShowMore = useCallback(() => {
        setShowFiveItems(false);
    }, []);

    return (
        <>
            <Navbar/>
            <Grid container className={classes.root} >
                { showFiveItems ? (
                    <Grid item xs={12} lg={12} className={classes.title}>
                        <h1> Top 5 Items for {categoryTitle} </h1>
                    </Grid>
                ) :  <Grid item xs={12} lg={12} className={classes.title}>
                        <h1> Category {categoryTitle} </h1>
                    </Grid> }
                { category ? (
                             showFiveItems ?
                             category.slice(0,5)
                                     .map( (item, index) => {
                                return(
                                    <Grid item xs={12} lg={3} className={classes.categoryCard} key={index}>
                                        <CategoryItem
                                            name = {item.name}
                                            imageUrl = {item.imageUrl}
                                            id={item.item_id}
                                            price = {item.price}
                                        />
                                    </Grid>
                                )})
                            : category.map( (item, index) => {
                                return(
                                    <Grid item xs={12} lg={3} className={classes.categoryCard} key={index}>
                                        <CategoryItem
                                            name = {item.name}
                                            imageUrl = {item.imageUrl}
                                            id={item.item_id}
                                            price = {item.price}
                                        />
                                    </Grid>
                                )})
                ) : null }
                { showFiveItems ? (
                        <Grid item xs={12} lg={12} align="center"> 
                          <div className={classes.showMore}
                               onClick={handleShowMore}>
                              <h2>Show more</h2>
                              <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                          </div>
                        </Grid>
                ) : null}
            </Grid>
        </>
    )
}

export default CategoryList;
