export default Reservas;

interface Reservas {
    id: number;
    usuario_id: number;
    mesa_id: number;
    data: Date;
    nPessoas: number;
    status: boolean;
}