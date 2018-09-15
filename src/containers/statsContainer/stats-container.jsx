import React from 'react';
import flatten from 'ramda/src/flatten';
import shortid from 'shortid';
import data from '../../data/data.JSON';
import Stats from '../../components/stats/stats';

import StyledStatsContainer from './stats-container.styles';

const generateData = (repoData, element) =>
  flatten(repoData
    .map(item => item[element].data))
    .reduce((all, el) => {
      const allElements = all;
      if (el in allElements) {
        allElements[el] += 1;
      } else {
        allElements[el] = 1;
      }
      return allElements;
    }, {});

const labels = Object.keys(data[0])
  .filter(label => label !== 'company' && label !== 'system');

const statsDataArr = labels
  .map((label) => {
    return {
      label,
      data: Object.entries(generateData(data, label))
        .map(entry => ({ name: entry[0], value: entry[1] })),
    };
  });


const StatsContainer = () => {
  return (
    <StyledStatsContainer>
      {statsDataArr.map(el => (
        <Stats key={shortid.generate()} data={el.data} label={el.label} />
      ))}
    </StyledStatsContainer>
  );
};

export { StatsContainer as default };
