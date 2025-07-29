'use client';
import React from 'react';

const PrivacyPolicy = (): JSX.Element => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4">
        As a general rule, this website does not collect Personal Information about you when you visit the site.
        You can generally visit the site without revealing Personal Information, unless you choose to provide such information.
      </p>

      <h2 className="text-xl font-semibold mb-2">Site Visit Data:</h2>
      <p className="mb-4">
        This website records your visit and logs the following information for statistical purposes:
        your server’s address; the name of the top-level domain from which you access the Internet (for example, .gov, .com, .in, etc.);
        the type of browser you use; the date and time you access the site; the pages you have accessed;
        the documents downloaded; and the previous Internet address from which you linked directly to the site.
        We will not identify users or their browsing activities, except when a law enforcement agency may exercise a warrant to inspect the service provider’s logs.
      </p>

      <h2 className="text-xl font-semibold mb-2">Cookies:</h2>
      <p className="mb-4">
        A cookie is a piece of software code that an internet website sends to your browser when you access information at that site.
        This site does not use cookies.
      </p>

      <h2 className="text-xl font-semibold mb-2">Email Management:</h2>
      <p className="mb-4">
        Your email address will only be recorded if you choose to send a message.
        It will only be used for the purpose for which you have provided it and will not be added to a mailing list.
        Your email address will not be used for any other purpose and will not be disclosed without your consent.
      </p>

      <h2 className="text-xl font-semibold mb-2">Collection of Personal Information:</h2>
      <p className="mb-4">
        If you are asked for any other Personal Information, you will be informed how it will be used if you choose to give it.
        If at any time you believe the principles referred to in this privacy statement have not been followed,
        or have any other comments on these principles, please notify the webmaster through the{' '}
        <a href="/footer/contact" className="text-blue-600 underline">Contact Us</a> page.
      </p>

      <div className="mt-6 p-4 border-l-4 border-yellow-500 bg-yellow-50">
        <strong>Note:</strong> The use of the term “Personal Information” in this privacy statement refers to any information
        from which your identity is apparent or can be reasonably ascertained.
      </div>
    </div>
  );
};

export default PrivacyPolicy;