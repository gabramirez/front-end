import styled from "styled-components";

 
export const Container = styled.div`
display: grid;
grid-template-columns: max-content 1fr;

min-height: 100vh;
`
export const H1TitleAvatar = styled.h1`
display: flex;
align-items: center;
gap: 1.2rem;
font-size: 3.2rem;
color: #303937;
font-family: sans-serif;

`

export const SectionTitle = styled.section`
display: flex;
align-items: center;
justify-content: space-between;
`

export const Inner = styled.div`
height: 100%;
background-color: #FBFAFF;
border-top-left-radius: 32px;
padding: 4.8rem 3.2rem;
`
export const Main = styled.main`
height: 100%;
background-color: #FBFAFF;
border-top-left-radius: 32px;
padding-top: 0.8rem;
`