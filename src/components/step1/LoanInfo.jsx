import { useForm } from "react-hook-form";
import { loanRules } from "../../data/loanRules";
import Input from "../common/Input";
import FormHeader from "../common/FormHeader";
import Button from "../common/Button";


function LoanInfo({
      step,
      setStep,
      formData,
      setFormData,
    })
    {
    const{
        register,
        handleSubmit,
        formState: {errors},
        watch,
    }=useForm({
      defaultValues: formData
    });
     const selectedLoan = watch("loanType");

    const onSubmit = (data) => {
      setFormData({
        ...formData,
        ...data
      });
    setStep(2);
  };

    return(
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg"
        >
          <div>
            <FormHeader
            appTitle="Loan Application"
            sectionTitle="Loan Information"
            currentStep={step}
            totalSteps={9}
            />
          </div> 
         
          <div className="mb-5">
            <div className="flex items-center mb-2">
            <label className="block font-medium text-gray-700">Loan Type</label>
            <span className="text-red-500 text-sm ml-1">*</span>
            </div>
            <select
  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  {...register("loanType", {
    required: "Please select loan type",
  })}
>
  <option value="">Select Loan Type</option>

  {Object.keys(loanRules).map((loan) => (
    <option key={loan} value={loan}>
      {loanRules[loan].label}
    </option>
  ))}
</select>
            {errors.loanType &&(
            <p className="text-red-500 text-sm mt-1">{errors.loanType?.message}</p>
            )}
          </div>
          
         
          <div>
           
          <Input
  label="Loan Amount"
  required={true}
  type="number"
  placeholder="Enter Loan Amount"
  register={register}
  name="loanAmount"
  error={errors.loanAmount}
  validation={{
    required: "Loan Amount is required",

    min: {
      value: selectedLoan
        ? loanRules[selectedLoan].amount.min
        : 0,
      message: `Minimum ₹${selectedLoan ? loanRules[selectedLoan].amount.min.toLocaleString() : ""}`,
    },

    max: {
      value: selectedLoan
        ? loanRules[selectedLoan].amount.max
        : Infinity,
      message: `Maximum ₹${selectedLoan ? loanRules[selectedLoan].amount.max.toLocaleString() : ""}`,
    },
  }}
/>
          
        </div> 

        <div> 
            <Input
  label="Loan Tenure"
  required={true}
  type="number"
  placeholder="Enter Loan Tenure"
  register={register}
  name="loanTenure"
  error={errors.loanTenure}
  validation={{
    required: "Loan Tenure is required",

    min: {
      value: selectedLoan
        ? loanRules[selectedLoan].tenure.min
        : 0,
      message: `Minimum ${selectedLoan ? loanRules[selectedLoan].tenure.min : ""} months`,
    },

    max: {
      value: selectedLoan
        ? loanRules[selectedLoan].tenure.max
        : Infinity,
      message: `Maximum ${selectedLoan ? loanRules[selectedLoan].tenure.max : ""} months`,
    },
  }}
/>
        </div>
         <div className="mb-5">
          <div className="flex items-center mb-2">
            <label className="block font-medium text-gray-700">Loan Purpose</label>
            <span className="text-red-500 text-sm ml-1">*</span>
          </div>
        <select
  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  {...register("loanPurpose", {
    required: "Please select loan purpose",
  })}
>
  <option value="">Select Loan Purpose</option>

  {selectedLoan &&
    loanRules[selectedLoan].purposes.map((purpose) => (
      <option
        key={purpose}
        value={purpose}
      >
        {purpose}
      </option>
    ))}
</select>
{selectedLoan && (
  <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-5">

    <h3 className="text-lg font-bold text-blue-700 mb-3">
      Loan Eligibility
    </h3>

    <div className="space-y-2">

      <p>
        <strong>Loan Type:</strong> {loanRules[selectedLoan].label}
      </p>

      <p>
        <strong>Amount:</strong>
        {" "}
        ₹{loanRules[selectedLoan].amount.min.toLocaleString()}
        {" - "}
        ₹{loanRules[selectedLoan].amount.max.toLocaleString()}
      </p>

      <p>
        <strong>Tenure:</strong>
        {" "}
        {loanRules[selectedLoan].tenure.min}
        {" - "}
        {loanRules[selectedLoan].tenure.max}
        {" Months"}
      </p>

    </div>

  </div>
)}
            
          </div>
    
   
          <div className="mb-6">
            <label className="block font-medium text-gray-700 mb-2">Referral Code (Optional)</label>
             <input
  type="text"
  placeholder="Enter Referral Code"
  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  {...register("referralCode")}
/>
         </div>
         <div className="flex justify-center gap-4 mt-6">
          <Button
          type="submit">
            Next
          </Button>
         </div>
        </form>
    );
}
        
export default LoanInfo