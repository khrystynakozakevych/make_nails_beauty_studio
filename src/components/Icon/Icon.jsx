export default function Icon({ width, height, xlinkHref }) {
  return (
    <>
      <svg width={width} height={height}>
        <use xlinkHref={xlinkHref}></use>
      </svg>
    </>
  );
}
