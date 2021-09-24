import { useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  margin: auto;

  h2 {
    text-align: center;
  }

  .sidebar-nav-menu-item {
    display: block;
    margin-bottom: 1rem;
  }

  .question {
    font-size: 24px;
  }

  .sidebar-nav-menu-item-head {
    cursor: pointer;
    padding: 10px;
    position: relative;
    background: #7790da;
  }

  .sidebar-nav-menu-item-body {
    overflow: hidden;
    height: 0;
    opacity: 0;
    transition: 0.5s;
  }

  .sidebar-nav-menu-item.item-active .sidebar-nav-menu-item-body {
    height: auto;
    opacity: 1;
    padding: 1rem;
  }
`;

const Faqs = ({ data }) => {
  const [activeCollapse, setActiveCollapse] = useState("");

  const handleExpandCollaps = (name) => {
    if (activeCollapse === name) {
      setActiveCollapse("");
    } else {
      setActiveCollapse(name);
    }
  };

  return (
    <Section className="sidebar-nav">
      <div className="sidebar-nav-menu">
        <div
          className={`sidebar-nav-menu-item ${
            activeCollapse === data.id ? "item-active" : ""
          }`}
          onClick={() => handleExpandCollaps(data.id)}
        >
          <div className="sidebar-nav-menu-item-head">
            <h4 className="question">{data.title}</h4>
          </div>
          <div className="sidebar-nav-menu-item-body">{data.content}</div>
        </div>
      </div>
    </Section>
  );
};
export default Faqs;
