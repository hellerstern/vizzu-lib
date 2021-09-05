import { data } from '/test/integration/test_data/chart_types_eu.js';

let filter1 = record =>
    [ 'AT', 'BE', 'DE', 'DK',  'ES', 'FI', 'FR', 'IT', 'NL', 'SE' ].includes(record.Country_code);
let filter2 = record =>
    record.Year < 12 && record.Year > 6;
data.filter = filter1;

const testSteps = [

    chart => {
        chart.on("mouseon", (param) => {
          if (param.data.marker === undefined)
            chart.animate( { config : { tooltip: null }} );
          else
            chart.animate( { config : { tooltip: param.data.marker.id }} );
        });
        return chart; 
      },

    chart => chart.animate(
        {
            data: data,
            config:
            {
                channels:
                {
                    x: { set: ['Year', 'Joy factors'] },
                    y: { set: ['Value 3 (+)', 'Country_code'], range: {min:'0%', max:'110%'} },
                    color: { set: ['Country_code'] }
                },
                title: 'Zoom in',
                geometry: 'area'
            }
        }
    ),
    chart => chart.animate(
        {    
            data:{filter: record => filter1(record) && filter2(record) },
            config:
            {
                title: 'Zoomed in',
                align: 'min'
            }
        }
    ),
    chart => chart.animate(
        {    
            data:{filter: filter1},
            config:
            {
                title: 'Zoom out',
                align: 'min'
            }
        }
    )
];

export default testSteps;