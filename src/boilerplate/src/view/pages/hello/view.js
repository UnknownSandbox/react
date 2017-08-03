import React from 'react';
import TestText from '../../base/TestText/index';
import GotoButton from '../../base/GotoButton/index';

export default ({text = 'Hello, Unknown Hero!'}) => (
    <div>
        <TestText text={text}/>
        <GotoButton newLocation="/news" title="Read News" />
    </div>
);