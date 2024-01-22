import Footer from "@/src/components/Footer";
import React from "react";
import Bgcolors from "@/src/components/mylayouts/bgcolors";

const privacy_and_policy = () => {
  return (
        <Bgcolors>
          <div className="mb-20 flex flex-col gap-4 lg:mx-44 md:mx-16 sm:mx-4 space-y-3">
            <h1 className="sm:text-5xl text-4xl font-extrabold">
              Terms and Conditions
            </h1>
            <p className="text-xl text-white/60">Welcome to [Your Company Name]&apos;s Website!</p>
            <p className="text-xl text-white/60">
              These terms and conditions outline the rules and regulations for
              the use of [Your Company Name]&apos;s Website, located at [Your Website
              URL].
            </p>
            <p className="text-xl text-white/60">
              By accessing this website, we assume you accept these terms and
              conditions. Do not continue to use the website if you do not agree
              to take all of the terms and conditions stated on this page.
            </p>
            <ol className="list-decimal ml-8">
              <li className="text-2xl font-bold">Definitions</li>
              <ul className="space-y-4 my-5">
                <li className="text-white/60">
                  1.1. "Client", "You", and "Your" refers to you, the person
                  logging on this website and compliant to [Your Company Name]&apos;s
                  terms and conditions.
                </li>
                <li className="text-white/60">
                  1.2. "The Company," "Ourselves," "We," "Our," and "Us," refers
                  to [Your Company Name].
                </li>
                <li className="text-white/60">
                  1.3. "Party", "Parties", or "Us", refers to both the Client
                  and ourselves. All terms refer to the offer, acceptance, and
                  consideration of payment necessary to undertake the process of
                  our assistance to the Client.
                </li>
              </ul>

              <li className="text-2xl font-bold">Cookies</li>
              <ul className="space-y-4 my-5">
                <li className="text-white/60">
                  2.1. We employ the use of cookies. By accessing [Your Website
                  URL], you agree to use cookies in agreement with [Your Company
                  Name]&apos;s Privacy Policy.
                </li>
                <li className="text-white/60">
                  2.2. Most interactive websites use cookies to enable the
                  functionality of certain areas and make it easier for
                  visitors. Some affiliate/advertising partners may also use
                  cookies.
                </li>
              </ul>

              <li className="text-2xl font-bold">License</li>
              <ul className="space-y-4 my-5">
                <li className="text-white/60">
                  3.1. Unless otherwise stated, [Your Company Name] and/or its
                  licensors own the intellectual property rights for all
                  material on [Your Website URL]. All intellectual property
                  rights are reserved.
                </li>
                <li className="text-white/60">
                  3.2. You must not republish, sell, rent, sub-license,
                  reproduce, duplicate, copy, or redistribute material from
                  [Your Website URL].
                </li>
              </ul>

              <li className="text-2xl font-bold">User Comments</li>
              <ul className="space-y-4 my-5">
                <li className="text-white/60">
                  4.1. Parts of this website allow users to post and exchange
                  opinions and information. We do not filter, edit, publish, or
                  review Comments prior to their presence on the website.
                </li>
                <li className="text-white/60">
                  4.2. You warrant and represent that your Comments do not
                  invade any intellectual property right, contain defamatory or
                  offensive material, or solicit business or promote unlawful
                  activities.
                </li>
                <li className="text-white/60">
                  4.3. You grant [Your Company Name] a non-exclusive license to
                  use, reproduce, and edit your Comments.
                </li>
              </ul>

              <li className="text-2xl font-bold">
                Hyperlinking to our Content
              </li>
              <ul className="space-y-4 my-5">
                <li className="text-white/60">
                  5.1. The following organizations may link to our Website
                  without prior written approval:
                </li>
                <ul className="list-disc ml-6">
                  <li>Government agencies</li>
                  <li>Search engines</li>
                  <li>News organizations</li>
                  <li>Online directory distributors</li>
                  <li>System-wide Accredited Businesses</li>
                </ul>
                <li className="text-white/60">
                  5.2. Other organizations may request linking approval by
                  contacting [Your Company Name].
                </li>
              </ul>

              <li className="text-2xl font-bold">
                Hyperlinking to our Content
              </li>
              <ul className="space-y-4 my-5">
                <li className="text-white/60">
                  6.1. Without prior approval, you may not create frames around
                  our Webpages that alter the visual presentation or appearance
                  of our Website.
                </li>
              </ul>

              <li className="text-2xl font-bold">Content Liability</li>
              <ul className="space-y-4 my-5">
                <li className="text-white/60">
                  7.1. We shall not be held responsible for any content that
                  appears on your Website. You agree to protect and defend us
                  against all claims rising on your Website.
                </li>
              </ul>

              <li className="text-2xl font-bold">Reservation of Rights</li>
              <ul className="space-y-4 my-5">
                <li className="text-white/60">
                  8.1. We reserve the right to request removal of any link to
                  our Website and to amend these terms and conditions at any
                  time.
                </li>
              </ul>

              <li className="text-2xl font-bold">Removal of Links</li>
              <ul className="space-y-4 my-5">
                <li className="text-white/60">
                  9.1. If you find any link on our Website offensive, contact
                  us. While we may consider removal requests, we are not
                  obligated to respond or comply.
                </li>
              </ul>
              <li className="text-2xl font-bold">Disclaimer</li>
              <ul className="space-y-4 my-5">
                <li className="text-white/60">
                  10.1. We do not ensure the accuracy, completeness, or
                  availability of information on this website. We exclude all
                  representations, warranties, and conditions relating to our
                  website and its use.
                </li>
                <li className="text-white/60">
                  10.2. Nothing in this disclaimer will limit or exclude
                  liability for death or personal injury, fraud, or fraudulent
                  misrepresentation.
                </li>
              </ul>
              <p>
                By continuing to use [Your Website URL], you agree to be bound
                by and follow these terms and conditions.
              </p>
            </ol>
          </div>
      </Bgcolors>
  );
};

export default privacy_and_policy;
