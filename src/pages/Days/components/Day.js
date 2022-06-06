const Day = ({ day }) => {
  return (
    <div>
      <span>
        {day.date} {day.habit}
      </span>
    </div>
  );
};
export default Day;
