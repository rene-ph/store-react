import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ((theme) => ({
    root: {
        padding: '40px',
        '& .slick-slide img': {
            margin: 'auto'
        },
        '& .slick-prev': {
            left: '40px'
        },
        '& .slick-next': {
            right: '40px'
        },
        '& .slick-prev:before, .slick-next:before': {
            color: 'black'
        }
    }
}));

const Carousel = () => {
    const classes = useStyles();

    var settings = {
        dots: true,
    };
    return (
            <Slider {...settings} className={classes.root}>
                <div>
                    <img src="https://via.placeholder.com/600x150" alt="holder-shop"></img>
                </div>
                <div>
                    <img src="https://via.placeholder.com/600x150" alt="holder-shop"></img>
                </div>
                <div>
                    <img src="https://via.placeholder.com/600x150" alt="holder-shop"></img>
                </div>
            </Slider>
    )
}

export default Carousel;