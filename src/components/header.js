import React,{useReducer} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Contact from './contact';
import About from './about';

import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
  });

  //const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: 'green'}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Indian Products
          </Typography>
          <Grid item>English</Grid>
          <Grid item>
            <Switch color='primary' checked={state.checkedB} onChange={handleChange} name="checkedB" />
          </Grid>
          <Grid item>Kannada</Grid>
          <About/>
          <Contact/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
