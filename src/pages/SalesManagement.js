import React from 'react'
import { Navigation } from 'components'
import styled from 'styled-components'
import {Chart1, Chart2, Chart3, Chart4} from 'components/index'
import {ChartData, ChartData2, ChartData3, ChartData4} from 'components/index'

const SalesManagement = () => {
    return(<>
    <h1>Title</h1>
    <ChartTable>
        <Charttr>
            <td rowspan="2" style={{width:'20%', padding: '2%'}}><Navigation/></td>
            <Charttd>
                <Chartdiv><Chart4 data= {ChartData4}/></Chartdiv>
                </Charttd>
            <Charttd>
                <Chartdiv><Chart3 data= {ChartData3}/></Chartdiv>
                
            </Charttd>
        </Charttr>
        <Charttr>
            <Charttd>
                <Chartdiv><Chart2 data= {ChartData2}/></Chartdiv>
                </Charttd>
            <Charttd>
                <Chartdiv><Chart1 data= {ChartData}/></Chartdiv>
                </Charttd>
        </Charttr>
    </ChartTable>
    </>)
}

export default SalesManagement

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
    border: 1px solid black;
`

const Chartdiv = styled.div`
    display:block;
    width:500px;
    height:350px;
`