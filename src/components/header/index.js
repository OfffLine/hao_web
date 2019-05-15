import React, {Component} from 'react';
import {HeaderWrapper} from './style'
import {withRouter} from "react-router-dom";

class HeaderView extends Component {
    state = {
        isHome: true
    }

    render() {
        return (
            <HeaderWrapper>
                <div className="content">
                    <span className="project_name">
                        JIAHAO GUO
                    </span>
                    <span className={this.state.isHome ? "works active_style" : "works"}
                          onClick={this.handleClick.bind(this, true)}>
                        WORKS
                    </span>

                    <span className={!this.state.isHome ? "about active_style" : "about"}
                          onClick={this.handleClick.bind(this, false)}>
                        ABOUT
                    </span>
                </div>
            </HeaderWrapper>
        );
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== "/about") {
            this.setState({
                isHome: true,
            });
        } else {
            this.setState({
                isHome: false,
            });
        }
    }

    handleClick = (isHome) => {
        if (isHome) {
            this.props.history.push("/")
        } else {
            this.props.history.push("/about")
        }
    }
}

export default withRouter(HeaderView);