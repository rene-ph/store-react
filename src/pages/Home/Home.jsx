import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Categorycard from '../../components/CategoryCard/CategoryCard';
import Carousel from '../../components/Carousel/Carousel';
import Navbar from '../../components/Navbar/Navbar';
import { fetchCollections } from '../../api/store.service';
import { add, setLoading } from '../../redux/categoriesSlice';
import { getCategories, loading } from '../../redux/selector/categories.selector';
import useStyles from './Home.style';

const Home = () => {

    const dispatch = useDispatch();
    const classes = useStyles();
    const categories = useSelector(getCategories);
    const isLoading = useSelector(loading);

    useEffect(() => {
        (async () => {
            if (categories.length === 0) {
                dispatch(setLoading(true));
                const result = await fetchCollections();
                if (result.success) {
                    dispatch(add(result.data));
                    dispatch(setLoading(false));
                } else {
                    dispatch(setLoading(false));
                }
            }
        })();
    },[]);

    const handleClose = useCallback(() => {
        dispatch(setLoading(false));
    }, []);

    return (
            <>
            <Backdrop  open={isLoading} 
                       className={classes.backdrop}
                       onClick={handleClose}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Navbar mb={2}></Navbar>
            <Carousel mb={6}/>
            <Grid container justifyContent='center'>
                { categories ?  (categories.map((category, index) => {
                    return (  <Grid item xs={12} lg={3}  key={index} > 
                                <Categorycard 
                                        title={category.title} 
                                        id={category.col_id}

                                        image={category.url}/> 
                              </Grid>)
                })): null }
            </Grid>
        </>
    )
}

export default Home;