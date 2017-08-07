import React, {Component} from 'react';
import {AppBar, Button, Grid, Paper, TextField} from 'material-ui';
import AppCenterContent from "../../layouts/material/AppCenterContent";

export default (props) => {

    const {router} = props;
    return (
        <AppCenterContent>
            <Grid>
                <TextField
                    fullWidth="true"
                    hintText="email"
                    floatingLabelText="email"
                    placeholder="email"
                    onChange={(event, newValue) => console.log(newValue)}
                />
                <br/>
                <TextField
                    fullWidth="true"
                    type="password"
                    hintText="password"
                    floatingLabelText="Password"
                    placeholder="password"
                    onChange={(event, newValue) => console.log(newValue)}
                />
                <br/>
            </Grid>
            <br/>
            <Grid container align="center" justify="center">

                <Button raised color="primary">
                    Login
                </Button>
            </Grid>
        </AppCenterContent>
    );
}
