import React, { useEffect } from "react";
import axios from 'axios';
import * as Components from "./consumerloginstyle";
import "../components/landingpageComponent/loginsignup.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

function AuthenticationContainer() {
  const [signIn, toggle] = React.useState(true);
  const [tokn, settokn] = React.useState();
  const {login} = useAuth();
  // const [formData, setFormData] = React.useState({
  //   email: "",
  //   password: "",
  // });

  const [email, setMail] = React.useState("");
  function handleChangeEmail(e) {
    let val = e.target.value;
    setMail(val);
  }

  const [password, setPassword] = React.useState("");
  function handleChangePassword(e) {
    let val = e.target.value;
    setPassword(val);
  }

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   console.log(name, value);
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: formData[name] + value,
  //   }));
  // };

  // var bodyyy;
  let navigator = useNavigate();
  // useEffect(() => {
  //   // event.preventDefault();
  //   async function name_fxn() {
  //     const response = await fetch("http://localhost:8080/getcsrf");
  //     const bodyy = await response.json();
  //     settokn(bodyy.token);
  //     console.log(bodyy.token);
  //     setTimeout(() => {}, 1000);
  //   }

  //   name_fxn();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hajch");
    console.log(email, password, tokn);
    try {
      const response = await axios.post("http://localhost:8080/api/consumer/login", {
          email: email,
          password: password,
          _csrf: tokn,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      if (response.data.message === "logged in successfully") {
        login(response.data.data);
        console.log(response.data.data,"from consumerlogin")
        navigator("/customerview");
        // res.send("success");
      }

      // if (response.data.success) {
      //   console.log(response);
      //   navigate("/adminland");
      // } else {
      //   console.log("else");
      //   navigate("/adminLogin");
      //   alert(response.data.message);
      // }
    } catch (error) {
      console.error("Error:", error);
    }
};

  return (
    <section className="tocent-ag">
      <div className="loginsignup-ag">
        <Components.Container>
          <Components.SignUpContainer signinIn={signIn}>
            <Components.Form >
              <Components.Title>Create Account</Components.Title>
              <Components.Input type="hidden" name="_csrf" value={tokn} />
              <Components.Input type="text" placeholder="Name" />
              <Components.Input type="email" placeholder="Email" />
              <Components.Input type="password" placeholder="Password" />
              <Components.Input type="phone" placeholder="phone" />
              <Components.Input type="address" placeholder="address" />
              <Components.Input type="pin" placeholder="pin" />
              <Components.Button>Sign Up</Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer signinIn={signIn}>
            <Components.Form onSubmit={handleSubmit}>
              <Components.Title>Sign in</Components.Title>
              <Components.Input type="hidden" name="_csrf" value={tokn} />
              <Components.Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleChangeEmail}
              />
              <Components.Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handleChangePassword}
              />
              <Components.Anchor href="#">
                Forgot your password?
              </Components.Anchor>
              <Components.Button type="submit" onSubmit={handleSubmit}>
                Sign In
              </Components.Button>
            </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer signinIn={signIn}>
            <Components.Overlay signinIn={signIn}>
              <Components.LeftOverlayPanel signinIn={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>
                  To keep connected with us please login with your personal info
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(true)}>
                  Sign In
                </Components.GhostButton>
              </Components.LeftOverlayPanel>

              <Components.RightOverlayPanel signinIn={signIn}>
                <Components.Title>Hello, Friend!</Components.Title>
                <Components.Paragraph>
                  Enter Your personal details and start journey with us
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(false)}>
                  Sign Up
                </Components.GhostButton>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>
      </div>
    </section>
  );
}

export default AuthenticationContainer;
