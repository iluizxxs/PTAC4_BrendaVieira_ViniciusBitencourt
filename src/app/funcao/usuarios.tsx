import { cookies } from "next/headers";
import Usuario from "../interface/usuario"
import { ApiURL } from "../config";

export async function fecthUsuario(): Promise<Usuario | null> {
    try {
        const cookiesStored = await cookies()
        const token = cookiesStored.get('reserva-token')
        console.log(token)
        const response = await fetch(`${ApiURL}/perfil`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer: ${token?.value}` }
        })
        console.log(response)
        const data = await response.json()
        return data.usuario
    } catch (error) {
        console.log(error)
        return null
    }

}

