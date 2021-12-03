import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import editar from "../../assets/editar-button.svg";
import excluir from "../../assets/excluir-button.svg";
import useContatos from "../../hooks/useContatos";
import useRequests from "../../hooks/useRequests";
import addMask from "../../utils/addMask";
import StyledCell from "../tabela/table-cell";

export default function Tabela() {
  const {
    listaContatos,
    setContatoSelecionado,
    setModalExcluir,
    setModalAddEdit,
  } = useContatos();
  const { getContatos } = useRequests();

  React.useEffect(() => {
    getContatos();
    // eslint-disable-next-line
  }, []);

  function handleEditar(id) {
    const contatoClicado = listaContatos.find((contato) => contato.id === id);
    if (!contatoClicado) console.log("Contato não achado");
    setContatoSelecionado(contatoClicado);
    setModalAddEdit(true);
  }

  function handleExcluir(id) {
    const contatoClicado = listaContatos.find((contato) => contato.id === id);
    if (!contatoClicado) console.log("Contato não achado");
    setContatoSelecionado(contatoClicado);
    setModalExcluir(true);
  }

  return (
    <TableContainer component={Paper}>
      <Table size="medium" aria-label="a dense table">
        <TableHead sx={{ backgroundColor: "#F4F0F0" }}>
          <TableRow>
            <StyledCell>Nome</StyledCell>
            <StyledCell>Email</StyledCell>
            <StyledCell align="left">Telefone</StyledCell>
            <StyledCell align="left" sx={{ width: "50px" }}></StyledCell>
          </TableRow>
          <TableRow></TableRow>
        </TableHead>
        <TableBody>
          {listaContatos !== "invalid token" &&
            listaContatos.map((contato, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledCell component="th" scope="row">
                  {contato.nome}
                </StyledCell>
                <StyledCell>{contato.email}</StyledCell>
                <StyledCell>
                  {addMask(contato.telefone, "(xx)x xxxx-xxxx")}
                </StyledCell>
                <StyledCell>
                  <div style={{ display: "flex" }}>
                    <img
                      style={{ marginRight: "10px", cursor: "pointer" }}
                      src={editar}
                      alt="editar"
                      onClick={() => handleEditar(contato.id)}
                    />
                    <img
                      style={{ cursor: "pointer" }}
                      src={excluir}
                      alt="excluir"
                      onClick={() => handleExcluir(contato.id)}
                    />
                  </div>
                </StyledCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
