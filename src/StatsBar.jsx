// src/StatsBar.jsx
const StatsBar = ({ stats, onToggle }) => {
    return (
      <div>
        <button onClick={onToggle}>Змінити орієнтацію</button>
        <ul>
          <li>Червоний: {stats.red}</li>
          <li>Жовтий: {stats.yellow}</li>
          <li>Зелений: {stats.green}</li>
        </ul>
      </div>
    );
  };
  
  export default StatsBar;
  