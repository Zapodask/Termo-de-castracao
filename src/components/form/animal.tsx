import React from 'react'
import { Box, Container } from '@/styles/components/form/animal'

import Input from '../input'
import CheckboxInput from '../checkboxInput'

interface CheckboxOption {
    id: string;
    value: string;
    label: string;
  }

const Animal = () => {
    const specieOptions: CheckboxOption[] = [
        { id: 'dog', value: 'Canina', label: 'Canina'},
        { id: 'cat', value: 'Felina', label: 'Felina'}
    ]

    const genderOptions: CheckboxOption[] = [
        { id: 'male', value: 'male', label: 'Macho' },
        { id: 'female', value: 'female', label: 'Fêmea' }
      ]

    const sterilizedOptions: CheckboxOption[] = [
        { id: 'true', value: 'true', label: 'Sim' },
        { id: 'false', value: 'false', label: 'Não' }
    ]

    return (
        <Container>
            <h2>Animal</h2>
            <Box>
                <p>Nome:</p>
                <Input name='name' />
            </Box>
            <Box>
                <p>Espécie:</p>
                <CheckboxInput name='specie' options={specieOptions} />
            </Box>
            <Box>
                <p>Idade:</p>
                <Input name='age' />
            </Box>
            <Box>
                <p>N° microchip:</p>
                <Input name='microchip' />
            </Box>
            <Box>
                <p>Pelagem:</p>
                <Input name='coat' />
            </Box>
            <Box>
                <p>Peso:</p>
                <Input name='weight' />
            </Box>
            <Box>
                <p>Características:</p>
                <Input name='features' />
            </Box>
            <Box>
                <p>Sexo:</p>
                <CheckboxInput name='gender' options={genderOptions} />
            </Box>
            <Box>
                <p>Esterilizado:</p>
                <CheckboxInput name='sterilized' options={sterilizedOptions} />
            </Box>
        </Container>
    )
}

export default Animal