import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction:center;
  align-items:center;
  justify-content:center;
  margin:2px;
  padding:2px;
`

export const ChatContainer = styled.div`
  background:#F5F1E3 ;
  
  width: 50%;
  max-height:50vh;
  
  
  padding:1em;
  margin:5px;
  border-radius: 25px;

  overflow-y: scroll;
white-space: nowrap;


::-webkit-scrollbar {
    width: 7px;
    
    
  }
  
  
  ::-webkit-scrollbar-track {
   
    border-radius: 100vw;
    margin-block: 1.2rem;
    background: #F5F1E3 ;
   
  
    
  }
  
  
  ::-webkit-scrollbar-thumb {
  
    max-height:3px;
    background:#1A1423 ;
    border-radius: 100vw;
    border: .25em ;
   
    
   
  }
  



`
