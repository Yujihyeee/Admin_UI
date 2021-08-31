import React from 'react'
import { Navigation } from 'components'
import styled from 'styled-components'

const UserList = () => {
    return(<>
    <h1>Title</h1>
    <ChartTable>
        <Charttr>
            <td rowspan="2" style={{width:'20%', border: '1px solid black'}}><Navigation/></td>
            <Charttd></Charttd>       
        </Charttr>
    </ChartTable>
    </>)
}

export default UserList

const ChartTable = styled.table`
    width: 98%;
    height:700px;
    margin:auto;
    border: 1px solid black;
`

const Charttr = styled.tr`
    width:100%;
    height:100%;
    margin:auto;
    border:1px solid black;
`

const Charttd = styled.td`
    padding:1%;
    width:70%;
    border: 1px solid black;
`