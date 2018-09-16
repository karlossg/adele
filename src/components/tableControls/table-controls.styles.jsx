import styled from 'styled-components';
import { tableControls } from '../../style_tokens/tokens';

const StyledTableControlsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  width: 1400px;
`;

const StyledTableControls = styled.div`
  display: inherit;
`;

const StyledMoveLabel = styled.span`
  display: block;
  padding-top: 5px;

  &:first-of-type {
    width: 110px;
  }
  &:last-of-type {
    width: 70px;
  }

  font-family: ${tableControls.fontFamily};
  font-size: ${tableControls.size};
  color: ${tableControls.color};
  font-weight: ${tableControls.weight};
`;

const StyledSearchWrapper = styled.div`
  width: 200px;
`;

export { StyledTableControlsWrapper, StyledMoveLabel, StyledSearchWrapper, StyledTableControls };
