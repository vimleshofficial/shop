import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  blueButtons:{
    padding: '10px',
    textAlign: 'right'
  },
  cartButton:{
    borderRadius: '0'
  },
  priceButton:{
    borderRadius: '0'
  },
  white:{
    color:'#fff',
    textDecoration: 'none'
  },
  black:{
    color:'#222',
    textDecoration: 'none'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '0px',
    height: '100%',
    position: 'relative',
    border: '2px solid #ddd'
  },
  cardContainer:{
    padding:'5px 15px;',
    height: '30px',
    overflow: 'hidden'
  },
  overlay: {
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    color: 'white',
    right: '0',
    textAlign:'center',
    padding: '15px',
    background: '#222222b8'
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});