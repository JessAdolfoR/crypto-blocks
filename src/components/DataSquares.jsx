import styled from "styled-components";

const data = [
  {
    name: "To ever exist",
    value: "1,000",
  },
  {
    name: "To be minted initially",
    value: "300",
  },
  {
    name: "Mint date",
    value: "TBA",
  },
  {
    name: "Mint price",
    value: "TBA",
  },
];

const Section = styled.section`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const DataSquare = styled.div`
  padding: 24px;
  display: flex;
  flex-basis: 50%;
  max-width: 50%;
  flex-direction: column;
  align-items: center;
  border: 4px solid #224c4c7a;
  background-color: rgba(210, 245, 255, 0.3);
  border-radius: 5px;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:last-child {
    margin-right: 0;
  }

  h3 {
    font-size: 28px;
    font-weigth: 600;
    margin-bottom: 6px;
  }

  h4 {
    font-size: 16px;
    color: #2c5e5e;
    font-family: "Modern Sans";
    text-transform: uppercase;
  }

  @media (min-width: 520px) {
    h3 {
      font-size: 28px;
    }

    h4 {
      font-size: 20px;
    }
  }

  @media (min-width: 992px) {
    flex-basis: 23%;
    max-width: 23%;
  }
`;

const DataSquares = () => {
  return (
    <Section>
      {data.map((d, index) => (
        <DataSquare key={index}>
          <h3>{d.value}</h3>
          <h4>{d.name}</h4>
        </DataSquare>
      ))}
    </Section>
  );
};

export default DataSquares;
