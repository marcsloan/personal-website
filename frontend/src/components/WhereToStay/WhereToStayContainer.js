import React, { Component } from "react";
import { Switch } from "react-router-dom"
import { Route } from "react-router-dom"
import NavContainer from "../pageElements/NavContainer"
import PropTypes from "prop-types";
import Header from "../borders/Header";
import Footer from "../borders/Footer";

export default class WhereToStayContainer extends Component {
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
                    <img className="wedding-title" src={this.props.global.STATIC_URL + "img/where-to-stay.png"}/>
                    <iframe
                        className="google-map"
                        src="https://www.google.com/maps/d/u/0/embed?mid=1hoGdyA9JUtRbSbsu1tArK46qR6LbvinB"
                        frameBorder="0" style={{border:0, margin: "20px auto", "maxWidth": "600px", width: "80%", height: "400px"}} allowFullScreen></iframe>

                    <section>
                    <h2 className="body-text">Venue</h2>
                        <div className="body-text">The <b>Southville Centre</b> (Bristol BS3 1QG), is a beautiful Victorian
community centre located in a suburb in Bristol. As such, there are
no hotels in the immediate area. However, the Southville area is a short
distance from Bristol city centre which has a large number of hotels.</div>
                    <div className="body-text">All of the hotels below are a 5-10 min taxi ride, or 15-30 minute walk
from the venue.</div>
                    </section>
                    <section>
                    <h2 className="body-text">Hotels</h2>
                        <a href="https://drive.google.com/open?id=1hoGdyA9JUtRbSbsu1tArK46qR6LbvinB&usp=sharing">
                            <div className="body-text" >Click to view the full list on Google Maps</div></a>
                        <h3 className="body-text">Bristol Marriott Royal Hotel</h3>
                        <div className="body-text">We will be staying here from Friday 4th Oct - Sunday 6th Oct along
with some of the wedding party.</div>
                                                <h3 className="body-text">Radisson Blu Hotel, Bristol</h3>
                        <div className="body-text">An alternative hotel located very close to the Bristol Marriott Royal Hotel.
</div>
                         <h3 className="body-text">The Bristol Hotel</h3>
                        <div className="body-text">An alternative hotel located very close to the Bristol Marriott Royal Hotel.
</div>
                         <h3 className="body-text">Mercure Bristol Holland House Hotel and Spa</h3>
                        <div className="body-text">
The closest hotel to the venue, although still a 5 minute drive away.
</div>
                         <h3 className="body-text">Novotel Bristol Centre Hotel</h3>
                        <div className="body-text">The closest hotel to Bristol Temple Meads train station.

</div>
                         <h3 className="body-text">Travelodge Bristol Central</h3>
                        <div className="body-text">Closest budget hotel, also very close to the Bristol Marriott Royal Hotel.
</div>
                    </section>
                    <div className="spacer"/>
                </div>
                <NavContainer
                    history={this.props.history}
                    rsvp={true}
                    gettinghere={true}
                    wheretostay={false}
                    weddinginfo={true}
                />
                <Footer/>
            </div>
    )
  }
}