import React from "react";
import { Formik } from "formik";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import gql from "graphql-tag";
import { Mutation } from "@apollo/react-components";

const APPLY = gql`
mutation Apply($name: String!, $email: String!, $phoneNumber: string, $address: string, $zipCode: int, $files: Upload){
apply(name:$name, email:$email, phoneNumber:$phonenumber, address:$address, zipCode:$zipcode, files:$files){
  id,
}}`;

function Apply() {
  return (
    <div className="App">
      <Mutation mutation={APPLY}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phoneNumber: "",
            address: "",
            zipCode: "",
            files: ""
          }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            } else if (!values.name) {
              errors.name = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting
          }) => (
            <MDBContainer>
              <MDBRow>
                <MDBCol className="container fls" md="4">
                  <form onSubmit={handleSubmit}>
                    <p className="h4 text-center mb-4">Sign up</p>
                    <label htmlFor="defaultFormEmailEx" className="grey-text">
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="defaultFormLoginEmailEx"
                      className="form-control"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors.email && touched.email && errors.email}
                    <br />
                    <label htmlFor="defaultFormNameEx" className="grey-text">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="defaultFormNameEx2"
                      className="form-control"
                      value={values.name}
                      onChange={handleChange}
                    />
                    {errors.name && touched.name && errors.name}
                    <br />
                    <label htmlFor="defaultFormphoneEx" className="grey-text">
                      Your Phone Number
                    </label>
                    <input
                      type="text"
                      id="defaultFormphoneEx"
                      name="phoneNumber"
                      className="form-control"
                      value={values.phoneNumber}
                      onChange={handleChange}
                    />
                    <br />

                    <label htmlFor="defaultFormaddressEx" className="grey-text">
                      Your Address
                    </label>
                    <input
                      type="text"
                      id="defaultFormaddressEx"
                      name="address"
                      className="form-control"
                      value={values.address}
                      onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="defaultFormZipEx" className="grey-text">
                      Your Zip code
                    </label>
                    <input
                      type="text"
                      id="defaultFormZipEx"
                      name="zipCode"
                      className="form-control"
                      value={values.zipCode}
                      onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="defaultFormFileEx" className="grey-text">
                      Upload files
                    </label>
                    <input
                      type="file"
                      id="defaultFormFileEx"
                      name="files"
                      className="form-control"
                      value={values.files}
                      onChange={handleChange}
                    />
                    <div className="text-center mt-4">
                      <MDBBtn
                        color="indigo"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Register
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          )}
        </Formik>
      </Mutation>
    </div>
  );
}

export default Apply;
