import { useEffect, useState } from "react";
import { getDist } from "./getDist";
import { getMode } from "./getMode";

const FetchData = ({ dist, mode }) => {
  let [data, setData] = useState([]);
  let [mode1, setMode] = useState("mode_1");
  let crowd_json = {
    1: "Many seats available",
    2: "Some seats available",
    3: "All seats occupied; standing space available",
    4: "Fully crowded or packed",
  };
  let servtype_json = { 1: "Ordinary", 2: "Express Non-AC", 3: "Express AC" };
  useEffect(() => {
    if (dist && mode) {
      const d = getDist(dist);
      setData(d);

      setMode(getMode(mode));

      console.log("This is useEffect....", data, mode1);
    }
  }, []);
  return (
    <div>
      {data &&
        data.Data &&
        mode1 &&
        data.Data.map((ele) => (
          <div key={1}>
            <table>
              <tbody>
                <tr>
                  <td>Name of the modes</td>
                  <td>{ele[mode1]}</td>
                  {mode === "Bus" && <td>{ele["mode_2"]}</td>}
                </tr>
                <tr>
                  <td>Total travel time spent while inside the vehicle(s)</td>
                  <td>{ele[mode1 + ".ivtt"]}</td>
                  {mode === "Bus" && <td>{ele["mode_2.ivtt"]}</td>}
                </tr>
                <tr>
                  <td>
                    Possible delay due to traffic congestion or other
                    uncertainties
                  </td>
                  <td>{ele[mode1 + ".tvariab"]}</td>
                  {mode === "Bus" && <td>{ele["mode_2.tvariab"]}</td>}
                </tr>
                <tr>
                  <td>Extent of crowding in the vehicle</td>
                  <td>{crowd_json[ele[mode1 + ".crowd"]]}</td>
                  {mode === "Bus" && (
                    <td>
                      <td>{crowd_json[ele["mode_2.crowd"]]}</td>
                    </td>
                  )}
                </tr>
                {ele[mode1 + ".serv"] != "0" && (
                  <tr>
                    <td>Service Type</td>
                    <td>{servtype_json[ele[mode1 + ".serv"]]}</td>
                    {mode === "Bus" && <td>{ele["mode_2.serv"]}</td>}
                  </tr>
                )}
                <tr>
                  <td>Total one-way cost of travel</td>
                  <td>{ele[mode1 + ".tcost"]}</td>
                  {mode === "Bus" && <td>{ele["mode_2.tcost"]}</td>}
                </tr>
                <tr>
                  <td>Number of transfers</td>
                  <td>{ele[mode1 + ".trans"]}</td>
                  {mode === "Bus" && <td>{ele["mode_2.trans"]}</td>}
                </tr>
                <tr>
                  <td>
                    Total travel time spent outside vehicle(s) = walktime +
                    waittime
                  </td>
                  <td>
                    {ele[mode1 + ".waittime"]} mins + {ele[mode1 + ".walktime"]}{" "}
                    mins
                  </td>
                  {mode === "Bus" && (
                    <td>
                      {ele["mode_2.waittime"]} mins + {ele["mode_2.walktime"]}
                    </td>
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        ))}
    </div>
  );
};

export default FetchData;
