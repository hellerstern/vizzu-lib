import { data } from '/test/integration/test_data/chart_precision.js';

const testSteps = [
  chart => chart.animate(
    {
      data: data,
      descriptor: {
        channels: {
          x: {attach: ['Childs', 'Values child'], range: '0,1.1,%'},
          y: {attach: ['Parents']},
          label: { attach: ['Values child']},
          lightness: { attach: ['Childs']}
        },
        title: 'Chart Precision Area - X',
        geometry: 'area'
      }
    }
  )
];

export default testSteps;