import React, {Component} from 'react';
import {HomeWrapper} from "./style"
import imageUrl from '../../assets/image_item_nome.png'
import {Link} from 'react-router-dom'

class HomeView extends Component {
    state = {
        index: 0,
        navArray: ["ALL", "NAV_WRAPPER", "COMPONENT", "GRAPHIC DESIGN"]
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
                    <div className="work_item">
                        <div className="image_wrapper">
                            <Link to="/detail">
                                <img
                                    className="work_image"
                                    src="http://bmob-cdn-25931.b0.upaiyun.com/2019/05/22/b25c777640affbb68057e865835b3600.png"/>
                            </Link>
                        </div>
                        <span className="work_title">RESEARCH</span>
                        <span className="work_desc">PRODUCTS DESIGN</span>
                    </div>
                </div>
            </HomeWrapper>
        );
    }

    handleClick = (index) => {
        this.setState({
            index
        })
    }
}

export default HomeView;