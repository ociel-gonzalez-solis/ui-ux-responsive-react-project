import { apple, bill, google } from "../assets/img";
import styles, { layout } from "../styles";
import { StoreImgCard } from "./ui";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="relative z-[5] h-[100%] w-[100%]"
      />
      <div className="white__gradient absolute -left-1/2 top-0 z-[3] h-[50%] w-[50%] rounded-full" />
      <div className="pink__gradient absolute -left-1/2 bottom-0 z-[0] h-[50%] w-[50%] rounded-full" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your
        <br className="hidden sm:block" /> billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="mt-6 flex flex-row flex-wrap sm:mt-10">
        <StoreImgCard item={apple} alt="app_store" />
        <StoreImgCard item={google} alt="app_store" />
      </div>
    </div>
  </section>
);
export default Billing;
