import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import Slide from "@material-ui/core/Slide";
  
export default function App() {
  const [isChecked, setIsChecked] = React.useState(false);
  
  return (
    <div style={{ display: "block",  }}>
    
      <FormControlLabel
        control={
          <Switch
            checked={isChecked}
            onChange={() => {
              setIsChecked((prev) => !prev);
            }}
          />
        }
      
      />jamal
      <div   >
        <Slide in={isChecked}  className={"Slide"}>
          <Paper elevation={5} >
           <div >seyed</div>
          </Paper>
        </Slide>
      </div>
    </div>
  );
}