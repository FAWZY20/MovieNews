import './Header.css';
import { Nav, Button } from 'react-bootstrap';
import Logo from '../../assets/logo.png';

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
                                    <Nav.Link href="/home">Tendance cinéma</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="/home">Tendance Tv</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="/home">Tendance série</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </diV>
                    <div className='col-lg-3' >
                        <Button className='connexion' href="#">Mon Compte</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;