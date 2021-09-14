import styled from "styled-components";

const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin: auto;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const Title = styled.span`
  background: rgba(0, 0, 0, 0.9);
  padding: 6px 20px;
  display: block;
  position: absolute;
  top: 20px;
  right: 0;
  box-shadow: -4px 4px 1px rgb(0 0 0 / 50%);
  letter-spacing: 0.02em;
  color: #fff;
`;

const Col = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  display: flex;
  padding-bottom: 2rem;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex: 0 0 33.3%;
    max-width: 33.3%;
  }
  @media (min-width: 992px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;

const ColMain = styled.div`
  border-radius: 4px;
  width: 245px;
  height: 160px;
  border: 4px solid #ccc;
  display: inline-block;
  padding: 14px;
  background-position: center center !important;
  position: relative;
  transition: ease 0.5s;
  background-image: url(https://minecraft.tools/en/css/img/index/03.jpg);
  background-size: 245px;
  background-repeat: no-repeat;
`;

const Grid = () => {
  return (
    <Container>
      <h1>Showcase</h1>
      <Row>
        <Col>
          <ColMain>
            <Title>Title cube</Title>
          </ColMain>
        </Col>
        <Col>
          <ColMain>
            <Title>Title cube</Title>
          </ColMain>
        </Col>
        <Col>
          <ColMain>
            <Title>Title cube</Title>
          </ColMain>
        </Col>
        <Col>
          <ColMain>
            <Title>Title cube</Title>
          </ColMain>
        </Col>
      </Row>
    </Container>
  );
};

export default Grid;
