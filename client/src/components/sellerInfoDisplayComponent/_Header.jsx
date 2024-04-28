import React from "react";

export default ({ url_id, name, tag, like, dislike }) => {
  return (
    <header classname="header" id="home">
      <div classname="container">
        <div classname="infos">
          <h6 classname="subtitle">Hello,I'm</h6>
          <h6 classname="title">{name}</h6>
          <p>{tag}</p>
          <p>Likes : {like}</p>
          <p>Dislikes : {dislike}</p>

          <div classname="buttons pt-3">
            {/* <div> */}{" "}
            <button classname="btn btn-primary rounded">HIRE ME</button>
            {/* </div> */}
          </div>

          <div classname="socials mt-4">
            <a classname="social-item" href="javascript:void(0)">
              <i classname="ti-facebook"></i>
            </a>
            <a classname="social-item" href="javascript:void(0)">
              <i classname="ti-google"></i>
            </a>
            <a classname="social-item" href="javascript:void(0)">
              <i classname="ti-github"></i>
            </a>
            <a classname="social-item" href="javascript:void(0)">
              <i classname="ti-twitter"></i>
            </a>
          </div>
        </div>
        <div classname="img-holder">
          <img src="/images/man.svg" alt="" />
        </div>
      </div>
    </header>
  );
};
