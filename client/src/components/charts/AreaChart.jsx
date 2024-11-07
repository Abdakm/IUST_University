import ApexCharts from 'apexcharts';
import { useEffect, useState } from 'react';

function AreaChart() {
  const [semester, setSemester] = useState('First Year');
  const [chart, setChart] = useState(null);

  const generateRandomData = (length) => 
    Array.from({ length }, () => parseFloat((Math.random() * 4).toFixed(1)));

  const dataOptions = {
    'First Year': generateRandomData(3),
    'Second year': generateRandomData(3),
    'Third year': generateRandomData(3),
    'Forth year': generateRandomData(3),
    'Fifth year': generateRandomData(3),
  };

  useEffect(() => {
    const chartElement = document.getElementById("area-chart");

    if (chartElement) {
      const options = {
        chart: {
          height: 320,
          maxWidth: "100%",
          type: "area",
          fontFamily: "Inter, sans-serif",
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 6,
        },
        grid: {
          show: false,
          strokeDashArray: 4,
          padding: {
            left: 2,
            right: 2,
            top: 0,
          },
        },
        series: [
          {
            name: "GPA",
            data: dataOptions[semester],
            color: "#1A56DB",
          },
        ],
        xaxis: {
          categories: Array.from({ length: dataOptions[semester].length }, (_, i) => `Semester ${i + 1}`),
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
          min: 0,
          max: 4, // Limit y-axis to 4 as maximum value
        },
      };

      const newChart = new ApexCharts(chartElement, options);
      newChart.render();
      setChart(newChart);

      return () => {
        if (newChart) {
          newChart.destroy();
        }
      };
    }
  }, [semester]);

  return (
    <div>
      <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
        <div className="flex justify-between">
          <div>
            <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">GPA</h5><br /><br />   
            <p className="text-base font-normal text-gray-500 dark:text-gray-400"></p>
          </div> 
        </div>
        <div id="area-chart"></div>
        <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
          <div className="flex justify-between items-center pt-5">
            {/* Dropdown Button */}
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="semesterDropdown"
              data-dropdown-placement="bottom"
              className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
              type="button">
              {semester}
              <svg className="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            {/* Dropdown Menu */}
            <div id="semesterDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                {Object.keys(dataOptions).map((sem) => (
                  <li key={sem} onClick={() => setSemester(sem)}>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      {sem}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#"
              className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
              Users Report
              <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AreaChart;
