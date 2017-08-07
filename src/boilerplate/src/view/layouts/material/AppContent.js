import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import style from './styles/AppContent'
import classNames from 'classnames';

const styleSheet = createStyleSheet(style);

function AppContent(props) {
    const {children, className, classes} = props;

    return (
        <div className={classNames(classes.content, className)}>
            {children}
        </div>
    );
}

AppContent.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    route: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(AppContent);
