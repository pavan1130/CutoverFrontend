// CutoverPlanPopup.js

import React from "react";
import { GoX } from "react-icons/go";
import styles from "../styles/CutoverPlanPopup.module.css";

const CutoverPlanPopup = ({ handleClosePopup }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popupHeader}>
        <h2>Add New Cutover Plan Profile</h2>
        <button onClick={handleClosePopup}>
          <GoX />
        </button>
      </div>
      <div style={{ padding: "20px" }}>
        <div className={styles.dropdownContainer}>
          <div className={styles.column} style={{ width: "311px" }}>
            <label htmlFor="projectName">Project Name:</label>
            <select id="projectName">
              <option className="option" value="project1">
                Project 1
              </option>
              <option className="option" value="project2">
                Project 2
              </option>
            </select>
          </div>

          <div className={styles.column} style={{ width: "311px" }}>
            <label htmlFor="team">Team:</label>
            <select id="team">
              <option className="option" value="team1">
                Team 1
              </option>
              <option className="option" value="team2">
                Team 2
              </option>
            </select>
          </div>

          <div className={styles.row} style={{ marginTop: "20px" }}>
            <div className={styles.column}>
              <label htmlFor="wave">Wave:</label>
              <select id="wave">
                <option className={styles.option} value="wave1">
                  Wave 1
                </option>
                <option className={styles.option} value="wave2">
                  Wave 2
                </option>
              </select>
            </div>

            <div className={styles.column}>
              <label htmlFor="cycle">Cycle:</label>
              <select id="cycle">
                <option className={styles.option} value="cycle1">
                  Cycle 1
                </option>
                <option className={styles.option} value="cycle2">
                  Cycle 2
                </option>
              </select>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <label htmlFor="baselineStartDate">Baseline Start Date:</label>
              <input type="date" id="baselineStartDate" />
            </div>

            <div className={styles.column}>
              <label htmlFor="baselineFinishDate">Baseline Finish Date:</label>
              <input type="date" id="baselineFinishDate" />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <label htmlFor="environment">Environment:</label>
              <select id="environment">
                <option value="env1">Environment 1</option>
                <option value="env2">Environment 2</option>
              </select>
            </div>

            <div className={styles.column}>
              <label htmlFor="client">Client:</label>
              <select id="client">
                <option value="client1">Client 1</option>
                <option value="client2">Client 2</option>
              </select>
            </div>
          </div>
        </div>
        <div style={{ float: "right", margin: "20px", marginTop: "30px" }}>
          <button
            style={{
              color: "#E92431",
              border: "1px solid",
              borderRadius: "5px",
              backgroundColor: "#FFF5F5",
              marginRight: "20px",
              fontSize: "12px",
              height: "30px",
              width: "120px",
            }}
          >
            Save as Draft
          </button>
          <button
            style={{
              color: "#FFF5F5",
              border: "1px solid",
              borderRadius: "5px",
              backgroundColor: "#E92431",
              fontSize: "12px",
              height: "30px",
              width: "120px",
            }}
          >
            Proceed to Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default CutoverPlanPopup;
