'use client';
import React from 'react';

const AccessibilityStatement = (): JSX.Element => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center text-[#06779B]">Accessibility Statement</h1>

      <p className="mb-4">
        We are committed to ensuring that the IET DAVV website is accessible to all users, irrespective of the device in use, technology, or ability.
        It has been built with the aim of providing maximum accessibility and usability to its visitors.
        As a result, this portal can be viewed from a variety of devices such as desktop/laptop computers, web-enabled mobile devices, etc.
      </p>

      <p className="mb-4">
        We aim to be standards-compliant and follow principles of usability and universal design,
        which should help all visitors of this website.
      </p>

      <p className="mb-4">
        This portal is designed using HTML 5.0, CSS 3.0, and Bootstrap 4.0 (transitional) to meet the Guidelines for Indian Government Websites.
        Part of the information on the website is also made available through links to external websites.
        These external websites are maintained by their respective departments, who are responsible for making their sites accessible.
      </p>

      <p>
        If you have any problem or suggestion regarding the accessibility of this website,
        please write to us to enable us to respond in a helpful manner.
        Do let us know the nature of the problem along with your contact information.
      </p>
    </div>
  );
};

export default AccessibilityStatement;
