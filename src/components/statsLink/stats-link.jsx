import React from 'react';
import PropTypes from 'prop-types';

import StyledStatsLink from './stats-link.styles';

const StatsLink = props => (
  <StyledStatsLink onClick={props.action} tabIndex={props.tab}>
    {props.label}
  </StyledStatsLink>
);

StatsLink.propTypes = {
  label: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  tab: PropTypes.number,
};

StatsLink.defaultProps = {
  tab: 0,
};

export { StatsLink as default };
