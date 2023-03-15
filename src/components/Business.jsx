import { Button } from "./ui";
import styles, { layout } from "../styles";
import { features } from "../constants";

const Business = () => {
  // Hello from laptop
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You do business,
          <br className="hidden sm:block" /> we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles={`mt-10`} />
      </div>
    </section>
  );
};

export default Business;
