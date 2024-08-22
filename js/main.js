window.onload = () => {

  gsap.fromTo(
    ".box", 
    {
      duration: 2, 
      x: 0,
      backgroundColor: "#444444",
      borderRadius: "0px",
      border: "5px solid red",
      ease: "back"
    },
    {
      duration: 4, 
      x: 300,
      backgroundColor: "#3ec23c",
      borderRadius: "30px",
      border: "5px solid yellow",
      ease: "linear"
    }
  );

}