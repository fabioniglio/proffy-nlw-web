import React from "react";
import PageHeader from "../../components/PageHeader";

import "./styles.css";
import Input from "../../components/Input/Input";
import warningIcon from "../../assets/images/icons/warning.svg";

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

          <Input name="name" label="Full Name" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
        </fieldset>

        <fieldset>
          <legend>About the Classes</legend>

          <Input name="subject" label="Subject" />
          <Input name="cost" label="Cost of the hour" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Important Warning" />
            Important! <br />
            Fill all the inputs!
          </p>
          <button type="button">Save</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
