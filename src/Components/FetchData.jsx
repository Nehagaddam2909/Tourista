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
    <div className="card w-full overflow-scroll">
      {data &&
        data.Data &&
        mode1 &&
        data.Data.map((ele) => (
          <div key={1} className="min-w-[640px] p-2">
            <table className="w-full overflow-scroll table-auto">
              <thead className="font-bold bg-gray-200 text-gray-700">
                <tr className="border-b">
                  <td className="px-2 py-2">Name of the mode</td>
                  <td className="px-2 py-2">{ele[mode1]}</td>
                  {mode === "Bus" && (
                    <td className="px-2 py-2">{ele["mode_2"]}</td>
                  )}
                </tr>
              </thead>
              <tbody className="">
                <tr className="border-b">
                  <td className="px-2 py-2">
                    Total travel time spent while inside the vehicle(s)
                  </td>
                  <td className="px-2 py-2">{ele[mode1 + ".ivtt"]}</td>
                  {mode === "Bus" && (
                    <td className="px-2 py-2">{ele["mode_2.ivtt"]}</td>
                  )}
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-2">
                    Possible delay due to traffic congestion or other
                    uncertainties
                  </td>
                  <td className="px-2 py-2">{ele[mode1 + ".tvariab"]}</td>
                  {mode === "Bus" && (
                    <td className="px-2 py-2">{ele["mode_2.tvariab"]}</td>
                  )}
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-2">
                    Extent of crowding in the vehicle
                  </td>
                  <td className="px-2 py-2">
                    {crowd_json[ele[mode1 + ".crowd"]]}
                  </td>
                  {mode === "Bus" && (
                    <td className="px-2 py-2">
                      {crowd_json[ele["mode_2.crowd"]]}
                    </td>
                  )}
                </tr>
                {ele[mode1 + ".serv"] != "0" && (
                  <tr className="border-b">
                    <td className="px-2 py-2">Service Type</td>
                    <td className="px-2 py-2">
                      {servtype_json[ele[mode1 + ".serv"]]}
                    </td>
                    {mode === "Bus" && (
                      <td className="px-2 py-2">{ele["mode_2.serv"]}</td>
                    )}
                  </tr>
                )}
                <tr className="border-b">
                  <td className="px-2 py-2">Total one-way cost of travel</td>
                  <td className="px-2 py-2">{ele[mode1 + ".tcost"]}</td>
                  {mode === "Bus" && (
                    <td className="px-2 py-2">{ele["mode_2.tcost"]}</td>
                  )}
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-2">Number of transfers</td>
                  <td className="px-2 py-2">{ele[mode1 + ".trans"]}</td>
                  {mode === "Bus" && (
                    <td className="px-2 py-2">{ele["mode_2.trans"]}</td>
                  )}
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-2">
                    Total travel time spent outside vehicle(s) = walktime +
                    waittime
                  </td>
                  <td className="px-2 py-2">
                    {ele[mode1 + ".waittime"]} mins + {ele[mode1 + ".walktime"]}{" "}
                    mins
                  </td>
                  {mode === "Bus" && (
                    <td className="px-2 py-2">
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
