function MyBio() {
  return (
    <div
      className="bg-image"
      style={{
        backgroundImage: "url(/night.png)",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        id="myBio"
        className=" w-100 vh-100 d-flex flex-column align-items-center justify-content-center p-5 mb-2"
      >
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="p-4 d-flex flex-column align-items-center justify-content-center rounded-4 bg-white">
            <h1 className="p-2 d-flex align-items-center justify-content-center text-dark display-2 fw-bold">
              get to know me
            </h1>
            <p className="card-text text-center text-custom-dpurple">
              i’m a senior pursuing a bs in computer science with minors in
              mathematics and studio art. i have hands-on experience in
              object-oriented programming, web design, and mathematics, and a
              strong passion for computer science research — particularly where
              it intersects with math, such as AI/LLMs, quantum computing, and
              cryptography.{" "}
            </p>
            <p className="card-text text-center text-custom-dpurple pb-4">
              i’m also deeply interested in user-centered design, which aligns
              with my art background, and have practical experience using
              digital design tools. currently, i’m a data science fellow
              expanding my skills in data analysis and visualization — blending
              my passions for computer science, math, and art to create
              insightful and impactful projects.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBio;
