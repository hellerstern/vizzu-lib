import { data } from '/test/integration/test_data/chart_types_eu.js';

let styles =
{
    data: { columnMaxPadding: 0.22 },
    plot: { marker: { borderWidth: 0 } }
};

const testSteps = [
    chart => chart.animate(
        {
            data: data,
            descriptor:
            {
                channels:
                {
                    y: { attach: ['Threat', 'Positive nums'] },
                    x: { attach: ['Year', 'Positive nums'] },
                    color: { attach: ['Threat'] }
                },
                title: 'Stacked Coxcomb Chart',
                coordSystem: 'polar',
                legend: 'color'
            },
            style: styles
        }
    )
];

export default testSteps;