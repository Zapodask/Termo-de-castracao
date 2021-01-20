import React from 'react'
import { Container } from '@/styles/components/form/pdf'

import Input from '../input'

const Pdf = () => {
    return (
        <Container>
            <div>
                <p>Numero da ficha:</p>
                <Input name='ficha' required/>
            </div>
            <button type='submit'>Gerar pdf</button>
        </Container>
    )
}

export default Pdf