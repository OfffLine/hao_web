import React, {Component} from 'react';
import {AboutWrapper} from './style'
import imageAbout from '../../assets/icon_back.png'
import {withRouter} from "react-router-dom";
import RcViewer from 'rc-viewer'

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
                        <RcViewer ref='viewer'>
                            <img className="image_work"
                                 src="http://bmob-cdn-25931.b0.upaiyun.com/2019/05/23/f81b0bd540cb619a804d53b3f69a29a3.png"/>
                            <img className="image_work"
                                 src="http://bmob-cdn-25931.b0.upaiyun.com/2019/05/23/38d1d9d440679b1580799b01a61bb801.png"/>
                            <img className="image_work"
                                 src="http://bmob-cdn-25931.b0.upaiyun.com/2019/05/23/1a3a41c440b62e9c80a8ec52b30fb63c.png"/>
                            <img className="image_work"
                                 src="http://bmob-cdn-25931.b0.upaiyun.com/2019/05/23/c25f13c64084239f8083776c5044d1e0.png"/>
                            <img className="image_work"
                                 src="http://bmob-cdn-25931.b0.upaiyun.com/2019/05/23/185d375840ee57fe80a54d0c89a394c5.png"/>
                            <img className="image_work"
                                 src="http://bmob-cdn-25931.b0.upaiyun.com/2019/05/23/95530ccf404e8f8180ead73b4f3ccfa8.png"/>
                            <img className="image_work"
                                 src="http://bmob-cdn-25931.b0.upaiyun.com/2019/05/23/6b852a8540d823c4807c140cea7d995f.png"/>
                        </RcViewer>
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