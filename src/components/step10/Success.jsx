import { useState } from "react";
import Button from "../common/Button";

function Success({ formData, setStep, setFormData }) {
  const [applicationId] = useState(() => {
  return (
    "LA" +
    new Date().getFullYear() +
    Math.floor(Math.random() * 100000)
  );
});

  const [today] = useState(() =>
  new Date().toLocaleString("en-IN")
);
  const handleNewApplication = () => {
    localStorage.removeItem("loanApplication");

    setFormData({});

    setStep(1);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-3xl">

      <div className="text-center">

        <div className="text-7xl mb-4">
          🎉
        </div>

        <h1 className="text-3xl font-bold text-green-600 mb-3">
          Application Submitted Successfully
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for submitting your loan application.
        </p>

      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">

        <h2 className="text-xl font-bold text-green-700 mb-4">
          Application Details
        </h2>

        <div className="space-y-3">

          <p>
            <strong>Application ID :</strong>{" "}
            {applicationId}
          </p>

          <p>
            <strong>Submission Date :</strong>{" "}
            {today}
          </p>

          <p>
            <strong>Applicant :</strong>{" "}
            {formData.fullName}
          </p>

          <p>
            <strong>Loan Type :</strong>{" "}
            {formData.loanType}
          </p>

          <p>
            <strong>Loan Amount :</strong>{" "}
            ₹
            {Number(
              formData.loanAmount
            ).toLocaleString("en-IN")}
          </p>

        </div>

      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">

        <h2 className="text-lg font-semibold text-blue-700 mb-3">
          What Happens Next?
        </h2>

        <ul className="list-disc pl-5 space-y-2 text-gray-700">

          <li>
            Your application will be reviewed.
          </li>

          <li>
            Our representative may contact you.
          </li>

          <li>
            Document verification will begin.
          </li>

          <li>
            Loan approval depends on eligibility.
          </li>

        </ul>

      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center">

        <Button
          variant="secondary"
          type="button"
          onClick={handlePrint}
        >
          Print Receipt
        </Button>

        <Button
          type="button"
          onClick={handleNewApplication}
        >
          Apply Again
        </Button>

      </div>

    </div>
  );
}

export default Success;