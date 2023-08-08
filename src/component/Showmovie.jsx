import React from "react";
import { useNavigate } from "react-router-dom";

export default function Showmovie({ data }) {
  const navigate = useNavigate();
  return (
    <div  
      style={{
        width: "100%",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        borderRadius: "5px",
        fontFamily: "verdana-bold",
      }}
    >
      <div>
        <img
          src={data?.show?.image?.original}
          alt={"hello"}
          width={"100%"}
          style={{ maxHeight: "350px" }}
        />
      </div>
      <div style={{ padding: "10px" }}>
        <h3>{data?.show?.name}</h3>
      </div>
      <div>
        <button  class="btn btn-outline-primary"
          style={{ width: "100%", cursor: "pointer" }}
          onClick={() => {
            navigate(`/${data?.show?.id}/summery`);
          }}
        >
          summery
        </button>
      </div>
    </div>
  );
}
