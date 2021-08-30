import { data } from '/test/integration/test_data/chart_types_eu.js';

const testSteps = [
  chart => chart.animate(
    {
      data: data,
      descriptor: {
        channels: {
          x: { attach: ['Year'] },
          y: { attach: ['Value 2 (+)'], range: '0,1.1,%' },
          label: { attach: ['Value 2 (+)'] },
        },
        title: 'Histogram with (-) Nums',
        align: 'none'
      }
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {
          y: { attach: ['Joy factors'] },
          color: { attach: ['Joy factors'] }
        },
        title: 'Stacked',
        legend: 'color'
      }
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {
          y: { detach: ['Joy factors', 'Value 2 (+)'], attach: ['Value 5 (+/-)'], range: '0,1.1,%' },
          x: { attach: ['Joy factors'] },
          label: { detach: ['Value 2 (+)'], attach: ['Value 5 (+/-)'] },
        },
        title: 'Grouped with (-) Nums',
        split: true,
      },
      style:
      { plot:
        { marker:
          { label:
            { 
              fontSize: 8, 
              position: 'top',
              orientation: 'vertical', 
              angle: -1*3.14 
            }
          }
        }
      }
    }
  )
];

export default testSteps;