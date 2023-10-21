import styled from "styled-components";

export const Backdrop = styled.div`
width: 100vw;
height: 100vh;
background-color: rgba(0,0,0, 0.5);
position: fixed;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
`
export const MainContent = styled.div`
width: 600px;
height: 750px;
background-color: white;
background-color: rgba(0,0,0,);
border-radius: 10px;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

.modal-img{
    width: 400px;
    height: 300px;
}

.modal-ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

li{
    font-size: 22px;

}
`
export const CloseButton = styled.button`
position: absolute;
top: 10px;
right: 10px;
`


