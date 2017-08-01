import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// for hot reloading
if (module.hot) {
    module.hot.accept();
}
    

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();