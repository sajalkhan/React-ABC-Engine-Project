import React, { useRef, forwardRef, useContext } from "react";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { Context } from "../../App";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./step3.css";

const StepThree = forwardRef((props, ref) => {
  return (
    <Context.Consumer>
      {(value) => (
        <div ref={ref}>
          <div className="result-table">
            <table>
              <caption>ABC ENGINE RESULT</caption>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Client</th>
                  <th>Constructor</th>
                  <th>Max-X</th>
                  <th>Min-X</th>
                  <th>Max-Y</th>
                  <th>Min-Y</th>
                  <th>Max-Z</th>
                  <th>Min-Z</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{value.name}</td>
                  <td>{value.description}</td>
                  <td>{value.client}</td>
                  <td>{value.constructor}</td>
                  <td>{value.max_x}</td>
                  <td>{value.min_x}</td>
                  <td>{value.max_y}</td>
                  <td>{value.min_y}</td>
                  <td>{value.max_z}</td>
                  <td>{value.min_z}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </Context.Consumer>
  );
});

const PrintDocument = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const appContext = useContext(Context);
  const chart = Object.entries(appContext.chart);
  const dataX = chart[0];
  var chartData = [];

  dataX ? (chartData = dataX[1]) : (chartData = []);

  return (
    <div className="container">
      <StepThree ref={componentRef} />
      <Link to="/step2" className="btnBack">
        {" "}
        Back{" "}
      </Link>
      <span onClick={handlePrint} className="print fas fa-print fa-2x">
        <i className="print-tooltip">print</i>
      </span>
      {chartData.length ? (
        <div>
          <br />
          <br />
          {/*----------- https://recharts.org/en-US/examples -----*/}
          <LineChart
            width={1000}
            height={500}
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x_axis" />
            <YAxis dataKey="y_axis" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="x"
              stroke="#8884d8"
              strokeDasharray="5 5"
            />
            <Line
              type="monotone"
              dataKey="y"
              stroke="green"
              strokeDasharray="3 4 5 2"
            />
            <Line
              type="monotone"
              dataKey="z"
              stroke="red"
              strokeDasharray="3 5"
            />
          </LineChart>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PrintDocument;
