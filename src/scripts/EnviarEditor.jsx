import React, { useState } from 'react';
import { Editor } from 'primereact/editor';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { SelectButton } from 'primereact/selectbutton';
import { Button } from 'primereact/button';

export const cursoJSON = {};

export default function EnviarEditor() {

    const [nome, setNome] = useState('');
    const [sigla, setSigla] = useState('');
    const [posgr, setPosgr] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');
    const [descricao, setDescricao] = useState('');

    const [curso, setCurso] = useState({
        nome: "",
        sigla: "",
        posgr: "",
        data_inicio: "",
        data_fim: "",
        descricao: "",
    });

    const [cursoPosgr, setCursoPosgr] = useState(null);


    const cursoPosgrOptions = [
        { label: 'Selecione o curso', value: null },
        { label: 'Mestrado', value: 'MS' },
        { label: 'Doutorado', value: 'DR' },
    ];

    const lidaComMudanca = (evento) => {
        const { nome, valor } = evento.target;
        setCurso(
            { ...curso, 
                [nome]: valor 
            }
        );
    }

    /**
     * função para checar se algum campo está vazio antes de chegar em lidaComEnvio
     * E se estiver vazio dar alert e deixar o submit bloqueado até que todos os campos estejam preenchidos 
     *  */ 
    const verificaCamposVazios = () => {
        if (curso.nome === "" || curso.sigla === "" || cursoPosgr === "" || curso.data_inicio === "" || curso.data_fim === "" || curso.descricao === "") {
            alert('Preencha todos os campos!');
            return false;
        }
        return true;
    };

    const gerarJSONCurso = () => {
        if (verificaCamposVazios()) {
            cursoJSON.nome = curso.nome;
            cursoJSON.sigla = curso.sigla;
            cursoJSON.posgr = cursoPosgr;
            cursoJSON.data_inicio = curso.data_inicio;
            cursoJSON.data_fim = curso.data_fim;
            cursoJSON.descricao = curso.descricao;
        }
    };

    const lidaComEnvio = (evento) => {
        evento.preventDefault();
        if (verificaCamposVazios()) {
            alert('Curso criado com sucesso!');
        }
    }

    return (
        <>
            <div className="formulario">
                <h2 className="titulo">Criar Novo Curso</h2>
                <form onSubmit={lidaComEnvio}>

                    <div className="campo">
                        <label>Nome:</label>
                        <InputText 
                            type="text" 
                            name="nome" 
                            value={curso.nome} 
                            onChange={lidaComMudanca} 
                        />
                    </div>
                    <div className="campo">
                        <label>Sigla:</label>
                        <InputText 
                            type="text" 
                            name="sigla" 
                            value={curso.sigla} 
                            onChange={lidaComMudanca} 
                        />
                    </div>

                    <div className="campo">
                        <label>Tipo de Pós:</label>
                        <SelectButton id="curso"
                                    value={curso.posgr}
                                    onChange={(evento) => setCursoPosgr(evento.value)}
                                    optionLabel="label"
                                    options={cursoPosgrOptions}
                                    placeholder="Selecione a universidade"
                        />
                    </div>
                    <div className="campo">
                        <label>Data de Início:</label>
                        <Calendar type="date" 
                                name="data_inicio" 
                                value={curso.data_inicio} 
                                onChange={lidaComMudanca} 
                        />
                    </div>
                    <div className="campo">
                        <label>Data de Fim:</label>
                        <Calendar type="date" 
                                name="data_fim" 
                                value={curso.data_inicio} 
                                onChange={lidaComMudanca} 
                        />
                    </div>
                    <div className="campo">
                        <label>Descrição:</label>
                        <Editor value={curso.descricao} style={{ height: '320px' }} onTextChange={(e) => setCurso(prevCurso => ({ ...prevCurso, descricao: e.htmlValue }))} />
                    </div>
                    <Button type="submit" label="Criar curso" onClick={gerarJSONCurso}/>
                </form>
            </div>
        </>
    );

}


