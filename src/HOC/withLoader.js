import { useState } from "react";
import { Loader } from "components";

export const withLoader = (WrappedComponent, loadingMessage) => {
  function HOC(props) {
    const [isLoading, setLoading] = useState(true);

    const setLoadingState = (isComponentLoading) => {
      setLoading(isComponentLoading);
    };

    return (
      <>
        {isLoading && <Loader message={loadingMessage} />}
        <WrappedComponent {...props} setChargePage={setLoadingState} />
      </>
    );
  }

  return HOC;
};
