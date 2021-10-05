import styled from "styled-components";

const data = [
  {
    name: "To be minted",
    value: "500",
  },
  {
    name: "Launch date",
    value: "TBA",
  },
  {
    name: "Mint price",
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
  background-color: #d2f5ff;

  &:last-child {
    margin-right: 0;
  }

  h3 {
    font-size: 28px;
    font-weigth: 600;
  }

  h4 {
    font-size: 16px;
    color: #224c4c7a;
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
