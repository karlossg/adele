import styled from 'styled-components';
import { statsLink } from '../../style_tokens/tokens';

const StyledStatsLink = styled.button`
  margin-right: 10px;
  position: relative;
  outline: none;
  border: none;
  background: none;
  font-family: ${statsLink.fontFamily};
  font-size: ${statsLink.size};
  color: ${statsLink.color};
  font-weight: ${statsLink.weight};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    transition: all ease-in 0.2s;
  }
  &:focus {
    color: ${statsLink.colorActive};
  }
`;

export { StyledStatsLink as default };
