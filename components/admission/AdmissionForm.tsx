"use client"
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface AdmissionFormValues {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirthAD: string;
  religion: string;
  maritalStatus: string;
  program: string;
  permanentProvince: string;
  permanentDistrict: string;
  permanentWardNo: string;
  permanentVdcMunicipality: string;
  fatherName: string;
  fatherContactNo: string;
  motherOccupation: string;
  academicDocuments: File | null;
}

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  middleName: Yup.string().required("Middle name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .required("Contact number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  dateOfBirthAD: Yup.string().required("Date of birth is required"),
  religion: Yup.string().required("Religion is required"),
  maritalStatus: Yup.string().required("Marital status is required"),
  program: Yup.string().required("Program is required"),
  permanentProvince: Yup.string().required("Province is required"),
  permanentDistrict: Yup.string().required("District is required"),
  permanentWardNo: Yup.string().required("Ward is required"),
  permanentVdcMunicipality: Yup.string().required("VDC/Municipality is required"),
  fatherName: Yup.string().required("Father's name is required"),
  fatherContactNo: Yup.string()
    .required("Father's phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  motherOccupation: Yup.string().required("Mother's occupation is required"),
  academicDocuments: Yup.mixed().nullable(), // optional file
});

const initialValues: AdmissionFormValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirthAD: "",
  religion: "",
  maritalStatus: "",
  program: "",
  permanentProvince: "",
  permanentDistrict: "",
  permanentWardNo: "",
  permanentVdcMunicipality: "",
  fatherName: "",
  fatherContactNo: "",
  motherOccupation: "",
  academicDocuments: null,
};

const AdmissionForm: React.FC = () => {
  return (
    <div className="w-10/12 mx-auto my-8 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <h1 className="text-2xl font-bold text-blue-900 mb-1"> College Admission Form</h1>
      <p className="text-sm text-gray-500 mb-6">All fields are required unless marked optional</p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Form submitted:", values);
          alert(
            `Admission application submitted!\n\n${JSON.stringify(
              {
                ...values,
                academicDocuments: values.academicDocuments?.name || "No file",
              },
              null,
              2
            )}`
          );
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid, setFieldValue }) => (
          <Form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="firstName" className=" text-xs font-medium text-gray-800">
                  First Name <span className="text-red-600 text-xs">*</span>
                </label>
                <Field
                  name="firstName"
                  type="text"
                  placeholder="First"
                  className="mt-1 w-full text-sm px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                <label htmlFor="middleName" className=" text-xs font-medium text-gray-800">
                  Middle Name 
                </label>
                <Field
                  name="middleName"
                  type="text"
                  placeholder="Middle"
                  className="mt-1 w-full px-3 text-sm py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="middleName" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                <label htmlFor="lastName" className=" text-xs font-medium text-gray-800">
                  Last Name <span className="text-red-600 text-xs">*</span>
                </label>
                <Field
                  name="lastName"
                  type="text"
                  placeholder="Last"
                  className="mt-1 w-full  text-sm px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs mt-1" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className=" text-xs font-medium text-gray-800">
                  Email <span className="text-xs text-red-600">*</span>
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                <label htmlFor="phone" className=" text-xs font-medium text-gray-800">
                  Contact Number <span className="text-xs text-red-600">*</span>
                </label>
                <Field
                  name="phone"
                  type="tel"
                  placeholder="9876543210"
                  className="mt-1 w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-xs mt-1" />
              </div>
            </div>

            <div>
              <label htmlFor="dateOfBirthAD" className=" text-xs font-medium text-gray-700">
                Date of Birth <span className="text-red-600 text-xs">*</span>
              </label>
              <Field
                name="dateOfBirthAD"
                type="date"
                className="mt-1 w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage name="dateOfBirthAD" component="div" className="text-red-500 text-xs mt-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="religion" className=" text-xs font-medium text-gray-700">
                  Religion <span className="text-red-500 text-xs">*</span>
                </label>
                <Field
                  name="religion"
                  type="text"
                  placeholder="e.g., Hindu, Buddhist, Christian..."
                  className="mt-1 w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="religion" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                <label htmlFor="maritalStatus" className="text-xs font-medium text-gray-700">
                  Marital Status <span className="text-red-500 text-xs">*</span>
                </label>
                <Field
                  as="select"
                  name="maritalStatus"
                  className="mt-1 w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </Field>
                <ErrorMessage name="maritalStatus" component="div" className="text-red-500 text-xs mt-1" />
              </div>
            </div>

            <div>
              <label htmlFor="program" className=" text-xs font-medium text-gray-700">
                Program <span className="text-red-600 text-xs">*</span>
              </label>
              <Field
                as="select"
                name="program"
                className="mt-1 w-full px-3 text-sm py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a program</option>
                <option value="cs">Computer Science</option>
                <option value="eng">Engineering</option>
                <option value="bba">Business Administration</option>
                <option value="med">Medicine</option>
              </Field>
              <ErrorMessage name="program" component="div" className="text-red-500 text-xs mt-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label htmlFor="permanentProvince" className=" text-xs font-medium text-gray-700">
                  Province <span className="text-red-600 text-xs">*</span>
                </label>
                <Field
                  name="permanentProvince"
                  type="text"
                  placeholder="Province"
                  className="mt-1 w-full text-sm px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="permanentProvince" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                <label htmlFor="permanentDistrict" className=" text-xs font-medium text-gray-700">
                  District <span className="text-red-600 text-xs">*</span>
                </label>
                <Field
                  name="permanentDistrict"
                  type="text"
                  placeholder="District"
                  className="mt-1 w-full px-3 text-sm py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="permanentDistrict" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                <label htmlFor="permanentWardNo" className="text-xs font-medium text-gray-700">
                  Ward No. <span className="text-red-600 text-xs">*</span>
                </label>
                <Field
                  name="permanentWardNo"
                  type="text"
                  placeholder="Ward"
                  className="mt-1 w-full px-3 text-sm py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="permanentWardNo" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                <label htmlFor="permanentVdcMunicipality" className="block text-sm font-medium text-gray-700">
                  VDC/Municipality <span className="text-red-600 text-xs">*</span>
                </label>
                <Field
                  name="permanentVdcMunicipality"
                  type="text"
                  placeholder="VDC/Municipality"
                  className="mt-1 w-full px-3 text-sm py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="permanentVdcMunicipality" component="div" className="text-red-500 text-xs mt-1" />
              </div>
            </div>

            {/* ---- Father Name & Contact ---- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fatherName" className=" text-xs font-medium text-gray-700">
                  Father's Name <span className="text-xs text-red-600">*</span>
                </label>
                <Field
                  name="fatherName"
                  type="text"
                  placeholder="Father's full name"
                  className="mt-1 w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="fatherName" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                <label htmlFor="fatherContactNo" className="text-xs font-medium text-gray-700">
                  Father's Contact No. <span className="text-red-600 text-xs">*</span>
                </label>
                <Field
                  name="fatherContactNo"
                  type="tel"
                  placeholder="9876543210"
                  className="mt-1 w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="fatherContactNo" component="div" className="text-red-500 text-xs mt-1" />
              </div>
            </div>

            {/* ---- Mother's Occupation ---- */}
            <div>
              <label htmlFor="motherOccupation" className="text-xs font-medium text-gray-700">
                Mother's Occupation <span className="text-red-600 text-xs">*</span>
              </label>
              <Field
                name="motherOccupation"
                type="text"
                placeholder="e.g., Teacher, Housewife, Doctor..."
                className="mt-1 w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage name="motherOccupation" component="div" className="text-red-500 text-xs mt-1" />
            </div>

            {/* ---- File Upload (academicDocuments) ---- */}
            <div>
              <label htmlFor="academicDocuments" className=" text-xs font-medium text-gray-700">
                Academic Documents
              </label>
              <input
                id="academicDocuments"
                name="academicDocuments"
                type="file"
                onChange={(event) => {
                  const file = event.currentTarget.files?.[0] || null;
                  setFieldValue("academicDocuments", file);
                }}
                className="mt-1 w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <ErrorMessage name="academicDocuments" component="div" className="text-red-500 text-xs mt-1" />
            </div>

            {/* ---- Submit ---- */}
            <button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="w-full py-2 px-4 bg-blue-800 hover:bg-blue-700 text-white font-semibold cursor-pointer rounded-md shadow-sm transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdmissionForm;