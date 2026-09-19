function ReviewCard({ title, children }) {
  return (
    <div className="bg-white border rounded-xl shadow-md p-6 mb-6">

      <h2 className="text-xl font-bold text-blue-700 border-b pb-2 mb-4">
        {title}
      </h2>

      {children}

    </div>
  );
}

export default ReviewCard;