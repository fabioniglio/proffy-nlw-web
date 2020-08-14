import React from "react";

import PageHeader from "../../components/PageHeader";

import "./styles.css";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input/Input";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="This are the proofys available">
        <form id="search-teachers">
          <Input name="subject" label="Subject" />
          <Input name="week_day" label="Week Day" />
          <Input type="time" name="time" label="Time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
