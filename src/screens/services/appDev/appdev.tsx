import React from "react";
import DirectLink from "../../../components/directLink/directLink";
import "./appdev.scss";

const appdev = () => {
  return (
    <>
    <div className="appDev">
      <section className="heroBanner appBgBanner">
        <div className="container-xxl heroTopDiv">
          <div className="row">
            <div className="col">
              <div className="appDevHeroText">
                <div className="appDevHeroTop">
                  <p className="appDevHeroPara">Your App, Our Passion!</p>
                </div>
                <div className="appDevHeroTypewriter">
                  <h1 className="typingEffect">
                    Need A Mobile App To
                    <span> Increase Productivity?</span>
                    <span> &nbsp;</span>
                  </h1>
                  <p className="appDevHeroPara">
                    Being a Mobile app development agency, like Mighty Warners,
                    is all about creating and designing apps that can run
                    smoothly on mobile devices. Our team of experts specialises
                    in developing user-friendly and functional mobile
                    applications that can help businesses achieve their goals.
                    Our development process includes understanding the client's
                    needs, designing the app, coding, testing, and launching the
                    final product.
                  </p>
                  <p className="appDevHeroPara">
                    At Mighty Warners, we stay up-to-date with the latest mobile
                    app development trends and technologies to provide our
                    clients with the best services.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="appDevHeroFormDiv">
                <div className="appDevHeroHeading">
                  <h3>
                    Fill Out The Form Below
                    <br />
                    To Schedule A Call With Us
                  </h3>
                </div>

                <form className="appDevHeroForm" method="post" action="">
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

export default appdev;
