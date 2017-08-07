import React from 'react';
import { connect } from 'react-redux';
import view from './list.view';

function mapStateToProps(state) {
    const { news } = state.news;
    return {
        news
    }
};


export default connect(mapStateToProps)(view);