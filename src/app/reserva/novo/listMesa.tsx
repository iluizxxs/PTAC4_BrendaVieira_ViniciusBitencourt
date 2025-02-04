'use client'
import { FormEvent, useActionState, useState } from "react"
import { FecthReserva } from "../../funcao/reserva"
import { FecthNovaReserva } from "../../funcao/reserva"
import { useRouter } from "next/navigation"
import PerfilMesa from "../../interface/mesa"

type ListMesasReservaProp = {
    mesas: PerfilMesa[]
}

export function ListMesas({ mesas }: ListMesasReservaProp) {
    const [data, setData] = useState('')
    const [reservas, setReservas] = useState<PerfilMesa[] | null>(null)
    const [selectMesa, setSelectMesa] = useState<PerfilMesa | null>(null)
    const [response, setResponse] = useState({ error: false, mensagem: '' })
    const router = useRouter()

    async function handleFecthData() {
        const response = await FecthReserva(data)
        console.log(response)
        setReservas(response)

    }

    async function handleFormSubmit(e: FormEvent) {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        const mesaId = parseInt(formData.get('mesaId') as string)
        const n_pessoas = parseInt(formData.get('n_pessoas') as string)

        const response = await FecthNovaReserva(mesaId, n_pessoas, data)
        setResponse(response)
        console.log(response)
        if (!response.error) {
            router.push('/Reserva/novo')
        }
    }

    return (
        <div>
            <div>

                <div>
                    <h2>Fazer Reserva</h2>
                    <div>
                        <input type="date"
                            value={data}
                            onChange={e => setData(e.target.value)} />
                        <button type="button" onClick={handleFecthData}>Buscar</button>
                    </div>

                    <div>
                        {reservas?.map(mesa => {
                            return (
                                <button onClick={() => setSelectMesa(mesa)} key={mesa.id}>{mesa.codigo}</button>
                            )
                        })
                        }
                    </div>
                </div>

                {selectMesa && (
                    <div>
                        <div>
                            <h3>Confirmar Reserva:</h3>
                            <form onSubmit={handleFormSubmit}>
                                <label>
                                    Data:
                                    <input type="date"
                                        defaultValue={data}
                                        readOnly
                                        max={selectMesa.id}
                                        name="data" />
                                </label>

                                <input type="number"
                                    hidden
                                    readOnly
                                    defaultValue={selectMesa.id}
                                    name="mesaId"
                                />

                                <label>
                                    Número de Pessoas:
                                    <input type="number"
                                        max={selectMesa.n_lugares}
                                        min={1}
                                        name="n_pessoas"/>
                                </label>
                                {response.error && <p>{response.mensagem}</p>}
                                <div>
                                    <button type="button" onClick={() => setSelectMesa(null)}>Cancelar</button>
                                    <button type="submit">Confirmar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}