import React from 'react';
import { withRouter } from 'react-router'

const GoToButton = ({ router, newLocation = '/', title = 'Title Text' }) => (
    <button
        type="button"
        onClick={() => router.push(newLocation)}
    >
        {title}
    </button>
);

export default withRouter(GoToButton);