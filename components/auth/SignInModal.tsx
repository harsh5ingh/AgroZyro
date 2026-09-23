"use client";

import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";

type UserRole = "buyer" | "seller";

interface SignInModalProps {
  open: boolean;
  onClose: () => void;
  onSignUp: () => void;
}

const roleContent = {
  buyer: {
    image: "/images/auth/buyer-login.png",
    badge: "Welcome to AgroZyro",
    title: "Good to see you again!",
    description:
      "Log in to continue your journey on India's agricultural marketplace.",
    features: [
      {
        icon: ShieldCheck,
        title: "Verified Marketplace",
        text: "Trusted buyers & sellers",
      },
      {
        icon: CheckCircle2,
        title: "Real-time Market Insights",
        text: "Make informed decisions",
      },
      {
        icon: Users,
        title: "Grow Together",
        text: "A stronger agricultural future",
      },
    ],
    bottomTitle: "Farmers Grow India Grows",
  },

  seller: {
    image: "/images/auth/seller-login.png",
    badge: "Empowering Farmers",
    title: "Sell with Bigger Opportunities.",
    description:
      "Connect with buyers across India, get better prices and grow your business with AgroZyro.",
    features: [
      {
        icon: Users,
        title: "Reach More Buyers",
        text: "Across 28+ states",
      },
      {
        icon: ShieldCheck,
        title: "Transparent Pricing",
        text: "Real market data",
      },
      {
        icon: CheckCircle2,
        title: "Simple & Secure",
        text: "Safe transactions",
      },
    ],
    bottomTitle: "Empowering Farmers, Enriching India",
  },
};

export default function SignInModal({
  open,
  onClose,
  onSignUp,
}: SignInModalProps) {
  const [role, setRole] = useState<UserRole>("buyer");
  const [showPassword, setShowPassword] = useState(false);

  const content = roleContent[role];

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSignUp = () => {
    onClose();
    onSignUp();
  };

  return (
    <div
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        bg-black/40
        p-3
        backdrop-blur-[4px]
        sm:p-5
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {/* =====================================================
          MAIN MODAL
      ====================================================== */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="signin-title"
        className="
          relative
          w-full
          max-w-[1150px]
          overflow-hidden
          rounded-[20px]
          border
          border-white/50
          bg-white
          shadow-[0_30px_90px_rgba(0,0,0,0.28)]
          max-h-[calc(100vh-24px)]
          sm:max-h-[calc(100vh-40px)]
          md:h-[680px]
          md:max-h-none
        "
      >
        {/* ===================================================
            AUTH CANVAS
        ==================================================== */}
        <div
          className="
            relative
            min-h-[700px]
            md:h-full
            md:min-h-0
          "
        >
          {/* Background */}
          <img
            src={content.image}
            alt=""
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-[72%_center]
              transition-opacity
              duration-500
              sm:object-[70%_center]
              md:object-center
            "
          />

          {/* Left overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-white/97
              via-white/75
              to-white/10
              md:from-white/96
              md:via-white/72
              md:to-white/5
            "
          />

          {/* Bottom green fade */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-[40%]
              bg-gradient-to-t
              from-[#dff1e5]/80
              via-transparent
              to-transparent
            "
          />

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sign in"
            className="
              absolute
              right-3
              top-3
              z-50
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-black/10
              bg-white/85
              text-zinc-700
              shadow-sm
              backdrop-blur-md
              transition
              hover:bg-white
              hover:text-zinc-950
              sm:right-4
              sm:top-4
            "
          >
            <X size={19} strokeWidth={1.8} />
          </button>

          {/* ===================================================
              LEFT CONTENT
          ==================================================== */}
          <div
            className="
              relative
              z-10
              p-5
              sm:p-7
              md:h-full
              md:p-9
              lg:p-10
              xl:p-12
            "
          >
            {/* Logo */}
            <img
              src="/images/logo/agrozyro-logo.svg"
              alt="AgroZyro"
              className="
                h-auto
                w-[130px]
                sm:w-[145px]
                md:w-[150px]
              "
            />

            {/* Marketing */}
            <div
              className="
                mt-7
                max-w-[430px]
                sm:mt-9
                md:mt-10
              "
            >
              {/* Badge */}
              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-agro-green/15
                  bg-white/80
                  px-3.5
                  py-1.5
                  text-[10px]
                  font-semibold
                  text-agro-green-dark
                  shadow-sm
                  backdrop-blur-md
                  sm:text-[11px]
                "
              >
                {content.badge}
              </span>

              {/* Heading */}
              <h2
                className="
                  mt-4
                  max-w-[430px]
                  text-[32px]
                  font-bold
                  leading-[1]
                  tracking-[-0.04em]
                  text-[#07131d]
                  sm:text-[38px]
                  md:text-[44px]
                  lg:text-[48px]
                "
              >
                {content.title}
              </h2>

              {/* Description */}
              <p
                className="
                  mt-3
                  max-w-[410px]
                  text-[12px]
                  leading-5
                  text-[#263746]
                  sm:text-[13px]
                  sm:leading-6
                  md:text-[14px]
                "
              >
                {content.description}
              </p>

              {/* Features */}
              <div
                className="
                  mt-4
                  space-y-2.5
                  sm:mt-5
                  sm:space-y-3.5
                "
              >
                {content.features.map(
                  ({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="flex items-center gap-3"
                    >
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#e1f4e8]/95
                          text-agro-green-dark
                          shadow-sm
                          sm:h-10
                          sm:w-10
                        "
                      >
                        <Icon size={17} strokeWidth={2} />
                      </div>

                      <div className="min-w-0">
                        <p
                          className="
                            truncate
                            text-[12px]
                            font-semibold
                            text-[#14202b]
                            sm:text-[13px]
                          "
                        >
                          {title}
                        </p>

                        <p
                          className="
                            truncate
                            text-[10px]
                            text-[#52606d]
                            sm:text-[11px]
                          "
                        >
                          {text}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>

              {/* Bottom message */}
              <div
                className="
                  mt-4
                  flex
                  h-[58px]
                  max-w-[390px]
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/80
                  bg-white/80
                  px-3.5
                  shadow-sm
                  backdrop-blur-md
                  sm:mt-5
                  sm:h-[64px]
                  sm:px-4
                "
              >
                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#dff3e6]
                    text-agro-green-dark
                    sm:h-9
                    sm:w-9
                  "
                >
                  <CheckCircle2 size={17} />
                </div>

                <div className="min-w-0">
                  <p
                    className="
                      truncate
                      text-[10px]
                      font-semibold
                      text-zinc-800
                      sm:text-[11px]
                    "
                  >
                    {content.bottomTitle}
                  </p>

                  <p
                    className="
                      truncate
                      text-[9px]
                      text-zinc-500
                      sm:text-[10px]
                    "
                  >
                    A smarter, fairer and more transparent
                    agricultural marketplace for India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================
              LOGIN CARD
          ==================================================== */}
          <div
            className="
              relative
              z-30
              mx-3
              mt-5
              mb-4
              rounded-[18px]
              border
              border-white/60
              bg-white/68
              p-5
              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              backdrop-blur-xl
              sm:mx-5
              sm:p-6
              md:absolute
              md:right-6
              md:top-1/2
              md:mx-0
              md:mt-0
              md:mb-0
              md:w-[410px]
              md:-translate-y-1/2
              lg:right-10
              lg:w-[430px]
              xl:right-12
            "
          >
            {/* Heading */}
            <div>
              <h1
                id="signin-title"
                className="
                  text-[25px]
                  font-bold
                  tracking-tight
                  text-[#0b1821]
                  sm:text-[28px]
                "
              >
                Welcome Back
              </h1>

              <p
                className="
                  mt-1
                  text-[11px]
                  text-[#53616d]
                  sm:text-xs
                "
              >
                Log in to your AgroZyro account
              </p>
            </div>

            {/* Buyer / Seller */}
            <div
              className="
                mt-4
                grid
                h-10
                grid-cols-2
                rounded-full
                border
                border-agro-green/20
                bg-white/40
                p-1
                backdrop-blur-md
                sm:mt-5
                sm:h-11
              "
            >
              <button
                type="button"
                onClick={() => setRole("buyer")}
                className={`
                  rounded-full
                  text-[11px]
                  font-semibold
                  transition-all
                  duration-300
                  sm:text-xs
                  ${
                    role === "buyer"
                      ? "bg-agro-green text-white shadow-sm"
                      : "text-[#263746] hover:bg-white/50"
                  }
                `}
              >
                Buyer
              </button>

              <button
                type="button"
                onClick={() => setRole("seller")}
                className={`
                  rounded-full
                  text-[11px]
                  font-semibold
                  transition-all
                  duration-300
                  sm:text-xs
                  ${
                    role === "seller"
                      ? "bg-agro-green text-white shadow-sm"
                      : "text-[#263746] hover:bg-white/50"
                  }
                `}
              >
                Seller
              </button>
            </div>

            {/* Login Form */}
            <form
              className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3"
              onSubmit={(event) => event.preventDefault()}
            >
              {/* Email */}
              <div className="relative">
                <Mail
                  size={16}
                  strokeWidth={1.8}
                  className="
                    absolute
                    left-3.5
                    top-1/2
                    z-10
                    -translate-y-1/2
                    text-[#61707b]
                    sm:h-[17px]
                    sm:w-[17px]
                  "
                />

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="
                    h-10
                    w-full
                    rounded-lg
                    border
                    border-black/10
                    bg-white/48
                    pl-10
                    pr-3
                    text-xs
                    text-[#17212b]
                    outline-none
                    placeholder:text-[#7a8791]
                    backdrop-blur-md
                    transition
                    focus:border-agro-green/50
                    focus:bg-white/65
                    focus:ring-2
                    focus:ring-agro-green/10
                    sm:h-11
                    sm:text-sm
                  "
                />
              </div>

              {/* Password */}
              <div className="relative">
                <LockKeyhole
                  size={16}
                  strokeWidth={1.8}
                  className="
                    absolute
                    left-3.5
                    top-1/2
                    z-10
                    -translate-y-1/2
                    text-[#61707b]
                    sm:h-[17px]
                    sm:w-[17px]
                  "
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="
                    h-10
                    w-full
                    rounded-lg
                    border
                    border-black/10
                    bg-white/48
                    pl-10
                    pr-11
                    text-xs
                    text-[#17212b]
                    outline-none
                    placeholder:text-[#7a8791]
                    backdrop-blur-md
                    transition
                    focus:border-agro-green/50
                    focus:bg-white/65
                    focus:ring-2
                    focus:ring-agro-green/10
                    sm:h-11
                    sm:text-sm
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((visible) => !visible)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  className="
                    absolute
                    right-3.5
                    top-1/2
                    -translate-y-1/2
                    text-[#66747e]
                    transition
                    hover:text-[#17212b]
                  "
                >
                  {showPassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>
              </div>

              {/* Remember / Forgot */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-3
                  py-1
                "
              >
                <label
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-2
                    text-[10px]
                    text-[#52606d]
                    sm:text-[11px]
                  "
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-[#1f6b3a]"
                  />

                  Remember me
                </label>

                <button
                  type="button"
                  className="
                    shrink-0
                    text-[10px]
                    font-semibold
                    text-agro-green-dark
                    transition
                    hover:text-agro-green
                    hover:underline
                    sm:text-[11px]
                  "
                >
                  Forgot password?
                </button>
              </div>

              {/* Login */}
              <button
                type="submit"
                className="
                  h-10
                  w-full
                  rounded-lg
                  bg-agro-green
                  text-xs
                  font-semibold
                  text-white
                  shadow-sm
                  transition
                  hover:bg-agro-green-dark
                  hover:shadow-md
                  sm:h-11
                  sm:text-sm
                "
              >
                Log In
              </button>
            </form>

            {/* Divider */}
            <div className="my-4 flex items-center gap-3 sm:my-5">
              <div className="h-px flex-1 bg-black/10" />

              <span className="whitespace-nowrap text-[9px] text-[#6b7780] sm:text-[10px]">
                or continue with
              </span>

              <div className="h-px flex-1 bg-black/10" />
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              <button
                type="button"
                className="
                  flex
                  h-9
                  items-center
                  justify-center
                  gap-1.5
                  rounded-lg
                  border
                  border-black/10
                  bg-white/45
                  text-[9px]
                  font-medium
                  text-[#263746]
                  backdrop-blur-md
                  transition
                  hover:bg-white/70
                  sm:h-10
                  sm:text-[11px]
                "
              >
                <span className="font-bold text-[#4285F4]">
                  G
                </span>
                <span>Google</span>
              </button>

              <button
                type="button"
                className="
                  flex
                  h-9
                  items-center
                  justify-center
                  gap-1.5
                  rounded-lg
                  border
                  border-black/10
                  bg-white/45
                  text-[9px]
                  font-medium
                  text-[#263746]
                  backdrop-blur-md
                  transition
                  hover:bg-white/70
                  sm:h-10
                  sm:text-[11px]
                "
              >
                <span className="font-bold text-black">
                  
                </span>
                <span>Apple</span>
              </button>

              <button
                type="button"
                className="
                  flex
                  h-9
                  items-center
                  justify-center
                  gap-1.5
                  rounded-lg
                  border
                  border-black/10
                  bg-white/45
                  text-[9px]
                  font-medium
                  text-[#263746]
                  backdrop-blur-md
                  transition
                  hover:bg-white/70
                  sm:h-10
                  sm:text-[11px]
                "
              >
                <span className="font-bold text-[#0A66C2]">
                  in
                </span>
                <span>LinkedIn</span>
              </button>
            </div>

            {/* =================================================
                SIGN UP
            ================================================= */}
            <p
              className="
                mt-4
                text-center
                text-[10px]
                text-[#52606d]
                sm:mt-5
                sm:text-xs
              "
            >
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={handleSignUp}
                className="
                  font-semibold
                  text-agro-green-dark
                  transition
                  hover:text-agro-green
                  hover:underline
                "
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}