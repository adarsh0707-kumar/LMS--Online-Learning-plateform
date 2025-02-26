import { assets } from "../../assets/assets";
import "./Companies.css"; // Import the CSS file

const Companies = () => {
  return (
    <div className="companies-container">
      <p className="companies-text">
        Trusted by learners from
      </p>

      <div className="companies-logos">
        <img
          src={assets.microsoft_logo}
          alt="microsoft"
          className="company-logo"
        />

        <img
          src={assets.walmart_logo}
          alt="Walmart"
          className="company-logo"
        />

        <img
          src={assets.accenture_logo}
          alt="Accenture"
          className="company-logo"
        />

        <img
          src={assets.adobe_logo}
          alt="Adobe"
          className="company-logo"
        />

        <img
          src={assets.paypal_logo}
          alt="Paypal"
          className="company-logo"
        />
      </div>
    </div>
  );
};

export default Companies;