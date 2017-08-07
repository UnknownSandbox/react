import React, {Component} from 'react';
import {AppBar, Button, Grid, Paper, TextField} from 'material-ui';
import AppCenterContent from "../../layouts/material/AppCenterContent";

export default () => (
    <AppCenterContent>
        <Grid>
            <TextField
                fullWidth="true"
                hintText=""
                floatingLabelText="email"
                placeholder="First Name"
                onChange={(event, newValue) => console.log(newValue)}
            />
            <br/>
            <TextField
                fullWidth="true"
                hintText=""
                floatingLabelText="email"
                placeholder="Second Name"
                onChange={(event, newValue) => console.log(newValue)}
            />
            <br/>
            <TextField
                fullWidth="true"
                hintText=""
                floatingLabelText="email"
                placeholder="email"
                onChange={(event, newValue) => console.log(newValue)}
            />
            <br/>
            <TextField
                fullWidth="true"
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                placeholder="password"
                onChange={(event, newValue) => console.log(newValue)}
            />
            <br/>
            <TextField
                fullWidth="true"
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                placeholder="re-password"
                onChange={(event, newValue) => console.log(newValue)}
            />
            <br/>
        </Grid> <br/>
        <Grid container align="center" justify="center">

            <Button raised color="primary">
                Registration
            </Button>
        </Grid>
    </AppCenterContent>
);