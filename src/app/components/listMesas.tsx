export type MesasType = {
  id: number,
  codigo: string,
  n_lugares: number
}

export async function ListMesas() {


  const response = await fetch('http://localhost:3000/reserva')
  const data = await response.json()
  const dataMesas: MesasType[] = data.mesas


  return (
    <div>
      {dataMesas.map((table) => {
        return (
          <button key={table.id}>
            {table.codigo}
          </button>
        )
      })}
    </div>
  )
}