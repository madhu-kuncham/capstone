import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider >
        <React.Fragment>
        <Dialog 
            open="true"
            fullWidth="true"
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details" />
            <TextField
              placeholder="Enter Your Occupation"
              label="Occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
              margin="normal"
              fullWidth="true"
            />
            <br />
            <TextField
              placeholder="Enter Your City"
              label="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
              margin="normal"
							fullWidth="true"
            />
            <br />
           

            <TextField
              placeholder="Enter Your Experience"
              label="Experience"
              onChange={handleChange('experience')}
              defaultValue={values.experience}
              margin="normal"
							fullWidth="true"
            />
            <br />

            <TextField
            placeholder="Enter Your College"
            label="College"
            onChange={handleChange('college')}
            defaultValue={values.college}
            margin="normal"
            fullWidth="true"
          />
          <br />

            <TextField
              placeholder="Enter Your Qualification"
              label="Qualification"
              onChange={handleChange('qualification')}
              defaultValue={values.qualification}
              margin="normal"
							fullWidth="true"
            />
            <br />

            <TextField
              placeholder="Enter Your CourtLocation1"
              label="CourtLocation1"
              onChange={handleChange('courtlocation1')}
              defaultValue={values.courtlocation1}
              margin="normal"
							fullWidth="true"
            />
            <br />

            <TextField
              placeholder="Enter Your CourtLocation2"
              label="CourtLocation2"
              onChange={handleChange('courtlocation2')}
              defaultValue={values.courtlocation2}
              margin="normal"
							fullWidth="true"
            />
            <br />

            <TextField
              placeholder="Enter Your CourtLocation3"
              label="CourtLocation3"
              onChange={handleChange('courtlocation3')}
              defaultValue={values.courtlocation3}
              margin="normal"
							fullWidth="true"
            />
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
            >Continue</Button>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
