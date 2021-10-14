import React from "react";

export const Card = () => {
  return (
    // <div class="card" style="width: 18rem;">
    <div className="card" style={{ width: "18rem", marginTop: "50px" }}>
      <img
        src="http://simpleicon.com/wp-content/uploads/user1.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="hhh.com" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
