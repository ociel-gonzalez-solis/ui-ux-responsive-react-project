const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export const gradientStyles = [
  {
    zIndex: "z-[0]",
    width: "w-[40%]",
    height: "h-[35%]",
    gradient: "pink__gradient",
    position: "top-0",
    other: "",
  },
  {
    zIndex: "z-[1]",
    width: "w-[80%]",
    height: "h-[80%]",
    gradient: "white__gradient",
    position: "bottom-40",
    others: "rounded-full",
  },
  {
    zIndex: "z-[0]",
    width: "w-[50%]",
    height: "h-[50%]",
    gradient: "blue__gradient",
    position: "right-20 bottom-20",
    other: "",
  },
];

export default styles;
