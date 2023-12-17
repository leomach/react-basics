import "./styles.css";

export const TextInput = ({ searchValue, onchange }) => {
  return (
    <input
      className="text-input"
      type="search"
      value={searchValue}
      onChange={onchange}
      placeholder="Type to search"
    />
  );
};
