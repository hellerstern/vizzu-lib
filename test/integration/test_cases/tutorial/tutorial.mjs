import { data } from '/test/integration/test_data/tutorial.js';

const testSteps = [
  chart => chart.animate(
    {
      data: data,
      descriptor: {
        channels: {
          size: { attach: ['Values 1'] },
          label: { attach: ['Values 1'] }
        },
        title: 'Amount of a countinuous series.'
      }
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {
          size: { attach: ['Timeseries'] }
        },
        title: 'Amount of a countinuous series.'
      }
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {
          size: { detach: ['Timeseries'] },
          x: { attach: ['Timeseries'] },
          y: { attach: ['Values 1'], range: '0,1.1,%' },
          label: { attach: ['Values 1'] }
        },
        title: 'A simple column chart.'
      }
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {
          y: { attach: ['Categ. Parent'] },
          color: { attach: ['Categ. Parent'] },
        },
        title: 'A cross-metric added to the y-axis and the color channel.',
        legend: "color"
      }
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {},
        title: 'The geometric elements used can be changed to area...',
        geometry: 'area'
      }
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {
          y: { detach: ['Categ. Parent'] }
        },
        title: '...or line...',
        geometry: 'line'
      }
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {
          y: { attach: ['Categ. Parent'] }
        },
        title: '...or back to rectangle.',
        geometry: 'rectangle'
      }
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {
          y: { detach: ['Values 1'] },
          x: { attach: ['Values 1'], range: '0,1.1,%' }
        },
        legend: null,
        title: 'Values can be grouped by the other axis too.',
      },
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {
          x: { detach: 'Timeseries' },
        },
        title: 'Values can be grouped by the other axis too.',
      }
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {
          x: { range: '0,1.333,%' },
        },
        title: 'Using polar coordinates instead of cartesian is also an option.',
        coordSystem: 'polar'
      }
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {
          x: { attach: 'Timeseries' },
          lightness: { attach: ["Values 2"] }
        },
        title: 'Values can be added to the lightness channel.',
        legend: "lightness"
      },
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {
          y: { detach: ['Categ. Parent'] },
          x: { detach: ['Values 1', 'Timeseries'] },
          size: { attach: ['Values 3', 'Timeseries'] }
        },
        title: 'Charts can also exist without any data on the axes.',
        legend: 'color',
        coordSystem: 'cartesian'
      }
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {
          size: { attach: ["Categ. Child"] }
        },
        title: 'More categorical data series can be on the same channel.',
      },
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {
          size: { detach: ['Values 3', 'Timeseries', 'Categ. Child'] },
          y: { attach: ['Categ. Parent', 'Categ. Child', 'Values 1'], range: '0,1.1,%' },
          x: { attach: ['Timeseries'] },
          lightness: { detach: ['Values 2'] }
        },
        title: 'Getting back to the stacked bar chart in one step.'
      }
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {
          y: { detach: ['Categ. Child'] },
        },
        title: 'Getting back to the stacked bar chart in one step.'
      }
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {
          y: { detach: ['Categ. Parent'] },
          x: { attach: ['Categ. Parent'] }
        },
        title: 'Data can be grouped...',
      }
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {
          x: { detach: ['Categ. Parent'] },
          y: { attach: ['Categ. Parent'] }
        },
        title: '...or stacked, by putting a category from one axis to the other.',
      }
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        title: 'Comparing ratios is just another option out of many more...',
        align: 'stretch'
      },
    }
  )
];

export default testSteps;