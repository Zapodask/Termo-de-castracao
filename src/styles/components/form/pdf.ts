import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid black;
    min-width: 20%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;

    button {
        width: 100%;
        background: #00b738;
        border: 1px solid black;
        border-radius: 5px;
    }
`