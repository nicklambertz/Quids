import React, { useEffect } from "react";
import PropTypes from "prop-types";

const PageWrapper = ({ background, children }) => {
  useEffect(() => {
    // Setze den Hintergrundstil auf das body-Element
    document.body.style.backgroundImage = background;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";

    // Bereinige den Stil beim Verlassen der Seite
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundPosition = "";
    };
  }, [background]);

  return <div>{children}</div>;
};

PageWrapper.propTypes = {
  background: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
