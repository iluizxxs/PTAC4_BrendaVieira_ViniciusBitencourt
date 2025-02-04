'use server'

import { cookies } from "next/headers"
import PerfilMesa from "../interface/mesa"
import { ApiURL } from "../config"


export async function FetchMesas(): Promise<PerfilMesa[] | null> {
    try {
        const cookiesStored = await cookies()
        const token = cookiesStored.get('reserva-token')
        const response = await fetch(`${ApiURL}/mesa/`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer: ${token?.value}` }
        })

        const data = await response.json()
        return data.mesas

    } catch (error) {
        console.log(error)
        return null
    }

}