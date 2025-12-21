import { useState } from "react";

function TermsOfUse() {
  const [showTerms, setShowTerms] = useState(false);

  function handleShowTermsSummary() {
    setShowTerms(!showTerms);
  }

  return (
    <section>
      <button onClick={handleShowTermsSummary}>
        Show Terms of Use Summary
      </button>
      {showTerms ? (
        <p>
          "By continuing, you accept that we will not indemnify you for any
          damage of harm caused by our products."
        </p>
      ) : null}
    </section>
  );
}

export default TermsOfUse;
