function FormFucntion(handleInput, inputValue, onsubmit) {
  return (
    <>
      <form onSubmit={onsubmit}>
        <h1>Employee Feedback form</h1>
        <label htmlFor="Name">Name:</label>
        <input
          type="text"
          name="Name"
          id="Name"
          required
          value={inputValue.Name}
          onChange={handleInput}
        />
        <br />
        <label htmlFor="Department">Department:</label>
        <input
          type="text"
          name="Department"
          id="Department"
          required
          value={inputValue.Department}
          onChange={handleInput}
        />
        <br />
        <label htmlFor="Rating">Rating:</label>
        <input
          type="text"
          name="Rating"
          id="Rating"
          required
          value={inputValue.Rating}
          onChange={handleInput}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}

export default FormFucntion;
