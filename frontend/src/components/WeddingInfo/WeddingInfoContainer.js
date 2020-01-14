import React, {Component} from "react";
import NavContainer from "../pageElements/NavContainer"
import PropTypes from "prop-types";
import Header from "../borders/Header";
import Footer from "../borders/Footer";

export default class WeddingInfoContainer extends Component {
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
                    <img className="wedding-title" src={this.props.global.STATIC_URL + "img/wedding-info.png"}/>
                    <img className="" src={this.props.global.STATIC_URL + "img/couple-image.png"}/>
                    <section>
                        <div className="body-text">We picked a festival theme for our wedding as we both love the
                            atmosphere and community spirit of music festivals, and wanted to
                            recreate that for our special day.
                        </div>
                    </section>
                    <section>
                        <h2 className="body-text">Dress Code</h2>
                        <div className="body-text">Don’t worry, we’re not expecting you to turn up in wellies and face
                            paint,
                            it is still a wedding after all. But we’ll be keeping things pretty relaxed
                            ourselves and you’re very welcome to join us.
                        </div>
                    </section>
                    <section>
                        <h2 className="body-text">Gift List</h2>
                        <div className="body-text">We’re lucky enough to have talented friends and family who’ve
                            generously donated their time and effort to helping us make this happen.
                        </div>
                        <div className="body-text">Not only that, we also appreciate that we’re asking you to travel a
                            long
                            way at great expense to attend our celebration.
                        </div>
                        <div className="body-text">This is worth more to us than any gift and so we’d like to
                            respectfully
                            request no wedding gifts.
                        </div>
                        <div className="body-text">
                            But if you do insist, then the best gift you can give is your help. Drop us
                            a line as I’m sure there’s something we could use a hand with.
                        </div>
                        <div className="body-text">And if you really do insist, then we would appreciate a donation
                            made to <a href="https://uk.virginmoneygiving.com/Team/SloanThickettwedding">Cancer Research UK and Mind</a>.
                        </div>
                    </section>
                    <div className="spacer"/>
                </div>
                <NavContainer
                    history={this.props.history}
                    rsvp={true}
                    gettinghere={true}
                    wheretostay={true}
                    weddinginfo={false}
                />
                <Footer/>
            </div>
        )
    }
}