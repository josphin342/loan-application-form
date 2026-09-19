function ProgressBar({
  currentStep,
  totalSteps,
}) {
  const progress = Math.round(
    (currentStep / totalSteps) * 100
  );

  return (
    <div className="mb-6">

      {/* Step Info */}

      <div className="flex justify-between items-center mb-2">

        <p className="text-sm font-medium text-gray-600">
          Step {currentStep} of {totalSteps}
        </p>

        <p className="text-sm font-semibold text-blue-600">
          {progress}%
        </p>

      </div>

      {/* Progress Bar */}

      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">

        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-500 ease-in-out"
          style={{
            width: `${progress}%`,
          }}
        ></div>

      </div>

    </div>
  );
}

export default ProgressBar;
