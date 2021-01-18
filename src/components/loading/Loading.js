import { useSelector } from "react-redux";
import { Animated } from "react-animated-css";
import { Spin } from "antd";
import "./Loading.css";

const Loading = () => {
  
  const isLoading = useSelector((globalState) => globalState.loading.show);

  return (
    <Animated
      animationIn="zoomIn"
      animationOut="fadeOut"
      animationInDuration={600}
      animationOutDuration={600}
      isVisible={isLoading}
    >
      <div id="loading-wrapper">
        <Spin size="large" />
      </div>
    </Animated>
  );
};

export default Loading;
