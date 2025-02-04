import Link from "next/link"
import Usuario from "../interface/usuario"

type MenuProps = {
    usuario: Usuario
}

export function Menu({ usuario }: MenuProps) {
    return (
        <div>
            <div>
                <div>
                    <img src="https://github.com/xxbitencourt.png" alt="Usuario" />
                    <h2>{usuario.nome}</h2>
                    <p>{usuario.tipo}</p>
                </div>


                <div>
                    {usuario.tipo === 'adm' ?
                        (
                            <div>
                                <Link href={'/Reserva'}>
                                    Todas Reservas
                                </Link>

                                <Link href={'/Mesa'}>
                                    Mesas
                                </Link>

                                <Link href={'/Perfil'}>
                                    Perfil
                                </Link>
                            </div>
                        ) :

                        (
                            <div>
                                <Link href={'/Reserva/novo'}>
                                    Novas Reservas
                                </Link>

                                <Link href={'/Reserva'}>
                                    Minha Reservas
                                </Link>

                                <Link href={'/Perfil'}>
                                    Perfil
                                </Link>
                            </div>

                        )}
                </div>
            </div>
        </div>

    )
}