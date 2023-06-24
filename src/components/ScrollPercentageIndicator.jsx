export default function ScrollPercentageIndicator({ percentage }) {
  return (
    <div
      className="
                  h-20 w-20 
                  flex
                  items-center
                  justify-center
                  fixed
                  right-6
                  top-8
                  rounded-full 
                  border-gray
                  border-4"
    >
      <div className="">
        <span>{percentage}%</span>
      </div>
    </div>
  );
}
