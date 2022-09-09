
import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
  return (

    <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>Lista de Vendas</h1>
            <p>
              Projeto Teste
              <a href="https://www.instagram.com/devsuperior.ig">devSuperior</a>
            </p>
        </div>
    </header>
   
  )

}

export default Header
