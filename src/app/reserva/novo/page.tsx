import { fecthUsuario } from "../../funcao/usuarios"

import { FetchMesas } from "../../funcao/mesas"
import { Menu } from "@/app/components/Menu"
import { ListMesas } from "./listMesa"



export default async function NovaReserva() {
    const user = await fecthUsuario()
    const mesa = await FetchMesas()
    console.log(user)
    console.log(mesa)
    if (!user || !mesa) return
    return (
        <div>

            <ListMesas mesas={mesa} />
            <Menu usuario={user} />
        </div>
    )
}