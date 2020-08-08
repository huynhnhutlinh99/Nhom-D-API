import React, { useState, useEffect } from "react";
import "./scss/component71.scss";

import { fetch_data } from "../API/Call_API";
export default function Component71() {
  const [data, setdata] = useState([]);
  const fetchApi = () => {
    const req = fetch_data();
    req
      .then(function (response) {
        // handle success
        let small_animals = response.data.filter((index, item) => {
          //    if(index.id===1) {
          //     return index;
          //    }
          return index;
        });
        setdata(small_animals);
        console.log(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Demo use API`;
    fetchApi();
  }, []);
  return (
    <div className="type-71">
      <div className="container">
        <div className="nl-header-name">
          <h2 className="nl-title">Our Services</h2>
        </div>
        <div className="row">
          {data.map(function (item, idx) {
            return (
              <div
                className="col-lg-4 col-md-4 col-sm-12 col-xs-12"
                key={item.id}
              >
                <div className="nl-content">
                  <div className="nl-icon-part">
                    <img  style={{width:82,height:82}} src={item.ImageUrl} alt=""/>
                  </div>
                  <h3 className="nl-item-name">{item.Name}</h3>
                  <p className="decs">
                    {item.Des}
                  </p>
                </div>
              </div>
            );
          })}
      
        </div>
      </div>
    </div>
  );
}
