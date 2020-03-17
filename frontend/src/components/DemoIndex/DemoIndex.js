import React, {Component} from "react";
import PropTypes from "prop-types"
import {connect} from "react-redux"
import "../../sass/demoindex.scss"
import {Widget} from "../demo/widget";

class IndexContainer extends Component {
    static propTypes = {
        global: PropTypes.object.isRequired,
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

            //     <div className="index">
            //     <div className="container index-container">
            //         <div className="row">
            //             <div className="col-lg-5">
            //                 <div className="demo">
            //                     <Widget global={this.props.global}/>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
    render() {
        return (
            <div className="demoindex">
                <Widget global={this.props.global}/>
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