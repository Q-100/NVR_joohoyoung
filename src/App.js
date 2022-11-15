import "./App.css";
import infoData from "./data.js";
import React, { useState, useEffect, useCallback } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import moment from "moment";
import Modal from "./Modal.js";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

function App() {
  const [info, infoChange] = useState(infoData);
  const [value, onChange] = useState(new Date());
  let [alert, alertSet] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      alertSet(false);
    }, 4000);
  });
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    console.log("열림");
    setModalOpen(true);
  };
  const closeModal = () => {
    console.log("닫힘");
    setModalOpen(false);
  };
  const exportTxt = useCallback(() => {
    let fileName = "파일이름.txt";
    let output = "string 타입의 데이터";
    const element = document.createElement("a");
    const file = new Blob([output], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element); // FireFox
    element.click();
  }, []);
  return (
    <div className="App">
      {alert === true ? (
        <Video />
      ) : (
        <div className="mainContainer">
          <Profile />
          <Info info={info} />
          <SocialMedia />
          {/* <Schedule value={value} onChange={onChange} /> */}
          {/* <button onClick={openModal} className="scheduleButton">
            일정 잡기
          </button>
          <Modal
            open={modalOpen}
            close={closeModal}
            header="일정 잡기"
            value={value}
          ></Modal> */}
          <Donate />
          <Contact info={info} />

          <Footer />
        </div>
      )}
    </div>
  );
}
function Video() {
  return (
    <video muted autoPlay playsInline className="video">
      <source src="PPP_LogoMotion.mp4" type="video/mp4" />
    </video>
  );
}

function Profile() {
  return (
    <div className="profile">
      <a href="https://www.peoplepowerparty.kr/intro.jsp">
        <img src="img/power_logo.png" alt="" className="img" />
      </a>
      <hr />
      <img src="img/profile_main.png" className="profile_img" alt="" />
      <h1>주 호 영</h1>
      <h4>국민의힘 원내대표 / 국회의원</h4>
      <hr />
      <a
        className="contactsButton"
        href="https://firebasestorage.googleapis.com/v0/b/nvr-production.appspot.com/o/videos%2Ftmp%2Fcontact.vcf?alt=media&token=c6fe9ede-2ff6-4b3c-8ba0-2f74bec59cb1"
      >
        연락처 저장
      </a>
      <a className="contactsButton showProfile" href="#ShowProfile">
        프로필 보기
      </a>
      <a className="contactsButton donate" href="#DonateID">
        후원하기
      </a>
    </div>
  );
}
function Info(props) {
  const info = props.info;
  return (
    <div className="info" id="ShowProfile">
      <hr />
      {info.map((a, i) => {
        return (
          <div key={i}>
            <a href={a.button} className="infoItem">
              <img src={a.src} alt="" />
              <p>{a.content}</p>
            </a>
          </div>
        );
      })}
      <hr />
    </div>
  );
}
function Schedule(props) {
  // const [value, onChange] = useState(new Date());
  const value = props.value;
  const onChange = props.onChange;
  return (
    <div className="schedule">
      <h2>Schedule</h2>
      <hr style={{ width: "20vw" }} />
      <div>
        <Calendar
          onChange={onChange}
          value={value}
          formatDay={(locale, date) => moment(date).format("DD")}
        />
      </div>
    </div>
  );
}

function Contact(props) {
  return (
    <div className="contact" id="ContactID">
      <h2>Contact</h2>
      <hr style={{ width: "20vw" }} />
      <p>서울시 영등포구 의사당대로 1 국회본관 239호</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25311.89570341745!2d126.88119571562503!3d37.5318046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f268dc3b8b3%3A0x4931e416b071c2ad!2z6rWt7ZqM7J2Y7IKs64u5!5e0!3m2!1sko!2skr!4v1668419056109!5m2!1sko!2skr"></iframe>
      <a href="https://www.google.co.kr/maps/place/%EA%B5%AD%ED%9A%8C%EC%9D%98%EC%82%AC%EB%8B%B9/data=!4m9!1m2!2m1!1z7ISc7Jq47IucIOyYgeuTse2PrOq1rCDsnZjsgqzri7nrjIDroZwgMSDqta3tmozrs7jqtIAgMjM57Zi4!3m5!1s0x357c9f268dc3b8b3:0x4931e416b071c2ad!8m2!3d37.5318046!4d126.9141547!15sCjzshJzsmrjsi5wg7JiB65Ox7Y-s6rWsIOydmOyCrOuLueuMgOuhnCAxIOq1re2ajOuzuOq0gCAyMzntmLhaQSI_7ISc7Jq47IucIOyYgeuTse2PrOq1rCDsnZjsgqzri7kg64yA66GcIDEg6rWt7ZqMIOuzuOq0gCAyMzkg7Zi4kgERZ292ZXJubWVudF9vZmZpY2WaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUlZOazkxZG1ObkVBReABAA?hl=ko">
        <p className="contactMapInfo">지도 자세히 보기</p>
      </a>
    </div>
  );
}
function Donate() {
  return (
    <div className="social donate" id="DonateID">
      <h2>Donate</h2>
      <hr style={{ width: "20vw" }} />
      <div>
        <CopyToClipboard
          text={"0537635577"}
          onCopy={() => alert("계좌번호가 복사되었습니다.")}
        >
          <div>
            <button className="button-left">대구은행 053-763-5577</button>
            <FontAwesomeIcon icon={faCopy} className="button-right" />
          </div>
        </CopyToClipboard>
      </div>
      <div>
        <CopyToClipboard
          text={"55001006126"}
          onCopy={() => alert("계좌번호가 복사되었습니다.")}
        >
          <div>
            <button className="button-left">농 협 550-01-006126</button>
            <FontAwesomeIcon icon={faCopy} className="button-right" />
          </div>
        </CopyToClipboard>
      </div>

      <h4>예금주 : 주호영후원회</h4>
      <p className="notion">
        ⦿ 후원금 입금 후 사무실로 전화주시거나 메일로 생년월일, 주소, 연락처를
        알려주시면 선거관리위원회 영수증을 보내드립니다.
      </p>
      <a href="tel:053-763-5577">
        <p> 후원회 사무실 : 053) 763-5577</p>
      </a>
      <a href="tel:02-784-2055">
        <p>서울 국회의원사무실 : 02) 784-2055 </p>
      </a>
      <a href="mailto:j7635577@naver.com">
        <p>Email : j7635577@naver.com</p>
      </a>
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="social">
      <h2>Social Media</h2>
      <hr style={{ width: "20vw" }} />
      <div className="social1">
        <a href="https://blog.naver.com/7842055">
          <img src="img/naverlogo.png" alt="" />
        </a>
        <a href="https://www.facebook.com/liotgnas">
          <img src="img/facebook_logo.png" alt="" />
        </a>
        <a href="https://www.youtube.com/channel/UCb3t8uSZ039h2Dd-YxI5iqA">
          <img src="img/youtube_logo.png" alt="" />
        </a>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <div className="footer">
      <a href="https://nvr-front.web.app/">
        <img src="img/NVR_logo.png" alt="" />
      </a>
      <p>
        Copyright 2022. <a href="https://agency-nvr.web.app/">NVR</a>. All
        rights reserved
      </p>
    </div>
  );
}
export default App;
