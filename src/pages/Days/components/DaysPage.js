import DayForm from "./DayForm";
import { useDataContext } from "../../../components/DataContext";
import Day from "./Day";
import Grid from "../../../components/common/Grid";

const DaysPage = () => {
  const { daysDataContextProps } = useDataContext();
  const { dayData, dayIsLoading, dayIsFetching, dayIsError } =
    daysDataContextProps;
  const renderDay = (item) => {
    return (
      <span style={{ textAlign: "center", padding: "4px" }}>
        <Day day={item} />
      </span>
    );
  };
  return (
    <div className="wrapper">
      <div className="header">{"\u231B"} Days</div>
      <div className="sidenav">
        <DayForm />
      </div>
      {dayIsLoading ? (
        "Loading..."
      ) : dayIsFetching ? (
        "Fetching..."
      ) : dayIsError ? (
        "Error!"
      ) : dayData ? (
        <Grid data={dayData} render={renderDay} gridStyle="grid-two-col" />
      ) : null}
    </div>
  );
};

export default DaysPage;
