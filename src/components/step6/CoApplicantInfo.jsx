import { useForm } from "react-hook-form";
import FormHeader from "../common/FormHeader";
import Button from "../common/Button";

const relationships = [
  "Spouse",
  "Father",
  "Mother",
  "Brother",
  "Sister",
  "Son",
  "Daughter",
  "Friend",
  "Business Partner",
];

function CoApplicantInfo({
  step,
  setStep,
  formData,
  setFormData,
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const hasCoApplicant = watch("hasCoApplicant");

  const onSubmit = (data) => {
    console.log(data);

    setFormData({
      ...formData,
      ...data,
    });

    setStep(7);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl"
    >
      <FormHeader
        appTitle="Loan Application"
        sectionTitle="Co-Applicant Information"
        currentStep={step}
        totalSteps={9}
      />

      {/* Co Applicant */}

      <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-3">
          Do you have a Co-Applicant?
          <span className="text-red-500 ml-1">*</span>
        </label>

        <div className="space-y-2">

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Yes"
              {...register("hasCoApplicant", {
                required: "Please select an option",
              })}
            />
            Yes
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="No"
              {...register("hasCoApplicant")}
            />
            No
          </label>

        </div>

        {errors.hasCoApplicant && (
          <p className="text-red-500 text-sm mt-2">
            {errors.hasCoApplicant.message}
          </p>
        )}
      </div>

      {hasCoApplicant === "Yes" && (
        <>

          {/* Name */}

          <div className="mb-5">
            <label className="block font-medium text-gray-700 mb-2">
              Co-Applicant Name
              <span className="text-red-500 ml-1">*</span>
            </label>

            <input
              type="text"
              placeholder="Enter Co-Applicant Name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("coApplicantName", {
                required: "Co-Applicant Name is required",
              })}
            />

            {errors.coApplicantName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.coApplicantName.message}
              </p>
            )}
          </div>

          {/* Relationship */}

          <div className="mb-5">
            <label className="block font-medium text-gray-700 mb-2">
              Relationship
              <span className="text-red-500 ml-1">*</span>
            </label>

            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("relationship", {
                required: "Relationship is required",
              })}
            >
              <option value="">---Select Relationship---</option>

              {relationships.map((relation) => (
                <option
                  key={relation}
                  value={relation}
                >
                  {relation}
                </option>
              ))}
            </select>

            {errors.relationship && (
              <p className="text-red-500 text-sm mt-1">
                {errors.relationship.message}
              </p>
            )}
          </div>

          {/* Mobile & Occupation */}

          <div className="flex flex-col md:flex-row gap-4 mb-5">

            <div className="w-full md:w-1/2">
              <label className="block font-medium text-gray-700 mb-2">
                Mobile Number
                <span className="text-red-500 ml-1">*</span>
              </label>

              <input
                type="tel"
                placeholder="Enter Mobile Number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("coApplicantMobile", {
                  required: "Mobile Number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit mobile number",
                  },
                })}
              />

              {errors.coApplicantMobile && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.coApplicantMobile.message}
                </p>
              )}
            </div>

            <div className="w-full md:w-1/2">
              <label className="block font-medium text-gray-700 mb-2">
                Occupation
                <span className="text-red-500 ml-1">*</span>
              </label>

              <input
                type="text"
                placeholder="Enter Occupation"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("coApplicantOccupation", {
                  required: "Occupation is required",
                })}
              />

              {errors.coApplicantOccupation && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.coApplicantOccupation.message}
                </p>
              )}
            </div>

          </div>

          {/* Income */}

          <div className="mb-5">
            <label className="block font-medium text-gray-700 mb-2">
              Monthly Income
              <span className="text-red-500 ml-1">*</span>
            </label>

            <input
              type="number"
              placeholder="Enter Monthly Income"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("coApplicantIncome", {
                required: "Monthly Income is required",
              })}
            />

            {errors.coApplicantIncome && (
              <p className="text-red-500 text-sm mt-1">
                {errors.coApplicantIncome.message}
              </p>
            )}
          </div>

        </>
      )}

      {/* Buttons */}

      <div className="flex flex-col md:flex-row justify-between gap-4 mt-6">

        <Button
          variant="secondary"
          type="button"
          onClick={() => setStep(5)}
        >
          Back
        </Button>

        <Button type="submit">
          Next
        </Button>

      </div>

    </form>
  );
}

export default CoApplicantInfo;