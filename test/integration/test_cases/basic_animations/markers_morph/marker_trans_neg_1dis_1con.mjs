import { data } from '/test/integration/test_data/chart_types_eu.js';

const testSteps = [
  chart => chart.animate(
    {
      data: data,
      config: {
        channels: {
          x: { attach: ['Year'] },
          y: { attach: ['Value 5 (+/-)'], range: '0,1.1,%' },
          label: { attach: ['Value 5 (+/-)'] },
          size: { attach: ['Value 2 (+)'] }
        },
        title: 'Histogram with (-) Nums'
      }
    }
  ),
  chart => chart.animate(
    {
      config: {
        title: 'Circle plot with (-) Nums',
        geometry: 'circle'
      }
    }
  ),
  chart => chart.animate(
    {
      config: {
        title: 'Histogram with (-) Nums',
        geometry: 'rectangle'
      }
    }
  ),
  chart => chart.animate(
    {
      config: {
        title: 'Area with (-) Nums',
        geometry: 'area'
      }
    }
  ),
  chart => chart.animate(
    {
      config: {
        title: 'Histogram with (-) Nums',
        geometry: 'rectangle'
      }
    }
  ),
  chart => chart.animate(
    {
      config: {
        title: 'Line with (-) Nums',
        geometry: 'line'
      }
    }
  ),
  chart => chart.animate(
    {
      config: {
        title: 'Circle with (-) Nums',
        geometry: 'circle'
      }
    }
  ),
  chart => chart.animate(
    {
      config: {
        title: 'Area with (-) Nums',
        geometry: 'area'
      }
    }
  ),
  chart => chart.animate(
    {
      config: {
        title: 'Circle with (-) Nums',
        geometry: 'circle'
      }
    }
  ),
  chart => chart.animate(
    {
      config: {
        title: 'Line with (-) Nums',
        geometry: 'line'
      }
    }
  ),
  chart => chart.animate(
    {
      config: {
        title: 'Area with (-) Nums',
        geometry: 'area'
      }
    }
  ),
  chart => chart.animate(
    {
      config: {
        title: 'Circle with (-) Nums',
        geometry: 'circle'
      }
    }
  ),
  chart => chart.animate(
    {
      config: {
        title: 'Area with (-) Nums',
        geometry: 'area'
      }
    }
  ),
  chart => chart.animate(
    {
      config: {
        title: 'Line with (-) Nums',
        geometry: 'line'
      }
    }
  ),
  chart => chart.animate(
    {
      config: {
        title: 'Circle with (-) Nums',
        geometry: 'circle'
      }
    }
  ),
  chart => chart.animate(
    {
      config: {
        title: 'Line with (-) Nums',
        geometry: 'line'
      }
    }
  ),
  chart => chart.animate(
    {
      config: {
        title: 'Area with (-) Nums',
        geometry: 'area'
      }
    }
  )
];

export default testSteps;