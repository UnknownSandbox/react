import {connect} from 'react-redux';
import view from './AppFrame';
import {bindActionCreators} from "redux";
import {toggleDrawer, changeTheme, changePage} from './logic/actions';

function mapStateToProps(state) {
    const {states,navItems} = state.ui.layout;
    return {
        states,
        navItems
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleDrawer: bindActionCreators(toggleDrawer, dispatch),
        changePage: bindActionCreators(changePage, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(view);