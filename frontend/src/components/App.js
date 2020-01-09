import "babel-polyfill"

// import "../css/wedding.css"
import "../css/bootstrap.css"
import "../sass/base.scss"

import { persistReducer, persistStore } from "redux-persist"

import { BrowserRouter } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import React from "react"
import ReactDOM from "react-dom"
import { Route } from "react-router-dom"
import { Switch } from "react-router-dom"
import { applyMiddleware } from "redux"
import { connect } from "react-redux"
import { createStore } from "redux"
import IndexContainer from "./index/IndexContainer"
import RSVPContainer from "./RSVP/RSVPContainer"
import WhereToStayContainer from "./WhereToStay/WhereToStayContainer"
import GettingHereContainer from "./GettingHere/GettingHereContainer"
import WeddingInfoContainer from "./WeddingInfo/WeddingInfoContainer"
import sessionStorage from "redux-persist/es/storage/session"
import thunk from "redux-thunk"
import AppReducer from "../reducers/index"
import PropTypes from "prop-types"

const persistConfig = {
    key: "root",
    storage: sessionStorage,
}

const persistedAppReducer = persistReducer(persistConfig, AppReducer)
let store = createStore(persistedAppReducer, applyMiddleware(thunk))
let persistor = persistStore(store)

class RootContainerComponent extends React.Component {

    static propTypes = {
        global: PropTypes.object.isRequired,
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/*<Route exact path="/" component={IndexContainer}/>*/}
                    {/*<Route exact path="/rsvp*" component={RSVPContainer} />*/}
                    {/*<Route exact path="/gettinghere*" component={GettingHereContainer} />*/}
                    {/*<Route exact path="/wheretostay*" component={WhereToStayContainer} />*/}
                    {/*<Route exact path="/weddinginfo*" component={WeddingInfoContainer} />*/}
                    <Route exact path="/"  render={(routeProps) => (
                        <IndexContainer {...routeProps} global={this.props.global} />)} />>
                    <Route exact path="/rsvp*"  render={(routeProps) => (
                        <RSVPContainer {...routeProps} global={this.props.global} />)} />>
                    <Route exact path="/gettinghere*"  render={(routeProps) => (
                        <GettingHereContainer {...routeProps} global={this.props.global} />)} />>
                    <Route exact path="/wheretostay*"  render={(routeProps) => (
                        <WhereToStayContainer {...routeProps} global={this.props.global} />)} />>
                    <Route exact path="/weddinginfo*"  render={(routeProps) => (
                        <WeddingInfoContainer {...routeProps} global={this.props.global} />)} />>
  )}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         global: state.global,
//     }
// }

const mapStateToProps = state => {
    return {
        global: window.GLOBALS
    }
}

// const mapStateToProps = state => {
//     return {}
// }

const mapDispatchToProps = dispatch => {
    return {}
}

let RootContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(RootContainerComponent)

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RootContainer />
        </PersistGate>
    </Provider>,

    document.getElementById("react"),
)
