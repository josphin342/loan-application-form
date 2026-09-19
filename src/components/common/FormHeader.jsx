import ProgressBar from "./ProgressBar";

function FormHeader({
  appTitle,
  sectionTitle,
  currentStep,
  totalSteps,
}) {
  return (
    <div className="mb-8">

      <h1 className="text-3xl font-bold text-gray-800">
        {appTitle}
      </h1>

      <h2 className="text-xl text-blue-600 font-semibold mt-2">
        {sectionTitle}
      </h2>

      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
      />

    </div>
  );
}

export default FormHeader;