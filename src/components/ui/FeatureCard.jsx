import { features } from "../../constants";
import styles from "../../styles";

export const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row rounded-[20px] p-6 ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`h-[64px] w-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="h-[50%] w-[50%] object-contain" />
    </div>
    <div className="ml-3 flex flex-1 flex-col">
      <h4 className="mb-1 font-poppins text-[18px] font-semibold leading-[23px] text-white">
        {title}
      </h4>
      <p className="mb-1 font-poppins text-[16px] font-normal leading-[24px] text-dimWhite">
        {content}
      </p>
    </div>
  </div>
);
