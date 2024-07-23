import React from "react";

import "./bm.scss";

const bm = () => {
  return (
    <div className="bm">
      <section className="heroBanner bmBgBanner">
        <div className="container-xxl heroTopDiv">
          <div className="row">
            <div className="col">
              <div className="bmHeroText">
                <div className="bmHeroTop">
                  <p className="bmHeroPara">Master Your Brand Story!</p>
                </div>
                <div className="bmHeroTypewriter">
                  <h1 className="typingEffect">
                    Building Brands That Make a<span> Enduring Impact!</span>
                    <span> &nbsp;</span>
                  </h1>
                  <p className="bmHeroPara">
                    Welcome to Mighty Warners, the premier branding agency in
                    Dubai. We are your gateway to establishing a powerful and
                    captivating brand presence in today's competitive
                    marketplace. Our expertise and innovative strategies help
                    businesses like yours create a lasting impression and
                    achieve remarkable success.
                  </p>
                  <p className="bmHeroPara">
                    Our team of talented professionals specialises in brand
                    development, design, and marketing, delivering exceptional
                    results that elevate your brand to new heights. Whether
                    you're a startup or an established company, trust us to
                    craft a unique brand identity that resonates with your
                    target audience. Discover the transformative power of
                    branding with Mighty Warners.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="bmHeroFormDiv">
                <div className="bmHeroHeading">
                  <h3>
                    Fill Out The Form Below
                    <br />
                    To Schedule A Call With Us
                  </h3>
                </div>

                <form className="bmHeroForm" method="post" action="">
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
    </div>
  );
};

export default bm;
