import styled from "styled-components";

export const StyledNavBar=styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    margin: 0 10px;
    
    .left{
        display: flex;
        align-items: center;
    }
    .right{
        display: flex;
        align-items: center;
    }

    img{
        height: 50px;
        margin-left: 10px;
    }
`