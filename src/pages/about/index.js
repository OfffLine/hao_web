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
                <span className="msg_title title_1">
                    Master's Candidate of Design(2018.9-Present)<br/>
                    College of Computer Science and Technology, Zhejiang University
                </span>

                <span className="msg_title title_2">Email</span>
                <span className="msg_2 msg">21821031@zju.edu.cn</span>
                <span className="msg_2 msg">erduode@icloud.com</span>

                <span className="msg_title title_2">PHONE</span>
                <span className="msg_2 msg">+86 177 6456 6571</span>

                <span className="msg_title title_2">ADDRESS</span>
                <span className="msg_2 msg">
                    Room 202, Innovation Design Lab<br/>College of Computer Science and Technology, Yuquan Campus, Zhejiang University<br/>
                    No.38 Zheda Rd, West Lake District, Hangzhou, Zhejiang Province, China<br/>
                    Postcode: 310027
                </span>
            </AboutWrapper>
        );
    }
}

export default AboutView;