import React from 'react'
import { Box, Container, Form } from '@/styles/components/form'

import Animal from './animal'
import Person from './person'

import Image from './image'
import Pdf from './pdf'

import { Scope } from '@unform/core'
import makePdf from '@/services/pdf'

const Formulario = () => {
    async function handleSubmit (data: any) {
        makePdf(data)

        console.log(data)
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Box>
                    <Scope path='animal'>
                        <Animal />
                    </Scope>
                </Box>
                <Box>
                    <Scope path='person'>
                        <Person />
                    </Scope>
                </Box>
                <Box>
                    <Image />

                    <Pdf />
                </Box>
            </Form>
        </Container>
    )
}

export default Formulario