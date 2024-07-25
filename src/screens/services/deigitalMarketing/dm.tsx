import React from "react";

import "./dm.scss";

const dm = () => {
  return (
    <div className="dm">
      <section className="heroBanner dmBgBanner">
        <div className="container-xxl heroTopDiv">
          <div className="row">
            <div className="col">
              <div className="dmHeroText">
                <div className="dmHeroTop">
                  <p className="dmHeroPara">Connect I Convert I Succeed!</p>
                </div>
                <div className="dmHeroTypewriter">
                  <h1 className="typingEffect">
                    Creating Connections
                    <span> To Boost Business!</span>
                    <span> &nbsp;</span>
                  </h1>
                  <p className="dmHeroPara">
                    Our experienced professionals specialise in digital
                    marketing, providing comprehensive solutions to help your
                    business succeed online. Contact us now to collaborate with
                    us.
                  </p>
                  {/* <p className="dmHeroPara">
                  </p> */}
                </div>
              </div>
            </div>

            <div className="col">
              <div className="dmHeroFormDiv">
                <div className="dmHeroHeading">
                  <h3>
                    Fill Out The Form Below
                    <br />
                    To Schedule A Call With Us
                  </h3>
                </div>

                <form className="dmHeroForm" method="post" action="">
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
  );
};

export default dm;
