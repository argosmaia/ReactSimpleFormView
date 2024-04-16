import React, { useEffect, useState } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import NodeService from './services/NodeService';
import './Collum.css'

const Dissertacoes = () => {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        const nodeService = new NodeService();
        nodeService.getNodesForTreeTable().then(data => setNodes(data));
    }, []);

    return (
        <div>
            <h3>Dados</h3>
            <TreeTable value={nodes}>
            <Column field="data.name" header="Name" expander editor={null} className="tree-table-column" />
                <Column field="data.size" header="Size" />
                <Column field="data.type" header="Type" />
            </TreeTable>
        </div>
    );
};

export default Dissertacoes;
