import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { titleAnim } from "../animate";

const SpanAnim = ({ title }) => {
  const data = title.split("");
  return (
    <>
      {data.map((ele, index) => {
        return (
          <SpanAnimStyle key={index} variants={titleAnim}>
            {ele}
          </SpanAnimStyle>
        );
      })}
    </>
  );
};

export default SpanAnim;

const SpanAnimStyle = styled(motion.span)`
  color: #a700c2;
  font-size: 0.8rem;
  font-weight: bold;

  @media (min-width: 769px) {
    font-size: 0.7rem;
  }
`;
