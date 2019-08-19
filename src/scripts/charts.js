import Chart from 'chartjs';

class Charts {
  constructor() {
    this.firstInit = true;
    this.colors = {
      primary: 'rgb(23, 150, 243)',
      success: 'rgb(76, 175, 80)',
      warning: 'rgb(255, 193, 7)',
      danger: 'rgb(255, 23, 68)',
      grayLight: 'rgb(238, 238, 238)',
      grayDark: 'rgb(158, 158, 158)'
    };
  }

  setGlobalOptions() {
    // setting the responsive mode to true by default
    Chart.defaults.global.responsive = true;

    // setting the axes color and padding
    Chart.defaults.line.scales.xAxes[0].gridLines =
      Chart.defaults.line.scales.yAxes[0].gridLines =
      Chart.defaults.bar.scales.xAxes[0].gridLines =
      Chart.defaults.bar.scales.yAxes[0].gridLines =
      Chart.defaults.horizontalBar.scales.xAxes[0].gridLines =
      Chart.defaults.horizontalBar.scales.yAxes[0].gridLines = {
        tickMarkLength: 20,
        color: this.colors.grayLight,
        zeroLineColor: 'transparent'
      };

    // setting the padding and label color for the yAxes (these don't have a tickMarkLength)
    Chart.defaults.line.scales.yAxes[0].ticks =
      Chart.defaults.bar.scales.yAxes[0].ticks = {
        padding: 16,
        fontColor: this.colors.grayDark
      };

    // setting the padding and label color for the xAxes (these don't have a tickMarkLength)
    Chart.defaults.line.scales.xAxes[0].ticks =
      Chart.defaults.bar.scales.xAxes[0].ticks = {
        padding: 8,
        fontColor: this.colors.grayDark
      };

    // hover settings for the line charts
    Chart.defaults.line.hover.mode = 'nearest';
    Chart.defaults.line.hover.intersect = true;

    // tooltips settings for the line charts
    Chart.defaults.line.tooltips = {
      mode: 'index',
      intersect: false
    };

    // setting the color of the polar area's grid lines to be the same as the x and y axes of the line and bar charts
    Chart.defaults.polarArea.scale.gridLines.color = this.colors.grayLight;
    Chart.defaults.polarArea.scale.angleLines.color = this.colors.grayLight;

    /**
     * setting the color of the radar's grid and angle lines to be the same as the x and y axes of the line
     * and bar charts
     */
    Chart.defaults.radar.scale.gridLines =
      Chart.defaults.radar.scale.angleLines = {
        color: this.colors.grayLight
      };

    // setting the legend label's color
    Chart.defaults.global.legend.labels.fontColor = this.colors.grayDark;
  }

  createChart(canvas, options) {
    if (!canvas) {
      throw new Error('The chart\'s canvas couldn\'t be found in the DOM.');
    }

    if (this.firstInit) {
      this.setGlobalOptions();
      this.firstInit = false;
    }

    return new Chart(canvas.getContext('2d'), options);
  }

  init() {
    // init bar chart
    const barChartCanvas = document.getElementById('barChart');
    if (barChartCanvas) {
      this.createChart(barChartCanvas, {
        type: 'bar',
        data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'],
          datasets: [
            {
              label: 'Revenue (K)',
              data: [7, 10, 28, 14, 35, 40, 24, 16],
              backgroundColor: this.colors.primary
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              barPercentage: 0.7
            }]
          }
        }
      });
    }

    // init pie chart
    const pieChartCanvas = document.getElementById('pieChart');
    if (pieChartCanvas) {
      this.createChart(pieChartCanvas, {
        type: 'pie',
        data: {
          labels: ['Blue', 'Red', 'Yellow'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [38, 24, 38],
              backgroundColor: [this.colors.primary, this.colors.danger, this.colors.warning]
            }
          ]
        },
        options: {
          maintainAspectRatio: false
        }
      });
    }

    // init line chart
    const lineChartCanvas = document.getElementById('lineChart');
    if (lineChartCanvas) {
      this.createChart(lineChartCanvas, {
        type: 'line',
        data: {
          labels: [
            '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
          ],
          datasets: [
            {
              label: 'Dataset 1',
              backgroundColor: 'transparent',
              borderColor: this.colors.success,
              borderWidth: 3,
              pointRadius: 4,
              pointBackgroundColor: this.colors.success,
              lineTension: 0,
              data: [30, 55, 40, 60, 75, 65, 55, 57, 67]
            },
            {
              label: 'Dataset 2',
              backgroundColor: 'transparent',
              borderColor: this.colors.danger,
              borderWidth: 3,
              pointRadius: 4,
              pointBackgroundColor: this.colors.danger,
              lineTension: 0,
              data: [0, 20, 16, 30, 25, 35, 28, 34, 44]
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false
          }
        }
      });
    }
  }
}

export default Charts;
