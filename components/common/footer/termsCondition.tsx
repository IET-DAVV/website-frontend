'use client';
import React from 'react';

const TermsAndConditions = (): JSX.Element => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center text-[#06779B]">Terms & Conditions</h1>

      <p className="mb-4">
        This website is designed, developed, and maintained by IET DAVV.
      </p>

      <p className="mb-4">
        Though all efforts have been made to ensure the accuracy and currency of the content on this website,
        the same should not be construed as a statement of law or used for any legal purposes.
        In case of any ambiguity or doubts, users are advised to verify/check with IET DAVV and/or other source(s), 
        and to obtain appropriate professional advice.
      </p>

      <p className="mb-4">
        Under no circumstances will IET DAVV be liable for any expense, loss, or damage including, without limitation,
        indirect or consequential loss or damage, or any expense, loss, or damage whatsoever arising from use, or loss of use, of data,
        arising out of or in connection with the use of this website.
        These terms and conditions shall be governed by and construed in accordance with Indian Laws.
        Any dispute arising under these terms and conditions shall be subject to the jurisdiction of the courts of India.
      </p>

      <p className="mb-4">
        The information posted on this website could include hypertext links or pointers to information created and maintained 
        by non-Government/private organizations. IET DAVV provides these links and pointers solely for your information and convenience. 
        When you select a link to an outside website, you are leaving the IET DAVV website and are subject to the privacy and security policies of the owners/sponsors of the outside website.
      </p>

      <p className="mb-4">
        IET DAVV does not guarantee the availability of such linked pages at all times. 
        IET DAVV cannot authorize the use of copyrighted materials contained in linked websites.
        Users are advised to request such authorization from the owner of the linked website.
      </p>

      <p>
        IET DAVV does not guarantee that the linked websites are complying with Indian Government Web Guidelines.
      </p>
    </div>
  );
};

export default TermsAndConditions;
