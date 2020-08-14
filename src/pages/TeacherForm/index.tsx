import React from "react";
import PageHeader from "../../components/PageHeader";

import "./styles.css";

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        description="The first step is to fill the register form!"
        title="That is awesome that you want to give classes"
      ></PageHeader>

      <main>
        <fieldset>
          <legend>Your Information</legend>
          <div className="input-block">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="avatar">Avatar</label>
            <input type="text" id="avatar" />
          </div>

          <div className="input-block">
            <label htmlFor="whatsapp">Whatsapp</label>
            <input type="text" id="whatsapp" />
          </div>
        </fieldset>
      </main>
    </div>
  );
}

export default TeacherForm;
