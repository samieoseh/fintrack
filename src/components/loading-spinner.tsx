import Lottie from "lottie-react";
import loadingAnimation from "../../public/loading-animation.json";

export default function LoadingSpinner() {
  return (
    <div className="w-full flex items-center justify-center">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        style={{
          height: 250,
          width: 250,
        }}
      />
    </div>
  );
}
