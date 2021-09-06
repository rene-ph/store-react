import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
         '& .MuiGrid-container': {
             alignItems: 'center'
        },
        '& svg': {
          cursor: 'pointer',
          marginRight: theme.spacing(2)
        }
      },
      navBar: {
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        backgroundColor: 'white',
        color: 'black',
      },
      badge: {
        top: -8,
        '& .MuiBadge-badge': {
          top: 18,
          right: 15
        }
      },
}));

export default useStyles;