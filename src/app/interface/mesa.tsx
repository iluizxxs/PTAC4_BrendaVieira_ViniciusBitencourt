import { Reservas } from "./reserva";


export default interface PerfilMesa {
    id?: number;
    codigo: string;
    n_lugares: number;
    reservas? : Reservas[]
}