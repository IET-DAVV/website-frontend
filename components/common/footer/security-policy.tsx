'use client';
import React from 'react';

const SecurityPolicy = (): JSX.Element => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Security Policy</h1>

      <h2 className="text-xl font-semibold mb-2">Purpose of Policy</h2>
      <p className="mb-4">
        This policy addresses the measures taken to{' '}
        <a href="https://www.ietdavv.edu.in/" className="text-blue-600 underline">
          https://www.ietdavv.edu.in/
        </a>{' '}
        safeguard the integrity of the Institute Website network and computing infrastructure,
        including but not limited to monitoring, auditing, and encryption.
      </p>

      <h2 className="text-xl font-semibold mb-2">Policy Contents</h2>
      <p>The following sections of our Website Security Policy explain these uses:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Security Measures</li>
        <li>Site Monitoring</li>
      </ul>

      <h2 className="text-lg font-semibold mb-2">A. Security Measures:</h2>
      <p className="mb-4">
        Security measures have been integrated into the design, implementation, and ongoing practices of the entire
        IET DAVV operating environment as part of its continuing commitment to risk management.
      </p>

      <p className="mb-4">
        For sensitive information such as that requested on the{' '}
        <a href="https://www.ietdavv.edu.in/" className="text-blue-600 underline">
          https://www.ietdavv.edu.in/
        </a>{' '}
        Form, users connect to the Institute website via a secure network protocol (SSL), and user information is transmitted through secure lines (encrypted data)
        to an Institute database. This database may retain, if provided, personal information that could potentially be used to identify individual users
        (e.g., e-mail address, phone number, etc.).
      </p>

      <p className="mb-4">
        Any technical standards governing security are enforced by the Institute IT Department.
        Under no circumstance should this policy be construed as warranting as fail-proof the absolute security of information provided
        and gathered through County supported websites. Please refer to the{' '}
        <a href="https://www.ietdavv.edu.in/" className="text-blue-600 underline">
          https://www.ietdavv.edu.in/
        </a>{' '}
        Privacy Policy for more information regarding the collection and{' '}
        <a href="https://www.ietdavv.edu.in/" className="text-blue-600 underline">
          https://www.ietdavv.edu.in/
        </a>{' '}
        safeguarding of information.
      </p>

      <h2 className="text-lg font-semibold mb-2">B. Site Monitoring:</h2>
      <p className="mb-4">
        The Institute provides this website and the information it contains as a public service. This system is monitored to ensure proper operation,
        to verify the functioning of applicable security features, and for comparable purposes.
        Anyone using this system expressly consents to such monitoring.
      </p>

      <p>
        Unauthorized attempts to modify any information stored on this system, to defeat or circumvent security features,
        or to utilize this system for other than its intended purposes are prohibited and may result in criminal prosecution.
      </p>
    </div>
  );
};

export default SecurityPolicy;