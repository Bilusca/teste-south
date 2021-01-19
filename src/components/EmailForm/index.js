import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import useAppContext from "../../useAppContext";
import "./EmailForm.scss";

function EmailForm() {
  const { register, handleSubmit } = useForm();
  const { favoriteComics } = useAppContext();

  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs
      .send(serviceID, templateId, variables)
      .then((res) => {
        toast.success("Email enviado com sucesso!");
      })
      .catch((err) =>
        toast.error("Ocorreu um erro ao enviar o email, tente novamente.")
      );
  };

  const onSubmit = (data, r) => {
    const templateId = "template_97etu38";
    const serviceID = "my_gmail";

    sendFeedback(serviceID, templateId, {
      user_email: data.email,
      my_html: `${favoriteComics.map(
        (f) =>
          '<div><img style="width: 90px; height: 130px;" src="' +
          f.thumbnail.path +
          "." +
          f.thumbnail.extension +
          '" /><b>' +
          f.title +
          "</b></div>"
      )}`,
    });

    r.target.reset();
  };

  return (
    <div className="EmailForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Digite seu email"
          name="email"
          ref={register({
            required: "Digite seu email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email inválido",
            },
          })}
        />

        <input type="submit" />
      </form>
    </div>
  );
}

export default EmailForm;
