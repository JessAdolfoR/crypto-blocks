import styled from "styled-components";
// Images
import block01 from "../images/block01.png";
import block02 from "../images/block02.png";
import block03 from "../images/block03.png";
import block04 from "../images/block04.png";

const TEAM = [
  {
    name: "Aang",
    role: "Founder",
    social: "https://twitter.com/aang_nft",
    avatar: block02,
  },
  {
    name: "Yisus",
    role: "Dev",
    social: "https://twitter.com/",
    avatar: block01,
  },
  {
    name: "Artist",
    role: "Artist",
    social: "/",
    avatar: block03,
  },
  {
    name: "Artist",
    role: "Artist",
    social: "https://twitter.com/",
    avatar: block04,
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
  background-color: #fff;
  border-radius: 5px;
  img {
    width: 100%;
    height: auto;
  }

  .info {
    padding: 24px 0;
    display: flex;
    align-items: center;

    span {
      margin-left: 20px;
      font-size: 32px;
    }
  }
`;

const Team = () => {
  return (
    <Section>
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
              <span>{member.name}</span>
            </div>
          </Card>
        ))}
      </Container>
    </Section>
  );
};

export default Team;
