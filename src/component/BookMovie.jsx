import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function BookMovie() {
  const { id } = useParams();
  const [detail, setDetail] = useState({
    movieName: "",
    userName: "",
    contact: "",
    age: null,
  });
  useEffect(() => {
    const data = localStorage.getItem("show")
      ? JSON.parse(localStorage.getItem("show"))
      : null;
    if (data) {
      const moviedetail = data?.filter((f) => f?.show?.id == id)[0];
      setDetail({
        movieName: moviedetail?.show?.name,
      });
    }
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetail((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    localStorage.setItem('bookMovie', JSON.stringify(detail))
  };

  return (
    <div>
    <div class="row" style={{ display: "flex", flexDirection: "column", margin:"55px" }}>
  <input type="text" disabled value={detail?.movieName} />

  <div style={{width:"100%", marginTop: "20px", padding: "20px 30px", border: "3px solid black", flexDirection:"colume"}}>
  
    <input
      type="text"
      class="form-control border-success"
      value={detail?.userName}
      onChange={handleChange}
      name="userName"
      placeholder="User Name"
    />
    <input style={{marginTop:"15px"}}
      type="text" 
      class="form-control border-success"
      value={detail?.contact}
      onChange={handleChange}
      name="contact"
      placeholder="User Phone"
    />

    <input style={{marginTop:"15px"}}
      type="number"
      class="form-control border-success"
      value={detail?.age}
      onChange={handleChange}
      name="age"
      placeholder="User age"
    />
  </div>
  
  <div style={{ padding: "25px" }}>
    <button type="button" class="btn btn-outline-primary" onClick={handleSubmit}>
      Submit
    </button>
  </div>
</div>

    </div>
  );
}
