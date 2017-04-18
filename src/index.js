import React from 'react';
import { render } from 'react-dom';

import Root from './containers/Root'
import configureStore from './store/configureStore'

render(<Root store={configureStore()} />, document.getElementById('root'));
