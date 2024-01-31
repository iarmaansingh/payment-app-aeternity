import React from "react";
import "./App.css";
//import logo from "./logo.svg";

//* COMPONENTS
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Content from "./components/content/content";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content-body">
        <div className="form-wrapper">
          <Form
            formTitle="Let us get to know your better"
            projectTitle="Tell us a bit more about your project"
            projectInteresting="What of marketing are you interested in?"
            projectBudget="What your moonthley badget look file?"
          />
        </div>
        <Content
          title="Get in touch"
          description="Want to see how zengrowth can help you and your team?
             well listen to your story and propose a data-driven growth,
            plan with channel that fit across your customer journey "
          informationOne="Predictible lead generation"
          informationTwo="Rapid marketing Experimentation"
          informationThree="Lower Customer acquisition cost"
          informationFour="Increase marketing dbi"
          clientTitle="Trusted growth partner for hyper-growt companies"
        />
      </div>
      <Footer />
    </div>
  );
}
