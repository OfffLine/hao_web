import React, {Component} from 'react';
import {AboutWrapper} from "./style"
import imageAbout from '../../assets/image_about.png'

class AboutView extends Component {
    render() {
        return (
            <AboutWrapper>
                <img
                    className="top_image"
                    src={imageAbout}/>
                <span className="about_me">
                    ABOUT ME
                </span>
                <span className="msg_1 msg">
                    If you just want to try React, create-react-app is recommended to create a react project. Quick start

Because create-react-app and vue-cli are different, create-react-app encapsulates the relevant configuration of webpack directly, so the degree of customization is not high, so consider building a React project manually.
                </span>
                <span className="msg_2 msg">
                    If you just want to try React, create-react-app is recommended to create a react project. Quick start

Because create-react-app and vue-cli are different, create-react-app encapsulates the relevant configuration of webpack directly, so the degree of customization is not high, so consider building a React project manually.
                </span>
                <span className="msg_2 msg">
                    If you just want to try React, create-react-app is recommended to create a react project. Quick start

Because create-react-app and vue-cli are different, create-react-app encapsulates the relevant configuration of webpack directly, so the degree of customization is not high, so consider building a React project manually.
                </span>

            </AboutWrapper>
        );
    }
}

export default AboutView;