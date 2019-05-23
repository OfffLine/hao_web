import React, {Component} from 'react';
import {HomeWrapper} from "./style"
import {Link} from 'react-router-dom'
import Bmob from "hydrogen-js-sdk";

class HomeView extends Component {
    state = {
        index: 0,
        navArray: ["ALL", "NAV_WRAPPER", "COMPONENT", "GRAPHIC DESIGN"],
        worksAllData: [],
        worksListData: []
    }

    render() {
        return (
            <HomeWrapper>
                <div className="nav_wrapper">
                    {this.state.navArray.map((value, index) => (
                        <span className={this.state.index === index ? "nav_item select" : "nav_item"} key={value}
                              onClick={this.handleClick.bind(this, index)}>
                            {value}
                        </span>
                    ))}
                </div>

                <div className="works_wrapper">
                    {this.state.worksListData.map((value => (
                        <div className="work_item" key={value.objectId}>
                            <div className="image_wrapper">
                                <Link to={`/detail?id=${value.objectId}`}>
                                    <img
                                        className="work_image"
                                        src={value.image_url}/>
                                </Link>
                            </div>
                            <span className="work_title">{value.title}</span>
                            <span className="work_desc">{value.desc}</span>
                        </div>
                    )))}
                </div>
            </HomeWrapper>
        );
    }

    componentDidMount() {
        const query = Bmob.Query('works');
        query.find().then(res => {
            this.setState({
                worksAllData: res,
                worksListData: res
            })
        });
    }

    handleClick = (index) => {
        let worksAllData = this.state.worksAllData
        let worksListData = []
        if (index === 0) {
            worksListData = worksAllData
        } else {
            worksListData = worksAllData.filter((item) => item.category === index)
        }
        console.log(worksListData)
        this.setState({
            index,
            worksListData
        })
    }
}

export default HomeView;