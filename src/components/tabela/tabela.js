import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import editar from '../../assets/editar-button.svg';
import excluir from '../../assets/excluir-button.svg';
import useContatos from '../../hooks/useContatos';
import useRequests from '../../hooks/useRequests';

export default function Tabela() {
    const { listaContatos, setContatoSelecionado, setModalExcluir, setModalAddEdit } = useContatos()
    const { getContatos } = useRequests()

    React.useEffect(() => {
        getContatos()
    }, [])

    function handleEditar(id) {
        const contatoClicado = listaContatos.find(contato => contato.id === id)
        if (!contatoClicado) console.log('Contato não achado')
        setContatoSelecionado(contatoClicado)
        setModalAddEdit(true)
    }

    function handleExcluir(id) {
        const contatoClicado = listaContatos.find(contato => contato.id === id)
        if (!contatoClicado) console.log('Contato não achado')
        setContatoSelecionado(contatoClicado)
        setModalExcluir(true)
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} size="medium" aria-label="a dense table">
                <TableHead sx={{ backgroundColor: "#F4F0F0" }}>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell align="left">Telefone</TableCell>
                        <TableCell align="left" sx={{ width: "50px" }}></TableCell>
                    </TableRow>
                    <TableRow></TableRow>
                </TableHead>
                <TableBody>
                    {listaContatos !== 'invalid token' && listaContatos.map((contato, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {contato.nome}
                            </TableCell>
                            <TableCell>{contato.email}</TableCell>
                            <TableCell>{contato.telefone}</TableCell>
                            <TableCell>
                                <div style={{ display: "flex" }}>
                                    <img style={{ marginRight: '10px', cursor: 'pointer' }} src={editar} alt="editar" onClick={() => handleEditar(contato.id)} />
                                    <img style={{ cursor: 'pointer' }} src={excluir} alt="excluir" onClick={() => handleExcluir(contato.id)} />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}