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
        if (nextProps.location.pathname.indexOf("/about") !== -1) {
            this.setState({
                isHome: false,
            });
        } else {
            this.setState({
                isHome: true,
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