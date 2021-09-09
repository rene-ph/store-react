import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    uppercase: {
        '& input': {
            textTransform: 'uppercase',
        }
    },
    mainCard: {
        // marginTop: theme.spacing(3),
        '& .card--content': {
            padding: theme.spacing(5),
        }
    }
}));