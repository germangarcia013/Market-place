import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import "./styles.css"


export default function InputsPerfil({ infoUser }) {

    const { nome, nomeLoja, email } = infoUser[0]

    return (
        <div className='container-perfil'>

            <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Seu nome</InputLabel>
                <Input
                    value={nome}
                    readOnly
                />
            </FormControl>

            <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Nome da loja</InputLabel>
                <Input
                    value={nomeLoja}
                    readOnly
                />
            </FormControl>

            <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">E-mail</InputLabel>
                <Input
                    value={email}
                    readOnly
                />
            </FormControl>

        </div>
    )
}