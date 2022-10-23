

import styled from "styled-components";


export const InputMessage = styled.textarea`
width:24em;
height:7em;
padding:3px;
border-radius:10px;

`
export const DivRight = styled.div`
    width:50%;
    overflow-wrap: break-word;
    
    margin:1px 14em;
`
export const DivLeft = styled.div`
    width:49%;
    overflow-wrap: break-word;
    margin:3px;
    
    
`
export const Ptime = styled.p`
font-size:10px;
margin:;
`



export const MsnMessengerDiv = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:5px;
padding:5px;


`

export const messageDiv = styled.div`
    display:flex;
    
    flex-direction:column;
   
    background: #fff;
    width:30em;
    overflow-y: scroll;
    margin:2px 7em 10px 10px;
    box-shadow: 0px 4px 4px -3px  black;
    border-radius:10px;

`

export const UserMessage = styled.div`
 

 display:flex;
 flex-direction:column;
 
 text-align:;
 justify-content: center; 
 float:right;
 justify-content:flex-end;
`
export const UserMessage1 = styled.div`


 
 
 display:flex;
 flex-direction:column;
 text-align:;
 justify-content: center; 
 justify-content:flex-start;

`

export const MessengerWindow = styled.div`
    margin-top:5em;
    display: flex;
    flex-direction:column;
    align-items:center;
    width:45em;
    height:35em;
    box-shadow: 0px 8px 6px -3px  black;
   
    
    border-radius:4px;
    
    
        /* fallback for old browsers */
        background: #ffffff;
      
        /* Chrome 10-25, Safari 5.1-6 */
        background: -webkit-linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(230, 235, 244, 0.5));
      
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background: linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(230, 235, 244, 0.5))
      
        
    


`
export const Head = styled.div`
 width:100%;
 margin-left:1px;
 padding-left:1px;
 box-shadow: 0 2px 6px -6px black;
 border-radius:8px;
`
export const HighDiv = styled.div`

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:3px;
    margin:3px;
    width:17em;
    height:10em;
    

`
export const InputDiv = styled.div`
    display:flex;
    flex-direction:row;
    padding:3px;
    margin:3px;
    margin-right:7em;
    
`
export const Button = styled.button`


 


width:10em;
border:0.2px solid black;
border-radius:5px;
margin: 5px;
box-shadow: 0px 3px 3px -3px  black;
 

`

export const Lable = styled.label`
    margin-left:3px;
    font-size:13px;
    background: -webkit-linear-gradient(#4210CB, #2575FC);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    `