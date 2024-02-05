import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import "./styles.css"


export default function InputsAddProduto({ handleChangeForm, formAddProducts }) {

    return (
        <div className='container-inputs-add'>

            <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Nome do produto</InputLabel>
                <Input
                    id="component-simple"
                    name='nomeProduto'
                    value={formAddProducts.nomeProduto}
                    onChange={(event) => handleChangeForm(event)}
                />
            </FormControl>

            <div className='inputs-preço-estoque'>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount">Preço</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        name='preco'
                        value={formAddProducts.preco}
                        onChange={(event) => handleChangeForm(event)}
                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount">Estoque</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        name='estoque'
                        value={formAddProducts.estoque}
                        onChange={(event) => handleChangeForm(event)}
                        startAdornment={<InputAdornment position="start">Un</InputAdornment>}
                    />
                </FormControl>
            </div>
            <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Descrição do produto</InputLabel>
                <Input
                    id="component-simple"
                    name='descricao'
                    value={formAddProducts.descricao}
                    onChange={(event) => handleChangeForm(event)}
                />
            </FormControl>

            <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">URL imagem</InputLabel>
                <Input
                    id="component-simple"
                    name='imagem'
                    value={formAddProducts.imagem}
                    onChange={(event) => handleChangeForm(event)}
                />
            </FormControl>

        </div>
    )
}