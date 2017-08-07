import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default ({ newsItem , key }) => (
    <Card>
        <CardHeader
            title={`News Item #${newsItem.id}`}
            subtitle={newsItem.title}
            actAsExpander={true}
            showExpandableButton={true}
        />
        <CardActions>
            <FlatButton label="Remove" />
        </CardActions>
        <CardText expandable={true}>
            {newsItem.text}
        </CardText>
    </Card>
);