import React from 'react'
import { Navigation } from 'common/index'
import styled from 'styled-components'

const HomePageSettings = () => {
    return(<>
    <h1>Title</h1>
    <ChartTable>
        <Charttr>
            <td style={{width:'15%', border: "1px solid black"}}><Navigation/></td>
            <Charttd></Charttd>       
        </Charttr>
    </ChartTable>
    </>)
}

export default HomePageSettings


const ChartTable = styled.table`
    width: 98%;
    height:700px;
`

const Charttr = styled.tr`
    width:100%;
    height:100%;
    margin:auto;
    border:1px solid black;
`

const Charttd = styled.td`
    padding:2%;
    width:80%;
    height:700px;
    border: 1px solid black;
`