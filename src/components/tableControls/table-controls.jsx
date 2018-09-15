import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTableControlsWrapper,
  StyledMoveLabel,
  StyledSearchWrapper,
  StyledTableControls,
} from './table-controls.styles';

import Input from '../input/input';
import ArrowButtonGroup from '../arrowButtonGroup/arrow-button-group';
import StatsLink from '../statsLink/stats-link';

const generateStatsLinkLabel = props => (!props.showStats ? 'Show usage stats >>' : 'Show table >>');

const TableControls = props => (
  <StyledTableControlsWrapper>
    <StatsLink action={props.toggleShowStats} label={generateStatsLinkLabel(props)} />
    {!props.showStats &&
      <StyledTableControls>
        <StyledMoveLabel>Filter categories:</StyledMoveLabel>
        <StyledSearchWrapper>
          <Input
            name="search"
            type="search"
            color="light"
            placeholder="Type to filter..."
            autoComplete="off"
            action={e => props.filterSearch(e)}
            controlled={false}
            tab={1}
          />
        </StyledSearchWrapper>
        <StyledMoveLabel>See More:</StyledMoveLabel>
        <ArrowButtonGroup action={props.moveTable} scrollerInactive={props.scrollerInactive} />
      </StyledTableControls>}
  </StyledTableControlsWrapper>
);

TableControls.propTypes = {
  moveTable: PropTypes.func.isRequired,
  filterSearch: PropTypes.func.isRequired,
  toggleShowStats: PropTypes.func.isRequired,
  showStats: PropTypes.bool.isRequired,
  scrollerInactive: PropTypes.oneOf(['left', 'right', '']).isRequired,
};

export { TableControls as default };
