import React, {Component} from "react";
import "../../sass/footer.scss"
import PropTypes from "prop-types";

export default class FooterContainer extends Component {

    static propTypes = {
        global: PropTypes.object.isRequired,
    }

    render() {

        let socialIcons = {
            'twitter': "https://twitter.com/MarcCSloan",
            'linkedin': 'https://www.linkedin.com/in/marcsloan/',
            'angellist': 'https://angel.co/marc-sloan',
            'github': 'https://github.com/marcsloan',
            'googlescholar': 'https://scholar.google.com/citations?user=17C0-A0AAAAJ&hl=en',
            'medium': 'https://medium.com/@MarcCSloan',
        }

        let staticURL = this.props.global.STATIC_URL

        return (
            <div className="row text-center justify-content-center footer-content">
                <div className="col-xs-12">
                    <div className="small-spacer"/>
                    <span>&#9400; 2020 Marc Sloan</span>
                    <div className="social-icons">
                        {Object.keys(socialIcons).map(function (icon, i) {
                            return (<a key={i} target="_blank" href={socialIcons[icon]}>
                                <img src={`${staticURL}img/footer/${icon}.png`}/>
                            </a>)
                        })}
                    </div>
                    <div className="small-spacer"/>
                </div>
            </div>
        )
    }
}
