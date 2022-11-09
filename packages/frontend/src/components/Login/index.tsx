import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";
import Image from "../Image";

import * as s from "./styles";
import { UserItem } from "@my-fullstack-app/shared";

axios.defaults.baseURL = process.env.REACT_APP_API_KEY;

axios.interceptors.request.use((config) => {
  if (!config?.headers) {
    config.headers = {};
  }
  const jwt = localStorage.getItem("jwt_token");
  if (jwt) {
    config.headers["authorization"] = `Bearer ${jwt}`;
  }
  return config;
});

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const loginUser = async (
    user: string,
    userPassword: string
  ): Promise<UserItem | null> => {
    const loginResponse = await axios.post("/auth", {
      username: user.toLocaleLowerCase(),
      password: userPassword,
    });

    if (loginResponse?.status === 200) {
      localStorage.setItem("jwt_token", loginResponse.data);
      navigate("/messages");
    }
    return null;
  };

  return (
    <s.MsnLoginDiv>
      <s.MessengerWindow>
        <s.Head>
          <Logo />
        </s.Head>
        <s.HighDiv>
          <Image />
        </s.HighDiv>
        <s.InputDiv>
          <s.Lable>Username</s.Lable>
          <s.InputUser
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Username"
          />
        </s.InputDiv>
        <s.InputDiv>
          <s.Lable>Password</s.Lable>
          <s.InputUser
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
        </s.InputDiv>
        <s.Button onClick={() => loginUser(user, userPassword)}>
          {" "}
          Log In{" "}
        </s.Button>
      </s.MessengerWindow>
    </s.MsnLoginDiv>
  );
}
