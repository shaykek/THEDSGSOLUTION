import React from "react";
import Image from "../../shared/Image";
import useFetch from "../../../hooks/useFetch";
import "./DataAnalysisForm.scss";

import useForm from "../../../hooks/useForm";
import validation from "../../../hooks/validation";

const DataAnalysisForm = ({ dataAnalysisForm: { title, phonecodes } }) => {
  const { data } = useFetch(phonecodes);

  const {
    formState,
    handleChange,
    handleSubmit,
    errors,
    wasSubmitted,
    setWasSubmitted
  } = useForm(
    {
      phone: "",
      name: ""
    },
    // put to setWasSubmitted() boolean value to show that form was send successfully or not
    data => setWasSubmitted(true),
    validation
  );
  console.log(errors);

  return (
    <div className="analysis">
      <form>
        <h2 className="analysis__title">{title}</h2>
        <div className="analysis__container">
          <div className="analysis__inner analysis__inner--down">
            <input
              type="text"
              name="name"
              className="analysis__field"
              onChange={handleChange}
              value={formState.name}
            />
            <label>
              דוא"ל{" "}
              <Image
                className="analysis__image"
                src="images/analysis/name.png"
              />
            </label>
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="analysis__inner ">
            <div className="analysis__field analysis__field--box">
              <select className="analysis__field analysis__field--none-line analysis__code">
                <option>code</option>
                {data.map(({ dial_code }, i) => (
                  <option key={i}>{dial_code}</option>
                ))}
              </select>

              <input
                type="text"
                className="analysis__field analysis__field--none-line analysis__phone"
                name="phone"
                onChange={handleChange}
                value={formState.phone}
              />
            </div>
            <label>
              מספר טלפון{" "}
              <Image
                className="analysis__image"
                src="images/analysis/tube.png"
              />
            </label>
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
          <div className="analysis__inner analysis__inner--down">
            <input
              type="email"
              className="analysis__field"
              name="email"
              onChange={handleChange}
              value={formState.email}
            />
            <label>
              שם{" "}
              <Image
                className="analysis__image"
                src="images/analysis/envelope.png"
              />
            </label>
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        </div>
        <input className="analysis__send" type="submit" value={title} />
      </form>
    </div>
  );
};

export default DataAnalysisForm;
