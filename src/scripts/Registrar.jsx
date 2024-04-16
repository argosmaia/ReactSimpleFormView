import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { SelectButton } from 'primereact/selectbutton';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import './Estilos.css';

function Registrar() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [matricula, setMatricula] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [formCompleto, setFormCompleto] = useState(false);
    const [universidade, setUniversidade] = useState('');
    const navigate = useNavigate();

    const universidadeOptions = [
        { label: 'Selecione a universidade', value: null },
        { label: 'UERJ', value: 'UERJ' },
        { label: 'UFRJ', value: 'UFRJ' },
        { label: 'UFF', value: 'UFF' }
    ];

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

    // Função para lidar com data de nascimento válida, 18 anos a partir da data de hoje (usar today())
    const lidaComDataNascimento = (evento) => {
        const dataNascimento = evento.target.value;
        const hoje = new Date();
        const data = new Date(dataNascimento);
        const idade = hoje.getFullYear() - data.getFullYear();
        if (idade >= 18) {
            setDataNascimento(dataNascimento);
        } else {
            alert('Você deve ter 18 anos ou mais para se registrar!');
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

    const lidaComEnvio = (evento) => {
        evento.preventDefault();
        if (nome && email && matricula && universidade && dataNascimento) {
            console.log('Dados do formulário:', { nome, email, matricula, universidade, dataNascimento });
            setFormCompleto(true);
        } else {
            alert('Preencha todos os campos!');
        }
    };

    return (
        <>
            <form onSubmit={lidaComEnvio} className="formulario">
            <div className="campo">
                <label htmlFor="nome">Nome:</label>
                <InputText
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(evento) => lidaComInput(evento, setNome)}
                    required
                />
            </div>
            <div className="campo">
                <label htmlFor="email">Email:</label>
                <InputText
                    type="email"
                    id="email"
                    value={email}
                    onChange={(evento) => { lidaEmailComRegex(evento); lidaComInput(evento, setEmail); }}
                    required
                />
            </div>
            <div className="campo">
                <label htmlFor="matricula">Matrícula:</label>
                <InputText
                    type="text"
                    id="matricula"
                    value={matricula}
                    onChange={(evento) => lidaComInput(evento, setMatricula)}
                    required
                />
            </div>

            <div className="campo">
                <label htmlFor="universidades">Universidades:</label>
                <SelectButton 
                    id="universidade"
                    value={universidade}
                    onChange={(e) => setUniversidade(e.value)}
                    optionLabel="label"
                    options={universidadeOptions}
                    placeholder="Selecione a universidade"
                />
            </div>

            <div className="campo">
                <label htmlFor="dataNascimento">Data de Nascimento:</label>
                <Calendar
                type="date"
                id="dataNascimento"
                value={dataNascimento}
                onChange={(evento) => {lidaComInput(evento, setDataNascimento), lidaComDataNascimento(evento)}}
                required
                />
            </div>
                <button type="button" disabled={!formCompleto} onClick={irParaLogin}>Enviar Cadastro</button>
            </form>
        </>
    );
}

export default Registrar;