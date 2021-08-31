import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3),
        backgroundColor: 'white',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        '& img': {
            height: '300px'
        }
    }
}));

const CategoryCard = (props) => {
   
    const classes = useStyles(props);
    const preventDefault = (event) => event.preventDefault();

    return (
            <Card className={classes.root} >
                <CardContent>
                    <h2>{props.title}</h2>
                    <img src={props.image} alt="category"></img>
                    <br/>
                    <Link href="#" onClick={preventDefault}>Shop now</Link>
                </CardContent>
            </Card>
    )
}

export default CategoryCard;