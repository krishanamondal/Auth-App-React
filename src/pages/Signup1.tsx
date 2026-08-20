import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,

} from "lucide-react";

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export default function Signup() {
  const [data, setData] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <div className="flex min-h-screen items-center justify-center px-4">
        {/* Signup Card */}
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
              Login to access your futuristic authentication dashboard
            </p>
          </div>

          {/* Signup Form */}
          <form className="space-y-7" onSubmit={handleSubmit}>
            {/* Name */}
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a5a5a5]"
                />

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={data.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  autoComplete="name"
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a5a5a5]"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={handleInputChange}
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a5a5a5]"
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={data.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  autoComplete="new-password"
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
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              disabled={loading}
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
                disabled:opacity-60
              "
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>

            {error && (
              <p className="text-center text-[14px] text-red-500">{error}</p>
            )}
          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#242424]" />
            <span className="text-[16px] text-[#999999]">OR</span>
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
            
            Continue with Google
          </button>

          {/* GitHub */}
          <button
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
           
            Continue with GitHub
          </button>

          {/* Login link */}
          <p className="mt-8 text-center text-[15px] text-[#a1a1a1]">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-white hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}