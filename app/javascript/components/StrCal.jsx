import {
  AppBar,
  Card,
  CardContent,
  CardMedia,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Form from "./Form";
import { isNull } from "lodash";

const StrCal = () => {
  const [result, setResult] = useState({ response: null, isError: false }); // hook to set response
  const setData = (data) => setResult(data); // function to set the value
  const [resultStyle, resultValue] = result.isError
    ? ["result error", result.response]
    : ["result success", `Sum=${result.response}`]; // assigns calculated value or error response
  const showResult = !isNull(result.response); // show/hide the result card

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            String Calculator
          </Typography>
        </Toolbar>
      </AppBar>
      <Card className="card">
        <CardMedia
          sx={{ height: 400 }}
          image="https://raw.githubusercontent.com/PrasadAdv/strcal/refs/heads/main/app/assets/images/nature-green.png"
          title="string calculator"
        />
        <Form className="form" setData={setData} />
        {showResult && (
          <CardContent className={resultStyle}>{resultValue}</CardContent>
        )}
      </Card>
    </div>
  );
};

export default StrCal;
