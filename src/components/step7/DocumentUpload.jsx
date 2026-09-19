import { useState, useRef } from "react";
import FormHeader from "../common/FormHeader";
import Button from "../common/Button";

function DocumentUpload({
  step,
  setStep,
  formData,
  setFormData,
}) {

  const [documents, setDocuments] = useState(
    formData.documents || {}
  );

  const [dragging, setDragging] = useState(false);

  const [uploadProgress, setUploadProgress] = useState({});

  const inputRefs = {
    aadhaar: useRef(),
    pan: useRef(),
    income: useRef(),
    address: useRef(),
  };

  const requiredDocuments = [
    {
      key: "aadhaar",
      title: "Aadhaar Card",
    },
    {
      key: "pan",
      title: "PAN Card",
    },
    {
      key: "income",
      title: "Income Proof",
    },
    {
      key: "address",
      title: "Address Proof",
    },
  ];
  const simulateUpload = (type, file) => {

  let progress = 0;

  const interval = setInterval(() => {

    progress += 10;

    setUploadProgress((prev) => ({
      ...prev,
      [type]: progress,
    }));

    if (progress >= 100) {

      clearInterval(interval);

      setDocuments((prev) => ({
        ...prev,
        [type]: file,
      }));

    }

  }, 150);

};
const handleFile = (type, file) => {

  if (!file) return;

  const allowedTypes = [
    "image/png",
    "image/jpeg",
    "application/pdf",
  ];

  if (!allowedTypes.includes(file.type)) {

    alert(
      "Only JPG, PNG and PDF files are allowed."
    );

    return;

  }

  if (file.size > 5 * 1024 * 1024) {

    alert(
      "Maximum file size is 5MB."
    );

    return;

  }

  simulateUpload(type, file);

};
const handleDrop = (e, type) => {

  e.preventDefault();

  setDragging(false);

  const file = e.dataTransfer.files[0];

  handleFile(type, file);

};

const handleDragOver = (e) => {

  e.preventDefault();

  setDragging(true);

};

const handleDragLeave = () => {

  setDragging(false);

};
const removeFile = (type) => {

  setDocuments((prev) => {

    const updated = { ...prev };

    delete updated[type];

    return updated;

  });

};
const handleSubmit = () => {

  if (

    !documents.aadhaar ||

    !documents.pan ||

    !documents.income ||

    !documents.address

  ) {

    alert(
      "Please upload all required documents."
    );

    return;

  }

  setFormData({

    ...formData,

    documents,

  });

  setStep(8);

};
return (

<div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-4xl">

<FormHeader
appTitle="Loan Application"
sectionTitle="Document Upload"
currentStep={step}
totalSteps={9}
/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {requiredDocuments.map((doc) => (

          <div
            key={doc.key}
            className={`border-2 rounded-xl p-5 transition
            ${
              dragging
                ? "border-blue-500 bg-blue-50"
                : "border-dashed border-gray-300"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, doc.key)}
          >

            <h3 className="font-semibold text-lg mb-3">
              {doc.title}
            </h3>

            {!documents[doc.key] && (

              <>
                <p className="text-gray-500 text-sm mb-4">
                  Drag & Drop your file here
                  <br />
                  or
                </p>

                <Button
                  type="button"
                  onClick={() =>
                    inputRefs[doc.key].current.click()
                  }
                >
                  Browse File
                </Button>

                <input
                  ref={inputRefs[doc.key]}
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  hidden
                  onChange={(e) =>
                    handleFile(
                      doc.key,
                      e.target.files[0]
                    )
                  }
                />

              </>

            )}

            {uploadProgress[doc.key] > 0 &&
              uploadProgress[doc.key] < 100 && (

                <div className="mt-4">

                  <p className="text-sm mb-2">
                    Uploading...
                  </p>

                  <div className="w-full bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-blue-600 h-3 rounded-full transition-all"
                      style={{
                        width: `${uploadProgress[doc.key]}%`,
                      }}
                    ></div>

                  </div>

                  <p className="text-xs mt-2 text-right">
                    {uploadProgress[doc.key]}%
                  </p>

                </div>

            )}
                        {/* ===========================
                FILE PREVIEW
            ============================ */}

            {documents[doc.key] && (

              <div className="mt-5 border rounded-lg p-4 bg-green-50">

                {/* Success Header */}

                <div className="flex items-center justify-between">

                  <div>

                    <p className="font-semibold text-green-700">
                      ✅ Upload Successful
                    </p>

                    <p className="text-sm text-gray-600 break-all">
                      {documents[doc.key].name}
                    </p>

                  </div>

                  <Button
                    type="button"
                    variant="danger"
                    size="sm"
                    onClick={() => removeFile(doc.key)}
                  >
                    Remove
                  </Button>

                </div>

                {/* Preview */}

                <div className="mt-4">

                  {documents[doc.key].type ===
                  "application/pdf" ? (

                    <div className="flex items-center gap-3 bg-white border rounded-lg p-3">

                      <span className="text-3xl">📄</span>

                      <div>

                        <p className="font-medium">
                          PDF Document
                        </p>

                        <p className="text-sm text-gray-500">
                          {(
                            documents[doc.key].size /
                            1024
                          ).toFixed(2)}
                          {" "}KB
                        </p>

                      </div>

                    </div>

                  ) : (

                    <img
                      src={URL.createObjectURL(
                        documents[doc.key]
                      )}
                      alt="Preview"
                      className="w-full h-48 object-contain border rounded-lg"
                    />

                  )}

                </div>

              </div>

            )}

          </div>

        ))}

      </div>
            {/* ===========================
          DOCUMENT SUMMARY
      ============================ */}

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5">

        <h2 className="text-lg font-bold text-blue-700 mb-4">
          Upload Summary
        </h2>

        <div className="space-y-3">

          {requiredDocuments.map((doc) => (

            <div
              key={doc.key}
              className="flex justify-between items-center border-b pb-2"
            >

              <span className="font-medium">
                {doc.title}
              </span>

              {documents[doc.key] ? (

                <span className="text-green-600 font-semibold">
                  ✔ Uploaded
                </span>

              ) : (

                <span className="text-red-500 font-semibold">
                  ✘ Pending
                </span>

              )}

            </div>

          ))}

        </div>

      </div>

      {/* ===========================
          BUTTONS
      ============================ */}

      <div className="flex flex-col md:flex-row justify-between gap-4 mt-8">

        <Button
          type="button"
          variant="secondary"
          onClick={() => setStep(6)}
        >
          Back
        </Button>

        <Button
          type="button"
          onClick={handleSubmit}
        >
          Next
        </Button>

      </div>

    </div>

  );

}

export default DocumentUpload;