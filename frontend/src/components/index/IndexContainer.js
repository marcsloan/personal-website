import React, {Component} from "react";
import NavContainer from "../pageElements/NavContainer"
import FooterContainer from "../pageElements/FooterContainer"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import "../../sass/index.scss"
import {Widget} from "../demo/widget";

class IndexContainer extends Component {
    static propTypes = {
        global: PropTypes.object.isRequired,
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        let bottomHalfOfPage = (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-md-offset-2 text-justified">
                        <p>To build it I spent 4 years developing, <a
                            href="https://www.crunchbase.com/organization/context-scout" target="_blank">fundraising</a>,
                            hiring, firing, testing and designing. I’ve written extensively about what went right and what
                            went wrong, and what I learned from it. Have a read, I hope you can learn something too.</p>
                        <div className="small-spacer"/>
                        <a href="/" target="_blank" className="blog-button-link">
                            <div className="blog-button">
                                Go to Blog
                            </div>
                        </a>
                        <div className="small-spacer"/>
                        <p>The concept sprung from my 5 years of research into dynamic information retrieval at UCL and
                            Microsoft Research, and I started working on it with Andrew O’Harney who I met on Entrepreneur
                            First. You should also <a href="http://andrewoharney.com/" target="_blank">check him
                                out</a> too, he’s great. </p>
                        <div className="small-spacer"/>
                    </div>
                </div>
            </div>
        )


        return (
            <div className="index">
                <NavContainer/>
                <div className="container index-container">
                    <div className="row">
                        <div className="col-lg-7 index-content">
                            <div className="large-spacer"/>
                            <div className="message-box justify-content-center">
                                <img className="message-avatar"
                                     src={this.props.global.STATIC_URL + "img/index/avatar.jpeg"}/>
                                <div className="message">
                                    <span>Hi, I'm Marc Sloan</span>
                                </div>
                            </div>
                            <div className="small-spacer"/>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-6 col-md-offset-2 text-justified">
                                        <p>I’m a product manager, <a href="https://angel.co/marc-sloan"
                                                                     target="_blank">entrepreneur</a>, <a
                                            href="https://scholar.google.com/citations?user=17C0-A0AAAAJ&hl=en"
                                            target="_blank">academic</a>, <a href="https://github.com/marcsloan"
                                                                             target="_blank">developer</a> and <a
                                            href="https://dribbble.com/marcsloan" target="_blank">designer</a> who
                                            thinks a lot about the future of the web and AI. I created a technology
                                            called <a href="https://www.contextscout.com/"
                                                      target="_blank">Scout</a> that offers real-time virtual assistance
                                            while browsing online. It’s over there, go ahead, you can play around with
                                            it. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="small-spacer"/>
                            <div className="arrow d-none d-lg-block">
                                {/*Hidden on md and below*/}
                            </div>
                            <div className="medium-spacer d-none d-lg-block"/>
                            <div className="d-none d-lg-block">
                                {bottomHalfOfPage}
                            </div>

                        </div>
                        <div className="col-lg-5">
                            <Widget global={this.props.global}/>
                            {/*<img className="demo" src={this.props.global.STATIC_URL + "img/index/screenshot.png"}/>*/}
                        </div>
                    </div>
                </div>
                <div className="container index-container d-lg-none">
                    <div className="row">
                        <div className="index-content">
                            <div className="medium-spacer"/>
                            {bottomHalfOfPage}
                        </div>
                    </div>
                </div>
                <FooterContainer global={this.props.global}/>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         global: state.global,
//         ...state,
//     }
// }

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