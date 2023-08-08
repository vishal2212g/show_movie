import React, { useState, useEffect } from "react";
import axios from "axios";
import Showmovie from "./component/Showmovie";

export default function Home() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(
      "https://api.tvmaze.com/search/shows?q=all"
    );
    setData(data);
    localStorage.setItem('show', JSON.stringify(data))
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        display:'flex',
        justifyContent: "space-between",
        width:'95%',
        flexWrap:'wrap',
        marginTop:'25px'
      }}
    >
      {data?.map((item, i) => {
        return (
          <div style={{width:'30%', marginTop:'25px'}}>
            <Showmovie data={item} />
          </div>
        );
      })}
    </div>
  );
}
