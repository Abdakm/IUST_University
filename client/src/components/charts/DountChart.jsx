import { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';

function DonutChart() {
  const chartRef = useRef(null);
  const [series, setSeries] = useState([3500, 2300, 200, 500]); // Initial series values
  const [checked, setChecked] = useState([false, false, false, false]); // Track checkbox state

  useEffect(() => {
    const getChartOptions = () => ({
      series,
      colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
      chart: {
        height: 320,
        width: "100%",
        type: "donut",
      },
      stroke: {
        colors: ["transparent"],
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontFamily: "Inter, sans-serif",
                offsetY: 20,
              },
              total: {
                showAlways: true,
                show: true,
                label: "Total Vote",
                fontFamily: "Inter, sans-serif",
                formatter: (w) => w.globals.seriesTotals.reduce((a, b) => a + b, 0),
              },
              value: {
                show: true,
                fontFamily: "Inter, sans-serif",
                offsetY: -20,
                formatter: (value) => value,
              },
            },
            size: "80%",
          },
        },
      },
      grid: {
        padding: { top: -2 },
      },
      labels: ["Excellent", "Very good", "Good", "Bad"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
      tooltip: {
        y: {
          formatter: (val) => val,
        },
      },
    });

    const chart = new ApexCharts(chartRef.current, getChartOptions());
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [series]);

  const handleCheckboxChange = (index) => {
    setChecked((prevChecked) => {
      const newChecked = [...prevChecked];
      newChecked[index] = !newChecked[index]; // Toggle checkbox state

      setSeries((prevSeries) => {
        const newSeries = [...prevSeries];
        if (newChecked[index]) {
          newSeries[index] += 1; // Increment when checked
        } else {
          newSeries[index] -= 1; // Decrement when unchecked
        }
        return newSeries;
      });

      return newChecked;
    });
  };

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between mb-3">
        <h5 className="text-xl font-bold text-gray-900 dark:text-white">Website Evaluation</h5>
      </div>
      <div className="flex" id="devices">
        <div className="flex items-center me-2">
          <input
            id="bad"
            type="checkbox"
            checked={checked[3]}
            disabled={checked[0] || checked[1] || checked[2]}
            onChange={() => handleCheckboxChange(3)}
            className="w-4 h-4 text-blue-600"
          />
          <label htmlFor="bad" className="ms-2 text-[#E74694] text-sm font-medium text-gray-900 dark:text-gray-300">Bad</label>
        </div>
        <div className="flex items-center me-2">
          <input
            id="good"
            type="checkbox"
            checked={checked[2]}
            disabled={checked[0] || checked[1] || checked[3]}
            onChange={() => handleCheckboxChange(2)}
            className="w-4 h-4 text-blue-600"
          />
          <label htmlFor="good" className="ms-2 text-[#FDBA8C] text-sm font-medium text-gray-900 dark:text-gray-300">Good</label>
        </div>
        <div className="flex items-center me-2">
          <input
            id="very-good"
            type="checkbox"
            checked={checked[1]}
            disabled={checked[0] || checked[2] || checked[3]}
            onChange={() => handleCheckboxChange(1)}
            className="w-4 h-4 text-blue-600"
          />
          <label htmlFor="very-good" className="ms-2 text-[#16BDCA] text-sm font-medium text-gray-900 dark:text-gray-300">Very Good</label>
        </div>
        <div className="flex items-center me-2">
          <input
            id="excellent"
            type="checkbox"
            checked={checked[0]}
            disabled={checked[1] || checked[2] || checked[3]}
            onChange={() => handleCheckboxChange(0)}
            className="w-4 h-4 text-blue-600"
          />
          <label htmlFor="excellent" className="ms-2 text-[#1C64F2] text-sm font-medium text-gray-900 dark:text-gray-300">Excellent</label>
        </div>
      </div>
      <div className="py-6" ref={chartRef} id="donut-chart"></div>
    </div>
  );
}

export default DonutChart;
