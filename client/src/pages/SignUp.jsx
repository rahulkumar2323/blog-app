import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="sm:text-xl font-bold dark:text-white">
            <span className="flex px-3 py-2 bg-[#b5c0d0] rounded-lg text-white text-4xl items-center w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              Flash Blog
            </span>
          </Link>
          <p className="text-sm mt-5 font-normal">
            This is blog-app. You can sign up with your email and password or
            with Google
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="">
              <Label value="Your Username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div className="">
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="someone@one.com"
                id="email"
              />
            </div>
            <div className="">
              <Label value="Your Password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button
              className="bg-[#eed3d9] text-gray-70"
              type="submit"
              color="pink"
            >
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link
              to="/sign-in"
              className="underline font-semibold hover:text-gray-400"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
