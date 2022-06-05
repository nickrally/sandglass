import { useDataContext } from "../../../components/DataContext";

const HabitPicker = ({ handleChange }) => {
  const { habitData } = useDataContext();

  return (
    <div>
      <label htmlFor="habits">Pick a habit:</label>
      <select id="habits" onChange={handleChange}>
        <option value="none" selected disabled hidden>
          Select an Option
        </option>
        {habitData?.map((item) => (
          <option key={item.id}>{item.description}</option>
        ))}
      </select>
    </div>
  );
};

export default HabitPicker;
