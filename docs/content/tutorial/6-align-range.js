export const tutorial = doc()
.h2('Align & range')
.p(`
Vizzu offers different options to align your chart elements and to set the range 
of values shown on the axes. Alignment can be used to create charts like a 
stream chart where the elements are vertically centered . A good example for 
using range is when you fix the y-axis so that it would not adapt to the data 
being shown.
`)
.code('Alignment & axis ranges', chart => 
	chart.animate({ 
		config: {
			channels: {
				y: { set: ['Popularity','Types']},
				x: { set: ['Genres'] },
				color:{set:['Types']},
				label:{attach: ['Popularity']}
			}
		}
	})
)
.h3('6.1') 
.p(`
Centered alignment. The effect of this parameter depends on the orientation of 
the chart. For example, on a column chart, elements will be vertically centered, 
whereas on a bar chart, horizontally.
`)
.code('Align: center', chart =>
	chart.animate({
		config: {
			align:'center'
		}
	})
)
.h3('6.2') 
.p(`
Stretched alignment. This way the elements will proportionally fill the entire 
plot area, effectively showing proportions in stacked charts. This is why the 
scale will also switch from values to percentages when used. 
`)
.code('Align: stretch = % view', chart =>
	chart.animate({
		config: {
			align:'stretch'
		}
	})
)
.h3('6.3') 
.p(`
Getting back to the default alignment
`)
.code('Align: none - default', chart =>
	chart.animate({
		config: {
			align:'none'
		}
	})
)
.h3('6.4') 
.p(`
You can set the range of an axis by setting the minimum and maximum values of 
it. Both parameters are optional so that you can set only one of those, and you 
either set specific values or a relative value by adding the % sign. In this 
example, we set the range of the y-axis in a way that the max value is 150% of 
the biggest element’s value.
`)
.code('Axis range set proportionally to shown values', chart =>
	chart.animate({
		config: {
			channels: {
				y: { range: { max: '150%' } }
			}
		}
	})
)
.h3('6.5') 
.p(`
You can also set the range for an axis with a dimension on it. You can even use 
this feature to filter certain elements, just like in the following example.
`)
.code('Axis range set explicitly on an axis with discrete series', chart =>
	chart.animate({
		config: {
			channels: {
				x: { range: { min: -2, max: 3 } }
			}
		}
	})
)
