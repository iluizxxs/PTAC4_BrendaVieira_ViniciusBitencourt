type Input = {
    valor : string;
    funcao: () => void
}

const Input: React.FC<Input> = ({valor, funcao}) => {
    return(
        <input value={valor} onChange={funcao}/>
    )
}

export default Input;