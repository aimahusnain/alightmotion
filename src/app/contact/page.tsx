"use client";

import Footer from "@/src/components/Footer";
// pages/create.tsx

import { NextPage } from "next";
import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  reason: string;
  message: string;
}

const initialContactFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  reason: "",
  message: "",
};

const Create: NextPage = () => {
  const [formData, setFormData] = useState(initialContactFormData);
  const [formValid, setFormValid] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form data sent successfully");
      } else {
        console.error("Error sending form data");
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validateForm(); // Validate the form on each input change
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validateForm(); // Validate the form on each select change
  };

  const validateForm = () => {
    // Check if all fields are filled
    const isFormValid = Object.values(formData).every((value) => value.trim() !== "");
    setFormValid(isFormValid);
  };


  return  (
    <div>
      <div className="absolute z-[10] p-7 pt-20 w-full h-full">
        <div className="justify-center items-center flex flex-col gap-4">
          <div className="shadow-lg w-full md:w-2/3 lg:w-1/2 xl:w-1/3 space-y-6">
            <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p>
              If you want to Contact Alight Motion administrator, Send your
              suggestions, Report website bugs, or Submit your apps, Please
              contact us using the following way:
            </p>
            </div>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-primary bg-transparent border-white text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-primary bg-transparent border-white text-white"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-primary bg-transparent border-white text-white"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium">
                  Reason:
                </label>
                <div className="mt-1 space-x-4">
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleSelectChange}
                    required
                    className="p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-primary bg-transparent text-white appearance-none"
                    style={{ backgroundColor: "black" }}
                  >
                    <option value="">Select a reason</option>
                    <option value="comments_feedback">Comments and feedback</option>
                    <option value="report_problem">Report a problem</option>
                    <option value="dmca">DMCA takedown request</option>
                    <option value="developer_support">Developer Support and Feedback</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-primary bg-transparent border-white text-white"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className={`mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-primary ${formValid ? "bg-primary text-white" : "cursor-not-allowed bg-transparent border-white text-white"}`}
                  disabled={!formValid}
                >
                  Submit Contact Form
                </button>
              </div>
            </form>
          </div>
          <div className="w-full px-16">
          <Footer />
          </div>
        </div>
      </div>

      <img
        src="/bg.png"
        className="hidden md:block h-screen overflow-hidden w-full"
        alt="sdf"
      />
    </div>
  );
};

export default Create;
