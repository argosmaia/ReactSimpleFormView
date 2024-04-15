import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Registrar() {
    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [matricula, setMatricula] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [formCompleto, setFormCompleto] = useState(false);
    const [universidade, setUniversidade] = useState('');
    const navigate = useNavigate();

    const lidaComEnvio = (evento) => {
        evento.preventDefault();
        if (nome && email && matricula && universidade && dataNascimento) {
            console.log('Dados do formulário:', { nome, email, matricula, universidade, dataNascimento });
            setFormCompleto(true);
        } else {
            alert('Preencha todos os campos!');
        }
    };

    const lidaComInput = (evento, setState) => {
        setState(evento.target.value);
        // Verifica se todos os campos estão preenchidos
        if (nome && email && matricula && universidade && dataNascimento) {
            setFormCompleto(true);
        } else {
            setFormCompleto(false);
        }
    };

    // Função para validar a seleção de universidade
    const lidaComSelect = (evento) => {
        const universidade = evento.target.value;
        if (universidade) {
            setUniversidade(universidade);
        } else {
            alert('Selecione uma universidade!');
        }
    };

    const lidaEmailComRegex = (evento) => {
        const email = evento.target.value;
        // Expressão regular para validar o email, com @ obrigatório e domínio com no mínimo 2 caracteres + .(algum dominio)
        const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
        if (regexEmail.test(email)) {
            setEmail(email);
        } else {
            alert('Email inválido!');
        }
    };

    const irParaLogin = () => {
        // Redirecionar para página de registro (substitua com sua lógica)
        navigate('/login');
      };

    return (
        <>
            <form onSubmit={lidaComEnvio} className="formulario">
            <div className="campo">
                <label htmlFor="nome">Nome:</label>
                <input
                type="text"
                id="nome"
                value={nome}
                onChange={(evento) => lidaComInput(evento, setNome)}
                required
                />
            </div>
            <div className="campo">
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(evento) => { lidaEmailComRegex(evento); lidaComInput(evento, setEmail); }}
                required
                />
            </div>
            <div className="campo">
                <label htmlFor="matricula">Matrícula:</label>
                <input
                type="text"
                id="matricula"
                value={matricula}
                onChange={(evento) => lidaComInput(evento, setMatricula)}
                required
                />
            </div>

            <div className="campo">
                <label htmlFor="universidades">Universidades:</label>
                <select id="universidade"
                value={universidade}
                onChange={(evento) => lidaComInput(evento, setUniversidade)}
                required
                >
                <option value="">Selecione a universidade</option>
                <option value="UERJ">UERJ</option>
                <option value="UFRJ">UFRJ</option>
                <option value="UFF">UFF</option>
                </select>
            </div>

            <div className="campo">
                <label htmlFor="dataNascimento">Data de Nascimento:</label>
                <input
                type="date"
                id="dataNascimento"
                value={dataNascimento}
                onChange={(evento) => {lidaComInput(evento, setDataNascimento), lidaComSelect(evento)}}
                required
                />
            </div>
                <button type="button" disabled={!formCompleto} onClick={irParaLogin}>Entrar</button>
            </form>
        </>
    );
}

export default Registrar;