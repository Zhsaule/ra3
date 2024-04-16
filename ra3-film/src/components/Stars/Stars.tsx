import Star from './Star';

interface StarsProps {
  count?: number;
}

const Stars = ({ count = 0 }: StarsProps) => {
  if (count < 1 || count > 5) {
    return null;
  }

  return (
    <ul className="card-body-stars">
      {Array.from({ length: count }, (_, index) => (
        <li key={index}>
          <Star />
        </li>
      ))}
    </ul>
  );
};

export default Stars;
