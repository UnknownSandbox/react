import React, {Component} from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import {Button, Typography, AppBar, Toolbar, IconButton} from 'material-ui';
import withWidth, {isWidthUp} from 'material-ui/utils/withWidth';
import MenuIcon from 'material-ui-icons/Menu';
import AppDrawer from './AppDrawer';
import appFrameStyle from './styles/AppFrame';
import {createMuiTheme, createPalette} from 'material-ui/styles';
import {blue, pink} from 'material-ui/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppContent from "./AppContent";
import {withRouter} from 'react-router'

const theme = createMuiTheme({
    palette: createPalette({
        primary: blue,
        accent: pink,
        type: 'light',
    }),
});

const styleSheet = createStyleSheet('AppFrame', appFrameStyle);

class AppFrame extends Component {
    state = {
        drawerOpen: false,
    };

    render() {

        const {
            children,
            states,
            width,
            router,
            title = "Unknown Material UI boilerplate",
            navItems
        } = this.props;
        const {
            toggleDrawer,
            changePage
        } = this.props;


        let {
            isDrawerOpen,
            isFullSizePage,
            isDockedDrawer
        } = states;

        isDockedDrawer = isWidthUp('lg', width);
        const routes = router.routes;

        const classes = this.props.classes;

        let navIconClassName = classes.icon;
        let appBarClassName = classes.appBar;

        if (isFullSizePage) {
            navIconClassName += ` ${classes.navIconHide}`;
            appBarClassName += ` ${classes.appBarShift}`;
        } else {
            appBarClassName += ` ${classes.appBarHome}`;
        }

        return (
            <MuiThemeProvider theme={theme}>
                <div className={classes.root}>
                    <AppBar className={appBarClassName}>
                        <Toolbar>
                            <IconButton
                                color="contrast"
                                onClick={() => {
                                    toggleDrawer()
                                }}
                                className={navIconClassName}
                            >
                                <MenuIcon/>
                            </IconButton>
                            {title !== null &&
                            <Typography className={classes.title} type="title" color="inherit" noWrap>
                                {title}
                            </Typography>}
                            <div className={classes.grow}/>
                            <Button onClick={()=>router.push("/signup")} color="contrast">Sign Up</Button>
                            <Button onClick={()=>router.push("/login")} color="contrast">Log In</Button>
                        </Toolbar>
                    </AppBar>
                    <AppDrawer
                        className={classes.drawer}
                        docked={isDockedDrawer}
                        routes={routes}
                        onRequestClose={() => {
                            toggleDrawer()
                        }}
                        open={isDockedDrawer || isDrawerOpen}
                        navItems={navItems}
                    />

                    <AppContent>{children}</AppContent>
                </div>
            </MuiThemeProvider>
        );
    }
}

AppFrame.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    routes: PropTypes.array.isRequired,
    width: PropTypes.string.isRequired,
};

export default compose( withStyles(styleSheet), withWidth())(AppFrame);
