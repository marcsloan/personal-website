import React, {Component} from "react";
import PropTypes from "prop-types"
import {connect} from "react-redux"
import "../../sass/demoindex.scss"
import {Widget} from "../demo/widget";
import {SCRIPT} from "../demo/scripts/blogScript";

class IndexContainer extends Component {
    static propTypes = {
        global: PropTypes.object.isRequired,
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="demoindex">
                <Widget global={this.props.global} script={SCRIPT}
                        openingMessage={"Hi, I'm a conversational browser"} openingAuthor={"robot"}/>
            </div>
        )
    }
}

const mapStateToProps = dispatch => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(IndexContainer)