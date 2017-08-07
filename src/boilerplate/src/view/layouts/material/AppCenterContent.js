import React from 'react';
import {AppBar, Button, Grid, Paper, TextField} from 'material-ui';

export default (props) => (

    <Grid style={{minHeight: '100%'}}>
        <Grid style={{minHeight: '120px'}}>
        </Grid>
        <Grid container align="center" justify="center" spacing={12}>
            <Grid xs={6}>
                {props.children}
            </Grid>
        </Grid>
    </Grid>
)

