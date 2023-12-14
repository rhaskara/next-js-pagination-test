'use client'
import React from "react";
import { I_CANDIDATE } from "@/utils";
import Image from "next/image";

interface TableProps {
  data: I_CANDIDATE[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800 text-lg sm:text-xl">Candidates</h2>
      </header>
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap hidden sm:table-cell">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-2 whitespace-nowrap hidden lg:table-cell">
                  <div className="font-semibold text-left">Education</div>
                </th>
                <th className="p-2 whitespace-nowrap hidden xl:table-cell">
                  <div className="font-semibold text-center">Job Title</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {data.map((candidate) => {
                return <tr key={candidate.id}>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <Image className="rounded-full" src={candidate.avatar} width="40" height="40" alt={`${candidate.first_name} ${candidate.last_name}`} />
                      </div>
                      <div className="font-medium text-gray-800">{candidate.first_name} {candidate.last_name}</div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap hidden sm:table-cell">
                    <div className="text-left">{candidate.email}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap hidden lg:table-cell">
                    <div className="text-left font-medium">{candidate.education}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap hidden xl:table-cell">
                    <div className="text-center font-medium">{candidate.job_title}</div>
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;