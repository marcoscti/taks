import styled from "styled-components";
type ContainerProps ={
    done: boolean;
}
export const container = styled.div(({done}: ContainerProps)=>(
    `
    display:flex;
    background:#20212c;
    padding:10px;
    border-radius:10px;
    margin:10px;
    label{
        color:gray;
        text-decoration: ${done ? 'line-through':'initial'};
    }
    input{
        width:20px;
        height:20px;
    }
`
));