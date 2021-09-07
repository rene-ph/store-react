import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import Categorycard from '../../components/CategoryCard/CategoryCard';
import Carousel from '../../components/Carousel/Carousel';
import Navbar from '../../components/Navbar/Navbar';
import { fetchCollections } from '../../api/store.service';
import { add } from '../../redux/categoriesSlice';
import { getCategories } from '../../redux/selector/categories.selector';

const Home = () => {

    const dispatch = useDispatch();

    const categories = useSelector(getCategories);

    useEffect(() => {
        (async () => {
            const result = await fetchCollections();
            if (result.success) {
                dispatch(add(result.data));
            }
        })();
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <br />
            <Carousel></Carousel>
            <br /><br /><br />
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