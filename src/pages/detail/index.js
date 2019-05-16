import React, {Component} from 'react';
import {AboutWrapper} from './style'
import imageAbout from '../../assets/icon_back.png'
import imageWrok from '../../assets/image_work_detail.png'
import {withRouter} from "react-router-dom";

class DetailView extends Component {
    render() {
        return (
            <AboutWrapper>
                <img className="btn_back" src={imageAbout} onClick={this.handleBackClick}/>
                <div className="work_info">
                    <span className="work_title">
                       INNERWORLD
                    </span>
                    <span className="msg_14">
                        Technology, Yuquan Campus, Zhejiang University
                    </span>
                    <span className="msg_12 time_style">
                        TIME:2019/05/16
                    </span>
                    <span className="msg_12">
                        TEAM:JIAHAO GUO,JIAHAO GUO,JIAHAO GUO
                    </span>
                    <span className="msg_12">
                        FOCUS:Zhejiang University
                    </span>
                    <span className="msg_12">
                        SKILLS:Design
                    </span>
                </div>
                <div className="work_content">
                    <span className="msg_16">
                        If you just want to try React, create-react-app is recommended to create a react project. Quick start
                        Because create-react-app and vue-cli are different, create-react-app encapsulates the relevant configuration of webpack directly, so the degree of customization is not high, so consider building a React project manually.
                    </span>
                    <div className="images_wrapper">
                        <img className="image_work" src={imageWrok}/>
                        <img className="image_work" src={imageWrok}/>
                        <img className="image_work" src={imageWrok}/>
                    </div>

                </div>
            </AboutWrapper>
        );
    }

    handleBackClick = () => {
        this.props.history.push("/")
    }
}

export default withRouter(DetailView);