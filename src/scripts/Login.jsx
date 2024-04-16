import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import './Estilos.css';
import { Button } from 'primereact/button';

function Login() {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const vazia = (str) => (!str?.length);

  const lidaComMatricula = (evento) => {
    evento.preventDefault();
    console.log('Matrícula:', matricula);
    if (vazia(matricula)) {
      alert('Preencha o campo de matrícula!');
    }
  };

  const senhaForte = (senha) => {
    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regexSenha.test(senha);
  };

  const lidaComSenha = (evento) => {
    evento.preventDefault();
    console.log('Senha:', senha);
    if (senha.length < 8 || !senhaForte(senha)) {
      alert('A senha deve ter pelo menos 8 caracteres, com letras maiúsculas, minúsculas, números e caracteres especiais!');
    }
    if (vazia(senha)) {
      alert('Preencha o campo de senha!');
    }
  };

  const lidaComLogin = (evento) => {
    evento.preventDefault();
    lidaComMatricula(evento);
    lidaComSenha(evento);
    if (!vazia(matricula) && senha.length >= 8) {
      alert("Matricula ou senha inválidos!");
    } else {
      alert('Preencha os campos corretamente!');
    }
  };

  const enviaRegistro = () => {
    navigate('/registrar');
  };

  const NavegarParaHome = () => {
    navigate('/editar');
  };

  return (
    <>
      <form onSubmit={lidaComLogin} className="formulario">
        <div className="campo">
          <label htmlFor="matricula">Matrícula:</label>
          <InputText
            type="text"
            id="matricula"
            value={matricula}
            onChange={(evento) => setMatricula(evento.target.value)}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="senha">Senha:</label>
          <Password
            type="text"
            id="senha"
            value={senha}
            onChange={(evento) => setSenha(evento.target.value)}
            required
          />
        </div>
        <div className="acoes">
          <Button type="submit" label="Entrar" onClick={NavegarParaHome}/>
          <p></p>
          <Button type="button" label="Registrar sua Conta" onClick={enviaRegistro}/>
        </div>
      </form>
    </>
  );
}

export default Login;
