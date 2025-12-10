export default function UserDataDeletion() {
  return (
    <main className="max-w-4xl mx-auto px-5 py-10 my-[100px] leading-relaxed">
      <h1 className="text-3xl font-bold mb-4">User Data Deletion Instructions</h1>
      <p className="text-sm text-gray-600 mb-6">Last updated: May 22, 2025</p>

      <p className="mb-4">
        At FT Digital Solutions, we respect your privacy and are committed to protecting your
        personal data. If you wish to request the deletion of your account or any personal data
        we may have collected about you, please follow the instructions below.
      </p>

      {/* How to Request */}
      <h2 className="text-xl font-semibold mt-6 mb-2">How to Request Data Deletion</h2>
      <p className="mb-4">You can request your data to be deleted by any of the following methods:</p>

      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          <strong>Email:</strong> Send an email to{" "}
          <span className="font-medium">info@ftdigitalsolutions.in</span> with the subject:
          <span className="italic"> “Data Deletion Request”</span>.  
          Include your name, registered email ID, and any relevant details.
        </li>
        <li>
          <strong>Contact Form:</strong> Use the form on our Contact Page and choose “Data Deletion”
          as the reason.
        </li>
        <li>
          <strong>Mobile App Users:</strong> If applicable, use the “Delete My Account” option in
          the app’s Settings menu.
        </li>
      </ul>

      {/* What Happens After */}
      <h2 className="text-xl font-semibold mt-6 mb-2">What Happens After Deletion?</h2>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Your personal data will be permanently deleted from our servers.</li>
        <li>Backup data may remain for up to 30 days before being automatically purged.</li>
        <li>
          Some non-personally identifiable information may be retained for analytics or legal
          compliance.
        </li>
      </ul>

      {/* Verification */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Verification Process</h2>
      <p className="mb-4">
        For your security, we may require proof of identity before processing a data deletion
        request. This helps prevent unauthorized attempts to delete personal information.
      </p>

      {/* Contact */}
      <h2 className="text-xl font-semibold mt-6 mb-2">Need Help?</h2>
      <p className="mb-2">You can contact us anytime:</p>

      <p className="mb-1"><strong>Email:</strong> info@ftdigitalsolutions.in</p>
      <p className="mb-1"><strong>Phone:</strong> +91-87688 76897</p>
      <p className="mb-4">
        <strong>Address:</strong> No: 46, Giri Rd, Satyamurthy Nagar, T. Nagar, Chennai,
        Tamil Nadu 600017, India
      </p>

      <p className="text-sm text-gray-600">
        <em>
          Note: By requesting data deletion, you understand that your account and associated
          information may no longer be recoverable after deletion.
        </em>
      </p>
    </main>
  );
}
