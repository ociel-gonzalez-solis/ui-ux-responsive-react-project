export const GradientHero = ({ zIndex, width, height, gradient, position }) => {
  return (
    <div
      className={`${gradient} absolute ${position} ${zIndex} ${height} ${width}`}
    />
  );
};
