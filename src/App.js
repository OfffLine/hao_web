import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import store from './store';
import HeaderView from './components/header';
import HomeView from './pages/home';
import AboutView from './pages/about';
import {ContentWrapper} from "./style"

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <React.Fragment>
                        <main>
                            <HeaderView/>
                            <ContentWrapper className="content-wrapper">
                                <Switch>
                                    <Route path='/' exact component={HomeView}/>
                                    <Route path='/about' exact component={AboutView}/>
                                </Switch>
                            </ContentWrapper>
                        </main>
                    </React.Fragment>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;
