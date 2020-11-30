import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  position: absolute;
  height: 50%;
  width: 40px;
  left: -2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContainerAnim = styled(Container)`
  top: -10px;
`;

const ContainerAnimConverse = styled(Container)`
  bottom: 0;
`;

export { ContainerAnim, ContainerAnimConverse };
