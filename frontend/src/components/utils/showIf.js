import PropTypes from "prop-types"
import React from "react"

export class ShowIf extends React.Component {
    static propTypes = {
        condition: PropTypes.bool.isRequired,
    }

    render() {
        if (this.props.condition) {
            return (<div>{this.props.children}</div>)
        } else {
            return (<div style={{display: "none"}}>{this.props.children}</div>)
        }
    }
}
