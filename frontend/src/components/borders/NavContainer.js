import React, {Component} from "react";
import "../../sass/nav.scss"

export default class NavContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {showNavBar: false};
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        this.setState({
            showNavBar: window.pageYOffset > 56
        });
    }

    render() {
        let show = this.state.showNavBar;

        return (
            <nav
                className={`navbar navbar-index sticky-top nav-hidden ${show ? 'nav-show-on-scroll' : 'nav-put-away'}`}>
                <a className="nav-link" target="_blank" href="https://blog.marcsloan.com/">Blog</a>
                <a className="nav-link" target="_blank" href="mailto:hi@marcsloan.com">Contact</a>
            </nav>
        )
    }
}
