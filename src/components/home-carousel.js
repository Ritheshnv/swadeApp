import React from "react";
import image from '../assets/india.jpg';

import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

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
import nammabharat from '../assets/nammabharat.png';
import ethnics from '../assets/ethincs.png';
import vehicles from '../assets/vehicles.png';
import toileteries from '../assets/toileteries.png';
import patanjali from '../assets/patanjali.png';


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
const MultiCarouselPage = () => {
  const classes = useStyles();
  return (
    
    <Container>
      <MDBCarousel
        activeItem={1}
        length={5}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
            <img
                className="d-block w-100"
                src={nammabharat}
                alt="Second slide"
                style={{height:'350px'}}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
            <img
                className="d-block w-100"
                src={patanjali}
                alt="Second slide"
                style={{height:'350px'}}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={ethnics}
                alt="Second slide"
                style={{height:'350px'}}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src={vehicles}
                alt="Third slide"
                style={{height:'350px'}}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <img
                className="d-block w-100"
                src={toileteries}
                alt="Fourth slide"
                style={{height:'350px'}}
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      </Container>
  );
}

export default MultiCarouselPage;