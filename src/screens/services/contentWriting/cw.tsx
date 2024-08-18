import React from "react";
import DirectLink from "../../../components/directLink/directLink";
import "./cw.scss";

const cw = () => {
  return (
    <>
    <div className="cw">
      <section className="heroBanner cwBgBanner">
        <div className="container-xxl heroTopDiv">
          <div className="row">
            <div className="col">
              <div className="cwHeroText">
                <div className="cwHeroTop">
                  <p className="cwHeroPara">Boost Your Rank!</p>
                </div>
                <div className="cwHeroTypewriter">
                  <h1 className="typingEffect">
                    Your Brand + Our Words =
                    <span> Increased Brand Reputation!</span>
                    <span> &nbsp;</span>
                  </h1>
                  <p className="cwHeroPara">
                    Assure your online success with our expert SEO content
                    writing service in Dubai - Aspire for the top rankings.
                  </p>
                  {/* <p className="cwHeroPara">
                  </p> */}
                </div>
              </div>
            </div>

            <div className="col">
              <div className="cwHeroFormDiv">
                <div className="cwHeroHeading">
                  <h3>
                    Fill Out The Form Below
                    <br />
                    To Schedule A Call With Us
                  </h3>
                </div>

                <form className="cwHeroForm" method="post" action="">
                  <div className="formFlexDiv">
                    <div className="formInputDiv">
                      <div className="formInput">
                        <input
                          type="text"
                          name="name"
                          title="Enter your name.."
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="formInputDiv">
                      <div className="formInput">
                        <input
                          type="email"
                          name="email"
                          title="Enter your email."
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="formInputDiv">
                      <div className="formInput">
                        <input
                          type="text"
                          name="phone"
                          minLength={9}
                          maxLength={15}
                          title="Enter your phone number."
                          placeholder="Phone"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="formInputDiv">
                    <div className="formInput">
                      <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        required
                      />
                    </div>
                  </div>

                  <div className="formInputDiv">
                    <div className="formInput">
                      <select name="selectservice" id="serviceOpt">
                        <option value="select">
                          Choose The Service You Are Interested In*
                        </option>
                        <option value="B2B">A</option>
                        <option value="B2C">B</option>
                        <option value="C2C">C</option>
                        <option value="Other">Other</option>
                      </select>

                      {/* <input
                        type="text"
                        name="company"
                        placeholder="Service"
                        required
                      /> */}
                    </div>
                  </div>

                  <div className="formInputDiv">
                    <div className="formInput">
                      <input
                        type="text"
                        name="message"
                        placeholder="Drop A Message"
                      />
                    </div>
                  </div>

                  <div className="btnDiv">
                    <button className="sendBtn" name="submit" value="submit">
                      Send
                      {/* <div className="sendIcon">arrow icon</div> */}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="numbers">
        <div className="section">
          <div className="number">10</div>
          <div className="text">Years of Experience</div>
        </div>
        <div className="line"></div>
        <div className="section">
          <div className="number">365+</div>
          <div className="text">Happy Clients</div>
        </div>
        <div className="line"></div>
        <div className="section">
          <div className="number">90%</div>
          <div className="text">Projects Delivered</div>
        </div>
      </div>
    </div>

    <DirectLink />
    </>
  );
};

export default cw;
