import {
  A,
  Body,
  ButtonFilter,
  Card,
  Cards,
  Container,
  H1TitleAvatar,
  H2Card,
  H3Card,
  Inner,
  InputWrapper,
  Li,
  Logo,
  Main,
  Nav,
  PCard,
  SectionFilter,
  SectionKanban,
  SectionTitle,
  SpanButton,
  TagsCrad,
  TagsSpan,
  Ul,
} from "./styles";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCalendarDays,
  faFile,
  faGear,
  faGrip,
  faLongArrowAltDown,
  faPeopleGroup,
  faSquare,
} from "@fortawesome/free-soLid-svg-icons";

export default function Header() {
  return (
    <Body>
      <Container>
        <Nav>
          <Logo>
            <Image
              src="../atomic/assets/Vector.svg"
              width={10}
              height={10}
              alt=""
            />
          </Logo>
          <Ul>
            <Li>
              <A href="#" style={{ textDecoration: "none" }}>
                <FontAwesomeIcon icon={faGrip}></FontAwesomeIcon>
                Board
              </A>
            </Li>
            <Li>
              <A href="#" style={{ textDecoration: "none" }}>
                <FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon>
                Teams
              </A>
            </Li>
            <Li>
              <A href="#" style={{ textDecoration: "none" }}>
                <FontAwesomeIcon icon={faFile}></FontAwesomeIcon>
                Reports
              </A>
            </Li>
            <Li>
              <A href="#" style={{ textDecoration: "none" }}>
                <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>
                Schedule
              </A>
            </Li>
            <Li>
              <A
                href="#"
                style={{
                  textDecoration: "none",
                }}
              >
                <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
                Settings
              </A>
            </Li>
          </Ul>
        </Nav>
        <Main>
          <Inner>
            <SectionTitle>
              <H1TitleAvatar>Green.o</H1TitleAvatar>
              <img
                src="https://github.com/gabramirez.png"
                alt="avatar"
                style={{
                  width: "6.4rem",
                  height: "6.4rem",
                  borderRadius: "50%",
                }}
              />
            </SectionTitle>
            <SectionFilter>
              <ButtonFilter>
                <SpanButton>Filter</SpanButton>
              </ButtonFilter>
              <InputWrapper>
                <input
                  type="text"
                  placeholder="Busque por cards de tarefas"
                  style={{
                    border: "0",
                    width: "100%",
                    outline: "0",
                    fontSize: "1.5rem",
                  }}
                />
              </InputWrapper>
            </SectionFilter>
            <SectionKanban className="kanban">
              <div className="todo">
                <H2Card>To-do</H2Card>
                <Cards className="cards">
                  <Card className="card">
                    <H3Card>#boraCodar um Kanban 🧑🏾‍💻</H3Card>
                    <PCard>
                      Novo desafio do #boraCodar da Rocketseat, onde é proposto
                      construir um quadro de Kanban.
                    </PCard>
                    <TagsCrad className="tags">
                      <TagsSpan>rocketseat</TagsSpan>
                      <TagsSpan>desafio</TagsSpan>
                    </TagsCrad>
                  </Card>
                  <Card className="card">
                    <H3Card>Manter a ofensiva 🔥</H3Card>
                    <PCard>
                      Manter minha atividade na plataforma da Rocketseat para
                      não perder a ofensiva
                    </PCard>
                    <TagsCrad className="tags">
                      <TagsSpan>rocketseat</TagsSpan>
                    </TagsCrad>
                  </Card>
                </Cards>
              </div>
              <div className="doing">
                <H2Card>In-Progress</H2Card>
                <Cards className="cards">
                  <Card className="card">
                    <H3Card>Conferir o novo desafio 🚀</H3Card>
                    <PCard>
                      Conferir o novo projeto do #boraCodar para fazê-lo da
                      melhor maneira possível
                    </PCard>
                    <TagsCrad className="tags">
                      <TagsSpan>rocketseat</TagsSpan>
                      <TagsSpan>desafio</TagsSpan>
                    </TagsCrad>
                  </Card>
                </Cards>
              </div>
              <div className="done">
                <H2Card>Done</H2Card>
                <Cards className="cards">
                  <Card className="card">
                    <H3Card>#boraCodar uma página de login 🧑‍💻</H3Card>
                    <PCard>
                      Novo desafio do #boraCodar da Rocketseat, onde é proposto
                      construir uma página de login.
                    </PCard>
                    <TagsCrad className="tags">
                      <TagsSpan>rocketseat</TagsSpan>
                      <TagsSpan>desafio</TagsSpan>
                    </TagsCrad>
                  </Card>
                </Cards>
              </div>
            </SectionKanban>
          </Inner>
        </Main>
      </Container>
    </Body>
  );
}
