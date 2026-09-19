import { useState, useEffect } from "react";
import LoanInfo from "./components/step1/LoanInfo";
import PersonalInfo from "./components/step2/PersonalInfo";
import AddressInfo from "./components/step3/AddressInfo"; 
import EmploymentInfo from "./components/step4/EmploymentInfo";
import KYCInfo from "./components/step5/KYCInfo";
import CoApplicantInfo from "./components/step6/CoApplicantInfo";
import DocumentUpload from "./components/step7/DocumentUpload";
import SignaturePad from "./components/step8/SignaturePad";
import ReviewSubmit from "./components/step9/ReviewSubmit";
import Success from "./components/step10/Success";

function App(){
  const [step, setStep] = useState(() => {
  const saved = localStorage.getItem("loanApplication");

  return saved
    ? JSON.parse(saved).step
    : 1;
});

const [formData, setFormData] = useState(() => {
  const saved = localStorage.getItem("loanApplication");

  return saved
    ? JSON.parse(saved).formData
    : {};
});
useEffect(() => {

  localStorage.setItem(
    "loanApplication",

    JSON.stringify({

      step,

      formData,

    })

  );

}, [step, formData]);
const savedApplication = localStorage.getItem("loanApplication");

useEffect(() => {

const handleBeforeUnload=(e)=>{

e.preventDefault();

e.returnValue="";

};

window.addEventListener(

"beforeunload",

handleBeforeUnload

);

return ()=>{

window.removeEventListener(

"beforeunload",

handleBeforeUnload

);

};

},[]);
  return(
    <div className="min-h-screen bg-gray-100 flex justify-center items-center ">
      {savedApplication && step === 1 && (

<div className="fixed top-5 left-1/2 -translate-x-1/2 bg-yellow-100 border border-yellow-400 rounded-xl px-5 py-3 shadow-lg z-50">

<p className="font-medium">

📂 Previous application found.

</p>

<p className="text-sm">

You can continue where you left off.

</p>

</div>

)}
    
    { step===1 && <LoanInfo 
    step={step}
    setStep={setStep}
    formData={formData}
    setFormData={setFormData}
    /> }
    
    { step===2 && <PersonalInfo
    step={step} 
    setStep={setStep}
    formData={formData}
    setFormData={setFormData}
    /> }

    { step===3 && <AddressInfo
    step={step}
    setStep={setStep}
    formData={formData}
    setFormData={setFormData}
    /> }

    { step===4 && <EmploymentInfo
    step={step}
    setStep={setStep}
    formData={formData}
    setFormData={setFormData}
    /> }

    { step===5 && <KYCInfo
    step={step}
    setStep={setStep}
    formData={formData}
    setFormData={setFormData}
    /> }

    { step===6 && <CoApplicantInfo
    step={step}
    setStep={setStep}
    formData={formData}
    setFormData={setFormData}
    /> }

    { step===7 && <DocumentUpload
    step={step}
    setStep={setStep}
    formData={formData}
    setFormData={setFormData}
    /> }

    { step===8 && <SignaturePad
    step={step}
    setStep={setStep}
    formData={formData}
    setFormData={setFormData}
    /> }

    { step===9 && <ReviewSubmit
    step={step}
    setStep={setStep}
    formData={formData}
    setFormData={setFormData}
    /> }

    { step===10 && <Success
    setStep={setStep}
    formData={formData}
    setFormData={setFormData}
    /> }

     </div>
    
  );
}
export default App