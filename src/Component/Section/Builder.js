import React from 'react'
import styled from 'styled-components'

export const Builder = (props) => {
  return (
      <>
    <Con>
        <Con2>
    <FirstHold style={{flexDirection:props.direct}}>
        <Date>{props.title}</Date>
        <Full>{props.course}</Full>
        <Dollar>{props.amount}</Dollar>
    </FirstHold>
<But>
    <But1>{props.click}</But1>
</But>

</Con2>
</Con>

</>
  )
}


export default Builder

const Con = styled.div`
        display: flex;
        justify-content: center;
        /* height: 600px; */
        
`
const Con2 = styled.div`
        height: 200px;
        width: 900px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: solid 20px;
        border-color:navy;
        margin: 30px;
        border-radius: 3px;
`


const FirstHold = styled.div`
        width: 100%;
        height: 100px;
        align-items: center;
        /* background-color: red; */
      display: flex;
      justify-content: space-around;
      margin-top: 30px;
`

const Date = styled.div`
       height: 80px;
       width: 80px;
       background-color: black;
       color: white;
       display: flex;
       align-items: center;
       text-align: center;
       border-radius: 10px;
`

const Full = styled.h2`
    
`

const Dollar = styled.p`
        color:green;
        font-weight: bold;
`

const But = styled.div`
    display: flex;
   
    align-items: center;
`

const But1 = styled.button`
        width: 130px;
        height: 40px;
        color: white;
        background-color: green;
        display: flex;
        align-items: center;
        border: none;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
`