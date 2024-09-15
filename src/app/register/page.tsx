"use client";
import Social from "@/components/common/social/Social";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import bg from "../../../public/assets/images/university1.jpg";
import { fetchProtectedData, logout, registerUser } from "@/utils/api/api";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contextProvider/ContextProvider";

interface LoginFormInputs {
  email: string;
  password: string;
  agreeToTerms: boolean;
  name: string;
  photoUrl: string;
  role: string;
}

const Register = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const auth = useAuth();
  if (auth === null) {
    return <div>loading</div>;
  }
  const { setUser } = auth;
  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    const username = data.name;
    const email = data.email;
    const password = data.password;
    const photourl = data.photoUrl;
    const role = data.role;
    try {
      setLoading(true);
      const res = await registerUser(username, email, password, photourl, role);
      const us_token = res.data.token;
      if (us_token) {
        localStorage.setItem("us", us_token);

        try {
          const user = await fetchProtectedData();

          if (user === null) {
            logout();
            setUser(null);
            router.push("/login");
          } else {
            setUser(user.data);
            router.push("/dashboard");
          }
        } catch (err) {
          logout();
          setUser(null);
          router.push("/login");
        }
      } else {
        console.error("register failed");
        router.push("/login");
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }

    console.log("Agreed to Terms:", data.agreeToTerms);
  };
  if (loading) {
    <div>loading from register</div>;
  }
  return (
    <div className="w-full flex justify-center items-center mx-auto relative min-h-screen p-5 sm:p-10">
      <div className="absolute inset-0 z-[-1]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 max-w-lg w-full py-10 px-5 sm:p-10  rounded-[10px] shadow-lg">
        <div className="absolute inset-0 bg-white bg-opacity-90 rounded-[10px]"></div>
        <div className="relative z-10">
          <div className="text-center mb-6">
            <h1 className="text-xl font-semibold">Welcome To</h1>
            <Link
              href={"/"}
              className="font-bold flex items-center justify-center py-1 hover:bg-white rounded-[10px] border-2 border-transparent  hover:border-[#704FE6]"
            >
              <h1 className="text-2xl transform transition-transform hover:scale-110 cursor-pointer">
                Starlight <span className="text-[#704FE6]">University</span>
              </h1>
            </Link>
            <p className="text-[#707070] mt-2">
              Enter your credentials to access your account
            </p>
          </div>
          <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex max-[550px]:flex-col gap-3">
              {/* Name Field */}
              <div className="border w-full px-4 py-3 mt-4 bg-white rounded-[10px]">
                <label className="block text-sm font-medium text-black">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter Your Name"
                  className="w-full outline-none mt-1"
                />
                {errors.name && (
                  <span className="text-red-600 text-sm">Name is required</span>
                )}
              </div>
              {/* Photo URL Field */}
              <div className="border w-full px-4 py-3 bg-white mt-4 rounded-[10px]">
                <label className="block text-sm font-medium text-black">
                  Photo URL
                </label>
                <input
                  type="url"
                  {...register("photoUrl", { required: true })}
                  placeholder="Enter Photo URL"
                  className="w-full outline-none mt-1"
                />
                {errors.photoUrl && (
                  <span className="text-red-600 text-sm">
                    Photo URL is required
                  </span>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div className="border w-full px-4 py-3 bg-white mt-4 rounded-[10px]">
              <label className="block text-sm font-medium text-black">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter Your Email"
                className="w-full outline-none mt-1"
              />
              {errors.email && (
                <span className="text-red-600 text-sm">Email is required</span>
              )}
            </div>

            {/* Password Field */}
            <div className="relative border w-full px-4 py-3 bg-white mt-4 rounded-[10px]">
              <label className="block text-sm font-medium text-black">
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                {...register("password", { required: true })}
                placeholder="••••••••••••••••"
                className="w-full outline-none mt-1"
              />
              {errors.password && (
                <span className="text-red-600 text-sm">
                  Password is required
                </span>
              )}
              <div
                onClick={() => setShow(!show)}
                className="absolute right-4 top-10 cursor-pointer text-2xl"
              >
                {show ? <IoIosEyeOff /> : <IoIosEye />}
              </div>
            </div>
            {/* Role Selection */}
            <div className="border w-full px-4 py-3 bg-white mt-4 rounded-[10px]">
              <label className="block text-sm font-medium text-black">
                Role
              </label>
              <select
                {...register("role", { required: true })}
                className="w-full outline-none mt-1 "
              >
                <option value="">Select Your Role</option>
                <option value="student">Student</option>
                <option value="parent">Parent</option>
              </select>
              {errors.role && (
                <span className="text-red-600 text-sm">Role is required</span>
              )}
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center mt-3 gap-2 ">
              <input
                type="checkbox"
                {...register("agreeToTerms", { required: true })}
                className="h-4 w-4"
              />
              <label className="text-sm text-black">
                I agree to the{" "}
                <a href="#" className="underline">
                  Terms & Policy
                </a>
              </label>
            </div>
            {errors.agreeToTerms && (
              <span className="text-red-600 text-sm">
                You must agree to the terms and policy
              </span>
            )}

            {/* Submit Button */}
            <input
              type="submit"
              value="Sign Up"
              className="w-full py-3 bg-[#704FE6] rounded-[10px] text-white cursor-pointer hover:bg-gray-800 transition mt-6"
            />
          </form>
          <div className="flex items-center justify-center w-full my-4">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="px-4 text-gray-500">OR</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>
          <Social />
          <h1 className="text-center mt-6 text-sm">
            Have an account?{" "}
            <Link href={"/login"} className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
