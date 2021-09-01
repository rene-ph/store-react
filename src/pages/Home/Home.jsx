import Navbar from '../../components/Navbar/Navbar';
import Categorycard from '../../components/CategoryCard/CategoryCard';
import Carousel from '../../components/Carousel/Carousel';
import Grid from '@material-ui/core/Grid';
import { data, toUniqueArray } from '../../utils/data';

const Home = () => {
    const categories = toUniqueArray(data);

    return (
        <>
            <Navbar></Navbar>
            <br/>
            <Carousel></Carousel>
            <br/><br/><br/>
            <Grid container justifyContent='center'>
                { categories.map((category, index) => {
                    return (  <Grid item xs={12} lg={3}  key={index} > 
                                <Categorycard 
                                        title={category.title} 
                                        id={category.id}
                                        image={category.url}/> 
                              </Grid>)
                })}
            </Grid>
        </>
    )
}

export default Home;