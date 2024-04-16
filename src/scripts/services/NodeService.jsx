export default function NodeService() {
    // Cria um json de dados para ser plotado no TreeTable em Dissertacoes.jsx
    const dadosParaATabela = () => {
        return [
            {
                key: '0',
                label: 'Documents',
                data: 'Documents Folder',
                icon: 'pi pi-fw pi-inbox',
                children: [
                    {
                        key: '0-0',
                        label: 'Work',
                        data: 'Work Folder',
                        icon: 'pi pi-fw pi-cog',
                        children: [
                            {
                                key: '0-0-0',
                                label: 'Expenses.doc',
                                icon: 'pi pi-fw pi-file',
                                data: 'Expenses Document'
                            },
                            {
                                key: '0-0-1',
                                label: 'Resume.doc',
                                icon: 'pi pi-fw pi-file',
                                data: 'Resume Document'
                            }
                        ]
                    },
                    {
                        key: '0-1',
                        label: 'Home',
                        data: 'Home Folder',
                        icon: 'pi pi-fw pi-home',
                        children: [
                            {
                                key: '0-1-0',
                                label: 'Invoices.txt',
                                icon: 'pi pi-fw pi-file',
                                data: 'Invoices for this month'
                            }
                        ]
                    }
                ]
            },
            {
                key: '1',
                label: 'Events',
                data: 'Events Folder',
                icon: 'pi pi-fw pi-calendar',
                children: [
                    {
                        key: '1-0',
                        label: 'Meeting',
                        icon: 'pi pi-fw pi-calendar-plus',
                        data: 'Meeting'
                    },
                    {
                        key: '1-1',
                        label: 'Product Launch',
                        icon: 'pi pi-fw pi-calendar-plus',
                        data: 'Product Launch'
                    },
                    {
                        key: '1-2',
                        label: 'Report Review',
                        icon: 'pi pi-fw pi-calendar-plus',
                        data: 'Report Review'
                    }
                ]
            },
            {
                key: '2',
                label: 'Movies',
                data: 'Movies Folder',
                icon: 'pi pi-fw pi-video',
                children: [
                    {
                        key: '2-0',
                        label: 'Al Pacino',
                        data: 'Pacino Movies',
                        icon: 'pi pi-fw pi-star',
                        children: [
                            {
                                key: '2-0-0',
                                label: 'Scarface',
                                icon: 'pi pi-fw pi-video',
                                data: 'Scarface Movie'
                            },
                            {
                                key: '2-0-1',
                                label: 'Serpico',
                                icon: 'pi pi-fw pi-video',
                                data: 'Serpico Movie'
                            }
                        ]
                    },
                    {
                        key: '2-1',
                        label: 'Robert De Niro',
                        data: 'De Niro Movies',
                        icon: 'pi pi-fw pi-star',
                        children: [
                            {
                                key: '2-1-0',
                                label: 'Goodfellas',
                                icon: 'pi pi-fw pi-video',
                                data: 'Goodfellas Movie'
                            },
                            {
                                key: '2-1-1',
                                label: 'Untouchables',
                                icon: 'pi pi-fw pi-video',
                                data: 'Untouchables Movie'
                            }
                        ]
                    }
                ]
            }
        ];
    };

    const pegasOsDadosParaATreeTable = () => {
        return [
            {
                key: '0',
                data: { 
                    name: 'Documents',
                    size: '75kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '0-0',
                        data: { 
                            name: 'Work',
                            size: '55kb',
                            type: 'Folder'
                        },
                        children: [
                            {
                                key: '0-0-0',
                                data: { 
                                    name: 'Expenses.doc',
                                    size: '30kb',
                                    type: 'Document'
                                }
                            },
                            {
                                key: '0-0-1',
                                data: { 
                                    name: 'Resume.doc',
                                    size: '25kb',
                                    type: 'Resume'
                                }
                            }
                        ]
                    },
                    {
                        key: '0-1',
                        data: { 
                            name: 'Home',
                            size: '20kb',
                            type: 'Folder'
                        },
                        children: [
                            {
                                key: '0-1-0',
                                data: { 
                                    name: 'Invoices.txt',
                                    size: '20kb',
                                    type: 'Text'
                                }
                            }
                        ]
                    }
                ]
            }
        ];
    };

    const enviaParaOTreeTable = () => {
        return pegasOsDadosParaATreeTable();
    };

    const pegaosNodes = () => {
        return dadosParaATabela();
    };

    return {
        getNodes: () => {
            return Promise.resolve(dadosParaATabela());
        },
        getNodesForTreeTable: () => {
            return Promise.resolve(enviaParaOTreeTable());
        }
    };
};

