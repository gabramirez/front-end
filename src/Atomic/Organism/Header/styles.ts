import styled from "styled-components";

export const Body = styled.div`
  font-size: 1.6rem;
  background-color: #4da951;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;

  min-height: 100vh;
`;
export const Logo = styled.div``;

export const Inner = styled.div`
  height: 100%;
  background-color: #fbfaff;
  border-top-left-radius: 32px;
  padding: 4.8rem 3.2rem;
`;

export const Main = styled.main`
  height: 100%;
  background-color: #fbfaff;
  border-top-left-radius: 32px;
  padding-top: 0.8rem;
  max-height: 100vh;
  overflow-y: auto;
`;
export const Nav = styled.nav`
  padding: 3.2rem 2.7rem 0 3.5rem;
`;

export const Ul = styled.ul`
  margin-top: 6rem;
  list-style: none;
  display: grid;
  gap: 3.6rem;
  min-width: 11.5rem;
`;
export const Li = styled.li`
  color: #cab3ff;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  font-weight: 500;
`;
export const A = styled.a`
  color: white;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  font-weight: 500;
  font-family: sans-serif;
  &:hover {
    color: white;
    font-weight: 600;
  }
`;
export const SectionTitle = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const H1TitleAvatar = styled.h1`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 3.2rem;
  color: #303937;
  font-family: sans-serif;
`;

export const SectionFilter = styled.section`
  margin-bottom: 3.2rem;
  padding: 0 2.4rem;
  display: flex;
  gap: 1.2rem;
  margin-top: 1rem;
`;
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  background: #ffffff;
  border: 0.07rem solid #e3e3e3;
  box-shadow: 0rem 0.4rem 1.6rem rgba(22, 22, 22, 0.1);
  border-radius: 0.8rem;
  padding: 0 2.4rem;

  flex: 1;
`;
export const ButtonFilter = styled.button`
  padding: 1.2rem 3.2rem;
  border: 0;
  background-color: #4da951;
  border-radius: 0.5rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  font-family: sans-serif;
`;
export const SpanButton = styled.span`
  text-shadow: 0rem 0.4rem 1.6rem rgba(22, 22, 22, 0.1);
  font-size: 1.4rem;
  font-family: sans-serif;
`;
export const SectionKanban = styled.section`
  display: flex;
  gap: 4.8rem;
  padding-top: 3.2rem;
`;
export const Card = styled.div`
  padding: 2.4rem;
  background: #ffffff;
  box-shadow: 0rem 0.4rem 1.6rem #eae2fd;
  border-radius: 0.8rem;

  line-height: 130%;
`;
export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
export const H2Card = styled.h2`
  font-size: 2rem;
  color: #403937;
  padding: 2.4rem 0;
  font-family: sans-serif;
`;
export const H3Card = styled.h3`
  font-size: 1.4rem;
  color: #403937;
  font-family: sans-serif;
`;
export const PCard = styled.p`
  font-weight: 500;
  font-size: 1.4rem;
  font-family: sans-serif;

  color: #756966;

  margin-top: 1rem;
`;
export const TagsCrad = styled.div`
  margin-top: 1rem;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  color: white;
  font-weight: 500;
`;
export const TagsSpan = styled.p`
  font-size: 1.1rem;
  line-height: 130%;
  background: #4da951;
  border-radius: 0.8rem;
  padding: 0.4rem 0.8rem;
  font-family: sans-serif;
`;
