import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {HashRouter, Route, Switch} from 'react-router-dom'
import store from './store';
import HeaderView from './components/header';
import FooterView from './components/footer';
import HomeView from './pages/home';
import DetailView from './pages/detail';
import AboutView from './pages/about';
import {ContentWrapper} from "./style"

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <React.Fragment>
                        <main>
                            <HeaderView/>
                            <ContentWrapper className="content-wrapper">
                                <Switch>
                                    <Route path='/' exact component={HomeView}/>
                                    <Route path='/about' exact component={AboutView}/>
                                    <Route path='/detail' exact component={DetailView}/>
                                </Switch>
                            </ContentWrapper>
                            <FooterView/>
                        </main>
                    </React.Fragment>
                </HashRouter>
            </Provider>
        )
    }
}

export default App;
