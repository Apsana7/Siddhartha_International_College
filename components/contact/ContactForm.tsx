"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,

  // Facebook,
  // Twitter,
  // Instagram,
  // Linkedin,
} from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const validationSchema = Yup.object({
  name: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().matches(/^[0-9+\-\s()]+$/, "Invalid phone number"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const handleSubmit = (
    values: FormValues,
    { setSubmitting, resetForm }: any
  ) => {
    setTimeout(() => {
      console.log("Form data:", values);
      alert("Message sent successfully!");
      resetForm();
      setSubmitting(false);
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Form */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Send Us a Message
          </h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, touched, errors }) => (
              <Form className="space-y-5">
                {/* Name */}
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className={`w-full pl-2 text-xs pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition-colors ${touched.name && errors.name
                        ? "border-gray-500"
                        : "border-gray-300"
                      }`}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className={`w-full pl-2 pr-4 py-2.5 text-xs border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition-colors ${touched.email && errors.email
                        ? "border-gray-500"
                        : "border-gray-300"
                      }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Field
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(123) 456-7890"
                    className="w-full pl-2 text-xs pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition-colors"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    className={`w-full px-2 py-2.5 text-xs border rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition-colors resize-none ${touched.message && errors.message
                        ? "border-gray-500"
                        : "border-gray-300"
                      }`}
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-orange-600 hover:bg-orange-700 cursor-pointer text-white font-semibold px-7 py-3 rounded-lg transition-colors duration-200 disabled:opacity-50 shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/* Right column: Contact Info + Social Media */}
      <div>
        {/* Contact Information Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-fit">
          <h3 className="text-xl font-bold text-gray-800 mb-5">
            Contact Information
          </h3>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <div className="flex items-center justify-center">
                <MapPin className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">Address</p>
                <p className="text-sm text-gray-600">
                 
                  Kalikapath, Butwal, Nepal, 32900
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex items-center justify-center">
                <Phone className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">Phone</p>
                <a
                  href="tel:+1234567890"
                  className="text-sm text-gray-600 hover:text-orange-600 transition-colors"
                >

                  985-7062883
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex items-center justify-center">
                <Mail className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">Email</p>
                <a
                  href="mailto:info@buildco.com"
                  className="text-sm text-gray-600 hover:text-orange-600 transition-colors"
                >
                  sic.butwal@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex items-center justify-center">
                <Clock className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">
                  Working Hours
                </p>
                <p className="text-sm text-gray-600">
                  Mon – Fri: 8am – 6pm
                  <br />
                  Sat: 9am – 2pm
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Social Media Section (added) */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mt-6">
          <h4 className="text-lg font-bold text-gray-800 mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-orange-100 text-blue-600 p-3 rounded-full transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-orange-100 text-blue-600 p-3 rounded-full transition-colors duration-200"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-orange-100 text-red-600 p-3 rounded-full transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-orange-100 text-blue-600 p-3 rounded-full transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;