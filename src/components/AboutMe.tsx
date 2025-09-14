import Portfolio from "./Portfolio";

function AboutMe() {
  const intro = "hi! i'm mary <3";
  return (
    <div
      className="bg-image"
      style={{
        backgroundImage: "url(/clouds.jpeg)",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-100 vh-100 d-flex flex-column align-items-center justify-content-center">
        <div className="p-4 d-flex flex-column align-items-center justify-content-center rounded-4 bg-white">
          <h1>{intro}</h1>
          <h4 className="text-custom-dblue">
            data science fellow @ cuny tech prep
          </h4>
          <h4 className="text-custom-lblue">
            pursuing a b.s. in computer science @ brooklyn college
          </h4>

          <div
            className="btn-toolbar d-flex flex-row"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group me-2"
              role="group"
              aria-label="First group"
            >
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={Scroll("portfolio")}
              >
                portfolio
              </button>
            </div>
            <div
              className="btn-group me-2"
              role="group"
              aria-label="Fourth group"
            >
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={Scroll("myBio")}
              >
                get to know me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Scroll(targetId: string): () => void {
  return () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
}

export default AboutMe;
