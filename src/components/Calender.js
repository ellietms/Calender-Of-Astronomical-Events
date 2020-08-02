import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const Calender = ({data,showInfoPage}) => {
  return(
      <div>
        <div className="container calender">
          <div className="mt-3 calender-title">
            <img
              src="https://i.gifer.com/7b5j.gif"
              className="image-title-calender"
            />
            <p className="mr-auto calender-title-text">
              Calender Of <br /> Astronomical Events
            </p>
          </div>
          <div className="row">
            <table className="table object-table-calender mt-2">
              <thead className="thead">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col" className="object-title">
                    <h1>Name</h1>
                  </th>
                  <th scope="col" className="object-title">
                    <h1>Date</h1>
                  </th>
                  <th scope="col" className="object-title">
                    <h1>Time</h1>
                  </th>
                  <th scope="col" className="object-title">
                    <h1 className="ml-5">Visibility</h1>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((object,rowNum) => {
                  return (
                    <tr>
                      <td>{rowNum + 1}</td>
                      <td>
                        <a
                          href="#"
                          className="nameOfObject"
                          onClick={() => showInfoPage(object)}
                        >
                          {object[0]}
                        </a>
                      </td>
                      <td>
                        {
                          object[3].split(" ")[0]
                        }
                      </td>
                      <td>
                        {
                          object[3].split(" ")[1]
                        }
                      </td>
                      <td className="rate">
                       {Math.ceil(Math.round((((Math.ceil(object[4] * (1.496e+8).toFixed(2))/5e+6).toFixed(2))/1.5)*100)*0.1)}<i class="fas fa-star"></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
};
export default Calender;
