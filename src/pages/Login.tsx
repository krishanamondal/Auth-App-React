import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  // Chrome,
  // Github,
} from "lucide-react";
import { NavLink } from "react-router";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <div className="flex min-h-screen items-center justify-center px-4">

        {/* Login Card */}
        <div
          className="
            w-full
            max-w-[540px]
            rounded-[18px]
            border
            border-[#292929]
            bg-[#121212]
            px-8
            py-9
            shadow-[0_20px_60px_rgba(0,0,0,0.45)]
            sm:px-14
            sm:py-10
          "
        >

          {/* Heading */}
          <div className="mb-10 text-center">

            <h1 className="text-[38px] font-bold tracking-tight text-white">
              Welcome Back
            </h1>

            <p className="mx-auto mt-3 max-w-[380px] text-[18px] leading-7 text-[#a1a1a1]">
              Login to access your futuristic authentication
              dashboard
            </p>

          </div>

          {/* Login Form */}
          <form className="space-y-7">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-[16px] font-semibold text-white"
              >
                Email
              </label>

              <div className="relative">

                <Mail
                  size={22}
                  strokeWidth={1.8}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#a5a5a5]
                  "
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="
                    h-[46px]
                    w-full
                    rounded-[8px]
                    border
                    border-[#454545]
                    bg-[#202020]
                    pl-12
                    pr-4
                    text-[16px]
                    text-white
                    outline-none
                    placeholder:text-[#8a8a8a]
                    transition
                    focus:border-[#666666]
                    focus:ring-1
                    focus:ring-[#555555]
                  "
                />

              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-[16px] font-semibold text-white"
              >
                Password
              </label>

              <div className="relative">

                <Lock
                  size={22}
                  strokeWidth={1.8}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#a5a5a5]
                  "
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="
                    h-[46px]
                    w-full
                    rounded-[8px]
                    border
                    border-[#454545]
                    bg-[#202020]
                    pl-12
                    pr-12
                    text-[16px]
                    text-white
                    outline-none
                    placeholder:text-[#8a8a8a]
                    transition
                    focus:border-[#666666]
                    focus:ring-1
                    focus:ring-[#555555]
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-[#888]
                    transition
                    hover:text-white
                  "
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="
                h-[46px]
                w-full
                rounded-full
                bg-[#f1f1f1]
                text-[20px]
                font-medium
                text-[#111111]
                transition
                hover:bg-white
                active:scale-[0.99]
              "
            >
              Login
            </button>

          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">

            <div className="h-px flex-1 bg-[#242424]" />

            <span className="text-[16px] text-[#999999]">
              OR
            </span>

            <div className="h-px flex-1 bg-[#242424]" />

          </div>

          {/* Google */}
          <button
            type="button"
            className="
              flex
              h-[46px]
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-[#414141]
              bg-[#1d1d1d]
              text-[17px]
              font-semibold
              text-white
              transition
              hover:bg-[#272727]
            "
          >
            {/* <Chrome
              size={20}
              strokeWidth={2}
            /> */}

            Continue with Google
          </button>

          {/* GitHub */}
          <NavLink to={"/signup"}><span> <button
            type="button"
            className="
              mt-4
              flex
              h-[46px]
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-[#414141]
              bg-[#1d1d1d]
              text-[17px]
              font-semibold
              text-white
              transition
              hover:bg-[#272727]
            "
          >
            {/* <Github
              size={20}
              strokeWidth={2}
            /> */}

            Continue with GitHub
          </button></span></NavLink>
          

        </div>
      </div>
    </div>
  );
}