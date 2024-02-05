import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import "./styles.css"
import CloseEye from "../../../assets/close-eye.svg"
import OpenEye from "../../../assets/open-eye.svg"
import useGlobalContext from '../../../hooks/useGlobalContext';

export default function InputsEditPerfil({ handleChangeForm, formEditPerfil }) {

    const { shadowPassword, setShowPassword, shadowConfirmPassword, setShadowConfirmPassword } = useGlobalContext();

    return (
        <div className='container-perfil'>
            <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Seu nome</InputLabel>
                <Input
                    name='nome'
                    value={formEditPerfil.nome}
                    onChange={(event) => handleChangeForm(event)}
                />
            </FormControl>

            <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Nome da loja</InputLabel>
                <Input
                    name='nomeLoja'
                    value={formEditPerfil.nomeLoja}
                    onChange={(event) => handleChangeForm(event)}
                />
            </FormControl>

            <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">E-mail</InputLabel>
                <Input
                    name='email'
                    value={formEditPerfil.email}
                    onChange={(event) => handleChangeForm(event)}
                />
            </FormControl>

            <FormControl variant="standard" className='input-register-pass'>
                <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>

                <Input
                    type={shadowPassword ? 'text' : 'password'}
                    name='senha'
                    value={formEditPerfil.senha}
                    onChange={(event) => handleChangeForm(event)}

                />
                <img src={shadowPassword ? CloseEye : OpenEye}
                    onClick={() => setShowPassword(!shadowPassword)}
                />

            </FormControl>

            <FormControl variant="standard" className='input-register-pass'>
                <InputLabel htmlFor="standard-adornment-password">Repita a nova senha</InputLabel>
                <Input
                    type={shadowConfirmPassword ? 'text' : 'password'}
                    name='confirmarSenha'
                    value={formEditPerfil.confirmarSenha}
                    onChange={(event) => handleChangeForm(event)}
                />
                <img src={shadowConfirmPassword ? CloseEye : OpenEye}
                    onClick={() => setShadowConfirmPassword(!shadowConfirmPassword)}
                />
            </FormControl>
        </div>
    )
}