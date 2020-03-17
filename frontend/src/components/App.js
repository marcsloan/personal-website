import "babel-polyfill"

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
import sessionStorage from "redux-persist/es/storage/session"
import thunk from "redux-thunk"
import AppReducer from "../reducers/index"
import PropTypes from "prop-types"
import DemoIndex from "./DemoIndex/DemoIndex";

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
                    <Route exact path="/"  render={(routeProps) => (
                        <IndexContainer {...routeProps} global={this.props.global} />)} />>
                    )}/>
                    <Route exact path="/demo/"  render={(routeProps) => (
                        <DemoIndex {...routeProps} global={this.props.global} />)} />>
                    )}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = state => {
    return {
        global: window.GLOBALS
    }
}

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
