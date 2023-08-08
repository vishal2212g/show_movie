import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function MovieSummery() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [summery, setSummery] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("show")
      ? JSON.parse(localStorage.getItem("show"))
      : null;
    if (data) {
      setSummery(data?.filter((f) => f?.show?.id == id)[0]?.show?.summary);
    }
  }, [id]);

  return (
    <div  style={{
      boxSizing: 'border-box',
      width: "100%",
      height:"55%",
      marginTop: "25px",
      padding: "55px,45px",
      border: "none",
      display: "colume",
      textAlign:"center",
    button:"center",
    fontFamily: "verdana-bold",
    fontSize:"20px"
  }}>


      <div dangerouslySetInnerHTML={{ __html: summery }} />
      <button type="button" class="btn btn-outline-primary"  
      display-item
      onClick={()=>{
        navigate(`/${id}/book-movie`);
      }}>book movie</button>
    </div>
  );
}
