import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, mobileNumber , occupation, city, experience , college , qualification , courtLoaction1 , courtLoaction2 , courtLoaction3}
    } = this.props;
    return (
      <MuiThemeProvider >
        <React.Fragment>
          <Dialog
            open="true"
            fullWidth="true"
            maxWidth='sm'
          >
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={firstName} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={lastName} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Mobile Number" secondary={mobileNumber} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Occupation" secondary={occupation} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="City" secondary={city} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Experience" secondary={experience} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="College" secondary={college} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Qualification" secondary={qualification} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="CourtLocation1" secondary={courtLoaction1} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="CourtLocation2" secondary={courtLoaction2} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="CourtLocation3" secondary={courtLoaction3} /> 
            </ListItem>
          </List>
          <br />
        
          <Button
            color="secondary"
            variant="contained"
            onClick={this.back}
          >Back</Button>

          <Button
            color="primary"
            variant="contained"
            onClick={this.continue}
          >Confirm & Continue</Button>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
