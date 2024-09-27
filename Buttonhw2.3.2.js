class Button {
    constructor(height = 10, width = 30, type = "button", color = "green") {
      this.props = {
          height: height,
          width: width,
          type: type,
          color: color
    };
  } 
      onClick() {
          console.log(this.props);
    }  
  }
  
  let newButton = new Button(10, 30, "button", "yellow");
  console.log(newButton)
  
  function testButton() {
      if (newButton.props.height !== 10){
          console.log("The height is not correct");
      } else {
          console.log ("The height is correct");
      } if (newButton.props.width !== 30){
          console.log ("width is not correct");
      } else {
          console.log ("The width is correct");
      } if (newButton.props.color !== "green"){
          console.log("The color is not correct");
      } else {
          console.log("The color is correct");   
      } if (newButton.props.type !== "button"){
          console.log("The type is not correect");
      } else {
          console.log("The type is correect");
      }
  }
  testButton ();