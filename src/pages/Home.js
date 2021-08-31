import Navbar from '../components/Navbar/Navbar';
import Categorycard from '../components/CategoryCard/CategoryCard';
import Carousel from '../components/Carousel/Carousel';
import Grid from '@material-ui/core/Grid';
import { data, toUniqueArray } from '../utils/data';


const Home = () => {
    const categories = toUniqueArray(data);

    return (
        <div>
            <Navbar></Navbar>
            <br/>
            <Carousel></Carousel>
            <br/>
            <Grid container style={{flexGrow: 1}}>
                { categories.map((category, index) => {
                    return (  <Grid item xs={4} lg={4}> 
                                <Categorycard key={index} title={category.title} image={category.url}/> 
                              </Grid>)
                })}
            </Grid>
        </div>
    )
}

export default Home;