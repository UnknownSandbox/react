import React from 'react';
import {withRouter} from 'react-router'
import PropTypes from 'prop-types';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import List from 'material-ui/List';
import Toolbar from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import AppDrawerNavItem from './AppDrawerNavItem';
import Link from './Link';
import style from './styles/AppDrawer';

const styleSheet = createStyleSheet(style);

function renderNavItems(props, navItems = []) {
    if (navItems.length > 0) {
        // eslint-disable-next-line no-use-before-define
        navItems = navItems.reduce(reduceChildRoutes.bind(null, props), []);
    }

    return (
        <List>
            {navItems}
        </List>
    );
}

function reduceChildRoutes(props, items, childRoute, index) {

    if (childRoute.items && childRoute.items.length) {
        const openImmediately = childRoute.items.find((item)=> item.url === props.location.pathname);
        items.push(
            <AppDrawerNavItem key={index} openImmediately={openImmediately} title={childRoute.title}>
                {renderNavItems(props, childRoute.items)}
            </AppDrawerNavItem>,
        );
    } else {
        items.push(
            <AppDrawerNavItem
                key={index}
                title={childRoute.title}
                to={childRoute.url}
                onClick={props.onRequestClose}
            />,
        );
    }

    return items;
}

function AppDrawer(props) {
    const {
        open,
        navItems = [],
        classes,
        className,
        onRequestClose,
        docked
    } = props;
    return (
        <Drawer
            className={className}
            classes={{
                paper: classes.paper,
            }}
            open={open}
            onRequestClose={onRequestClose}
            docked={docked}
            keepMounted
        >
            <div className={classes.nav}>
                <Toolbar className={classes.toolbar}>
                    <Link className={classes.title} to="/" onClick={onRequestClose}>
                        <Typography type="title" gutterBottom color="inherit">
                            Material-UI
                        </Typography>
                    </Link>
                    <Divider absolute/>
                </Toolbar>
                {renderNavItems(props, navItems)}
            </div>
        </Drawer>
    );
}

AppDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    docked: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    routes: PropTypes.array.isRequired,
};

export default withRouter(withStyles(styleSheet)(AppDrawer));
