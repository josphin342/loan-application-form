function ReviewRow({ label, value }) {
  return (
    <div className="grid grid-cols-2 gap-4 py-2 border-b last:border-b-0">

      <p className="font-semibold text-gray-700">
        {label}
      </p>

      <p className="text-gray-600 break-words">
        {value || "N/A"}
      </p>

    </div>
  );
}

export default ReviewRow;