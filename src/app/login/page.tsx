'use client'
import Social from "@/components/common/social/Social";
import Lottie from "lottie-react";
import welcome from "../../../public/assets/welcome.json";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

interface LoginFormInputs {
    email: string;
    password: string;
}

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormInputs>();

    const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
        console.log("Email:", data.email);
        console.log("Password:", data.password);
    };

    return (
        <div className="sm:h-[600px] mt-10  w-11/12 max-w-screen-lg mx-auto shadow-2xl flex flex-col  sm:flex-row-reverse items-center " >
            <div className="bg-[#704FE6] h-full sm:w-1/2 flex flex-col justify-center items-center max-sm:py-5" >
                <h1 className="text-white font-bold font-serif text-4xl">Welcome Back!</h1>
                <Lottie animationData={welcome} loop={true} />;
            </div>
            <div className="sm:w-1/2 sm:p-10  max-sm:mt-4">
                <h1 className="font-bold text-xl">Login Now</h1>
                <p className="text-sm mt-1">Don`t have an account? <Link href={'/register'}><span className="underline font-bold">Create Now</span></Link></p>
                <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="example@gmail.com" className="input input-bordered" required />
                        {errors.email && <span className="text-[#ED1D24]">email is required</span>}
                    </div>
                    <div className="form-control my-3">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"  {...register("password", { required: true })} placeholder="password" className="input input-bordered" required />
                        {errors.password && <span className="text-[#ED1D24]">password is required</span>}
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-black text-white">Login</button>
                    </div>
                </form>
                <div className="divider"> OR</div>
                <div className="">
                    <Social></Social>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
