
import { Menu } from "../components/Menu"
import { fecthUsuario } from "../funcao/usuarios"
import { redirect } from "next/navigation"
import { fecthReserva } from "../funcao/reserva"
import ListReserva from "./listReserva"


export default async function Reserva() {

    const user = await fecthUsuario()

    const reservas = await fecthReserva()
    console.log(reservas)
    if (!user || !reservas) redirect('/Login')

    return (
        <div>
            <ListReserva reservas={reservas} />

            <Menu usuario={user} />
        </div>
    )
}