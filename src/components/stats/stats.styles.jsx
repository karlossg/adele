import styled from 'styled-components';
import { statsHeader } from '../../style_tokens/tokens';

const StyledStats = styled.div`
  max-width: 600px;
  max-height: 500px;
  margin: 10px;
  border: 'black solid 1px';
`;

const StyledHeader = styled.h2`
  font-family: ${statsHeader.typography.fontFamily};
  font-size: ${statsHeader.typography.sizeHeader};
  color: ${statsHeader.typography.colorHeader};
  font-weight: ${statsHeader.typography.weightText};
  text-align: center;
  margin: 0px auto 0 auto;
`;

export { StyledStats, StyledHeader };
