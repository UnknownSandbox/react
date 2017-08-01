import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Stream from "./components/Stream";
const tracks = [
    {
        title: 'Some track'
    },
    {
        title: 'Some other track'
    }
];

ReactDOM.render(
    <Stream tracks={tracks} />,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
registerServiceWorker();