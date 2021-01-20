import React from 'react'
import { Container } from '@/styles/components/form/image'

import ImageInput from '@/components/imageInput'

const Image = () => {
    return (
        <Container>
            <ImageInput name='image' />
        </Container>
    )
}

export default Image