// selectStyles.js
export const selectStyles = {
  control: (base, state) => ({
    ...base,
    width: '100%', // Make select responsive
    minWidth: 0,
    backgroundColor: `rgba(255, 144, 131, 0.25)`,
    border: state.isFocused
      ? "1px solid rgba(183, 4, 4, 0.75)"
      : "1px solid rgba(183, 4, 4, 0.15)",
    borderRadius: 4,
    padding: "0",
    outline: "none", // Hide blue focus border
    boxShadow: "none", // Remove react-select default focus shadow
    "&:hover": {
      border: state.isFocused
        ? "1px solid rgba(183, 4, 4, 0.75)"
        : "1px solid rgba(183, 4, 4, 0.15)", // No change on hover
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "rgba(183, 4, 4, 0.5)",
    fontFamily: "Roboto, sans-serif",
  }),
  singleValue: (base) => ({
    ...base,
    color: "rgba(183, 4, 4, 1)",
    fontSize: 16,
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "6px 10px",
    fontSize: 16,
    fontFamily: "Roboto, sans-serif",
  }),
  input: (base) => ({
    ...base,
    color: "rgba(183, 4, 4, 1)",
    fontSize: 16,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "rgba(183, 4, 4, 1)",
    paddingRight: 8,
    "&:hover": {
      color: "rgba(183, 4, 4, 1)",
    },
  }),
  clearIndicator: (base) => ({
    ...base,
    color: "rgba(183, 4, 4, 1)",
    "&:hover": {
      color: "rgba(183, 4, 4, 1)",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 4,
    backgroundColor: "#fff",
    zIndex: 10,
    fontFamily: "Roboto, sans-serif",
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
    borderRadius: 4,
    backgroundColor: "#fff",
  }),
  option: (base, state) => ({
    ...base,
    fontSize: 16,
    color: "rgba(183, 4, 4, 1)",
    backgroundColor: state.isSelected
      ? "rgba(255, 144, 131, 0.25)"
      : state.isFocused
      ? "rgba(255, 144, 131, 0.25)"
      : state.isDisabled
      ? "#f9fafb"
      : "#fff",
    cursor: state.isDisabled ? "not-allowed" : "pointer",
    padding: "10px 16px",
    transition: "background 0.15s",
  }),
};
