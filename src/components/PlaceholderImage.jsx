export default function PlaceholderImage({ label, height = '300px', style = {} }) {
  return (
    <div
      className="placeholder-image"
      style={{ height, width: '100%', ...style }}
      aria-label={label}
    >
      {label}
    </div>
  );
}
