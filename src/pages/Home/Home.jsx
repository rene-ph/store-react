import Navbar from '../../components/Navbar/Navbar';
import Categorycard from '../../components/CategoryCard/CategoryCard';
import Carousel from '../../components/Carousel/Carousel';
import CartInfo from '../../components/CartInfo';
import Grid from '@material-ui/core/Grid';
import { toUniqueArray } from '../../utils/data';
import { useEffect, useState } from 'react';
import { fetchCollections } from '../../api/store';

const Home = () => {

    const [categories, setCategories] = useState(null);

    useEffect(() => {
        (async () => {
            const result = await fetchCollections();
            if (result.success) {
                setCategories(toUniqueArray(result.data));
            }
        })();
    },[]);

    return (
            <>
            <Navbar></Navbar>
            <br/>
            <Carousel></Carousel>
            <br/><br/><br/>
            <Grid container justifyContent='center'>
                { categories ?  (categories.map((category, index) => {
                    return (  <Grid item xs={12} lg={3}  key={index} > 
                                <Categorycard 
                                        title={category.title} 
                                        id={category.id}
                                        image={category.url}/> 
                              </Grid>)
                })): null }
            </Grid>
            <CartInfo />
        </>
    )
}

export default Home;