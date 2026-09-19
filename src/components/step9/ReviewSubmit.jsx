import FormHeader from "../common/FormHeader";
import Button from "../common/Button";

function ReviewSubmit({
  step,
  setStep,
  formData,
}) {

  // Simple EMI Calculation

  const principal = Number(formData.loanAmount || 0);

  const months = Number(formData.loanTenure || 1);

  const annualRate = 10;

  const monthlyRate = annualRate / 12 / 100;

  let emi = 0;

  if (principal > 0 && months > 0) {

    emi =
      (principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

  }

  const formatCurrency = (value) => {

    if (!value) return "N/A";

    return Number(value).toLocaleString("en-IN");

  };

  const handleSubmit = () => {

    console.log("Loan Application");

    console.log(formData);

    setStep(10);

  };

  return (

    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-5xl">

      <FormHeader
        appTitle="Loan Application"
        sectionTitle="Review & Submit"
        currentStep={step}
        totalSteps={10}
      />
            {/* ===========================
          LOAN SUMMARY
      ============================ */}

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">

        <h2 className="text-xl font-bold text-blue-700 mb-4">

          Loan Summary

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <p>

            <strong>Loan Type:</strong>

            {" "}

            {formData.loanType}

          </p>

          <p>

            <strong>Loan Amount:</strong>

            ₹ {formatCurrency(formData.loanAmount)}

          </p>

          <p>

            <strong>Loan Tenure:</strong>

            {formData.loanTenure} Months

          </p>

          <p>

            <strong>Purpose:</strong>

            {formData.loanPurpose}

          </p>

        </div>

      </div>
            {/* ===========================
          EMI ESTIMATE
      ============================ */}

      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">

        <h2 className="text-xl font-bold text-green-700 mb-4">

          Estimated EMI

        </h2>

        <h1 className="text-4xl font-bold text-green-600">

          ₹ {emi.toFixed(0)}

        </h1>

        <p className="text-gray-600 mt-2">

          Estimated Monthly EMI @10% interest

        </p>

      </div>
            {/* ===========================
          PERSONAL INFORMATION
      ============================ */}

      <div className="bg-gray-50 border rounded-xl p-6 mb-6">

        <h2 className="text-xl font-bold mb-4">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <p>
            <strong>Full Name:</strong>{" "}
            {formData.fullName || "N/A"}
          </p>

          <p>
            <strong>Father Name:</strong>{" "}
            {formData.fatherName || "N/A"}
          </p>

          <p>
            <strong>Date of Birth:</strong>{" "}
            {formData.dob || "N/A"}
          </p>

          <p>
            <strong>Gender:</strong>{" "}
            {formData.gender || "N/A"}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {formData.email || "N/A"}
          </p>

          <p>
            <strong>Mobile:</strong>{" "}
            {formData.mobileNumber || "N/A"}
          </p>

        </div>

      </div>

      {/* ===========================
          EMPLOYMENT
      ============================ */}

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">

        <h2 className="text-xl font-bold text-yellow-700 mb-4">
          Employment Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <p>
            <strong>Employment Type:</strong>{" "}
            {formData.employmentType || "N/A"}
          </p>

          {formData.employmentType === "Salaried" && (
            <>
              <p>
                <strong>Company:</strong>{" "}
                {formData.companyName || "N/A"}
              </p>

              <p>
                <strong>Designation:</strong>{" "}
                {formData.designation || "N/A"}
              </p>

              <p>
                <strong>Experience:</strong>{" "}
                {formData.experience || "N/A"} Years
              </p>

              <p>
                <strong>Monthly Salary:</strong>{" "}
                ₹ {formatCurrency(formData.monthlyIncome)}
              </p>
            </>
          )}

          {formData.employmentType === "Self Employed" && (
            <>
              <p>
                <strong>Business Name:</strong>{" "}
                {formData.businessName || "N/A"}
              </p>

              <p>
                <strong>Business Type:</strong>{" "}
                {formData.businessType || "N/A"}
              </p>

              <p>
                <strong>Annual Income:</strong>{" "}
                ₹ {formatCurrency(formData.annualIncome)}
              </p>
            </>
          )}

          {formData.employmentType === "Business Owner" && (
            <>
              <p>
                <strong>Business:</strong>{" "}
                {formData.businessName || "N/A"}
              </p>

              <p>
                <strong>GST:</strong>{" "}
                {formData.gstNumber || "N/A"}
              </p>

              <p>
                <strong>Annual Turnover:</strong>{" "}
                ₹ {formatCurrency(formData.annualTurnover)}
              </p>
            </>
          )}

          {formData.employmentType === "Student" && (
            <>
              <p>
                <strong>College:</strong>{" "}
                {formData.collegeName || "N/A"}
              </p>

              <p>
                <strong>Course:</strong>{" "}
                {formData.course || "N/A"}
              </p>
            </>
          )}

          {formData.employmentType === "Retired" && (
            <>
              <p>
                <strong>Monthly Pension:</strong>{" "}
                ₹ {formatCurrency(formData.pension)}
              </p>
            </>
          )}

        </div>

      </div>

      {/* ===========================
          KYC SUMMARY
      ============================ */}

      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">

        <h2 className="text-xl font-bold text-green-700 mb-4">
          KYC Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <p>
            <strong>Aadhaar:</strong>{" "}
            {formData.aadhaar || "N/A"}
          </p>

          <p>
            <strong>PAN:</strong>{" "}
            {formData.pan || "N/A"}
          </p>

          <p>
            <strong>Passport:</strong>{" "}
            {formData.passport || "Not Provided"}
          </p>

          <p>
            <strong>Driving License:</strong>{" "}
            {formData.license || "Not Provided"}
          </p>

          <p>
            <strong>Nationality:</strong>{" "}
            {formData.nationality || "N/A"}
          </p>

          <p>
            <strong>Marital Status:</strong>{" "}
            {formData.maritalStatus || "N/A"}
          </p>

        </div>

      </div>

      {/* ===========================
          DOCUMENT STATUS
      ============================ */}

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-6">

        <h2 className="text-xl font-bold text-indigo-700 mb-4">
          Uploaded Documents
        </h2>

        {formData.documents ? (

          <div className="space-y-2">

            {Object.keys(formData.documents).map((doc) => (

              <div
                key={doc}
                className="flex justify-between border-b pb-2"
              >
                <span className="capitalize">
                  {doc}
                </span>

                <span className="text-green-600 font-semibold">
                  ✔ Uploaded
                </span>

              </div>

            ))}

          </div>

        ) : (

          <p>No documents uploaded.</p>

        )}

      </div>
            {/* ===========================
          SIGNATURE
      ============================ */}

      <div className="bg-white border rounded-xl p-6 mb-6">

        <h2 className="text-xl font-bold mb-4">
          Digital Signature
        </h2>

        {formData.signature ? (

          <div className="border rounded-lg p-4 bg-gray-50">

            <img
              src={formData.signature}
              alt="Signature"
              className="h-28 object-contain"
            />

          </div>

        ) : (

          <p className="text-red-500">
            Signature Not Available
          </p>

        )}

      </div>

      {/* ===========================
          PRE-APPROVAL SUMMARY
      ============================ */}

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">

        <h2 className="text-xl font-bold text-blue-700 mb-4">
          Pre-Approval Summary
        </h2>

        <div className="space-y-2">

          <p>
            ✔ Application Form Completed
          </p>

          <p>
            ✔ KYC Documents Verified
          </p>

          <p>
            ✔ Required Documents Uploaded
          </p>

          <p>
            ✔ Digital Signature Available
          </p>

          <p className="font-semibold text-green-700 mt-4">
            Your application is ready for submission.
          </p>

        </div>

      </div>

      {/* ===========================
          DECLARATION
      ============================ */}

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">

        <label className="flex items-start gap-3">

          <input
            type="checkbox"
            required
            className="mt-1"
          />

          <span className="text-sm text-gray-700">

            I hereby declare that all the information
            provided in this application is true and
            correct to the best of my knowledge. I
            authorize the bank to verify my documents
            and process my loan application.

          </span>

        </label>

      </div>

      {/* ===========================
          BUTTONS
      ============================ */}

      <div className="flex flex-col md:flex-row justify-between gap-4">

        <Button
          type="button"
          variant="secondary"
          onClick={() => setStep(8)}
        >
          Back
        </Button>

        <Button
          type="button"
          variant="success"
          onClick={handleSubmit}
        >
          Submit Application
        </Button>

      </div>

    </div>

  );

}

export default ReviewSubmit;