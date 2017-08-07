// @flow

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import classNames from 'classnames';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import {ListItem} from 'material-ui/List';
import Button from 'material-ui/Button';
import Collapse from 'material-ui/transitions/Collapse';
import style from './styles/AppDrawerNavItem'

const styleSheet = createStyleSheet(style);

class AppDrawerNavItem extends Component {
    static defaultProps = {
        openImmediately: false,
    };

    state = {
        open: false,
    };

    componentWillMount() {
        if (this.props.openImmediately) {
            this.setState({open: true});
        }
    }

    handleClick = () => {
        this.setState({open: !this.state.open});
    };

    render() {
        const {children, classes, title, to, openImmediately} = this.props;

        if (to) {
            return (
                <ListItem className={classes.navLink} disableGutters>
                    <Button
                        component={Link}
                        to={to}
                        activeClassName={classes.activeButton}
                        className={classNames(classes.button, classes.navLinkButton)}
                        disableRipple
                        onClick={this.props.onClick}
                    >
                        {title}
                    </Button>
                </ListItem>
            );
        }

        return (
            <ListItem className={classes.navItem} disableGutters>
                <Button
                    classes={{
                        root: classes.button,
                        label: openImmediately ? 'algolia-lvl0' : '',
                    }}
                    onClick={this.handleClick}
                >
                    {title}
                </Button>
                <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
                    {children}
                </Collapse>
            </ListItem>
        );
    }
}

AppDrawerNavItem.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    openImmediately: PropTypes.bool,
    title: PropTypes.string.isRequired,
    to: PropTypes.string,
};

export default withStyles(styleSheet)(AppDrawerNavItem);
