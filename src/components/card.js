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
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



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
  const [open, setOpen] = React.useState(false);
  const [openMobile, setOpenMobile] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenMobiles = () => {
    setOpenMobile(true);
  };

  const handleCloseMobiles = () => {
    setOpenMobile(false);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Container>
          <Grid container spacing={2} justify={"space-evenly"}>
        <Grid item sm={12}>
        <Card className={classes.card}>
      <CardHeader
        title="Welcome!"
        subheader="Here we bring products which consumers mainly use in their daily lives, 
        Our effort is to make sure citizens start consuming the products which are manufactured in India 
        and help our nation to grow and stand first. We are still in process of investigating and add most of the products, Please bare with us. Any suggestions you can drop an email. Thank you!"
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
          <Typography className={classes.heading}><strong>Toileteries(Hair, Face, Bath and Body, Dental, Deo, Shaving, Feminine Hygenie)</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Grid item sm={12}>
      
      <CardContent>
      <Grid container spacing={1}>
      <Grid container item sm={12} spacing={2}>
      <Grid item sm={4}>
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
        <Grid item sm={4}>
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
                Trichup, Lotus, Roop Mantra
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
                Patanjali, Ayur, Lotus, Fair & Lovely, Vicco, Himalaya
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item sm={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Bath and Body"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Soap and Cleansers</strong>}
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
                Mysore Sandal, Lifebuoy, Lotus, Cinthol, Medimix, Santoor
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Body Lotion and Sun Screens</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Lotus, Himalaya, Lakme, Santoor, Boroplus
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item sm={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Dental"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Toothbrush</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Promise, Ajay, Ajanta, Patanjali, Dr. Strock, Monate
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Tooth Paste/Mouthwash</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Patanjali, Vicco Bajradunt, Anchor, Meswak, Babool, Promise, Himalaya
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item sm={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Deodrants and Talcum Powder"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Deodrants</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Park Avenue, Cinthol, Santoor
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Talcum Powder</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Santoor, Cinthol, Boroplus
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>

        <Grid item sm={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Shaving cream and Blades"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shaving Creams</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Park Avenue, Premium, Emami, Balsara, Godrej
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Blades</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Topaz, Gallant, Supermax, Premium, Laser, Silver Prince, Esquire
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>

        <Grid item sm={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Feminine Hygenie and Hair Removals"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Sanitaries</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                SheCup, Sirona, Saathi, Carmesi, Heyday, Ever teen, Purganics, Vivanion, Anandi
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Hair removal creams</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Glint, Dabur
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
      <Grid container item sm={12} spacing={2}>
      <Grid item sm={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Bath and Skin"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Baby Powder</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Himalaya, Lotus, Pigeon, JT Cosmetics and Chemicals, Mama earth, Mee Mee, Jin X health care, Baby & Mom
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Baby hair Oils</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Himalaya, Lotus, Mee Mee, Daxal cosmetics, Jell Pharamceuticals, Me & Moms
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Shampoos and Soaps</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Himalaya, Lotus, Me & Moms, Jell Pharamceuticals, Krauter Healthcare, Glint Cosmetics, Elegant Cosmed Pvt Ltd, Chicco pure bio
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Moisturers</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Himalaya, Lotus, Mee Mee, Waghulde screens, Green healthcare, Adidev herbals, Life pursuits
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item sm={4}>
        <Card className={classes.card}>
        <CardHeader
        title="Hygenie"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Dipering</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Himalaya, Lotus, Patanjali, Mee Mee, Me & Moms, Bumpadum
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong>Baby Wipes</strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Himalaya, Lotus, Mee Mee
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
</List>
</div>
            </Card>
        </Grid>
        
        <Grid item sm={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Pacifiers and Teethers"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong></strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Pigeon
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
      <List>
        <ListItem>
        <strong>Travel</strong> - MakeMyTrip, IRCTC, Goibibo, Yatra
        </ListItem>
        <ListItem>
        <strong>Entertainment</strong> - Gaana, BookMyShow, Wynk
        </ListItem>
        <ListItem>
        <strong>Payment</strong> - BhimUPI, Paytm, Freecharge, Mobikwik, Phonepe
        </ListItem>
        <ListItem>
        <strong>Gaming</strong> - Teen Patti, Car Run
        </ListItem>
        <ListItem>
        <strong>E-Commerce</strong> - Flipkart, Snapdeal, InfyBeam, Myntra
        </ListItem>
        <ListItem>
        <strong>Messaging</strong> - Hike
        </ListItem>
        <ListItem>
        <strong>Utilities</strong> - JustDial, Quikr, OLX
        </ListItem>
        <ListItem>
        <div>
      <Link onClick={handleClickOpen} style={{cursor:'pointer'}}>
      Click here to see Chinese Apps and their Alternatives
      </Link>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Boycott Chinese Apps</DialogTitle>
        <Divider variant="inset"/>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <span style={{textDecoration: 'line-through'}}>Helo, SHAREit, TikTok, Airbrush, Kwai, UCBrowser, UCBrowser Mini, LiveMe, Bigo Live, Vigo Video, 
          BeautyPlus, Xender, CamScanner, PUBG, Clash of Kings, Mobile Legends, 
          Shein, Romwe, AppLock, Zoom, Club Factory, VMate, Game of Sultans, Mafia City, Battle of Empires</span>
          <Typography>
          <Divider variant="inset"/>
          <br/>
          <strong>All of them does not have alternatives,</strong>
            TikTok - <strong>ShareChat</strong>, UCBrowser - <strong>Epic Web Browser</strong>, SHAREit - <strong>ShareAll</strong>, VivaVideo - <strong>Photo Video Maker with Music</strong>,
            Zoom - <strong>Jio Meet,Say Namaste</strong>
          </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Urge to delete it!
          </Button>
        </DialogActions>
      </Dialog>
</div>
        </ListItem>
      </List>
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
        <List>
        <ListItem>
          <table>
            <tr>
              <td><strong>Indian Brands</strong></td>
              <td><span style={{textAlign: 'justify'}}>Jio, YU, Micromax, Xolo, Videocon, Spice Digital, Spice X, Onida Electronics, LYF,
        HCL technologies, LAVA, Karbonn, Intex, Iball, Celkon, CREO</span></td>
            </tr>
          </table>      
        </ListItem>
        <ListItem>
        <div>
      <Link onClick={handleClickOpenMobiles} style={{cursor:'pointer'}}>
      Click here to see Chinese mobile phones
      </Link>
      <Dialog
        open={openMobile}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title1">Chinese Mobile phones list</DialogTitle>
        <Divider variant="inset"/>
        <DialogContent>
          <DialogContentText id="alert-dialog-description1">
          <Typography>Honor, Xioami, Coolpad, Gfive, Huwaei, Haier, Lenovo, OnePlus, Oppo, Realme, Vivo, ZTE
          </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseMobiles} color="primary" autoFocus>
            Urge not to use!
          </Button>
        </DialogActions>
      </Dialog>
</div>
        </ListItem>
      </List>
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
      <Grid container item sm={12} spacing={2}>
      <Grid item sm={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Refrigerators"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong></strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Godrej, Onida, Videocon, Voltas, IFB
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item sm={4}>
        <Card className={classes.card}>
        <CardHeader
        title="Washing Machine"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong></strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Godrej, Onida, Videocon, IFB, Voltas
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
</List>
</div>
            </Card>
        </Grid>
        <Grid item sm={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Television"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong></strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Onida, Videocon
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
</List>
</div>
            </Card>
        </Grid>
        <Grid item sm={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Microwave Ovens"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong></strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Godrej, Onida, Voltas, IFB
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item sm={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Vaccum Cleaners"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong></strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Eureka Forbes, Prestige
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item sm={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Fans and ACs"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong></strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Godrej, IFB, Usha, Bajaj
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
  
</List>
</div>
            </Card>
        </Grid>

        <Grid item sm={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Grinders and Mixers"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong></strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Prestige, Preethi, Bajaj, Orient, Butterfly, Sujata, Eveready
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
  
</List>
</div>
            </Card>
        </Grid>
        <Grid item sm={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Water Heaters / Boilers / Dishwashers"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong></strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Voltas, IFB
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
  
</List>
</div>
            </Card>
        </Grid>
        <Grid item sm={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Stoves"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong></strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Godrej, Sunflame, Prestige, Bajaj, Preeti, Usha, Butterfly
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
      <Grid container item sm={12} spacing={2}>
      <Grid item sm={4}>
      <Card className={classes.card}>
      <CardHeader
        title="Scooters/Bikes"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong></strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                TVS, Bajaj, Hero, Royal Enfield, Mahindra
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

</List>
</div>
            </Card>
        </Grid>
        <Grid item sm={4}>
        <Card className={classes.card}>
        <CardHeader
        title="4 wheelers and commercial vehicles"
      />
<div>
<List className={classes.root}>
<ListItem alignItems="flex-start">
        <ListItemText
          primary={<strong></strong>}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Bajaj Auto, TATA, Mahindra, Force motors, Hindustan Motors
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
      <Grid container item sm={12} spacing={2}>
      <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
      <Grid container item sm={12} spacing={2}>
      <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
      <Grid container item sm={12} spacing={2}>
      <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
      <Grid container item sm={12} spacing={2}>
      <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
      <Grid container item sm={12} spacing={2}>
      <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
      <Grid container item sm={12} spacing={2}>
      <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
      <Grid container item sm={12} spacing={2}>
      <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
      <Grid container item sm={12} spacing={2}>
      <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
        <Grid item sm={4}>
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
