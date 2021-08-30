import React from 'react'
import { Navigation } from 'components'
import chart1 from './images/chart1.png'
import chart2 from './images/chart2.png'
import chart3 from './images/chart3.png'
import chart4 from './images/chart4.png'


const AdminPage = () => {
    return (<>
    <h1>Title</h1>
    <table style={{width:'90%', height:'700px', margin:'auto'}}>
        <tr style={{width:'100%', margin:'auto'}}>
            <td rowspan="2" style={{width:'20%', border: '1px solid black'}}><Navigation/></td>
            <td style={{border: '1px solid black'}}><img src={chart1} width="50%" height="50%"/></td>
            <td style={{border: '1px solid black'}}><img src={chart2} width="50%" height="50%"/></td>
        </tr>
        <tr style={{width:'100%', margin:'auto', border: '1px solid black'}}>
            <td style={{border: '1px solid black'}}><img src={chart3} width="50%" height="50%"/></td>
            <td style={{border: '1px solid black'}}><img src={chart4} width="50%" height="50%"/></td>
        </tr>
    </table>
    </>)
}

export default AdminPage

