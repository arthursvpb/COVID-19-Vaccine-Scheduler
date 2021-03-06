import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  grid: {
    alignItems: 'center',
  },
  gridItem: {
    margin: '0 auto',
  },
  buttons: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      padding: '10px',
      margin: '10px',
      width: '100%',
    },
  },
});

export default useStyles;
