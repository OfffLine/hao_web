import React, {Component} from 'react';
import {AboutWrapper} from './style'
import imageAbout from '../../assets/icon_back.png'
import {withRouter} from "react-router-dom";
import RcViewer from 'rc-viewer'
import {decodeQuery} from '../../utils'
import Bmob from "hydrogen-js-sdk";

class DetailView extends Component {
    state = {
        worksDetail: {}
    }

    render() {
        return (
            <AboutWrapper>
                <img className="btn_back" src={imageAbout} onClick={this.handleBackClick}/>
                <div className="work_info">
                    <span className="work_title">
                        {this.state.worksDetail.detail_title}
                    </span>
                    <span className="msg_14">
                        {this.state.worksDetail.detail_desc}
                    </span>
                    <span className="msg_12 time_style">
                        TIME:{this.state.worksDetail.time}
                    </span>
                    <span className="msg_12">
                        AUTHOR:{this.state.worksDetail.author}
                    </span>
                    <span className="msg_12">
                        SKILL:{this.state.worksDetail.skill}
                    </span>
                </div>
                <div className="work_content">
                    <span className="msg_16">
                       {this.state.worksDetail.content}
                    </span>
                    <div className="images_wrapper">
                        <RcViewer ref='viewer'>
                            {this.state.worksDetail.images ?
                                this.state.worksDetail.images.map((value) => (
                                    <img className="image_work"
                                         src={value}/>
                                )) : ""}
                        </RcViewer>
                    </div>

                </div>
            </AboutWrapper>
        );
    }

    handleBackClick = () => {
        this.props.history.push("/")
    }

    componentDidMount() {
        let id = decodeQuery(this.props.location.search).id;
        console.log(id)
        if (id) {
            let query = Bmob.Query('works');
            query.get(id).then(res => {
                this.setState({
                    worksDetail: res
                })
            }).catch(err => {
                console.log(err)
            })
        }
    }
}

export default withRouter(DetailView);