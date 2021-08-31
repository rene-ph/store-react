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
        paddingLeft: theme.spacing(25),
        paddingRight: theme.spacing(25),
        backgroundColor: 'white',
        color: 'black',
      }
}));

export default useStyles;