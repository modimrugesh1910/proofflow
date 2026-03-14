function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-gray-200 rounded h-2 mt-2">
      <div
        className="bg-green-500 h-2 rounded"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;