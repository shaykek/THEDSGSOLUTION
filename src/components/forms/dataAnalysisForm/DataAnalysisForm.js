import React from "react";

import "./DataAnalysisForm.scss";

const DataAnalysisForm = ({ dataAnalysisForm: { title } }) => (
  <div className="analysis">
    <form>
      <h2>{title}</h2>
      <div>
        <div>
          <label>דוא"ל </label>
          <input type="email" />
        </div>
        <div>
          <select>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>
          <label>מספר טלפון</label>
          <input type="text" />
        </div>
        <div>
          <label>שם</label>
          <input type="text" />
        </div>
      </div>
      <input type="submit" />
    </form>
  </div>
);

export default DataAnalysisForm;
