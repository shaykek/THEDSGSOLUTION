import React from "react";
import Image from "../../shared/Image";
import useFetch from "../../../hooks/useFetch";
import "./DataAnalysisForm.scss";
// dial_code
const DataAnalysisForm = ({ dataAnalysisForm: { title, phonecodes } }) => {
  const { data } = useFetch(phonecodes);

  return (
    <div className="analysis">
      <form>
        <h2 className="analysis__title">{title}</h2>
        <div className="analysis__container">
          <div className="analysis__inner analysis__inner--down">
            <input type="email" className="analysis__field" />
            <label>
              דוא"ל{" "}
              <Image
                className="analysis__image"
                src="images/analysis/name.png"
              />
            </label>
          </div>
          <div className="analysis__inner ">
            <div className="analysis__field">
              <select className="analysis__field analysis__field--none-line analysis__code">
                <option>code</option>
                {data.map(({ dial_code }) => (
                  <option>{dial_code}</option>
                ))}
              </select>

              <input
                type="text"
                className="analysis__field analysis__field--none-line"
              />
            </div>
            <label>
              מספר טלפון{" "}
              <Image
                className="analysis__image"
                src="images/analysis/tube.png"
              />
            </label>
          </div>
          <div className="analysis__inner analysis__inner--down">
            <input type="text" className="analysis__field" />
            <label>
              שם{" "}
              <Image
                className="analysis__image"
                src="images/analysis/envelope.png"
              />
            </label>
          </div>
        </div>
        <input className="analysis__send" type="submit" value={title} />
      </form>
    </div>
  );
};

export default DataAnalysisForm;
