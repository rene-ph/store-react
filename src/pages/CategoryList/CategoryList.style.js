import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto',
        justifyContent: 'center'
    },
    categoryCard: {
        margin: theme.spacing(2)
    },
}));

export default useStyles;