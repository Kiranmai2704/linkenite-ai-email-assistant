import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/emails") // backend API
      .then((res) => res.json())
      .then((data) => {
        setEmails(data.emails || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching emails:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading emails...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📧 Support Emails</h1>
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr>
            <th className="border border-gray-400 px-2 py-1">Sender</th>
            <th className="border border-gray-400 px-2 py-1">Subject</th>
            <th className="border border-gray-400 px-2 py-1">Date</th>
            <th className="border border-gray-400 px-2 py-1">Body</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email, idx) => (
            <tr key={idx}>
              <td className="border border-gray-400 px-2 py-1">{email.Sender || "N/A"}</td>
              <td className="border border-gray-400 px-2 py-1">{email.Subject || "N/A"}</td>
              <td className="border border-gray-400 px-2 py-1">{email.Date || "N/A"}</td>
              <td className="border border-gray-400 px-2 py-1">{email.Body?.slice(0, 50)}...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
