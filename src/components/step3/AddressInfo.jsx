import { useForm } from "react-hook-form";
import FormHeader from "../common/FormHeader";
import Button from "../common/Button";

const countries = [
  "India",
  "USA",
  "Canada",
  "Australia",
];

function AddressInfo({
  step,
  setStep,
  formData,
  setFormData,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    console.log(data);

    setFormData({
      ...formData,
      ...data,
    });

    setStep(4);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl"
    >
      <FormHeader
        appTitle="Loan Application"
        sectionTitle="Address Information"
        currentStep={step}
        totalSteps={9}
      />

      {/* Street Address */}

      <div className="mb-5">
        <div className="flex items-center mb-2">
          <label className="font-medium text-gray-700">
            Street Address
          </label>
          <span className="text-red-500 ml-1">*</span>
        </div>

        <textarea
          rows="3"
          placeholder="Enter your Street Address"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("streetAddress", {
            required: "Street Address is required",
          })}
        />

        {errors.streetAddress && (
          <p className="text-red-500 text-sm mt-1">
            {errors.streetAddress.message}
          </p>
        )}
      </div>

      {/* City & State */}

      <div className="flex flex-col md:flex-row gap-4 mb-5">

        <div className="w-full md:w-1/2">
          <div className="flex items-center mb-2">
            <label className="font-medium text-gray-700">
              City
            </label>
            <span className="text-red-500 ml-1">*</span>
          </div>

          <input
            type="text"
            placeholder="Enter City"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("city", {
              required: "City is required",
            })}
          />

          {errors.city && (
            <p className="text-red-500 text-sm mt-1">
              {errors.city.message}
            </p>
          )}
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex items-center mb-2">
            <label className="font-medium text-gray-700">
              State
            </label>
            <span className="text-red-500 ml-1">*</span>
          </div>

          <input
            type="text"
            placeholder="Enter State"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("state", {
              required: "State is required",
            })}
          />

          {errors.state && (
            <p className="text-red-500 text-sm mt-1">
              {errors.state.message}
            </p>
          )}
        </div>

      </div>

      {/* Pincode & Country */}

      <div className="flex flex-col md:flex-row gap-4 mb-5">

        <div className="w-full md:w-1/2">
          <div className="flex items-center mb-2">
            <label className="font-medium text-gray-700">
              Pincode
            </label>
            <span className="text-red-500 ml-1">*</span>
          </div>

          <input
            type="number"
            placeholder="Enter Pincode"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("pincode", {
              required: "Pincode is required",
              pattern: {
                value: /^[0-9]{6}$/,
                message: "Pincode must be 6 digits",
              },
            })}
          />

          {errors.pincode && (
            <p className="text-red-500 text-sm mt-1">
              {errors.pincode.message}
            </p>
          )}
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex items-center mb-2">
            <label className="font-medium text-gray-700">
              Country
            </label>
            <span className="text-red-500 ml-1">*</span>
          </div>

          <select
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("country", {
              required: "Country is required",
            })}
          >
            <option value="">
              ---Select Country---
            </option>

            {countries.map((country) => (
              <option
                key={country}
                value={country}
              >
                {country}
              </option>
            ))}
          </select>

          {errors.country && (
            <p className="text-red-500 text-sm mt-1">
              {errors.country.message}
            </p>
          )}
        </div>

      </div>

      {/* Checkbox */}

      <div className="mb-6 flex items-center gap-2">

        <input
          type="checkbox"
          id="sameAddress"
          {...register("sameAddress")}
        />

        <label htmlFor="sameAddress">
          My permanent address is the same as my current address
        </label>

      </div>

      {/* Buttons */}

      <div className="flex flex-col md:flex-row justify-between gap-4">

        <Button
          variant="secondary"
          type="button"
          onClick={() => setStep(2)}>Back
        </Button>

        <Button
          type="submit"
        >
          Next
        </Button>

      </div>

    </form>
  );
}

export default AddressInfo;