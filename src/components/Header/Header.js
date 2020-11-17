import React, {Component} from "react";
import Logout from './assets/logout.png';
import Logo from './assets/logo.png';
import classnames from 'classnames';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const {prevScrollpos} = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

    render() {
        return (
            <div className={classnames('menu-wrapper',{'menu-hidden': !this.state.visible})}>
                <div>
                    <a href="#">
                        <img src={Logo} alt="Logo" />
                    </a>
                    <div className='links'>
                        <a href="#">Movies</a>
                        <a href="#">TV Shows</a>
                        <a href="#">More</a>
                        <a href="#">
                            <img src={Logout} alt="Logout" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
