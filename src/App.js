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
import Bmob from "hydrogen-js-sdk";
Bmob.initialize("31320296840158fa6b01d5fdf17d4838", "6aeeefab2552635d2a3b99893c231eb2");

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
