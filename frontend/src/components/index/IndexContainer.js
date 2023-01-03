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
                            {/*<div className="col-md-9 text-justified">*/}
                            <div className="text-justified">
                                <p>In that time, I graduated from Entrepreneur First, <a
                                    href="https://www.crunchbase.com/organization/context-scout"
                                    target="_blank">raised almost £2m in venture capital and R&D grants</a> and managed a team of 10. Unfortunately, the company did not survive the COVID-19 pandemic and we closed it in 2020. You can read more about our efforts on my blog.</p>
                                <div className="small-medium-spacer"/>
                                <a href="http://blog.marcsloan.com/" target="_blank" className="blog-button-link">
                                    <div className="blog-button">
                                        Go to Blog
                                    </div>
                                </a>
                                <div className="small-medium-spacer"/>
                                <p>In response to the COVID-19 pandemic, I founded a non-profit called Covid Tech Support (now rebranded as <a target="_blank" href={"https://www.getdigitallies.org/"}>digitAllies</a>) which finds tech talent to support charities struggling due to COVID-19. To help run it, I recruited and managed a team of 15-20 multi-disciplinary volunteers who helped over 250 projects by matching them to our community of 1500 digital experts.</p>
                                <p>For this I've been awarded a British Empire Medal in the 2021 New Years Honours List, a Points of Light award by the Prime Minister and the 2020 Digital Volunteer Tech4Good Award.</p>
                                <div className="small-medium-spacer"/>
                                <div className="award-carousel">
                                    <a href="https://www.tech4goodawards.com/finalist/marc-sloan/" target="_blank"><img src={this.props.global.STATIC_URL + "img/index/Tech4Good.png"}/></a>
                                    <a href="https://www.pointsoflight.gov.uk/covid-tech-support/" target="_blank"><img src={this.props.global.STATIC_URL + "img/index/PointsofLight.png"}/></a>
                                </div>
                                <div className="small-medium-spacer"/>
                                <p>Before all of this, I was an <a
                                                    href="https://scholar.google.com/citations?user=17C0-A0AAAAJ&hl=en"
                                                    target="_blank">academic</a>. I completed my PhD thesis at UCL on the topic Dynamic Information Retrieval Modeling (a probabilistic model that combines reinforcement learning with web search), on which I also
                                    <a href="https://www.amazon.co.uk/Information-Retrieval-Modeling-Synthesis-Lectures/dp/1627055258/ref=sr_1_1?dchild=1&keywords=dynamic+information+retrieval+modeling&qid=1599210532&sr=8-1"
                                                                             target="_blank"> published a book</a>. I also applied my research to the Bing search engine while at Microsoft Research in Redmond.</p>
                                <p>And before that I was a <a href="https://github.com/marcsloan"
                                                                                     target="_blank">software developer</a> who worked on particle accelerators in Switzerland and in a spy agency beginning with G and ending in Q. </p>
                                <hr/>
                                <p>Because of all of these experiences I'm passionate about product leadership, deep tech and finance. If you'd like to get in touch, please feel free to <a target="_blank" href="mailto:hi@marcsloan.com">contact me</a>, follow me on <a target="_blank" href="https://twitter.com/MarcCSloan">Twitter</a> or connect on <a target="_blank" href="https://www.linkedin.com/in/marcsloan/">LinkedIn</a>.</p>
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
                                            {/*<div className="col-md-9 text-justified">*/}
                                            <div className="text-justified">
                                                <p>I am a data-driven senior product leader with 7+ years of experience hiring and managing agile, cross-functional product teams that build complex technical and financial projects, while juggling multiple stakeholders, that deliver impact.</p>
                                                <p>With this combination of skills I'm leading <a href="https://www.causaly.com/"
                                                                                                            target="_blank">Causaly's</a> efforts to help biomedical researchers and decision-makers discover evidence from millions of academic publications, clinical trials, regulatory documents, patents and other data sources, in minutes, by managing and scaling their Intelligent Search product.</p>

                                                <p>But before that I spent 2 years building data-driven financial products and 5 years as an <a href="https://angel.co/marc-sloan"
                                                                             target="_blank">entrepreneur</a> building a next generation web search technology: a real-time virtual assistant that helps you while you browse online. You can check it out over there, go ahead, you can play around with it.</p>
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
