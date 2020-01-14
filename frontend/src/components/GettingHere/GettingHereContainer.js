import React, {Component} from "react";
import {Switch} from "react-router-dom"
import {Route} from "react-router-dom"
import NavContainer from "../pageElements/NavContainer"
import Header from "../borders/Header";
import Footer from "../borders/Footer";
import PropTypes from "prop-types";

export default class GettingHereContainer extends Component {

    static propTypes = {
        global: PropTypes.object.isRequired,
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="page-container">
                <Header/>
                <div className="wedding-container">
                    <img className="wedding-title" src={this.props.global.STATIC_URL + "img/getting-here.png"}/>
                    <section>
                    <div className="body-text">
                        The wedding venue is <b>The Southville Centre, Bristol BS3 1QG</b>
                    </div>
                    </section>
                    <iframe
                        className="google-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.7873277956724!2d-2.6077382842323593!3d51.44369947962471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718dd2a8271be3%3A0xba3483fdfa1c5884!2sThe+Southville+Centre+(SCDA)!5e0!3m2!1sen!2suk!4v1560463606035!5m2!1sen!2suk"
                        frameBorder="0" style={{border:0, margin: "20px auto", "maxWidth": "400px", width: "80%", height: "300px"}} allowFullScreen></iframe>
                    <section>
                    <h2 className="body-text">Line Up</h2>

                    <div className="line-up">
                        <label><b>1pm</b></label>
                        <span className="desc">Gates Open</span>
                        <label><b>1.30pm</b></label>
                        <span className="desc">Main Act (Ceremony Begins)</span>
                        <label><b>2.30pm</b></label>
                        <span className="desc">Festival Village (Afternoon Drinks)</span>
                        <label><b>5pm</b></label>
                        <span className="desc">Food Court (Dinner)</span>
                        <label><b>7pm</b></label>
                        <span className="desc">DJ SpeakerBox (Evening Reception)</span>
                        <label><b>10.30pm</b></label>
                        <span className="desc">Festival Close</span>
                                                <label><b>11pm</b></label>
                        <span className="desc">Official After-Party</span>
                    </div>
                    </section>

                    <section>
                    <h2 className="body-text">Driving</h2>
                    <div className="body-text">It’s a <b>1.5 hour</b> drive from Swansea, or a <b>2.5 hour</b> drive from London.</div>
                    <div className="body-text">There’s limited parking at the wedding venue and no street parking.</div>
                    <div className="body-text">If you’re staying overnight, please try to park at your hotel instead.</div>
                    </section>

                    <img className="" src={this.props.global.STATIC_URL + "img/roads.png"}/>

                    <section>
                    <h2 className="body-text">Train</h2>
                    <div className="body-text">The nearest train station is <b>Bristol Temple Meads</b> which is a 10 minute taxi ride away from the venue.</div>
                    <div className="body-text">There are regular trains to both London and Swansea. The last trains
                        are at <b>22:30</b> (London) and <b>21:57</b> (Swansea).</div>
                    </section>
                    <div className="spacer"/>
                </div>
                <NavContainer
                    history={this.props.history}
                    rsvp={true}
                    gettinghere={false}
                    wheretostay={true}
                    weddinginfo={true}
                />
                <Footer/>
            </div>
        )
    }
}