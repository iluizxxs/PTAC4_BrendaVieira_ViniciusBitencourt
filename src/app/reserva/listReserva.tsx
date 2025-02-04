'use client'

import { useActionState, useState } from "react"
import { Reservas } from "../interface/reserva";
import { FecthAtualizaReserva, FecthCancelarReserva } from "../funcao/reserva"




type ListMesasReservaProps = {
    reservas: Reservas[]
}
export default function ListReserva({ reservas }: ListMesasReservaProps) {
    const [reserva, setReserva] = useState<Reservas | null>(null)
    const [cancelarReserva, setCancelarReserva] = useState<Reservas | null>(null)
    const [state, action, isPading] = useActionState(FecthAtualizaReserva, { error: false, mensagem: '' })


    function openModal(reserva: Reservas) {
        state.error = false,
            state.mensagem = ''
        setReserva(reserva)
    }

    async function handleCancelReserva() {
        const response = await FecthCancelarReserva(cancelarReserva?.id as number)
        console.log(response)
    }

    return (
        <div>

            <div>

                <div>
                    <h2>Suas Reservas:</h2>
                    {!reservas || reservas.length === 0 ? (
                        <p>Você fez reservas</p>
                    ) :
                        (
                            <div>
                                {
                                    reservas.map(reserva => {
                                        return (
                                            <div key={reserva.id}>
                                                <p><strong>Mesa:</strong> {reserva.mesa?.codigo}</p>
                                                <p><strong>Data:</strong> {reserva.data}</p>
                                                <p><strong>Pessoas:</strong> {reserva.n_pessoas}</p>

                                                {reserva.status ? (
                                                    <div>
                                                        <button onClick={() => openModal(reserva)}>
                                                            Alterar
                                                        </button>
                                                        <button onClick={() => setCancelarReserva(reserva)}>
                                                            Cancelar
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <p>Reserva Cancelada</p>
                                                )}
                                            </div>
                                        )
                                    })}
                            </div>
                        )}
                </div>

                {
                    reserva && !state.mensagem && (
                        <div>
                            <div>
                                <h3>Confirmar Reserva:</h3>
                                <form action={action}>
                                    <label>
                                        Data:
                                        <input type="date"
                                            defaultValue={reserva.data}
                                            readOnly
                                            name="data" />
                                    </label>

                                    <input type="number"
                                        hidden
                                        readOnly
                                        defaultValue={reserva.id}
                                        name="reservaId" />

                                    <label>
                                        Mesa Selecionada:
                                        <input type="number"
                                            defaultValue={reserva.mesa?.codigo}
                                            name="codigo"
/>
                                    </label>

                                    <label>
                                        Número de Pessoas:
                                        <input type="number"
                                            max={reserva.mesa?.n_lugares}
                                            defaultValue={reserva.n_pessoas}
                                            min={1}
                                            name="n_pessoas"/>
                                    </label>

                                    {state.error && <p>{state.mensagem}</p>}
                                    <div>
                                        <button type="button" onClick={() => setReserva(null)}>Cancelar</button>
                                        <button type="submit">Confirmar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )
                }
                {
                    cancelarReserva && (
                        <div>
                            <div>
                                <h3>Confirmar cancelamento Reserva:</h3>
                                <p>Realmente deseja cancelar?</p>


                                <div>
                                    <button type="button" onClick={() => setReserva(null)}>Não</button>
                                    <button type="button" onClick={handleCancelReserva}>Sim, Cancelar</button>
                                </div>

                            </div>
                        </div>
                    )
                }

            </div >
        </div>
    )
}