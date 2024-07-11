import React from "react";

import "./webdev.scss";

const webdev = () => {
  return (
    <div className="webDev">
      <section className="heroBanner webBgBanner">
        <div className="container-xxl heroTopDiv">
          <div className="row">
            <div className="col">
              <div className="webDevHeroText">
                <div className="webDevHeroTop">
                  <p className="webDevHeroPara">Building Your Vision!</p>
                </div>
                <div className="webDevHeroTypewriter">
                  <h1 className="typingEffect">
                    We Build Website That Build Your
                    <span> Business</span>
                    <span> &nbsp;</span>
                  </h1>
                  <p className="webDevHeroPara">
                    Nowadays, having a strong online presence is essential for
                    any business, and that's where Mighty Warners, a website
                    development and web design company in Dubai, comes in.
                  </p>
                  <p className="webDevHeroPara">
                    We specialise in creating visually stunning websites that
                    not only look great but are also optimised for a seamless
                    user experience. With our expert team of designers and
                    developers, we work closely with clients to understand their
                    unique needs and create customized solutions. In today's
                    digital age, having a professional and effective website is
                    crucial for success, and we are the perfect partner for any
                    business looking to elevate their online presence.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="webDevHeroFormDiv">
                <div className="webDevHeroHeading">
                  <h3>
                    Fill Out The Form Below
                    <br />
                    To Schedule A Call With Us
                  </h3>
                </div>

                <form className="webDevHeroForm" method="post" action="">
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
                        <option value="B2B">
                          A
                        </option>
                        <option value="B2C">
                          B
                        </option>
                        <option value="C2C">
                          C
                        </option>
                        <option value="Other">
                          Other
                        </option>
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
                    <button className="sendBtn" name="submit" value="submit">Send
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

export default webdev;
