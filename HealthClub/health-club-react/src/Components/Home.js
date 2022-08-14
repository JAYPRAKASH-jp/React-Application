import React from "react";

export default function Home() {
  return (
    <>
      <div className="container mh-100">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={process.env.PUBLIC_URL + "1.jpg"}
                className="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block text-dark">
                <h5>Health Club</h5>
                <p>
                  <b>
                    I will beat her. I will train harder. I will eat cleaner. I
                    know her strengths. I’ve lost to her before but not this
                    time. She is going down. I have the advantage because I know
                    her well. She is the old me.
                  </b>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={process.env.PUBLIC_URL + "2.jpg"}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={process.env.PUBLIC_URL + "3.jpg"}
                className="d-block w-100 "
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
