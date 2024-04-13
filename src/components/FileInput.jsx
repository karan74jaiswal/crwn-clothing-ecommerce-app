function FileInput({ label, labelFor, handleChange, value, type }) {
  return (
    <div className="group">
      <input
        type={type}
        value={value}
        onChange={handleChange}
        required
        id={labelFor}
        name={labelFor}
        className="form-input"
      />
      <label
        htmlFor={labelFor}
        className={`${value.length ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    </div>
  );
}

export default FileInput;
