import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const Preloader = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div className="preloader">
      <ClipLoader color={"#000"} loading={true} css={override} size={50} />
    </div>
  );
};

export default Preloader;
