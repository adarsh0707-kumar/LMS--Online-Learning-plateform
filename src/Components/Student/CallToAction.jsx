import { assets } from "../../assets/assets";
import './CallToAction.css'; // Import the CSS file

const CallToAction = () => {
  return (
    <div className="call-to-action-container">
      <h1 className="call-to-action-title md:call-to-action-title">
        Learn anything, anytime, anywhere
      </h1>
      <p className="call-to-action-description sm:text-sm">
        Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam alique proident excepteur commodo do ea.
      </p>

      <div className="call-to-action-buttons">
        <button className="call-to-action-button-primary">
          Get Started
        </button>

        <button className="call-to-action-button-secondary">
          Learn more
          <img
            className="arrow-icon"
            src={assets.arrow_icon}
            alt="Arrow_icon"
          />
        </button>
      </div>
    </div>
  )
}

export default CallToAction;
