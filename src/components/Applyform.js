import React, { Component } from 'react';
import './Applyform.css';
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};
export default class form extends Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: null,
        lastName: null,
        email: null,
        Numberphone: null,
        Experience: null,
        resumeCV: null,
        formError: {
          firstName: "",
          lastName: "",
          email: "",
          Numberphone: "",
          Experience: "",
          resumeCV: ""
        }
      }
    }
    handleChange = e => {
      e.preventDefault();
      const { name, value } = e.target;
      let formErrors = { ...this.state.formErrors };
  
      switch (name) {
        case "firstName":
          formErrors.firstName =
            value.length < 3 ? "minimum 3 characaters required" : "";
          break;
        case "lastName":
          formErrors.lastName =
            value.length < 3 ? "minimum 3 characaters required" : "";
          break;
        case "email":
          formErrors.email = emailRegex.test(value)
            ? ""
            : "invalid email address";
          break;
          case "Experience":
              formErrors.Experience =
              value.length < 3 ? "minimum 3 characaters required" : "";
              break;
        case "Numberphone":
          formErrors.Numberphone =
            value.length < 10 ? "minimum 10 characaters required" : "";
          break;
          case "resumeCV":
          formErrors.resumeCV =
          value === null ? "Choose a file" : "";
          break;
          
        default:
          break;
      }
  
      this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };
    onChange(e){
      let files=e.target.files;
      console.warn("data file", files)
    }
      render() {
      const {formErrors} = this.state;
      return (
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Application form</h1>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input
                type="text"
                className="firstName"
                placeholder="First Name"
                name="firstName"
                noValidate
                onChange={this.handleChange}/>
                
               
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input
                type="text"
                className=""
                placeholder="Last Name"
                name="lastName"
                noValidate
                onChange={this.handleChange}/>
                
               
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                type="text"
                className=""
                placeholder="@examples.com"
                name="email"
             noValidate
                onChange={this.handleChange}/>
                
                
              </div>
              
              <div className="Experience">
                <label htmlFor="Experience">Experience</label>
                <input
                type="text"
                className=""
                placeholder="one year experience"
                name="Experience"
                noValidate
                onChange={this.handleChange}/>
                
                
              </div>
              <div className="Numberphone">
                <label htmlFor="Numberphone">Number phone</label>
                <input
                type="text"
                className=""
                placeholder="Numberphone"
                name="Numberphone"
                noValidate
                onChange={this.handleChange}/>
                
                
              </div>
              <div className="resumeCV" onSubmit={this.onFormSubmit}>
                <label htmlFor="resumeCV">resume/CV</label>
                <input type="file" name="file" onChange={(e)=>this.onChange(e)}/>
              </div>
              
              <div className="createApply">
                <button type="submit">Submit Application</button>
                <small>Already Have an Application?</small>
              </div>
            </form>
          </div>
      </div>
    );
  }
  }