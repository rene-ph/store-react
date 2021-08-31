import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useStyles from './CategoryCard.styles';

const CategoryCard = (props) => {
   
    const history = useHistory();

    const classes = useStyles(props);
    const handleArticle = () => {
        history.push(`/directory/${props.id}`);
    }
  
    return (
            <Card className={classes.root} >
                <CardContent>
                    <h2>{props.title}</h2>
                    <CardActionArea>
                        <CardMedia
                            className={classes.image}
                            image={props.image}
                            title="category"
                            onClick={handleArticle}/>
                        <Link to={`/directory/${props.id}`}>Shop now</Link>
                    </CardActionArea>
                </CardContent>
            </Card>
    )
}

export default CategoryCard;