import { data } from '/test/integration/test_data/chart_types_eu.js';

let styles = {
  plot: {
    marker: {
      label: {
        fontSize: 8
      }
    }
  }
};

const testSteps = [
  chart => chart.animate(
    {
      data: data,
      descriptor: {
        channels: {
          color: { attach: ['Threat'] },
          size: { attach: ['Country_code', 'Positive nums'] },
          label: { attach: ['Country_code'] },
          lightness: { attach: ['Neg_small'] }
        },
        title: 'Bubble Chart',
        legend: 'color',
        geometry: 'circle'
      },
      style: styles
    }
  )
];

export default testSteps;