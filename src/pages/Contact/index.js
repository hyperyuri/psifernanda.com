import React, { useState } from "react";
import "./styles.css";
import Header from "../../components/Header";
import detail from "../../assets/detail.svg";
import ModalOk from "../../components/ModalOk";
import ModalError from "../../components/ModalError";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

import api from "../../service/api";

function Contact() {
  const [button, setButton] = useState(false);
  const [textButton, setTextButton] = useState(false);

  const [modal, setModal] = useState(false);
  const [modalError, setModalError] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    text: "",
  });

  const handleChange = (event) => {
    const axiosValue = { ...user };

    axiosValue[event.target.name] = event.target.value;
    setUser(axiosValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setButton(true);
    setTextButton(true);
    try {
      const response = await api.post("/send", {
        name: user.name,
        email: user.email,
        phone: user.phone,
        text: user.text,
      });
      console.log(user);
      setModal(true);

      console.log(response);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (err) {
      setModalError(true);

      setTimeout(() => {
        setTextButton(false);
        setButton(false);
        setModalError(false);
      }, 3000);
    }
  };

  return (
    <>
      {!modal ? (
        <> </>
      ) : (
        <>
          {" "}
          <ModalOk />{" "}
        </>
      )}
      {!modalError ? (
        <> </>
      ) : (
        <>
          {" "}
          <ModalError />{" "}
        </>
      )}
      <Header />

      <div className="contactContainer">
        <form action="" onSubmit={handleSubmit}>
          <div className="infos-later">
            <ul className="logos">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send?phone=5545991023801&text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site!"
                >
                  <FaWhatsapp size={25} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/psiFerAlves/"
                >
                  <FaFacebook size={25} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/psifernanda.alves/"
                >
                  <FaInstagram size={25} />
                </a>
              </li>
            </ul>
            <ul>
              <br />
              <li>Rua Sete de Setembro, 2325 - Centro</li>
              <li>CEP: 85801-140 | Cascavel, PR</li>
              <li>Telefone: (45) 3035-1009 e (45) 99102-3801</li>
              <br />
              <li>Email: psifernandamaria@gmail.com</li>
            </ul>
          </div>
          <div className="containerUpContact">
            <div className="title">
              <h3>Entre em contato comigo:</h3>
              <input
                type="text"
                name="name"
                placeholder="Nome"
                required
                defaultValue={user.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                defaultValue={user.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Telefone"
                required
                defaultValue={user.phone}
                onChange={handleChange}
              />
            </div>
            <div className="infos">
              <ul className="logos">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://api.whatsapp.com/send?phone=5545991023801&text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site!"
                  >
                    <FaWhatsapp size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/psiFerAlves/"
                  >
                    <FaFacebook size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/psifernanda.alves/"
                  >
                    <FaInstagram size={25} />
                  </a>
                </li>
              </ul>
              <ul>
                <br />
                <li>Rua Sete de Setembro, 2325 - Centro</li>
                <li>CEP: 85801-140 | Cascavel, PR</li>
                <li>Telefone: (45) 3035-1009 e (45) 99102-3801</li>
                <br />
                <li>Email: psifernandamaria@gmail.com</li>
              </ul>
            </div>
          </div>
          <textarea
            type="text"
            name="text"
            placeholder="Mensagem"
            required
            defaultValue={user.text}
            onChange={handleChange}
          />
          <button disabled={button} type="submit">
            {textButton !== true ? "Enviar email" : "Enviando email..."}
          </button>
        </form>
        <img className="detail" src={detail} alt="detail" />
      </div>
    </>
  );
}

export default Contact;
