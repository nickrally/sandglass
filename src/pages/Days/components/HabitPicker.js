import { useDataContext } from "../../../components/DataContext";

const HabitPicker = ({ handleChange }) => {
  const { habitData } = useDataContext();

  return (
    <div>
      <label htmlFor="habits">Pick a habit:</label>
      <select id="habits" defaultValue="" onChange={handleChange}>
        <option value="" disabled>
          Select a habit
        </option>
        {habitData?.map((item) => (
          <option key={item.id}>{item.description}</option>
        ))}
      </select>
    </div>
  );
};

export default HabitPicker;
