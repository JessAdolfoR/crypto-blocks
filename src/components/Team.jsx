import styled from "styled-components";
import { BsTwitter } from "react-icons/bs";

const TEAM = [
  {
    name: "Aangnom",
    role: "Founder",
    social: "https://twitter.com/aangnom",
    avatar: "https://i.ibb.co/P138zYG/aangnom.png",
  },
  {
    name: "Capt. Beet",
    role: "Co Founder",
    social: "https://twitter.com/captbeet",
    avatar: "https://i.ibb.co/b2HvfvK/beet.png",
  },
  {
    name: "Miss Haru",
    role: "Artist",
    social: "https://twitter.com/MissHaru28",
    avatar: "https://i.ibb.co/GPgRPrP/gunterine.png",
  },
  {
    name: "Gunterine",
    role: "Artist",
    social: "",
    avatar: "https://i.ibb.co/XDQc5MF/miss-haru.png",
  },
];

const Section = styled.section`
  padding: 80px 0 50px;

  h2 {
    text-align: center;
    font-size: 48px;
    margin-bottom: 64px;
  }

  @media (min-width: 480px) {
    h2 {
      font-size: 64px;
    }
  }

  @media (min-width: 992px) {
    padding: 100px 0 60px;
  }
`;

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardLink = styled.a`
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

const Card = styled.div`
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
      <h2>The Team</h2>
      <Container>
        {TEAM.map((member) =>
          member.social ? (
            <CardLink
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
            </CardLink>
          ) : (
            <Card key={member.name}>
              <img src={member.avatar} alt="team avatar" />
              <div to={member.social} className="info">
                <h3>{member.role}</h3>
                <span>{member.name}</span>
              </div>
            </Card>
          )
        )}
      </Container>
    </Section>
  );
};

export default Team;
