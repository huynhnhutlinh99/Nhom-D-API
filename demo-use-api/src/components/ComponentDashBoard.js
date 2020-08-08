import React, { useState, useEffect } from "react";
import "./scss/component_dashboard.scss";

import { fetch_data, delete_data, add_data } from "../API/Call_API";

export default function ComponentDashboard() {
  //init
  const [data, setdata] = useState([]); //show all
  const [name, setName] = useState(''); //set Name
  const [desc, setDesc] = useState(''); // set Description
  const [img, setImg] = useState(''); // set ImageURL
  //show all
  const fetchApi = () => {
    const req = fetch_data();
    req
      .then(function (response) {
        // handle success
        let small_animals = response.data.filter((index, item) => {
          return index;
        });
        setdata(small_animals); //update component
        console.log(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  //delte
  const deleteApi = (id) => {
    const req = delete_data(id); //send id to function delte_data() API
    req
      .then(function (response) {
        fetchApi(); //update component
        console.log(response); //view results in console browser
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  //add
  const addApi =() => {
    const data = {name: name, desc: desc, img: img }; //init object data
    const req = add_data(data); //send date into function add_data() API
    req
    .then(function (response) {
      fetchApi(); //update component
      console.log(response); //view results in console browser
    })
    .catch(function (error) {
      // handle error
      console.log(error); //view results  error in console browser
    });
  }

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Demo use API`;
    fetchApi();
  }, []);
  return (
    <div className="type-dash">
      <div className="container">
            <h2 className="nl-title-name">| Our Services</h2>
            <label htmlFor="id" className="nl-lbl">Name: </label>
            <input type="text" id="id" className="nl-ip" onChange={e=>setName(e.target.value)}/>
            <label htmlFor="name" className="nl-lbl">Description: </label>
            <input type="text" id="name" className="nl-ip" onChange={e=>setDesc(e.target.value)}/>
            <label htmlFor="image" className="nl-lbl">Image: </label>
            <input type="text" id="image"className="nl-ip" onChange={e=>setImg(e.target.value)}/>
            <button className="nl-btn primary" onClick={addApi}>Add</button>
            <table className="nl-tbl">
                <thead>
                    <tr>
                        <th className="nl-col__id">ID</th>
                        <th className="nl-col__name">Name</th>
                        <th className="nl-col__des">Description</th>
                        <th className="nl-col__image">Iamge</th>
                        <th className="nl-col__btn">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {data.map(function (item) {
                    return (
                    <tr className="nl-tr" key={item.id}>
                        <td className="nl-td">{item.id}</td>
                        <td className="nl-td">{item.Name}</td>
                        <td className="nl-td">{item.Des}</td>
                        <td className="nl-td">{item.ImageUrl}</td>
                        <td className="nl-td">
                            <button className="nl-btn orange hidden">Edit</button>
                            <button className="nl-btn primary hidden">Save</button>
                            <button className="nl-btn red" onClick={()=>deleteApi(item.id)}>Delete</button>
                        </td>
                    </tr>
                    );
            })}
                </tbody>
            </table>
      </div>
    </div>
  );
}
