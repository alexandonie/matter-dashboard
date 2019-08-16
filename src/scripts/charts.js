'use strict';

(function () {
  var Charts = (function () {
    var config = {
      firstInit: true
    };

    var colors = {
      primary: 'rgb(23, 150, 243)',
      success: 'rgb(76, 175, 80)',
      warning: 'rgb(255, 193, 7)',
      danger: 'rgb(255, 23, 68)',
      grayLight: 'rgb(238, 238, 238)',
      grayDark: 'rgb(158, 158, 158)'
    };

    var setGlobalOptions = function () {
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
        color: colors.grayLight,
        zeroLineColor: 'transparent'
      };

      // setting the padding and label color for the yAxes (these don't have a tickMarkLength)
      Chart.defaults.line.scales.yAxes[0].ticks =
      Chart.defaults.bar.scales.yAxes[0].ticks = {
        padding: 16,
        fontColor: colors.grayDark
      };
      // setting the padding and label color for the xAxes (these don't have a tickMarkLength)
      Chart.defaults.line.scales.xAxes[0].ticks =
      Chart.defaults.bar.scales.xAxes[0].ticks = {
        padding: 8,
        fontColor: colors.grayDark
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
      Chart.defaults.polarArea.scale.gridLines.color = colors.grayLight;
      Chart.defaults.polarArea.scale.angleLines.color = colors.grayLight;

      // setting the color of the radar's grid and angle lines to be the same as the x and y axes of the line and bar charts
      Chart.defaults.radar.scale.gridLines =
      Chart.defaults.radar.scale.angleLines = {
        color: colors.grayLight
      };

      // setting the legend label's color
      Chart.defaults.global.legend.labels.fontColor = colors.grayDark;
    };

    var newChart = function (canvas, options) {
      if (!window.Chart) {
        throw new Error('Dependency missing: chartjs');
      }

      if (!canvas) {
        throw new Error('The chart\'s canvas couldn\'t be found in the DOM.');
      }

      if (config.firstInit) {
        setGlobalOptions();
        config.firstInit = false;
      }

      return new Chart(canvas.getContext('2d'), options);
    };

    return {
      newChart: newChart,
      colors: colors
    };
  })();

  // init bar chart
  var barChartCanvas = document.getElementById('barChart');
  if (barChartCanvas) {
    Charts.newChart(barChartCanvas, {
      type: 'bar',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'],
        datasets: [
          {
            label: 'Revenue (K)',
            data: [7, 10, 28, 14, 35, 40, 24, 16],
            backgroundColor: Charts.colors.primary
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
  var pieChartCanvas = document.getElementById('pieChart');
  if (pieChartCanvas) {
    Charts.newChart(pieChartCanvas, {
      type: 'pie',
      data: {
        labels: ['Blue', 'Red', 'Yellow'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [38, 24, 38],
            backgroundColor: [Charts.colors.primary, Charts.colors.danger, Charts.colors.warning]
          }
        ]
      },
      options: {
        maintainAspectRatio: false
      }
    });
  }

  // init line chart
  var lineChartCanvas = document.getElementById('lineChart');
  if (lineChartCanvas) {
    Charts.newChart(lineChartCanvas, {
      type: 'line',
      data: {
        labels: ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'],
        datasets: [
          {
            label: 'Dataset 1',
            backgroundColor: 'transparent',
            borderColor: Charts.colors.success,
            borderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: Charts.colors.success,
            lineTension: 0,
            data: [30, 55, 40, 60, 75, 65, 55, 57, 67]
          },
          {
            label: 'Dataset 2',
            backgroundColor: 'transparent',
            borderColor: Charts.colors.danger,
            borderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: Charts.colors.danger,
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
})();
