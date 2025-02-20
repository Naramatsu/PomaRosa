import useTheme from "../hooks/useTheme";

const ToggleSwitch = ({ checked, onChange, ...rest }) => {
  const { theme } = useTheme();
  const handleChange = onChange ? onChange : () => {};
  const classNames = `checkbox-input ${theme}`;

  return (
    <section {...rest} className="toggle-switch">
      <input
        type="checkbox"
        aria-label="languaje switch"
        className={classNames}
        name="btn"
        checked={checked}
        onChange={handleChange}
      />
    </section>
  );
};

export default ToggleSwitch;
