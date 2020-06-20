import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';



const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
      control: {
        padding: theme.spacing(2),
      },
      inline: {
        display: 'inline',
      },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
      <Container>
          <Grid container spacing={2} justify={"space-evenly"}>
        <Grid item sm={12}>
        <Card className={classes.card}>
      <CardHeader
        title="Welcome!"
        subheader="Here we have list of products of India"
      />
      </Card>
      </Grid>
        </Grid>
<ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><strong>Toileteries(Hair, Face, Bath and Body, Dental, Deo, Feminine Hygenie)</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid item sm={12}>
      
      <CardContent>
      <Grid container spacing={1}>
      <Grid container item xs={12} spacing={2}>
      <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Hair"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.card}>
        <CardHeader
        title="Face"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Washes and Cleansers</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Creams/ Moisturers</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Bath and Body"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Dental"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Deodrants"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Feminine Hygenie and Hair Removals"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        </Grid>
        </Grid>
        </CardContent>


    </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
      {/* -----------------//Panel 2 ----------------------*/}
    <ExpansionPanel>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><strong>Baby Care</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid item sm={12}>
      
      <CardContent>
      <Grid container spacing={1}>
      <Grid container item xs={12} spacing={2}>
      <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Hair"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.card}>
        <CardHeader
        title="Face"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Washes and Cleansers</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Creams</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Moistursers and Sun screens</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Bath and Body"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Dental"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Deodrants"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Feminine Hygenie and Hair Removals"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        </Grid>
        </Grid>
        </CardContent>


    </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>


     {/* -----------------//Panel 3 ----------------------*/}
     <ExpansionPanel>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><strong>Mobile Applications</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid item sm={12}>
      
      <CardContent>
      <Grid container spacing={1}>
      <Grid container item xs={12} spacing={2}>
      <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Hair"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.card}>
        <CardHeader
        title="Face"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Washes and Cleansers</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Creams</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Moistursers and Sun screens</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Bath and Body"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Dental"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Deodrants"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Feminine Hygenie and Hair Removals"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        </Grid>
        </Grid>
        </CardContent>


    </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>


       {/* -----------------//Panel 2 ----------------------*/}
    <ExpansionPanel>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><strong>Mobile phones</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid item sm={12}>
      
      <CardContent>
      <Grid container spacing={1}>
      <Grid container item xs={12} spacing={2}>
      <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Hair"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.card}>
        <CardHeader
        title="Face"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Washes and Cleansers</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Creams</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Moistursers and Sun screens</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Bath and Body"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Dental"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Deodrants"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Feminine Hygenie and Hair Removals"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        </Grid>
        </Grid>
        </CardContent>


    </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>


       {/* -----------------//Panel 2 ----------------------*/}
    <ExpansionPanel>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><strong>Home Appliances</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid item sm={12}>
      
      <CardContent>
      <Grid container spacing={1}>
      <Grid container item xs={12} spacing={2}>
      <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Hair"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.card}>
        <CardHeader
        title="Face"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Washes and Cleansers</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Creams</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Moistursers and Sun screens</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Bath and Body"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Dental"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Deodrants"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Feminine Hygenie and Hair Removals"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        </Grid>
        </Grid>
        </CardContent>


    </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>


       {/* -----------------//Panel 2 ----------------------*/}
    <ExpansionPanel>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><strong>Vehicles</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid item sm={12}>
      
      <CardContent>
      <Grid container spacing={1}>
      <Grid container item xs={12} spacing={2}>
      <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Hair"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.card}>
        <CardHeader
        title="Face"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Washes and Cleansers</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Creams</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Moistursers and Sun screens</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Bath and Body"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Dental"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Deodrants"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Feminine Hygenie and Hair Removals"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        </Grid>
        </Grid>
        </CardContent>


    </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>


       {/* -----------------//Panel 2 ----------------------*/}
    <ExpansionPanel>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><strong>Computers and Tablets</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid item sm={12}>
      
      <CardContent>
      <Grid container spacing={1}>
      <Grid container item xs={12} spacing={2}>
      <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Hair"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.card}>
        <CardHeader
        title="Face"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Washes and Cleansers</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Creams</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Moistursers and Sun screens</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Bath and Body"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Dental"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Deodrants"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Feminine Hygenie and Hair Removals"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        </Grid>
        </Grid>
        </CardContent>


    </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>


       {/* -----------------//Panel 2 ----------------------*/}
    <ExpansionPanel>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><strong>Online Shopping websites</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid item sm={12}>
      
      <CardContent>
      <Grid container spacing={1}>
      <Grid container item xs={12} spacing={2}>
      <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Hair"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.card}>
        <CardHeader
        title="Face"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Washes and Cleansers</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Creams</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Moistursers and Sun screens</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Bath and Body"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Dental"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Deodrants"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Feminine Hygenie and Hair Removals"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        </Grid>
        </Grid>
        </CardContent>


    </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>


       {/* -----------------//Panel 2 ----------------------*/}
    <ExpansionPanel>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><strong>Watches</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid item sm={12}>
      
      <CardContent>
      <Grid container spacing={1}>
      <Grid container item xs={12} spacing={2}>
      <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Hair"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.card}>
        <CardHeader
        title="Face"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Washes and Cleansers</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Creams</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Moistursers and Sun screens</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Bath and Body"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Dental"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Deodrants"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Feminine Hygenie and Hair Removals"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        </Grid>
        </Grid>
        </CardContent>


    </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>



       {/* -----------------//Panel 2 ----------------------*/}
    <ExpansionPanel>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><strong>Garments</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid item sm={12}>
      
      <CardContent>
      <Grid container spacing={1}>
      <Grid container item xs={12} spacing={2}>
      <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Hair"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.card}>
        <CardHeader
        title="Face"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Washes and Cleansers</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Creams</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Moistursers and Sun screens</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Bath and Body"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Dental"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Deodrants"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Feminine Hygenie and Hair Removals"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        </Grid>
        </Grid>
        </CardContent>


    </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>


       {/* -----------------//Panel 2 ----------------------*/}
    <ExpansionPanel>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><strong>Footwears</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid item sm={12}>
      
      <CardContent>
      <Grid container spacing={1}>
      <Grid container item xs={12} spacing={2}>
      <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Hair"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.card}>
        <CardHeader
        title="Face"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Washes and Cleansers</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Creams</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Moistursers and Sun screens</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Bath and Body"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Dental"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Deodrants"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Feminine Hygenie and Hair Removals"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        </Grid>
        </Grid>
        </CardContent>


    </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>


       {/* -----------------//Panel 2 ----------------------*/}
    <ExpansionPanel>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><strong>Tea/Coffee, Milk Products, Food Products</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid item sm={12}>
      
      <CardContent>
      <Grid container spacing={1}>
      <Grid container item xs={12} spacing={2}>
      <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Hair"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.card}>
        <CardHeader
        title="Face"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Washes and Cleansers</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Creams</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Moistursers and Sun screens</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Bath and Body"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Dental"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Deodrants"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Feminine Hygenie and Hair Removals"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        </Grid>
        </Grid>
        </CardContent>


    </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>


       {/* -----------------//Panel 2 ----------------------*/}
    <ExpansionPanel>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><strong>Medicines</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid item sm={12}>
      
      <CardContent>
      <Grid container spacing={1}>
      <Grid container item xs={12} spacing={2}>
      <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Hair"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.card}>
        <CardHeader
        title="Face"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Washes and Cleansers</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Creams</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Moistursers and Sun screens</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Bath and Body"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Dental"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Deodrants"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Feminine Hygenie and Hair Removals"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        </Grid>
        </Grid>
        </CardContent>


    </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>


       {/* -----------------//Panel 2 ----------------------*/}
    <ExpansionPanel>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><strong>Cosmetics</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid item sm={12}>
      
      <CardContent>
      <Grid container spacing={1}>
      <Grid container item xs={12} spacing={2}>
      <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Hair"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.card}>
        <CardHeader
        title="Face"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Washes and Cleansers</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Creams</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Moistursers and Sun screens</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Bath and Body"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Dental"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Deodrants"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Feminine Hygenie and Hair Removals"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        </Grid>
        </Grid>
        </CardContent>


    </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>



       {/* -----------------//Panel 2 ----------------------*/}
    <ExpansionPanel>
      <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><strong>Stationaries</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid item sm={12}>
      
      <CardContent>
      <Grid container spacing={1}>
      <Grid container item xs={12} spacing={2}>
      <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Hair"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.card}>
        <CardHeader
        title="Face"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Washes and Cleansers</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Creams</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Face Moistursers and Sun screens</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Bath and Body"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Dental"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Deodrants"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Feminine Hygenie and Hair Removals"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Conditioners</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <a href="https://www.patanjaliayurved.net/category/shampoo/31">Patanjali</a>, 
                <a href="#">Himalaya</a>, 
                Ayur, 
                Khadi,
                Trichup
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Ayur, Parachute, Trichup, Lotus, Himalaya, Bajaj Almond, Dabur Amla, Indulekha
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        </Grid>
        </Grid>
        </CardContent>


    </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>



    </Container>
  );
}
