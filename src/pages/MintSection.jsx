import styled from "styled-components";
import Mint from "../components/Mint";
const Section = styled.section`
  min-height: 50vh;
  background-color: #fff;
  padding: 120px 50px;
  margin-top: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 24px;
    line-height: 36px;
  }
`;

const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 992px) {
    flex-direction: column;
  }
`;

const MintSection = ({
  candyMachineId,
  config,
  connection,
  treasury,
  startDate,
  txTimeout,
}) => {
  return (
    <Section>
      <Container>
        <h1>Blocks</h1>
        <p>Just Fucking blocks lol, but fabulous blocks</p>
        <Mint
          candyMachineId={candyMachineId}
          config={config}
          connection={connection}
          startDate={startDate}
          treasury={treasury}
          txTimeout={txTimeout}
        />
        <div className="cadre">
          <div className="show">
            <img src="https://i.ibb.co/t4HnRHH/Pist-n-pegajoso.gif" alt="" />
          </div>
          <div className="border"></div>
        </div>
      </Container>
    </Section>
  );
};

export default MintSection;
