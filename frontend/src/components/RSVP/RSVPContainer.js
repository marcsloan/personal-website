import React, {Component} from "react";
import PropTypes from "prop-types"
import {Switch} from "react-router-dom"
import {Route} from "react-router-dom"
import NavContainer from "../pageElements/NavContainer"
import axios from "axios"
import Header from "../borders/Header";
import Footer from "../borders/Footer";

export default class RSVPContainer extends Component {

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
                <Switch>
                    <Route exact path="/rsvp/"
                           render={(props) => <_RSVPContainer {...props} global={this.props.global}/>}/>
                    <Route exact path="/rsvp/thanks"
                           render={(props) => <_RSVPThanksContainer {...props} global={this.props.global}/>}/>
                </Switch>
                <NavContainer
                    history={this.props.history}
                    rsvp={false}
                    gettinghere={true}
                    wheretostay={true}
                    weddinginfo={true}
                />
                <Footer/>
            </div>
        )
    }
}

class _RSVPContainer extends Component {

    static propTypes = {
        global: PropTypes.object.isRequired,
    }

    constructor() {
        super();
        this.state = {
            name: '',
            mainMeal: '',
            dessert: '',
            additional: '',
            not_coming: false,
        };
    }


    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onCheck = (e) => {
        this.setState({not_coming: !this.state.not_coming});
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"

        await axios.post('/api/rsvp/', {
            name: this.state.name,
            mainMeal: this.state.mainMeal,
            dessert: this.state.dessert,
            additional: this.state.additional,
            not_coming: this.state.not_coming,
        })

        this.props.history.push('/rsvp/thanks/')

    }


    render() {
        const {name, mainMeal, dessert, additional} = this.state;

        return (
            <div className="wedding-container">

                <img className="wedding-title" src={this.props.global.STATIC_URL + "img/rsvp.png"}/>
                <div>
                    Let us know if you’re able to join us and what you’d like to eat:
                </div>
                <div className="spacer"/>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input type="text" name="name" value={name} onChange={this.onChange} className="guest-name"/>
                    <img className="img-spacer" src={this.props.global.STATIC_URL + "img/spacer.png"}/>
                    <label>Main Meal:</label>
                    <fieldset id="mainMeal" name="mainMeal" onChange={this.onChange}>
                        <div className="fieldset-option">
                            <input type="radio" value="salmon" name="mainMeal"/>
                            <div className="fieldset-option-label">Roasted salmon topped with herby crumb and red pepper sauce with crushed roasted new potatoes
                            </div>
                        </div>
                        <div className="fieldset-option">
                            <input type="radio" value="lamb" name="mainMeal"/>
                            <div className="fieldset-option-label">Lamb slow roasted with chilli and honey salsa verde on rosti
                            </div>
                        </div>
                        <div className="fieldset-option">
                            <input type="radio" value="other" name="mainMeal"/>
                            <div className="fieldset-option-label">I'm a vegan/vegetarian (please specify below)</div>
                        </div>
                    </fieldset>
                    <img className="img-spacer" src={this.props.global.STATIC_URL + "img/spacer.png"}/>
                    <label>Dessert:</label>
                    <fieldset id="dessert" name="dessert" onChange={this.onChange}>
                        <div className="fieldset-option">
                            <input type="radio" value="choc" name="dessert"/>
                            <div className="fieldset-option-label">Chocolate and raspberry pots with lemon shortbreads
                            </div>
                        </div>
                        <div className="fieldset-option">
                            <input type="radio" value="meringue" name="dessert"/>
                            <div className="fieldset-option-label">Meringue nests with lemon curd cream and berry compote
                            </div>
                        </div>
                        <div className="fieldset-option">
                            <input type="radio" value="other" name="dessert" />
                            <div className="fieldset-option-label">I'm a vegan/vegetarian (please specify below)</div>
                        </div>
                    </fieldset>
                    <img className="img-spacer" src={this.props.global.STATIC_URL + "img/spacer.png"}/>
                    <label>Dietary Requirements (e.g. allergies, vegetarian, vegan, children’s meals etc.):</label>
                    <textarea rows="5" cols="50" name="additional" onChange={this.onChange} className="dietary"/>
                    <div className="cant-come">
                        <input type="checkbox" name="not_coming" checked={this.state.not_coming} onChange={this.onCheck}/><div className="fieldset-option-label">I can’t make it 😔</div></div>
                    <button type="submit" className="wedding-btn submit">Submit</button>
                    <br/>
                </form>
            </div>
        )
    }
}

class _RSVPThanksContainer extends Component {
    static propTypes = {};

    anotherRSVP = (e) => {
        this.props.history.push('/rsvp/')
    }

    render() {
        return (
            <div className="wedding-container">

                <img className="wedding-title" src={this.props.global.STATIC_URL + "img/rsvp.png"}/>
                <div>
                    Thanks 😄
                </div>
                <div className="spacer"/>
                <button className="wedding-btn submit" onClick={this.anotherRSVP}>Need to RSVP for someone else?</button>
<div className="spacer"/><div className="spacer"/>
            </div>
        )
    }
}