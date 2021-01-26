// let's go!
import React from 'react';
import { render } from 'react-dom';

// Import Styles
import css from './styles/style.styl';

// Import Components
import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

// Router Dependencies
import {Router,Route,IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import store, {history} from './store'

const router = (
    <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App}>
            {/* Here PhotoGrid and Single are the childs of Main */}
            {/* Two nesting routes ,if path is exact '/' then it render IndexRoute else it render router with the imageId */}
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="/view/:postId"  component={Single}></Route>
        </Route>
    </Router>
    </Provider>
)


render(router, document.getElementById('root'));
