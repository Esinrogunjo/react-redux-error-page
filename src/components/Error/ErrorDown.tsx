import YellowSquare from "../atoms/YellowSquare";
import { random_hex_color_code } from "../helper";
const ErrorDown = ({ item, color }: any) => {
  return (
    <div className="single-error-down">
      <div className="single-error-down__error-container">
        <YellowSquare fill={`${color}`} className="single-error-down__dot" />
        <span className="single-error-down__title">
          {item.code ? "Error " : "Other "} {item.code}:{item.count}
        </span>
      </div>
    </div>
  );
};

export default ErrorDown;
