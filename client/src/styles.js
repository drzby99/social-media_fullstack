import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'mint',
    fontWeight: 800,
    fontStyle: 'italic',

  },
  image: {
    marginLeft: '15px',
  },
  
}));
