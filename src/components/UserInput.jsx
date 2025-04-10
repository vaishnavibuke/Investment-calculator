function UserInput({ onInputChange , userInput}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial">Initial Investment</label>
          <input
            id="initial"
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => onInputChange("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="annual">Annual Investment</label>
          <input
            id="annual"
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => onInputChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected">Expected Return</label>
          <input
            id="expected"
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => onInputChange("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            id="duration"
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => onInputChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
