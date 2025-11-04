import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import loginimg from "/src/assets/loginimg.png";
import app from "../../../firebase.config";
import {
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { userLoginInfo } from "@/slices/userSlice";

const Login = () => {
  const data = useSelector((state) => state.userInformation.value)
  // console.log(data);
  const dispatch = useDispatch()

  const handleCustomBtn =() =>{
    console.log("clicked");
    
    // const myData ={
    //   name:"Reaz",
    //   age: 46,
    // }
    dispatch(userLoginInfo(userInfo))

  }
  
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  //Name
  const handleNameInput = (e) => {
    setUserInfo((abc) => {
      return { ...abc, name: e.target.value };
    });
  };
  //Name

  //email
  const handleEmailInput = (e) => {
    setUserInfo((abc) => {
      return { ...abc, email: e.target.value };
    });
  };
  //e-mail
  //password
  const handlePasswordInput = (e) => {
    setUserInfo((abc) => {
      return { ...abc, password: e.target.value };
    });
  };
  //password

  //handleLoginGoogle
  const handleLoginGoogle = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log("ok");
        navigate("/dashboard");

        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);

        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  //handleLoginGoogle

  //handleSignupSubmit
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (userInfo.email && userInfo.password)
      signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((userCredential) => {
          // Signed in
          updateProfile(auth.currentUser, {
            displayName: userInfo.name,
            photoURL: "../../assets/userPhoto.png",
          })
            .then(() => {
              const user = userCredential.user;
              console.log(user);
              if (user.emailVerified) {
                navigate("/dashboard");
              } else {
                toast.error("Please Varify Your Email");
              }
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
  };

  return (
    <>
      <Toaster />
      <div className="bg-gray-200 py-18">
        <div className="max-w-[1100px] m-auto">
          <div className="flex items-center">
            <div className="w-1/2">
              <Card className="max-w-xl h-[520px]">
                <CardHeader>
                  <CardTitle className="font-nunito font-bold text-[34px] -mb-[13px] text-[#261848] text-center">
                    Login to your account!
                  </CardTitle>
                  {/* <h2>{data}</h2> */}
                  <button onClick={handleCustomBtn} className=" py-2 px-3 bg-violet-500 text-lg text-white rounded-lg">Send Data to the Dashboard</button>
                </CardHeader>
                <CardContent>
                  <form  onSubmit={handleSignupSubmit}>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-4 m-auto">
                      <div className="border border-gray-300 rounded-lg p-2 w-50 focus-within:border-gray-500">
                        <div
                          className="flex items-center justify-center gap-x-2"
                          onClick={handleLoginGoogle}
                        >
                          <FcGoogle className="text-2xl " />
                          <h4>Login with Google</h4>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-4">
                      <fieldset className="w-rull border border-gray-300 rounded-lg p-2 w-80 focus-within:border-gray-500">
                        <legend>Email address</legend>
                        <Input
                          type="email"
                          placeholder="m@example.com"
                          onChange={handleEmailInput}
                        />
                      </fieldset>
                    </div>
                    <div className="grid gap-4">
                      <fieldset className="w-rull border border-gray-300 rounded-lg p-2 w-80 focus-within:border-gray-500">
                        <legend>Password</legend>
                        <Input
                          type="password"
                          placeholder="******"
                          onChange={handlePasswordInput}
                        />
                      </fieldset>
                    </div>
                  </div>
                  <CardFooter className="flex-col gap-4">
                    <Button type="submit" className="w-sm mt-6">
                      Login to Continue
                    </Button>
                  </CardFooter>

                  <CardDescription className="font-nunito text-[16px] text-[#000000] mt-6">
                    <div className="flex justify-center items-center gap-x-1">
                      <p className="font-OpenSans text-[13px]">
                        Don't have an account?
                      </p>

                      <button className="font-OpenSans font-bold text-[#261848]">
                        Sign Up
                      </button>
                    </div>
                  </CardDescription>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="w-1/2">
              <img
                src={loginimg}
                alt="loginimg"
                className="h-[520px] w-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
