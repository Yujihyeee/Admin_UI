import React from 'react'
import { Navigation } from 'components'

const SalesManagement = () => {
    return(<>
    <h1>Title</h1>
    <table style={{width:'90%', height:'700px', margin:'auto'}}>
        <tr style={{width:'100%', margin:'auto'}}>
            <td rowspan="2" style={{width:'20%', border: '1px solid black'}}><Navigation/></td>
            <td style={{width:'auto', border: '1px solid black'}}></td>
            <td style={{width:'auto', border: '1px solid black'}}></td>
        </tr>
        <tr style={{width:'100%', margin:'auto', border: '1px solid black'}}>
            <td style={{width:'auto', border: '1px solid black'}}></td>
            <td style={{width:'auto', border: '1px solid black'}}></td>
        </tr>
    </table>
    </>)
}

export default SalesManagement