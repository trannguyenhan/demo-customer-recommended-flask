import "./cardstatistic.css";

export const CardStatistic = ({ icon, title, total,unit }) => {
  return (
    <div className="base-cardstatistic">
      <div className="base-cardstatistic-content">
        <p>{title}</p>
        <span>{total}</span>
        <span>{unit}</span>
      </div>
      <div className="base-cardstatistic-icon">{icon ? icon : null}</div>
    </div>
  );
};
