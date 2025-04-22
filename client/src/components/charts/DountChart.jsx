import { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';
import { useLanguage } from '../../contexts/languageContext';

function DonutChart() {
  const chartRef = useRef(null);
  const [series, setSeries] = useState([3500, 2300, 200, 500]);
  const [checked, setChecked] = useState([false, false, false, false]);

  const { language } = useLanguage();

  const labels = language === 'EN'
    ? ["Excellent", "Very Good", "Good", "Bad"]
    : ["ممتاز", "جيد جداً", "جيد", "سيء"];

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
                label: language === 'EN' ? "Total Vote" : "إجمالي التصويت",
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
      labels,
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
  }, [series, language]);

  const handleCheckboxChange = (index) => {
    setChecked((prevChecked) => {
      const newChecked = [...prevChecked];
      newChecked[index] = !newChecked[index];

      setSeries((prevSeries) => {
        const newSeries = [...prevSeries];
        newSeries[index] += newChecked[index] ? 1 : -1;
        return newSeries;
      });

      return newChecked;
    });
  };

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between mb-3">
        <h5 className="text-xl font-bold text-gray-900 dark:text-white">
          {language === 'EN' ? 'Website Evaluation' : 'تقييم الموقع'}
        </h5>
      </div>
      <div className="flex" id="devices">
        {labels.map((label, index) => (
          <div className="flex items-center me-2" key={index}>
            <input
              id={label}
              type="checkbox"
              checked={checked[index]}
              disabled={checked.some((_, i) => i !== index && checked[i])}
              onChange={() => handleCheckboxChange(index)}
              className="w-4 h-4 text-blue-600"
            />
            <label
              htmlFor={label}
              className={`ms-2 ${
                ['text-[#1C64F2]', 'text-[#16BDCA]', 'text-[#FDBA8C]', 'text-[#E74694]'][index]
              } text-sm font-medium text-gray-900 dark:text-gray-300`}
            >
              {label}
            </label>
          </div>
        ))}
      </div>
      <div className="py-6" ref={chartRef} id="donut-chart"></div>
    </div>
  );
}

export default DonutChart;
