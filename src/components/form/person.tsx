import React from 'react'
import { Container, Box, Input } from '@/styles/components/form/person'

const Person = () => {
    return (
        <Container>
            <h2>Pessoa</h2>
            <Box>
                <p>Nome:</p>
                <Input name='name' />
            </Box>
            <Box>
                <p>Data de nascimento:</p>
                <Input name='birthday' maxLength={8} placeholder='Ex: 21031997' />
            </Box>
            <Box>
                <p>RG:</p>
                <Input name='rg' maxLength={10} />
            </Box>
            <Box>
                <p>CPF:</p>
                <Input name='cpf' maxLength={11} placeholder='Ex: 12345678912' />
            </Box>
            <Box>
                <p>Endereço:</p>
                <Input name='address' />
            </Box>
            <Box>
                <p>Numero:</p>
                <Input name='number' />
            </Box>
            <Box>
                <p>Bairro:</p>
                <Input name='neighborhood' />
            </Box>
            <Box>
                <p>Telefones:</p>
                <Input name='phone' />
            </Box>
        </Container>
    )
}

export default Person