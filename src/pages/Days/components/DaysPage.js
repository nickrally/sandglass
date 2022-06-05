import DayForm from "./DayForm";

const DaysPage = () => {
  return (
    <div className="wrapper">
      <div className="header">{"\u231B"} Days</div>
      <div className="sidenav">
        <DayForm />
      </div>
      <div className="main">Days</div>
    </div>
  );
};

export default DaysPage;
