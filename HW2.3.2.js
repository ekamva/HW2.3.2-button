class Button {
    constructor(height, width, type, color) {
        this.props = {
            height : height,
            width : width,
            type : type,
            color : color
        }
    };
    onClick() {
        console.log(this.props);
    }
  } 
  
  let newButton = new Button(10, 30, "button", "yellow");
  newButton.onClick ();
  //console.log(newButton)
  
  function testButton() {
      if (newButton.props.height !== 10){
          console.log("The height is not correct");
      } else {
          console.log ("The height is correct");
      } if (newButton.props.width !== 30){
          console.log ("The width is not correct");
      } else {
          console.log ("The width is correct");
      } if (newButton.props.color !== "green"){
          console.log("The color is not correct");
      } else {
          console.log("The color is correct");   
      } if (newButton.props.type !== "button"){
          console.log("The type is not correct");
      } else {
          console.log("The type is correct");
      }
  }
  testButton ();
