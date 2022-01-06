import { PropTypes } from "prop-types";
import { Card, Grid, Paper } from "@mui/material";

// const click = {
//   altKey: false,
//   bubbles: true,
//   button: 0,
//   buttons: 0,
//   cancelable: true,
//   clientX: 592,
//   clientY: 683,
//   ctrlKey: false,
//   currentTarget: null,
//   defaultPrevented: false,
//   detail: 1,
//   eventPhase: 3,
//   getModifierState: "ƒ modifierStateGetter(keyArg)",
//   isDefaultPrevented: "ƒ functionThatReturnsFalse()",
//   isPropagationStopped: "ƒ functionThatReturnsFalse()",
//   isTrusted: true,
//   metaKey: false,
//   movementX: 0,
//   movementY: 0,
//   nativeEvent:
//     "PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}",
//   pageX: 592,
//   pageY: 683,
//   relatedTarget: null,
//   screenX: 3592,
//   screenY: 1170,
//   shiftKey: false,
//   target: "div.css-b2aqfl",
//   timeStamp: 2354.100000023842,
//   type: "click",
//   view: "Window {window: Window, self: Window, document: document, name: '', location: Location, …}",
//   _reactName: "onClick",
//   _targetInst: null,
//   [[Prototype]]: Object,
//   length: 1,
//   [[Prototype]]: "Array(0)",
// };

const EventInfo = ({ data }) => {
  console.log(data);
  return (
    <>
      <Grid item xs={1} md={1} xl={1}>
        <Card>
          x:
          <Paper> {data.clientX}</Paper>
        </Card>
      </Grid>
      <Grid item xs={1} md={1} xl={1}>
        <Card>
          y:
          <Paper> {data.clientY}</Paper>
        </Card>
      </Grid>
      <Grid item xs={2} md={2} xl={2}>
        <Card>
          name:
          <Paper>{data._reactName}</Paper>
        </Card>
      </Grid>
    </>
  );
};
EventInfo.propTypes = {
  data: PropTypes.object,
};
export default EventInfo;
