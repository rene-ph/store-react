import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Categorycard from '../../components/CategoryCard/CategoryCard';
import Carousel from '../../components/Carousel/Carousel';
import Navbar from '../../components/Navbar/Navbar';
import { fetchCollections } from '../../api/store.service';
import { add } from '../../redux/categoriesSlice';
import { getCategories } from '../../redux/selector/categories.selector';
import { useErrorHandler } from 'react-error-boundary'

const Home = () => {

    const dispatch = useDispatch();
    const categories = useSelector(getCategories);
    const handleError = useErrorHandler()

    const getCollections =  async () => {
        if (categories.length === 0) {
            const result = await fetchCollections();
            if (result.success) {
                dispatch(add(result.data));
            } else {
                handleError(result.message);
            } 
        }
    }

    useEffect(() => {
        getCollections();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    return (
        <>           
            <Navbar mb={2}></Navbar>
            <Carousel mb={6}/>
            <Grid container justifyContent='center'>
                {categories ? (categories.map((category, index) => {
                    return (<Grid item xs={12} lg={3} key={index} >
                        <Categorycard
                            title={category.title}
                            id={category.col_id}

                            image={category.url} />
                    </Grid>)
                })) : null}
            </Grid>
        </>
    )
}

export default Home;