import { useState } from "react";
import styled from "styled-components";

export const faqs = [
  {
    id: 1,
    title: "Lorem Impsum",
    content: "Lorem Ipsum",
  },
  {
    id: 2,
    title: "Lorem Impsum",
    content: "Lorem Ipsum",
  },
  {
    id: 3,
    title: "Lorem Impsum",
    content: "Lorem Ipsum",
  },
  {
    id: 4,
    title: "Lorem Impsum",
    content: "Lorem Ipsum",
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

const FaqItem = styled.div`
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

const Faqs = () => {
  const [activeCollapse, setActiveCollapse] = useState("");

  const handleExpandCollaps = (name) => {
    if (activeCollapse === name) {
      setActiveCollapse("");
    } else {
      setActiveCollapse(name);
    }
  };

  return (
    <Section>
      <h2>FAQ</h2>
      {faqs.map((faq) => (
        <FaqItem className="sidebar-nav">
          <div className="sidebar-nav-menu">
            <div
              className={`sidebar-nav-menu-item ${
                activeCollapse === faq.id ? "item-active" : ""
              }`}
              onClick={() => handleExpandCollaps(faq.id)}
            >
              <div className="sidebar-nav-menu-item-head">
                <h4 className="question">{faq.title}</h4>
              </div>
              <div className="sidebar-nav-menu-item-body">{faq.content}</div>
            </div>
          </div>
        </FaqItem>
      ))}
    </Section>
  );
};

export default Faqs;
