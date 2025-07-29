'use client';
import React from 'react';

const ContentArchivalPolicy = (): JSX.Element => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Archival Policy</h1>

      <p className="mb-4">
        Content Archival Mechanism is in place to ensure that all outdated website URLs and documents are to be removed from the website or moved to archive. 
        This will help in ensuring the Institute, that the expired contents are removed from the portal or available in archival section.
        Archival Policy as enlisted below:
      </p>

      <ul className="list-disc list-inside mb-4">
        <li>All Announcement/Notices and Recruitment discontinued will be archived.</li>
        <li>
          Every three months website contents audit will be done under guidance of Webmaster and he/she will certified the website and give the assurance that the portal is updated and his/her report should be submit to Director.
        </li>
      </ul>
    </div>
  );
};

export default ContentArchivalPolicy;