import React, {useEffect, useState} from "react";
import Logout from './assets/logout.png';
import Logo from './assets/logo.png';
import classnames from 'classnames';

// export default class Header extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             prevScrollpos: window.pageYOffset,
//             visible: true
//         };
//     }
//
//     componentDidMount() {
//         window.addEventListener("scroll", this.handleScroll);
//     }
//
//     componentWillUnmount() {
//         window.removeEventListener("scroll", this.handleScroll);
//     }

const Header = () => {
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [])

    useEffect(() => {
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    const handleScroll = () => {
        const prevScrollpos = prevScrollPos;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        setPrevScrollPos(currentScrollPos);
        setVisible(visible);
    };
    return (
        <div className={classnames('menu-wrapper', {'menu-hidden': !visible})}>
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
export default Header;