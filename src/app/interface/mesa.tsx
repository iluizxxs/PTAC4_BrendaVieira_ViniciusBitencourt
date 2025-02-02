import { useEffect, useState } from 'react';
import { Reservas } from './reserva'; // Corrigir importação

export interface Mesa {
  id: number;
  codigo: string;
  lugares: number;
}

export default function Home() {
  const [mesas, setMesas] = useState<Mesa[]>([]);
  const [reservas, setReservas] = useState<Reservas[]>([]); // Corrigir tipo

  useEffect(() => {
    async function fetchData() {
      const mesasResponse = await fetch('http://localhost:3333/mesas');
      const mesasData = await mesasResponse.json();
      setMesas(mesasData); // Ajustado para caso a resposta seja um array direto

      const reservasResponse = await fetch('http://localhost:3333/reservas');
      const reservasData = await reservasResponse.json();
      setReservas(reservasData); // Ajustado para caso a resposta seja um array direto
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Mesas Disponíveis</h1>
      <ul>
        {mesas.map((mesa) => (
          <li key={mesa.id}>
            {mesa.codigo} - {mesa.lugares} lugares
          </li>
        ))}
      </ul>

      <h1>Reservas</h1>
      <ul>
        {reservas.map((reserva) => (
          <li key={reserva.id}>
            Reserva para {reserva.usuario_id} na mesa {reserva.mesa_id} às {reserva.data}
          </li>
        ))}
      </ul>
    </div>
  );
}
