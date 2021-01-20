import styled from 'styled-components'
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
    background: #FFFFFF;
    height: 80vh;
    width: 80vw;
    max-height: 80vh;
    max-width: 80vw;
    border: solid black 1px;
    border-radius: 5px;
`
export const Form = styled(Unform)`
    display: flex;
    flex-wrap: wrap;
    height:100%;
`

export const Box = styled.div`
    flex: 1 1;
    flex: 0 1 1fr;
    display: grid;
`
