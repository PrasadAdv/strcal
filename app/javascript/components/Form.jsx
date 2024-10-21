import { Button, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import CalculateSum from "../apis/calculate";

const defaultData = { inputString: "" }; // default value

const Form = (props) => {
  const { setData } = props; // destructuring the passed props from caller
  const [formData, setFormData] = useState(defaultData); // hook to set the submitted form data
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // flag for form submission

  // handles change in form fields as it happens
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // sets as form submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
  };

  // resets the string calculator UI
  const reset = () => {
    setFormData(defaultData);
    setData({ response: null, isError: false });
    setIsFormSubmitted(false);
  };

  useEffect(() => {
    // calls backend API for calculation
    if (isFormSubmitted) {
      CalculateSum(formData.inputString)
        .then((res) => {
          setData({ response: res.data.response, isError: false });
        })
        .catch((e) => {
          setData({ response: e.response.data.error, isError: true });
        });
      setIsFormSubmitted(false);
    }
  }, [isFormSubmitted]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <TextField
        id="string"
        helperText="For example; '1,2,3,4'"
        variant="outlined"
        name="inputString"
        value={formData.inputString}
        onChange={handleChange}
        required
        className="title-field"
        placeholder="Enter a string"
      />
      <Stack direction="row" spacing={2}>
        <Button type="submit" size="large" variant="contained">
          Calculate
        </Button>
        <Button size="large" onClick={() => reset()} variant="contained">
          Reset
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
