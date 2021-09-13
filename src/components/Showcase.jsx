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

const ColHeader = styled.div`
  text-align: center;
  font-weight: 600;
  border-bottom: 1px solid #ef9a9a;
  background-color: #ffebee;
  padding: 5px 10px;
  width: auto;
  display: block;
  margin: 10 auto;
  border-radius: 5px;
  border: solid 1px #3d496c;
  background: #9cb5fe;
  text-align: center;
  font-size: 20px;
  box-shadow: 0px 2px 0px #3d496c;
  margin-top: 8px;
`;

const ColMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0 0.5rem;
  border: 1px solid #9cb5fe;
  border-radius: 4px;
  margin-top: 10px;
  background: #9cb5fe;
`;
const ColDescripcion = styled.div`
  font-size: 15px;
  text-align: center;
  margin-top: 0.5rem;
`;

const Img = styled.img`
  max-width: 150px;
`;

const Grid = () => {
  return (
    <Container>
      <Row>
        <Col>
          <ColHeader>Yeti Pixel</ColHeader>
          <ColMain>
            <Img
              src="https://sollamas.com/attributes/colour/WarPaint.png"
              alt=""
            />
            <ColDescripcion> 97.92%</ColDescripcion>
          </ColMain>
        </Col>
        <Col>
          <ColHeader>Yeti Pixel</ColHeader>
          <ColMain>
            <Img
              src="https://sollamas.com/attributes/colour/WarPaint.png"
              alt=""
            />
            <ColDescripcion> 97.92%</ColDescripcion>
          </ColMain>
        </Col>
        <Col>
          <ColHeader>Yeti Pixel</ColHeader>
          <ColMain>
            <Img
              src="https://sollamas.com/attributes/colour/WarPaint.png"
              alt=""
            />
            <ColDescripcion> 97.92%</ColDescripcion>
          </ColMain>
        </Col>
        <Col>
          <ColHeader>Yeti Pixel</ColHeader>
          <ColMain>
            <Img
              src="https://sollamas.com/attributes/colour/WarPaint.png"
              alt=""
            />
            <ColDescripcion> 97.92%</ColDescripcion>
          </ColMain>
        </Col>
      </Row>
    </Container>
  );
};

export default Grid;
