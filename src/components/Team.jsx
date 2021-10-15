import styled from "styled-components";
import { BsTwitter } from "react-icons/bs";
// Images
import aangnom from "../images/team/aangnom.png";
import beet from "../images/team/beet.png";
import missHaru from "../images/team/miss-haru.png";
import gunterine from "../images/team/gunterine.png";

const TEAM = [
  {
    name: "Aangnom",
    role: "Founder",
    social: "https://twitter.com/aangnom",
    avatar: aangnom,
  },
  {
    name: "Capt. Beet",
    role: "Co Founder",
    social: "https://twitter.com/",
    avatar: beet,
  },
  {
    name: "Miss Haru",
    role: "Artist",
    social: "/#",
    avatar: missHaru,
  },
  {
    name: "Gunterine",
    role: "Artist",
    social: "#",
    avatar: gunterine,
  },
];

const Section = styled.section`
  padding: 100px 0 60px;

  h2 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 64px;
  }

  @media (min-width: 992px) {
    h2 {
      font-size: 64px;
    }
  }
`;

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.a`
  display: block;
  flex-basis: 240px;
  max-width: 240px;
  padding: 12px;
  margin: 0 24px 36px;
  position: relative;
  background-color: rgba(210, 245, 255, 0.3);
  border-radius: 5px;

  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.05);

  img {
    width: 100%;
    height: auto;
  }

  .info {
    padding: 24px 16px;

    h3 {
      font-size: 26px;
      margin-bottom: 12px;
    }

    span {
      display: flex;
      font-family: "Modern Sans";
      font-size: 24px;

      svg {
        margin-left: 0.5rem;
      }
    }
  }
`;

const Team = () => {
  return (
    <Section id="team">
      <h2>Team</h2>
      <Container>
        {TEAM.map((member) => (
          <Card
            key={member.name}
            href={member.social}
            target="_blank"
            rel="noreferrer"
          >
            <img src={member.avatar} alt="team avatar" />
            <div to={member.social} className="info">
              <h3>{member.role}</h3>
              <span>
                {member.name}
                <BsTwitter />
              </span>
            </div>
          </Card>
        ))}
      </Container>
    </Section>
  );
};

export default Team;
