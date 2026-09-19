import { useForm } from "react-hook-form";
import FormHeader from "../common/FormHeader";
import Button from "../common/Button";

function EmploymentInfo({
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

  const employmentType = watch("employmentType");

  const onSubmit = (data) => {

    // Cross-step validation

    const loanAmount = Number(formData.loanAmount || 0);

    if (
      data.monthlyIncome &&
      loanAmount > Number(data.monthlyIncome) * 60
    ) {
      alert(
        "Warning: Loan amount is significantly higher than the declared monthly income."
      );
    }

    setFormData({
      ...formData,
      ...data,
    });

    setStep(5);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-3xl"
    >

      <FormHeader
        appTitle="Loan Application"
        sectionTitle="Employment Information"
        currentStep={step}
        totalSteps={9}
      />

      {/* Employment Type */}

      <div className="mb-6">

        <label className="block font-medium text-gray-700 mb-3">
          Employment Type
          <span className="text-red-500 ml-1">*</span>
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Salaried"
              {...register("employmentType", {
                required: "Please select Employment Type",
              })}
            />
            Salaried
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Self Employed"
              {...register("employmentType")}
            />
            Self Employed
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Business Owner"
              {...register("employmentType")}
            />
            Business Owner
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Student"
              {...register("employmentType")}
            />
            Student
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="Retired"
              {...register("employmentType")}
            />
            Retired
          </label>

        </div>

        {errors.employmentType && (
          <p className="text-red-500 text-sm mt-2">
            {errors.employmentType.message}
          </p>
        )}

      </div>
            {/* ===========================
          SALARIED
      ============================ */}

      {employmentType === "Salaried" && (
        <>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">

            <div>
              <label className="block font-medium mb-2">
                Company Name
                <span className="text-red-500 ml-1">*</span>
              </label>

              <input
                type="text"
                placeholder="Enter Company Name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                {...register("companyName", {
                  required: "Company Name is required",
                })}
              />

              {errors.companyName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.companyName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-2">
                Employee ID
              </label>

              <input
                type="text"
                placeholder="Enter Employee ID"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                {...register("employeeId")}
              />
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">

            <div>
              <label className="block font-medium mb-2">
                Designation
                <span className="text-red-500 ml-1">*</span>
              </label>

              <input
                type="text"
                placeholder="Enter Designation"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                {...register("designation", {
                  required: "Designation is required",
                })}
              />

              {errors.designation && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.designation.message}
                </p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-2">
                Years of Experience
                <span className="text-red-500 ml-1">*</span>
              </label>

              <input
                type="number"
                placeholder="Enter Experience"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                {...register("experience", {
                  required: "Experience is required",
                  min: {
                    value: 0,
                    message: "Minimum 0 years",
                  },
                  max: {
                    value: 50,
                    message: "Maximum 50 years",
                  },
                })}
              />

              {errors.experience && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.experience.message}
                </p>
              )}
            </div>

          </div>

          <div className="mb-6">

            <label className="block font-medium mb-2">
              Monthly Salary
              <span className="text-red-500 ml-1">*</span>
            </label>

            <input
              type="number"
              placeholder="Enter Monthly Salary"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              {...register("monthlyIncome", {
                required: "Monthly Salary is required",
                min: {
                  value: 10000,
                  message: "Minimum ₹10,000",
                },
              })}
            />

            {errors.monthlyIncome && (
              <p className="text-red-500 text-sm mt-1">
                {errors.monthlyIncome.message}
              </p>
            )}

          </div>

        </>
      )}

      {/*SELF EMPLOYED */}

      {employmentType === "Self Employed" && (
        <>

          <div className="mb-5">

            <label className="block font-medium mb-2">
              Business Name
              <span className="text-red-500 ml-1">*</span>
            </label>

            <input
              type="text"
              placeholder="Enter Business Name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              {...register("businessName", {
                required: "Business Name is required",
              })}
            />

            {errors.businessName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.businessName.message}
              </p>
            )}

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">

            <div>

              <label className="block font-medium mb-2">
                Business Type
              </label>

              <select
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                {...register("businessType")}
              >

                <option value="">Select</option>

                <option>Retail</option>

                <option>Manufacturing</option>

                <option>Consultancy</option>

                <option>Freelancer</option>

                <option>Agriculture</option>

              </select>

            </div>

            <div>

              <label className="block font-medium mb-2">
                Years in Business
              </label>

              <input
                type="number"
                placeholder="Enter Years"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                {...register("businessExperience")}
              />

            </div>

          </div>

          <div>

            <label className="block font-medium mb-2">
              Annual Income
            </label>

            <input
              type="number"
              placeholder="Enter Annual Income"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              {...register("annualIncome")}
            />

          </div>

        </>
      )}
            {/* ===========================
          BUSINESS OWNER
      ============================ */}

      {employmentType === "Business Owner" && (
        <>
          <div className="mb-5">
            <label className="block font-medium mb-2">
              Business Name
              <span className="text-red-500 ml-1">*</span>
            </label>

            <input
              type="text"
              placeholder="Enter Business Name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              {...register("businessName", {
                required: "Business Name is required",
              })}
            />

            {errors.businessName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.businessName.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">

            <div>
              <label className="block font-medium mb-2">
                GST Number
                <span className="text-red-500 ml-1">*</span>
              </label>

              <input
                type="text"
                placeholder="Enter GST Number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 uppercase"
                {...register("gstNumber", {
                  required: "GST Number is required",
                })}
              />

              {errors.gstNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.gstNumber.message}
                </p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-2">
                Business Registration No.
              </label>

              <input
                type="text"
                placeholder="Enter Registration Number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                {...register("registrationNumber")}
              />
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">

            <div>
              <label className="block font-medium mb-2">
                Annual Turnover
              </label>

              <input
                type="number"
                placeholder="Enter Annual Turnover"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                {...register("annualTurnover")}
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Number of Employees
              </label>

              <input
                type="number"
                placeholder="Enter Number of Employees"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                {...register("employeeCount")}
              />
            </div>

          </div>
        </>
      )}

      {/* ===========================
          STUDENT
      ============================ */}

      {employmentType === "Student" && (
        <>
          <div className="mb-5">
            <label className="block font-medium mb-2">
              College Name
              <span className="text-red-500 ml-1">*</span>
            </label>

            <input
              type="text"
              placeholder="Enter College Name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              {...register("collegeName", {
                required: "College Name is required",
              })}
            />

            {errors.collegeName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.collegeName.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label className="block font-medium mb-2">
                Course
              </label>

              <input
                type="text"
                placeholder="Enter Course"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                {...register("course")}
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Graduation Year
              </label>

              <input
                type="number"
                placeholder="Enter Graduation Year"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                {...register("graduationYear")}
              />
            </div>

          </div>

          <div className="mt-5">
            <label className="block font-medium mb-2">
              Guardian Monthly Income
            </label>

            <input
              type="number"
              placeholder="Enter Guardian Income"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              {...register("guardianIncome")}
            />
          </div>
        </>
      )}

      {/* ===========================
          RETIRED
      ============================ */}

      {employmentType === "Retired" && (
        <>
          <div className="mb-5">
            <label className="block font-medium mb-2">
              Monthly Pension
              <span className="text-red-500 ml-1">*</span>
            </label>

            <input
              type="number"
              placeholder="Enter Monthly Pension"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              {...register("pension", {
                required: "Monthly Pension is required",
              })}
            />

            {errors.pension && (
              <p className="text-red-500 text-sm mt-1">
                {errors.pension.message}
              </p>
            )}
          </div>
        </>
      )}

      {/* Buttons */}

      <div className="flex flex-col md:flex-row justify-between gap-4 mt-8">

        <Button
          type="button"
          variant="secondary"
          onClick={() => setStep(3)}
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

export default EmploymentInfo;
