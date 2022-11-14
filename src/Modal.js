import React from "react";
import "./Modal.css";
import moment from "moment";
import { useState } from "react";

const Modal = (props) => {
  const { open, close, header, value } = props;
  const [checkOpen, setCheckOpen] = useState(false);

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <div className="mainContainer1">
              <div>
                <input type="text" placeholder="성함" />
                <input type="text" placeholder="연락처" />
                <input type="text" placeholder="이메일" />
                <textarea
                  type="text"
                  placeholder="미팅목적 및 요청사항"
                  className="content"
                />
              </div>
              미팅 날짜
              <p className="schedulefont">
                {moment(value).format("YYYY년 MM월 DD일")}
              </p>
              미팅 시간
              <p>
                <input type="time" className="timeSelect" />
              </p>
            </div>
          </main>
          <footer>
            <button className="sumit" onClick={close}>
              미팅 요청하기
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
