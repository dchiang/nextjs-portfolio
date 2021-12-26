import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const LanguagesRadar = (props) => {
  let dataset = {
    labels: [],
    values: [],
    pointColor: [],
  };
  let backgroundColor = "hsla(217, 71%, 53%, 0.2)";
  let borderColor = "hsl(217, 71%, 53%)";
  let pointHoverBorderColor = "hsl(217, 71%, 53%)";

  if (props.darkTheme) {
    backgroundColor = "hsla(0, 0%, 14%, 0.2)";
    borderColor = "hsl(0, 0%, 14%)";
    pointHoverBorderColor = "hsl(0, 0%, 14%)";
  }

  for (const index in props.data) {
    dataset.labels = dataset.labels.concat(props.data[index].name);
    dataset.values = dataset.values.concat(props.data[index].value);
    dataset.pointColor = dataset.pointColor.concat(props.data[index].color);
  }

  const data = {
    labels: dataset.labels,
    datasets: [
      {
        label: "% of use in public repositories",
        data: dataset.values,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        pointBackgroundColor: dataset.pointColor,
        pointBorderColor: "#000",
        pointHoverBackgroundColor: dataset.pointColor,
        pointHoverBorderColor: pointHoverBorderColor,
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Radar data={data} />
    </div>
  );
};

export default LanguagesRadar;
