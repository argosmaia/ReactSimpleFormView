import React from 'react';
import { Menubar } from 'primereact/menubar';
import 'primereact/resources/themes/lara-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';

export default function Menu() {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-pencil',
            command: () => { window.location.href = '/login'; }
        },
        {
            label: 'Registro',
            icon: 'pi pi-star',
            command: () => { window.location.href = '/registrar'; }
        },
        {
            label: 'Cursos',
            icon: 'pi pi-book',
            items: [
                {
                    label: 'Mestrado',
                    icon: 'pi pi-book',
                    items: [
                        {
                            label: 'Engenharia de Computação',
                            icon: 'pi pi-desktop'
                        },
                        {
                            label: 'Engenharia Elétrica',
                            icon: 'pi pi-desktop'
                        },
                        {
                            label: 'Engenharia de Controle e Automação',
                            icon: 'pi pi-desktop'
                        },
                        {
                            label: 'Engenharia de Telecomunicações',
                            icon: 'pi pi-desktop'
                        }
                    ]
                },
                {
                    label: 'Doutorado',
                    icon: 'pi pi-book',
                    items: [
                        {
                            label: 'Engenharia de Computação',
                            icon: 'pi pi-desktop'
                        },
                        {
                            label: 'Engenharia Elétrica',
                            icon: 'pi pi-desktop'
                        },
                        {
                            label: 'Engenharia de Controle e Automação',
                            icon: 'pi pi-desktop'
                        },
                        {
                            label: 'Engenharia de Telecomunicações',
                            icon: 'pi pi-desktop'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Projetos de Dissertação',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Mestrado',
                    icon: 'pi pi-bolt',
                    items: [
                        {
                            label: 'Em andamento',
                            icon: 'pi pi-spinner'
                        },
                        {
                            label: 'Concluídos',
                            icon: 'pi pi-check'
                        },
                        {
                            label: 'Teses',
                            icon: 'pi pi-list'
                        },
                        {
                            label: 'Dissertações',
                            icon: 'pi pi-list',
                            command: () => { window.location.href = '/dissertacoes'; }
                        },
                        {
                            label: 'Qualificações',
                            icon: 'pi pi-list'
                        },
                        {
                            label: 'Apresentações',
                            icon: 'pi pi-list'
                        }
                    ]
                },
                {
                    label: 'Doutorado',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Em andamento',
                            icon: 'pi pi-spinner'
                        },
                        {
                            label: 'Concluídos',
                            icon: 'pi pi-check'
                        },
                        {
                            label: 'Teses',
                            icon: 'pi pi-list'
                        },
                        {
                            label: 'Dissertações',
                            icon: 'pi pi-list'
                        },
                        {
                            label: 'Qualificações',
                            icon: 'pi pi-list'
                        },
                        {
                            label: 'Apresentações',
                            icon: 'pi pi-list'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Contato',
            icon: 'pi pi-envelope',
            // Navega para a página de Home
            command: () => { window.location.href = '/contact'; } 
        }
    ];

    return (
        <PrimeReactProvider>
            <div className="top-menu">
                <Menubar model={items} />
            </div>
        </PrimeReactProvider>
    );
}
