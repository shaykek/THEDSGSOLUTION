import React, { useContext } from "react";

import Form from "../components/vendors/elements/Form";

import { AppContext } from "../context/app";
import useFetch from "../hooks/useFetch";

const ContactUs = () => {
  const {
    pages: {
      "contact-us": { title, subtitle, form }
    }
  } = useContext(AppContext);

  const { data, loading } = useFetch(form.url);

  return (
    <section className="contact-us">
      <div className="">
        <main className="contact-us__main">
          {loading === false && (
            <form className="contact-form">
              <header className="contact-form__header">
                <h4 className="contact-form__title">{data.title}</h4>
              </header>
              <main className="contact-form__main">
                <Form inputs={data.inputs} />
              </main>
            </form>
          )}
        </main>
      </div>
    </section>
  );
};

export default ContactUs;
