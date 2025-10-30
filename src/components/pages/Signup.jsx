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
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import signupimg from "/src/assets/signupimg.png";

const Signup = () => {
  const navigate = useNavigate();
  const auth = getAuth();
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

  //handleSignupSubmit
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (!userInfo.name || !userInfo.email || !userInfo.password) {
      toast.error("Credintial is Missing");
    } else {
      createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser).then(() => {
            navigate("/login");
            updateProfile(auth.currentUser, {
              displayName: userInfo.name,
              photoURL: "/userphoto.png",
            });
            toast.success("Data Sent");
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  };

  return (
    <>
      <Toaster />
      <div className="bg-gray-200">
        <div className="max-w-[1100px] m-auto">
          <div className="flex items-center">
            <div className="w-1/2">
              <Card className="max-w-xl h-[520px]">
                <CardHeader>
                  <CardTitle className="font-nunito font-bold text-[34px] -mb-[13px] text-[#261848]">
                    Get started with easily register
                  </CardTitle>
                  <CardDescription className="font-nunito text-[21px] text-[#000000] opacity-42 text-center">
                    Free register and you can enjoy it
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSignupSubmit}>
                    <div className="flex flex-col gap-6">
                      <div className="grid gap-4">
                        <fieldset className="w-rull border border-gray-300 rounded-lg p-2 w-80  focus-within:border-gray-500">
                          <legend>Name</legend>
                          <Input
                            type="text"
                            placeholder="Enter Your Name"
                            onChange={handleNameInput}
                          />
                        </fieldset>
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
                        Sign Up
                      </Button>
                    </CardFooter>

                    <CardDescription className="font-nunito text-[16px] text-[#000000] mt-6">
                      <div className="flex justify-center items-center gap-x-1">
                        <p className="font-OpenSans text-[13px]">
                          Already have an account?
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
                src={signupimg}
                alt="signupimg"
                className="h-[520px] w-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
