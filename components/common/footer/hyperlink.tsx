'use client';
import React from 'react';

const HyperLinkingPolicy = (): JSX.Element => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center text-[#06779B]">Hyper Linking Policy</h1>

      <p>
        We do not object to you linking directly to the information that is hosted on the IET DAVV website and no prior permission is required for the same.
        However, we would like you to inform us about any links provided to our site so that you can be informed of any changes or updates therein.
        Also, we do not permit our pages to be loaded into frames on your site.
        The pages belonging to this site must load into a newly opened browser window of the user.
      </p>

      <p className="mt-4">
        Prior permission is required before hyperlinks are directed from any website to this site. 
        When linked to IET DAVV’s website, it should be done in a way that it does not appear as a part of the linking website.
      </p>
    </div>
  );
};

export default HyperLinkingPolicy;
