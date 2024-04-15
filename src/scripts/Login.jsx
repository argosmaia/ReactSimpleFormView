import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [formCompleto, setFormCompleto] = useState(false);
  const navigate = useNavigate();


  const vazia = (str) => (!str?.length);

  const lidaComMatricula = () => {
    evento.preventDefault();
    //simula a autenticação
    console.log('Matrícula:', matricula);
    if (vazia(matricula)) {
      alert('Preencha o campo de matrícula!');
    }
  };

  const lidaComSenha = () => {
    evento.preventoDefault();
    //simula a autenticação
    console.log('Senha:', senha);
    
    if (senha.length < 8) {
      alert('A senha deve ter no mínimo 8 caracteres!');
    }

    if (vazia(senha)) {
      alert('Preencha o campo de senha!');
    }
  };

  const lidaComLogin = (evento) => { // importa lidaComSenha e lidaComMatricula
    evento.preventDefault();
    lidaComMatricula();
    lidaComSenha();
    if (!vazia(matricula) && senha.length >= 8) {
      navigate('/home');
    } else {
      alert('Preencha os campos corretamente!');
    }
  };

  const enviaRegistro = () => {
    // Redirecionar para página de registro
    navigate('/registrar');
  };

  const NavegaParaHome = () => {
    // Redirecionar para página de registro
    navigate('/home');
  }

  return (
    <>
      <form onSubmit={lidaComLogin} className="formulario">
        <div className="campo">
          <label htmlFor="matricula">Matrícula:</label>
          <input
            type="text"
            id="matricula"
            value={matricula}
            onChange={(evento) => setMatricula(evento.target.value)}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="senha">Senha:</label>
          <input
            type="text"
            id="texto"
            value={senha}
            onChange={(evento) => setSenha(evento.target.value)}
            required
          />
        </div>
        <div className="acoes">
          <button type="button" disabled={!matricula || !senha} onClick={NavegaParaHome}>Entrar</button>
          <p></p>
          <button type="button" disabled={formCompleto} onClick={enviaRegistro}>
            Registrar
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;
