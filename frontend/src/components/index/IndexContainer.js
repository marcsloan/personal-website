import React, {Component} from "react";
import NavContainer from "../borders/NavContainer"
import FooterContainer from "../borders/FooterContainer"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import "../../sass/index.scss"
import {Widget} from "../demo/widget";
import {SCRIPT} from "../demo/scripts/chatScript";

class IndexContainer extends Component {
    static propTypes = {
        global: PropTypes.object.isRequired,
        ga: PropTypes.object.isRequired,
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        let bottomHalfOfPage = (
            <div className="row second-half">
                <div className="col-3"></div>
                <div className="col-8">
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-md-9 text-justified">
                                <p>To build it I spent 4 years developing, <a
                                    href="https://www.crunchbase.com/organization/context-scout"
                                    target="_blank">fundraising</a>,
                                    hiring, firing, testing and designing. I’ve written extensively about what went
                                    right and what
                                    went wrong, and what I learned from it. Have a read, I hope you can learn something
                                    too.</p>
                                <div className="small-medium-spacer"/>
                                <a href="http://blog.marcsloan.ai/" target="_blank" className="blog-button-link">
                                    <div className="blog-button">
                                        Go to Blog
                                    </div>
                                </a>
                                <div className="small-medium-spacer"/>
                                <p>The concept sprung from my 5 years of research into dynamic information retrieval at
                                    UCL and
                                    Microsoft Research, and I started working on it with Andrew O’Harney who I met on
                                    Entrepreneur
                                    First. You should also <a href="http://andrewoharney.com/" target="_blank">check him
                                        out</a> too, he’s great. </p>
                                <p>If you're interested in learning more about the virtual assistant and its design, you should read my latest blog post on the subject - <a href="https://blog.marcsloan.ai/what-if-your-web-browser-could-talk/" target="_blank">What if web browsers could talk?</a></p>
                                <div className="small-medium-spacer"/>
                            </div>
                        </div>
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
                            <div className="row">
                                <div className="col-3 text-right">
                                    <img className="index-message-avatar"
                                         src={this.props.global.STATIC_URL + "img/index/avatar-white.png"}/>
                                </div>
                                <div className="col-8">
                                    <div className="index-message-box justify-content-center">
                                        <div className="index-message">
                                            <span><span>Hi, I'm </span><span className="marc-sloan">Marc Sloan</span></span>
                                        </div>
                                    </div>
                                    <div className="small-medium-spacer"/>
                                    <div className="container">
                                        <div className="row justify-content-start">
                                            <div className="col-md-9 text-justified">
                                                <p>I’m a product manager, <a href="https://angel.co/marc-sloan"
                                                                             target="_blank">entrepreneur</a>, <a
                                                    href="https://scholar.google.com/citations?user=17C0-A0AAAAJ&hl=en"
                                                    target="_blank">academic</a>, <a href="https://github.com/marcsloan"
                                                                                     target="_blank">developer</a> and <a
                                                    href="https://dribbble.com/marcsloan" target="_blank">designer</a>,
                                                    ruminating on AI and the future of the internet. I created a
                                                    technology
                                                    called <a href="https://www.contextscout.com/"
                                                              target="_blank">Scout</a> that offers real-time virtual
                                                    assistance
                                                    while browsing online. It’s over there, go ahead, you can play
                                                    around with
                                                    it. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="small-medium-spacer"/>
                            <div className="arrow d-none d-lg-block">
                                {/*Hidden on md and below*/}
                            </div>
                            <div className="small-medium-spacer d-none d-lg-block"/>
                            <div className="d-none d-lg-block">
                                {bottomHalfOfPage}
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="demo">
                                <Widget global={this.props.global} script={SCRIPT}
                                        openingMessage={"Hi, I'm Marc Sloan"} openingAuthor={"scout"} ga={this.props.ga}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container index-container d-lg-none">
                    <div className="row">
                        <div className="index-content">
                            <div className="small-medium-spacer"/>
                            {bottomHalfOfPage}
                        </div>
                    </div>
                </div>
                <FooterContainer global={this.props.global}/>
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