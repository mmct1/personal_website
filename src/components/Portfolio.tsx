function Portfolio() {
  return (
    <div id="portfolio" className="background-custom-gradient">
      <div className="d-flex flex-rowalign-items-center justify-content-center">
        <img
          src="/moon.png"
          style={{
            height: "15vh",
          }}
          alt=""
        ></img>
        <h1 className="p-2 d-flex align-items-center justify-content-center text-white display-2 fw-bold">
          portfolio
        </h1>
        <img
          src="/moon.png"
          style={{
            height: "15vh",
            transform: "scaleX(-1)",
          }}
          alt=""
        ></img>
      </div>

      <div className="w-100 vh-50 d-flex align-items-center justify-content-center p-5">

        <div className="row">
          <div className="col-sm-6 p-2">
            <div className="card p-2 d-flex flex-column align-items-center justify-content-center border border-light rounded-4">
              <img
                src="/codelab_th.jpg"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <h5 className="card-title text-center fw-bold">
                  llm enhancement of coding practice exercise systems
                </h5>
                <h6 className="text-center text-custom-dpurple fw-bold">
                  @ tow mentoring and research program
                </h6>
                <p className="card-text text-center text-custom-dblue">
                  java | cli | openai api | anthropic api | gemini api
                </p>
                <div className="display-flex">
                  <a
                    href="https://docs.google.com/presentation/d/1sPcKs_JGPvtykQSaufqPyhulWMvSMy4I1ycnf_xgtaY/edit?usp=sharing"
                    className="btn btn-outline-dark p-2 m-2"
                  >
                    project slides
                  </a>
                  <a
                    href="https://www.turingscraft.com/"
                    className="btn btn-outline-dark p-2 m-2"
                  >
                    codelab
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 p-2">
            <div className="card p-2 d-flex flex-column align-items-center justify-content-center border border-light rounded-4">
              <img
                src="letterbuddy_th.jpg"
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <h5 className="card-title text-center fw-bold">letter buddy</h5>
                <h6 className="text-center text-custom-dpurple fw-bold">
                  @ ctp hacks 2025
                </h6>
                <p className="card-text text-center text-custom-dblue">
                  python | opencv | tensorflow | openai api
                </p>
                <div className="display-flex">
                  <a
                    href="https://docs.google.com/presentation/d/1QMiyVwa7-DurcL5c_C-wVfZS_khfbotpq0G9ExuUP9Y/edit?usp=sharing"
                    className="btn btn-outline-dark p-2 m-2"
                  >
                    project slides
                  </a>
                  <a
                    href="https://letterbuddy.vercel.app/login"
                    className="btn btn-outline-dark p-2 m-2"
                  >
                    letter buddy
                  </a>
                </div>
              </div>
            </div>
          </div>
            <div className="col-sm-6 p-2">
              <div className="card p-2 d-flex flex-column align-items-center justify-content-center border border-light rounded-4">
                <img
                  src="/study_buddy_th.jpg"
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <h5 className="card-title text-center fw-bold">
                    study buddy
                  </h5>
                  <h6 className="text-center text-custom-dpurple fw-bold">
                    @ honors experiential development practicum, in partnership
                    with google
                  </h6>
                  <p className="card-text text-center text-custom-dblue">
                    figma | procreate | adobe illustrator
                  </p>
                  <div className="display-flex">
                    <a
                      href="https://docs.google.com/presentation/d/1PRU68nPQEGN3YNq3zXJbwTg67u3m9iP-HLQdFHd9NFs/edit?usp=sharing"
                      className="btn btn-outline-dark p-2 m-2"
                    >
                      project slides
                    </a>
                    <a
                      href="https://www.figma.com/proto/Nimipo0yfn6QOO2lHEkjbN/Google-Study-Buddy?node-id=1-814&t=VGiimgMmPyh5OFqj-1"
                      className="btn btn-outline-dark p-2 m-2"
                    >
                      figma mockup
                    </a>
                  </div>
                </div>
            </div>
          </div>

            <div className="col-sm-6 p-2">
              <div className="card p-2 d-flex flex-column align-items-center justify-content-center border border-light rounded-4">
                <img
                  src="/datathon_th.jpg"
                  className="card-img-top"
                  alt="..."
                ></img>
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <h5 className="card-title text-center fw-bold">
                    ace analysis - is ace speeding up your commute? 
                  </h5>
                  <h6 className="text-center text-custom-dpurple fw-bold">
                    @  mta x mhc++ datathon
                  </h6>
                  <p className="card-text text-center text-custom-dblue">
                    python | plotly | pandas | git
                  </p>
                  <div className="display-flex">
                    <a
                      href="https://github.com/MHC-Datathon/Macaulay-Matrix"
                      className="btn btn-outline-dark p-2 m-2"
                    >
                      github
                    </a>
                  </div>
                </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}

export default Portfolio;
