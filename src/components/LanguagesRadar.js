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
  let backgroundColor = "hsla(217, 71%, 53%, 0.2)";
  let borderColor = "hsl(217, 71%, 53%)";
  let pointBackgroundColor = "hsl(217, 71%, 53%)";
  let pointHoverBorderColor = "hsl(217, 71%, 53%)";

  if (props.darkTheme) {
    backgroundColor = "hsla(0, 0%, 14%, 0.2)";
    borderColor = "hsl(0, 0%, 14%)";
    pointBackgroundColor = "hsl(0, 0%, 14%)";
    pointHoverBorderColor = "hsl(0, 0%, 14%)";
  }

  const data = {
    labels: Object.keys(props.data),
    datasets: [
      {
        label: "% of use in public repositories",
        data: Object.values(props.data),
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        pointBackgroundColor: pointBackgroundColor,
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
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
