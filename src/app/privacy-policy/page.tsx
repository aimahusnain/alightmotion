import Footer from "@/src/components/Footer";
import React from "react";

const privacy_and_policy = () => {
  return (
    <div>
      <div className="absolute z-[10] p-7 pt-20 w-full h-full">
        <div className="justify-center items-center flex flex-col gap-4">
          <div className="mb-20 flex flex-col gap-4 lg:mx-44 md:mx-16 sm:mx-4 space-y-3">
            <h1 className="sm:text-5xl text-4xl font-extrabold">
              Privacy Policy for [Your Website Name]
            </h1>
            <p className="text-xl">
              At [Your Website Name], accessible from [Your Website URL], the
              privacy of our visitors is of utmost importance to us. This
              Privacy Policy document outlines the types of information
              collected and recorded by [Your Website Name] and how we utilize
              this information.
            </p>
            <p className="text-xl">
              If you have any questions or need further clarification about our
              Privacy Policy, please feel free to contact us.
            </p>
            <h2 className="text-4xl font-bold">Consent</h2>
            <p className="text-xl">
              By using our website, you consent to the terms outlined in this
              Privacy Policy.
            </p>
            <h2 className="text-4xl font-bold">Information we collect</h2>
            <p className="text-xl">
              The types of personal information we may request and the reasons
              for requesting it will be transparently communicated to you when
              we ask for your details. In instances where you directly contact
              us, we may collect additional information, including your name,
              email address, phone number, message content, and any attachments.
            </p>
            <p className="text-xl">
              When you register for an account, we may ask for your contact
              information, such as your name, company name, address, email
              address, and telephone number.
            </p>
            <h2 className="text-4xl font-bold">How we use your information</h2>
            <p className="text-xl">
              We use the collected information for various purposes, including:
            </p>
            <ul className="list-disc ml-5 text-xl">
              <li>Providing, operating, and maintaining our website</li>
              <li>Improving, personalizing, and expanding our website</li>
              <li>Analyzing how you use our website</li>
              <li>
                Developing new products, services, features, and functionality
              </li>
              <li>
                Communicating with you for customer service, updates, and other
                relevant information
              </li>
              <li>Sending emails</li>
              <li>Detecting and preventing fraud</li>
            </ul>
            <h2 className="text-4xl font-bold">Log Files</h2>
            <p className="text-xl">
              {" "}
              [Your Website Name] follows standard log file procedures, which
              include collecting internet protocol (IP) addresses, browser type,
              Internet Service Provider (ISP), date and time stamp,
              referring/exit pages, and possibly the number of clicks. This
              information is used for analyzing trends, administering the site,
              tracking user movements, and gathering demographic information. It
              is not linked to personally identifiable information.
            </p>
            <h2 className="text-4xl font-bold">Cookies and Web Beacons</h2>
            <p className="text-xl">
              Like many other websites, [Your Website Name] uses cookies to
              store information, including visitors preferences and the pages
              they access. This information is used to optimize user experiences
              by customizing content based on browser type and other factors.
            </p>
            <h2 className="text-4xl font-bold">Third-party Services</h2>
            <p className="text-xl">
              We may utilize third-party services, such as Google DoubleClick,
              which may use cookies to serve ads based on users visits to our
              site and other sites on the internet. Users can opt out of the use
              of DART cookies by visiting the Google ad and content network
              Privacy Policy.
            </p>
            <h2 className="text-4xl font-bold">
              Advertising Partners Privacy Policies
            </h2>
            <p className="text-xl">
              Please consult the Privacy Policies of our advertising partners,
              as [Your Website Name] does not have control over the cookies used
              by third-party advertisers.
            </p>
            <h2 className="text-4xl font-bold">Third Party Privacy Policies</h2>
            <p className="text-xl">
              Our Privacy Policy does not apply to other advertisers or
              websites. We recommend reviewing the Privacy Policies of these
              third-party ad servers for detailed information.
            </p>
            <h2 className="text-4xl font-bold">CCPA Privacy Rights</h2>
            <p className="text-xl">
              California consumers have the right to request disclosure of
              categories and specific pieces of personal data collected, request
              deletion of personal data, and opt-out of the sale of personal
              data. To exercise these rights, please contact us.
            </p>
            <h2 className="text-4xl font-bold">GDPR Data Protection Rights</h2>
            <p className="text-xl">
              All users have the right to access, rectify, erase, restrict
              processing, object to processing, and data portability. To
              exercise these rights, please contact us.
            </p>
            <h2 className="text-4xl font-bold">Children&apos;s Information</h2>
            <p className="text-xl">
              [Your Website Name] does not knowingly collect Personal
              Identifiable Information from children under the age of 13.
              Parents are encouraged to monitor and guide their children&apos;s
              online activity. If you believe your child provided information on
              our website, please contact us, and we will promptly remove it.
            </p>
            <h2 className="text-4xl font-bold">
              Changes to This Privacy Policy
            </h2>
            <p className="text-xl">
              We may update our Privacy Policy, and changes are effective
              immediately upon posting on this page. Please review this page
              periodically for updates.
            </p>
            <h2 className="text-4xl font-bold">Contact Us</h2>
            <p className="text-xl">
              If you have any questions or suggestions about our Privacy Policy,
              please contact us.
            </p>{" "}
          </div>
          <Footer />
        </div>
      </div>

      <img src="/bg.png" className="hidden md:block h-full w-full" alt="sdf" />

      <img
        src="/stars.png"
        alt=""
        className="hidden sm:block h-full w-full absolute top-[600px]"
      />
      <img
        src="/vertical_stars.png"
        alt=""
        className="sm:hidden h-full w-full absolute top-[500px]"
      />
    </div>
  );
};

export default privacy_and_policy;
