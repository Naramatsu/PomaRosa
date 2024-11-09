const ToggleSwitch = ({ checked, onChange, ...rest }) => {
  const handleChange = onChange ? onChange : () => {};

  return (
    <section {...rest} className="toggle-switch">
      <input
        type="checkbox"
        aria-label="languaje switch"
        className="checkbox-input"
        name="btn"
        checked={checked}
        onChange={handleChange}
      />
    </section>
  );
};

export default ToggleSwitch;
