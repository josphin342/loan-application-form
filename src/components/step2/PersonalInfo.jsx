import {useForm} from "react-hook-form";
import Button from "../common/Button";
import FormHeader from "../common/FormHeader";
function PersonalInfo({
    step,
    setStep,
    formData,
    setFormData,
}){  
    const { 
        register,
         handleSubmit ,
         formState: {errors},
        } = useForm({   

            defaultValues: formData
     });
    
    const onSubmit = (data) => {
        setFormData({
            ...formData,
            ...data
        })
        setStep(3);
    };
    
    return(
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
           
            <div>
                <FormHeader
                appTitle="Loan Application"
                sectionTitle="Personal Information"
                currentStep={step}
                totalSteps={9}
                />
            </div>

           <div className="mb-5">
            <div className="flex items-center mb-2">
            <label className="block text-gray-700 font-medium">Full Name</label>
            <span className="text-red-500 text-sm ml-1">*</span>
            </div>
            <input type="text"
            placeholder="Enter your Full Name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            
            {...register("fullName", { required: "Full Name is required" })}
            />
            {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}
          
            </div>
        
            <div className="mb-5">
                <div className="flex items-center mb-2">
            <label className="block text-gray-700 font-medium ">Father Name</label>
            <span className="text-red-500 text-sm ml-1">*</span>
            </div>
            <input type="text"
            placeholder="Enter your Father Name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

            {...register("fatherName", { required: "Father Name is required" })}
            />
            {errors.fatherName && (
                <p className="text-red-500 text-sm mt-1">
                    {errors.fatherName.message }
                </p>
            )}
            
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 mb-5">

           <div className="w-full md:w-1/2">
            <div className="flex items-center mb-2">
            <label className="block text-gray-700 font-medium">Date of Birth</label>
            <span className="text-red-500 text-sm ml-1">*</span>
            </div>
            <input type="date"
          
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("dob", {required: "Date of Birth is required"})}
            />
            {errors.dob && (
                <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>
            )}
              </div>
            <div className="w-full md:w-1/2">
           
            <div className="flex items-center mb-2">
            <label className="block text-gray-700 font-medium">Gender</label>
            <span className="text-red-500 text-sm ml-1">*</span>
            </div>
            <select 
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("gender", {required: "Gender is required"})}
            >
                <option value="">---Select Gender---</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
            {errors.gender && (
                <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
            )}
           </div>
           </div>

           <div className="mb-5">
            <div className="flex items-center mb-2">
            <label className="block text-gray-700 font-medium">Email</label>
            <span className="text-red-500 text-sm ml-1">*</span>
            </div>
            <input type="email"
            placeholder="Enter your Email"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            
            {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
            />
            {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
            </div>
          
           <div className="mb-5">
                <div className="flex items-center mb-2">
            <label className="block text-gray-700 font-medium">Mobile Number</label>
            <span className="text-red-500 text-sm ml-1">*</span>
            </div>
            <input type="tel"
            placeholder="Enter your Mobile Number"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("mobileNumber", { required: "Mobile Number is required", pattern: { value: /^[0-9]{10}$/, message: "Invalid mobile number" } })}
            />
            {errors.mobileNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.mobileNumber.message}</p>
            )}
           </div>
            <div className="flex flex-col md:flex-row justify-between gap-4 mt-6">
            <Button
              type="button"
              variant="secondary"
              onClick={()=>setStep(1)}> Back
            </Button>
            
            <Button
              type="submit"> Next
            </Button>
            </div>
       
        </form>
        
    );

}
export default PersonalInfo;
