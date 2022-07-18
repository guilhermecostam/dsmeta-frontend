import logo from '../../assets/img/logo.svg'
import './style.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta logo" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="http://linkedin.com.br/in/guilhermecostam"> Guilherme Costa</a>
                </p>
            </div>
        </header>
    )
}
  
export default Header
  