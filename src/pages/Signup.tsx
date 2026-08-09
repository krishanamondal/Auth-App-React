// import { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   User,
//   Mail,
//   Lock,
//   Eye,
//   EyeOff,
//   // Github,
// } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  // Goog
  // Chrome,
  // Github,
} from "lucide-react";
import { NavLink } from "react-router";

export default function Signup(){
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
              Create Your Account
            </h1>

            <p className="mx-auto mt-3 max-w-[380px] text-[18px] leading-7 text-[#a1a1a1]">
              Login to access your futuristic authentication
              dashboard
            </p>

          </div>

          {/* Login Form */}
          <form className="space-y-7">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-[16px] font-semibold text-white"
              >
                Name
              </label>

              <div className="relative">

                <User
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
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  autoComplete=""
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
              Sign Up
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
//         <div
//           className="
//             w-full
//             max-w-[448px]
//             rounded-[16px]
//             border
//             border-[#e5e5e5]
//             bg-white
//             px-8
//             py-7
//             shadow-[0_18px_45px_rgba(0,0,0,0.10)]
//             sm:px-12
//             sm:py-8
//           "
//         >

//           {/* ================= HEADING ================= */}
//           <div className="mb-8 text-center">

//             <h1
//               className="
//                 text-[32px]
//                 font-bold
//                 tracking-tight
//                 text-[#171717]
//                 sm:text-[36px]
//               "
//             >
//               Create Your Account
//             </h1>

//             <p
//               className="
//                 mx-auto
//                 mt-2
//                 max-w-[330px]
//                 text-[16px]
//                 leading-6
//                 text-[#858585]
//               "
//             >
//               Join the next-generation authentication
//               platform
//             </p>

//           </div>

//           {/* ================= FORM ================= */}
//           <form className="space-y-5">

//             {/* NAME */}
//             <div>

//               <label
//                 htmlFor="name"
//                 className="
//                   mb-2
//                   block
//                   text-[14px]
//                   font-medium
//                   text-[#171717]
//                 "
//               >
//                 Name
//               </label>

//               <div className="relative">

//                 <User
//                   size={20}
//                   strokeWidth={1.8}
//                   className="
//                     absolute
//                     left-3
//                     top-1/2
//                     -translate-y-1/2
//                     text-[#858585]
//                   "
//                 />

//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   placeholder="John Doe"
//                   autoComplete="name"
//                   className="
//                     h-[38px]
//                     w-full
//                     rounded-[7px]
//                     border
//                     border-[#e3e3e3]
//                     bg-white
//                     pl-11
//                     pr-4
//                     text-[14px]
//                     text-[#171717]
//                     outline-none
//                     placeholder:text-[#888]
//                     transition
//                     focus:border-[#a0a0a0]
//                     focus:ring-1
//                     focus:ring-[#d5d5d5]
//                   "
//                 />

//               </div>

//             </div>

//             {/* EMAIL */}
//             <div>

//               <label
//                 htmlFor="email"
//                 className="
//                   mb-2
//                   block
//                   text-[14px]
//                   font-medium
//                   text-[#171717]
//                 "
//               >
//                 Email
//               </label>

//               <div className="relative">

//                 <Mail
//                   size={20}
//                   strokeWidth={1.8}
//                   className="
//                     absolute
//                     left-3
//                     top-1/2
//                     -translate-y-1/2
//                     text-[#858585]
//                   "
//                 />

//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="you@example.com"
//                   autoComplete="email"
//                   className="
//                     h-[38px]
//                     w-full
//                     rounded-[7px]
//                     border
//                     border-[#e3e3e3]
//                     bg-white
//                     pl-11
//                     pr-4
//                     text-[14px]
//                     text-[#171717]
//                     outline-none
//                     placeholder:text-[#888]
//                     transition
//                     focus:border-[#a0a0a0]
//                     focus:ring-1
//                     focus:ring-[#d5d5d5]
//                   "
//                 />

//               </div>

//             </div>

//             {/* PASSWORD */}
//             <div>

//               <label
//                 htmlFor="password"
//                 className="
//                   mb-2
//                   block
//                   text-[14px]
//                   font-medium
//                   text-[#171717]
//                 "
//               >
//                 Password
//               </label>

//               <div className="relative">

//                 <Lock
//                   size={20}
//                   strokeWidth={1.8}
//                   className="
//                     absolute
//                     left-3
//                     top-1/2
//                     -translate-y-1/2
//                     text-[#858585]
//                   "
//                 />

//                 <input
//                   id="password"
//                   name="password"
//                   type={
//                     showPassword
//                       ? "text"
//                       : "password"
//                   }
//                   placeholder="••••••••"
//                   autoComplete="new-password"
//                   className="
//                     h-[38px]
//                     w-full
//                     rounded-[7px]
//                     border
//                     border-[#e3e3e3]
//                     bg-white
//                     pl-11
//                     pr-11
//                     text-[14px]
//                     text-[#171717]
//                     outline-none
//                     placeholder:text-[#888]
//                     transition
//                     focus:border-[#a0a0a0]
//                     focus:ring-1
//                     focus:ring-[#d5d5d5]
//                   "
//                 />

//                 {/* Password Toggle */}
//                 <button
//                   type="button"
//                   onClick={() =>
//                     setShowPassword(!showPassword)
//                   }
//                   aria-label={
//                     showPassword
//                       ? "Hide password"
//                       : "Show password"
//                   }
//                   className="
//                     absolute
//                     right-3
//                     top-1/2
//                     -translate-y-1/2
//                     text-[#858585]
//                     transition
//                     hover:text-[#171717]
//                   "
//                 >
//                   {showPassword ? (
//                     <EyeOff size={18} />
//                   ) : (
//                     <Eye size={18} />
//                   )}
//                 </button>

//               </div>

//             </div>

//             {/* SIGN UP BUTTON */}
//             <button
//               type="submit"
//               className="
//                 mt-2
//                 h-[38px]
//                 w-full
//                 rounded-full
//                 bg-[#292929]
//                 text-[16px]
//                 font-medium
//                 text-white
//                 shadow-sm
//                 transition
//                 hover:bg-[#171717]
//                 active:scale-[0.99]
//               "
//             >
//               Sign Up
//             </button>

//           </form>

//           {/* ================= DIVIDER ================= */}
//           <div className="my-7 flex items-center gap-4">

//             <div className="h-px flex-1 bg-[#e8e8e8]" />

//             <span className="text-[14px] text-[#858585]">
//               OR
//             </span>

//             <div className="h-px flex-1 bg-[#e8e8e8]" />

//           </div>

//           {/* ================= GOOGLE ================= */}
//           <button
//             type="button"
//             className="
//               flex
//               h-[38px]
//               w-full
//               items-center
//               justify-center
//               gap-3
//               rounded-full
//               border
//               border-[#e4e4e4]
//               bg-white
//               text-[14px]
//               font-medium
//               text-[#171717]
//               shadow-sm
//               transition
//               hover:bg-[#f8f8f8]
//             "
//           >

//             {/* Google G */}
//             <span
//               className="
//                 text-[17px]
//                 font-bold
//                 leading-none
//               "
//             >
//               G
//             </span>

//             Continue with Google

//           </button>

//           {/* ================= GITHUB ================= */}
//           <button
//             type="button"
//             className="
//               mt-3
//               flex
//               h-[38px]
//               w-full
//               items-center
//               justify-center
//               gap-3
//               rounded-full
//               border
//               border-[#e4e4e4]
//               bg-white
//               text-[14px]
//               font-medium
//               text-[#171717]
//               shadow-sm
//               transition
//               hover:bg-[#f8f8f8]
//             "
//           >
// {/* 
//             <Github
//               size={18}
//               strokeWidth={1.8}
//             /> */}

//             Continue with GitHub

//           </button>

//           {/* ================= LOGIN LINK ================= */}
//           <p className="mt-6 text-center text-[14px] text-[#858585]">

//             Already have an account?{" "}

//             <Link
//               to="/login"
//               className="
//                 font-medium
//                 text-[#171717]
//                 underline-offset-4
//                 hover:underline
//               "
//             >
//               Login
//             </Link>

//           </p>

//         </div>

      

   
  );
}

// export default Signup;   