import './Header.css';
import { Nav, Button } from 'react-bootstrap';
import Logo from '../../assets/logo.png';
import Coeur from '../../assets/coeur.png'

function Header() {
    return (
        <div className='container-fluid header' >
            <div className='container' >
                <div className='row menu' >
                    <diV className='col-lg-6' >
                        <div>
                            <img src={Logo} width={162} height={70} alt="logo" />
                        </div>
                        <div>
                            <Nav defaultActiveKey="/home" as="ul">
                                <Nav.Item as="li">
                                    <Nav.Link href="/">Acceuil</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="/cinema">Tendance cinéma</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="/tv">Tendance Tv</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </diV>
                    <div className='col-lg-3' >
                        <Button className='connexion' href="/favorie"><span><img src={Coeur} width={15} height={15} alt="logo" /></span> Liste Favorie</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;