import React from "react";

function Blogs() {
  return (
    <>
      <div className="blogs-container">
        <div className="blog">
          <p className="date">
            04/04/2024 <span style={{ float: "right" }}>Category - CODING</span>
          </p>
          <h1 className="blog-title">This is my first blog.</h1>
          <p className="blog-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus sunt explicabo expedita! Velit, natus eos veniam,
            numquam perferendis maxime quasi error doloribus libero facere unde
            eveniet debitis ipsam expedita. Quos asperiores, rem ab atque odit a
            dolorum provident quas quis officia? Quo necessitatibus incidunt
            tempora beatae libero recusandae ab repellat dolorum voluptatem
            autem, perspiciatis, cumque adipisci molestiae eum illum!
            Asperiores.
          </p>
          <button className="blog-btn">READ MORE</button>
          <hr />
        </div>

        <div className="blog">
          <p className="date">04-04-2024</p>
          <h1 className="blog-title">This is my first blog.</h1>
          <p className="blog-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus sunt explicabo expedita! Velit, natus eos veniam,
            numquam perferendis maxime quasi error doloribus libero facere unde
            eveniet debitis ipsam expedita. Quos asperiores, rem ab atque odit a
            dolorum provident quas quis officia? Quo necessitatibus incidunt
            tempora beatae libero recusandae ab repellat dolorum voluptatem
            autem, perspiciatis, cumque adipisci molestiae eum illum!
            Asperiores.
          </p>
          <button className="blog-btn">READ MORE</button>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Blogs;
