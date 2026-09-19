import { useState } from "react";
import { useForm } from "react-hook-form";
import FormHeader from "../common/FormHeader";
import Button from "../common/Button";

const nationalities = [
  "Indian",
  "American",
  "Canadian",
  "Australian",
];

function KYCInfo({
  setStep,
  formData,
  setFormData,
}) {

  const [panVerified, setPanVerified] = useState(false);
  const [aadhaarVerified, setAadhaarVerified] = useState(false);

  const [panLoading, setPanLoading] = useState(false);
  const [aadhaarLoading, setAadhaarLoading] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const verifyPAN = () => {

    const value = getValues("pan");

    const regex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

    if (!regex.test(value)) {
      alert("Enter a valid PAN Number");
      return;
    }

    setPanLoading(true);

    setTimeout(() => {

      setPanLoading(false);

      setPanVerified(true);

    }, 2000);

  };

  const verifyAadhaar = () => {

    const value = getValues("aadhaar");

    const regex = /^[0-9]{12}$/;

    if (!regex.test(value)) {
      alert("Enter a valid Aadhaar Number");
      return;
    }

    setAadhaarLoading(true);

    setTimeout(() => {

      setAadhaarLoading(false);

      setAadhaarVerified(true);

    }, 2000);

  };

  const onSubmit = (data) => {

    if (!panVerified) {
      alert("Please verify PAN Number.");
      return;
    }

    if (!aadhaarVerified) {
      alert("Please verify Aadhaar Number.");
      return;
    }

    setFormData({
      ...formData,
      ...data,
    });

    setStep(6);

  };

  return (
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl"
  >
    <FormHeader
      appTitle="Loan Application"
      sectionTitle="KYC Information"
      currentStep={5}
      totalSteps={9}
    />
      {/* ===========================
          AADHAAR
      ============================ */}

      <div className="mb-6">

        <label className="block font-medium mb-2">
          Aadhaar Number
          <span className="text-red-500 ml-1">*</span>
        </label>

        <div className="flex flex-col md:flex-row gap-3">

          <input
            type="text"
            maxLength={12}
            placeholder="Enter Aadhaar Number"
            className="flex-1 border rounded-lg px-3 py-2"
            {...register("aadhaar", {
              required: "Aadhaar Number is required",
              pattern: {
                value: /^[0-9]{12}$/,
                message: "Aadhaar must contain exactly 12 digits",
              },
            })}
          />

          <Button
            type="button"
            onClick={verifyAadhaar}
            disabled={aadhaarVerified || aadhaarLoading}
          >
            {aadhaarLoading
              ? "Verifying..."
              : aadhaarVerified
              ? "Verified"
              : "Verify"}
          </Button>

        </div>

        {errors.aadhaar && (
          <p className="text-red-500 text-sm mt-2">
            {errors.aadhaar.message}
          </p>
        )}

        {aadhaarVerified && (
          <p className="text-green-600 text-sm mt-2 font-medium">
            ✅ Aadhaar Verified Successfully
          </p>
        )}

      </div>

      {/* ===========================
          PAN
      ============================ */}

      <div className="mb-6">

        <label className="block font-medium mb-2">
          PAN Number
          <span className="text-red-500 ml-1">*</span>
        </label>

        <div className="flex flex-col md:flex-row gap-3">

          <input
            type="text"
            placeholder="ABCDE1234F"
            className="flex-1 border rounded-lg px-3 py-2 uppercase"
            {...register("pan", {
              required: "PAN Number is required",
              setValueAs: (value) =>
                value.trim().toUpperCase(),
              pattern: {
                value: /^[A-Z]{5}[0-9]{4}[A-Z]$/,
                message: "Invalid PAN Number",
              },
            })}
          />

          <Button
            type="button"
            onClick={verifyPAN}
            disabled={panVerified || panLoading}
          >
            {panLoading
              ? "Verifying..."
              : panVerified
              ? "Verified"
              : "Verify"}
          </Button>

        </div>

        {errors.pan && (
          <p className="text-red-500 text-sm mt-2">
            {errors.pan.message}
          </p>
        )}

        {panVerified && (
          <p className="text-green-600 text-sm mt-2 font-medium">
            ✅ PAN Verified Successfully
          </p>
        )}

      </div>
            {/* ===========================
          PASSPORT
      ============================ */}

      <div className="mb-5">

        <label className="block font-medium mb-2">
          Passport Number
        </label>

        <input
          type="text"
          placeholder="Optional"
          className="w-full border rounded-lg px-3 py-2"
          {...register("passport", {
            pattern: {
              value: /^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/,
              message: "Invalid Passport Number",
            },
          })}
        />

        {errors.passport && (
          <p className="text-red-500 text-sm mt-1">
            {errors.passport.message}
          </p>
        )}

      </div>

      {/* ===========================
          DRIVING LICENSE
      ============================ */}

      <div className="mb-5">

        <label className="block font-medium mb-2">
          Driving License
        </label>

        <input
          type="text"
          placeholder="Optional"
          className="w-full border rounded-lg px-3 py-2"
          {...register("license")}
        />

      </div>

      {/* ===========================
          NATIONALITY
      ============================ */}

      <div className="mb-5">

        <label className="block font-medium mb-2">
          Nationality
          <span className="text-red-500 ml-1">*</span>
        </label>

        <select
          className="w-full border rounded-lg px-3 py-2"
          {...register("nationality", {
            required: "Nationality is required",
          })}
        >

          <option value="">Select Nationality</option>

          {nationalities.map((item) => (

            <option
              key={item}
              value={item}
            >
              {item}
            </option>

          ))}

        </select>

        {errors.nationality && (
          <p className="text-red-500 text-sm mt-1">
            {errors.nationality.message}
          </p>
        )}

      </div>

      {/* ===========================
          MARITAL STATUS
      ============================ */}

      <div className="mb-8">

        <label className="block font-medium mb-3">
          Marital Status
          <span className="text-red-500 ml-1">*</span>
        </label>

        <div className="grid grid-cols-2 gap-3">

          {[
            "Single",
            "Married",
            "Divorced",
            "Widowed",
          ].map((status) => (

            <label
              key={status}
              className="flex items-center gap-2"
            >

              <input
                type="radio"
                value={status}
                {...register("maritalStatus", {
                  required: "Please select Marital Status",
                })}
              />

              {status}

            </label>

          ))}

        </div>

        {errors.maritalStatus && (

          <p className="text-red-500 text-sm mt-2">
            {errors.maritalStatus.message}
          </p>

        )}

      </div>

      {/* ===========================
          BUTTONS
      ============================ */}

      <div className="flex flex-col md:flex-row justify-between gap-4 mt-8">

        <Button
          type="button"
          variant="secondary"
          onClick={() => setStep(4)}
        >
          Back
        </Button>

        <Button
          type="submit"
          disabled={!panVerified || !aadhaarVerified}
        >
          Next
        </Button>

      </div>

    </form>
  );
}

export default KYCInfo;