import React, {Component} from 'react';
import {HomeWrapper} from "./style"
import imageUrl from '../../assets/image_item_nome.png'
import {Link} from 'react-router-dom'

class HomeView extends Component {
    state = {
        index: 0,
        navArray: ["ALL", "NAV_WRAPPER", "COMPONENT", "HANDLE_CLICK"]
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
                    {this.state.navArray.map((value, index) => (
                        <div className="work_item" key={index}>
                            <div className="image_wrapper">
                                <Link to="/detail">
                                    <img
                                        className="work_image"
                                        src={imageUrl}/>
                                </Link>
                            </div>
                            <span className="work_title">work_title</span>
                            <span className="work_desc">work_descwork_descwork_descwork_descwork_desc</span>
                        </div>
                    ))}
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