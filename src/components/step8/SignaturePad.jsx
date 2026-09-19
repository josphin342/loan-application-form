
import { useRef, useState } from "react";
import * as SigMod from "react-signature-canvas";

import FormHeader from "../common/FormHeader";
import Button from "../common/Button";


const SignatureCanvas =
  SigMod?.default?.default ||
  SigMod?.default ||
  SigMod?.SignatureCanvas ||
  SigMod;

function SignaturePad({ step, setStep, formData, setFormData }) {
  const sigCanvas = useRef(null);
  const [signatureSaved, setSignatureSaved] = useState(!!formData.signature);

  const clearSignature = () => {
    sigCanvas.current.clear();
    setSignatureSaved(false);
  };

  const saveSignature = () => {
    if (sigCanvas.current.isEmpty()) {
      alert("Please provide your signature.");
      return;
    }
    const signature = sigCanvas.current.toDataURL("image/png");
    setFormData({ ...formData, signature });
    setSignatureSaved(true);
    alert("Signature Saved Successfully.");
  };

  const nextStep = () => {
    if (!signatureSaved) {
      alert("Please save your signature first.");
      return;
    }
    setStep(9);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
      <FormHeader
       appTitle="Loan Application"
       sectionTitle="Digital Signature"
       currentStep={step}
       totalSteps={9}
     />
      <label>Please sign below *</label>
      <p>Draw your signature using mouse or touch.</p>

      <div className="border-2 border-dashed border-blue-300 rounded-xl bg-gray-50 overflow-hidden">

  <SignatureCanvas
    ref={sigCanvas}
    penColor="black"
    canvasProps={{
      width: 700,
      height: 180,
      className: "w-full bg-white",
    }}
  />

</div>

      {formData.signature && (
        <div className="mt-6">

  <h3 className="font-semibold mb-3">
    Saved Signature
  </h3>

  <div className="border rounded-lg bg-gray-50 p-4 flex justify-center">

    <img
      src={formData.signature}
      alt="Signature Preview"
      className="max-h-24 object-contain"
    />

  </div>

</div>
      )}

      <div className="flex justify-center gap-4 mt-6 mb-8">

  <Button
    type="button"
    variant="secondary"
    onClick={clearSignature}
  >
    Clear
  </Button>

  <Button
    type="button"
    variant="success"
    onClick={saveSignature}
  >
    Save Signature
  </Button>

</div>

      <div className="flex justify-between">

  <Button
    type="button"
    variant="secondary"
    onClick={() => setStep(7)}
  >
    Back
  </Button>

  <Button
    type="button"
    onClick={nextStep}
    disabled={!signatureSaved}
  >
    Next
  </Button>

</div>
    </div>
  );
}

export default SignaturePad;