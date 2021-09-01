import React from 'react'
import { Navigation } from 'common/index'
import styled from 'styled-components'

const UserList = () => {
    return(<>
    <h1>Title</h1>
    <Table>
        <Tr>
            <td rowspan="2" style={{width: "15%",border: "1px solid black"}}><Navigation/></td>
            <td colSpan="2" style={{border: '1px solid black'}}>
                <p>이름:<input type="text" title="search"/></p>
                <p>생년월일:<input type="text" title="search"/></p>
                <p>휴대폰번호:<input type="text" title="search"/></p>
                <p><input type="submit" value="search"/></p>
            </td>
        </Tr>
        <Tr>
            <Chartth>회원 기본정보</Chartth>
            <Chartth>회원 상세정보</Chartth>
        </Tr>
    </Table>
    </>)
}

export default UserList

const Table = styled.table`
    width: 98%;
    height:781px;
`

const Tr = styled.tr`
    height:50%;
`

const Chartth = styled.th`
    border: 1px solid black;
`
