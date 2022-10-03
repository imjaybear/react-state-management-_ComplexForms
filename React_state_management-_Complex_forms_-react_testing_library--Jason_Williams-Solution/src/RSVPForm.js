import React, { useState } from "react";

function RSVPForm() {
  const initialFromState = {
    name: "",
    age: "",
    newMember: false,
    comment: "",
  };
  const [formData, setFormData] = useState({ ...initialFromState });
  const handleChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };
  const handleSubmit = (Event) => {
    Event.preventDefault();
    console.log(
      formData.name,
      formData.age,
      formData.newMember,
      formData.comment
    );
    setFormData({ ...initialFromState });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
      </label>
      <label htmlFor="age">
        Age:
        <select
          id="age"
          name="age"
          onChange={handleChange}
          value={formData.age}
        >
          <option value="">Select an option</option>
          <option value="pnts">Prefer not to say</option>
          <option value="youngest">0-19</option>
          <option value="young">20-39</option>
          <option value="middle">40-59</option>
          <option value="old">60+</option>
        </select>
      </label>
      <label htmlFor="newMember">
        New Member:
        <input
          id="newMember"
          type="checkbox"
          name="newMember"
          onChange={handleChange}
          checked={formData.newMember}
          value="newMember"
        />
      </label>
      <label htmlFor="comment">
        Comment:
        <textarea
          id="comment"
          type="text"
          name="newMember"
          onChange={handleChange}
          value=""
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RSVPForm;
