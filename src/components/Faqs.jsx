import { useState } from "react";
import styled from "styled-components";
export const faqs = [
  {
    id: 0,
    title: "What is the total supply?",
    content:
      "There will be a maximum of 1000 cubes, which will be reached gradually in multiple stages.",
  },
  {
    id: 1,
    title: "What are the stages for minting?",
    content:
      "300 to be minted on the first drop. 300 more later this year. The remaining 400 will be released over the course of the following years through collabs with different artists and projects, airdrops, auctions, giveaways and special events.",
  },
  {
    id: 2,
    title: "Is there a Tungsten Cube in this collection?",
    content:
      "Yes there is! And it will be redeemable for a real Tungste Cube :D",
  },
  {
    id: 3,
    title: "What is the mint date?",
    content:
      "To be announced soon on Twitter and Discord. Be sure to follow us so you don't miss out!",
  },
  {
    id: 4,
    title: "How much will the mint cost?",
    content:
      "To be announced soon. It will be quite affordable leaving room for price discovery.",
  },
  {
    id: 5,
    title: "What wallets will we support?",
    content:
      "We recommend Phantom wallet. You can can also use Solflare or Sollet.",
  },
  {
    id: 6,
    title: "Will there be resale royalties?",
    content:
      "5% royalties will be applied to all Cube resales. We will be using these funds for future development and promotion.",
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
    color: #224c4c;
    letter-spacing: 0.1em;
  }

  .sidebar-nav-menu-item-head {
    cursor: pointer;
    padding: 10px;
    position: relative;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 3px solid #224c4c7a;
    background-color: rgba(210, 245, 255, 0.3);
    box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }

  .sidebar-nav-menu-item-body {
    overflow: hidden;
    height: 0;
    opacity: 0;
    transition: 0.5s;
    font-family: "Modern Sans";
    font-size: 20px;
    letter-spacing: 0.06em;
    line-height: 1.4em;
  }

  .sidebar-nav-menu-item.item-active .sidebar-nav-menu-item-body {
    height: auto;
    opacity: 1;
    padding: 1rem;
    background: #b4ddef;
    color: #224c4c;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom: 3px solid #224c4c7a;
    border-right: 3px solid #224c4c7a;
    border-left: 3px solid #224c4c7a;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
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
    <Section id="faqs">
      <h2>FAQ</h2>
      {faqs.map((faq, index) => (
        <FaqItem className="sidebar-nav" key={`faq-${index}`}>
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
