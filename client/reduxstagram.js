// let's go!
import React from 'react';
import { render } from 'react-dom';

// Import Styles
import css from './styles/style.styl';

// Import Components
import Main from './components/Main'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

// Router Dependencies
import {Router,Route,IndexRoute,browserHistory} from 'react-router'
const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            {/* Here PhotoGrid and Single are the childs of Main */}
            {/* Two nesting routes ,if path is exact '/' then it render IndexRoute else it render router with the imageId */}
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="/view/:postId"  component={Single}></Route>
        </Route>
    </Router>
)


render(router, document.getElementById('root'));
