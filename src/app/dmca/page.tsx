import Footer from "@/src/components/Footer";
import React from "react";
import Bgcolors from "@/src/components/mylayouts/bgcolors";

const dmca = () => {
  return (
      <Bgcolors>
          <div className="mb-20 flex flex-col gap-4 lg:mx-44 md:mx-16 sm:mx-4 space-y-3">
            <h1 className="sm:text-5xl text-4xl font-extrabold">
            DMCA Policy for [Your Website Domain]
            </h1> 
            <p className="text-xl text-white/60">
            The Digital Millennium Copyright Act (“DMCA”) serves as a safeguard to protect the rights of content creators against unauthorized use and distribution of their work on the internet. At [Your Website Domain], we are committed to upholding intellectual property rights and have implemented a comprehensive DMCA policy to address copyright infringement issues effectively.
            </p>

            <h2 className="text-4xl font-bold">Scope of Application</h2>
            <p className="text-xl text-white/60">
            This DMCA policy pertains to all aspects of [Your Website Domain], including but not limited to the “[YourWebsiteDomain.com]” website, its associated products, and services collectively referred to as the “Services.”
            </p>
            <h2 className="text-4xl font-bold">Our Commitment</h2>
            <p className="text-xl text-white/60">
            We value the creative efforts of content creators and aim to promptly address and resolve any copyright infringement matters. Our commitment extends to responding diligently to valid notifications of alleged copyright violations in accordance with the United States Digital Millennium Copyright Act of 1998.
            </p>
            <h2 className="text-4xl font-bold">Submission Guidelines for Copyright Complaints</h2>
            <p className="text-xl text-white/60">
            If you are a copyright owner or an authorized agent and believe that material accessible through our Services infringes upon your copyrights, we invite you to submit a written copyright infringement notification (“Notification”). Please use the contact details provided below to submit your Notification, ensuring compliance with all DMCA requirements.
            </p>

            <h2 className="text-4xl font-bold">Before Submitting a Complaint</h2>
            <p className="text-xl text-white/60">
            Prior to submitting a copyright complaint, it is advisable to seek legal counsel if you are uncertain about the infringement status of the material in question. The DMCA mandates the inclusion of personal information in the infringement notification, and if privacy concerns arise, consult with legal professionals accordingly.
            </p>
            <h2 className="text-4xl font-bold">Notification Review Process</h2>
            <p className="text-xl text-white/60">
            Upon receiving a valid Notification, we will conduct a thorough review to assess its accuracy, validity, and completeness. If the complaint meets the DMCA requirements, our response may involve the removal or restriction of access to the allegedly infringing material.
            </p>
            <p className="text-xl text-white/60">
            In cases where materials are removed or access restricted, we will make a good faith effort to notify the affected user, providing relevant information about the action taken.
            </p>
            
            
            <h2 className="text-4xl font-bold">Operator's Discretion</h2>
            <p className="text-xl text-white/60">
            The Operator reserves the right to take no action if a DMCA copyright infringement notification fails to comply with all DMCA requirements. This policy does not limit our ability to pursue other remedies to address suspected infringement.
            </p>
            <h2 className="text-4xl font-bold">
            Changes and Amendments
            </h2>
            <p className="text-xl text-white/60">
            We retain the right to modify this policy or its terms concerning the Website and Services at our discretion. Notification of any changes will be made through prominent display on the main page of the Website, via email, or other means determined at our discretion. Your continued use of the Website and Services after the effective date of any revisions constitutes consent to those changes.
            </p>
            <h2 className="text-4xl font-bold">Reporting Copyright Infringement</h2>
            <p className="text-xl text-white/60">
            To notify us of infringing material or activity, kindly contact us using the following email address: <br />
            Email: [Your designated email address]
            </p>
            <p>Please allow 1-2 business days for an email response.</p>
            <p>Thank you for your cooperation in helping us maintain a respectful and lawful online environment.</p>
          </div>
          </Bgcolors>
  );
};

export default dmca;
