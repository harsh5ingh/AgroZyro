// import Image from "next/image";
// import { Apple, Play } from "lucide-react";

// export default function AppPromo() {
//   return (
//     <section className="border-t border-agro-border bg-white py-3 sm:py-4 lg:py-5">
//       <div className="mx-auto w-full max-w-[1330px] px-4 sm:px-6 lg:px-8">
//         <div className="w-full">
//           <div
//             className="
//               relative
//               min-h-[300px]
//               overflow-hidden
//               rounded-[16px]
//               bg-[#e8f6ed]
//               sm:min-h-[285px]
//               lg:h-[242px]
//               lg:min-h-0
//             "
//           >
//             {/* =====================================================
//                 DECORATIVE BACKGROUND
//             ====================================================== */}

//             {/* Large leaf */}
//             <div className="pointer-events-none absolute right-[8%] top-[-5px] opacity-45 sm:right-[105px]">
//               <div className="h-[150px] w-[75px] rotate-[30deg] rounded-[100%_0_100%_0] bg-green-200" />

//               <div className="absolute left-[30px] top-[15px] h-[130px] w-[2px] rotate-[30deg] bg-green-300/60" />
//             </div>

//             {/* Bottom circle */}
//             <div className="pointer-events-none absolute -bottom-[70px] left-[52%] h-[155px] w-[155px] rounded-full border-[13px] border-green-100/80" />

//             {/* =====================================================
//                 CONTENT
//             ====================================================== */}

//             <div className="relative z-10 px-5 pb-7 pt-6 sm:px-7 sm:pt-7 lg:px-8 lg:pt-6">
//               <h2 className="text-[27px] font-semibold leading-[1.04] tracking-tight text-zinc-900 sm:text-[29px] lg:text-[28px]">
//                 Take AgroZyro
//                 <br />
//                 <span className="text-agro-green">With You</span>
//               </h2>

//               <p className="mt-3 max-w-[360px] text-[13px] leading-[1.5] text-zinc-600 sm:text-[14px]">
//                 Access market rates, connect with buyers
//                 <br className="hidden sm:block" />
//                 <span className="sm:hidden"> </span>
//                 and sell your produce — anytime, anywhere.
//               </p>

//               {/* =====================================================
//                   APP STORE BUTTONS
//               ====================================================== */}

//               <div className="mt-5 flex flex-wrap gap-2.5 sm:gap-3">
//                 {/* Google Play */}
//                 <button
//                   type="button"
//                   className="
//                     flex
//                     h-[44px]
//                     w-[142px]
//                     items-center
//                     gap-2
//                     rounded-lg
//                     bg-black
//                     px-3
//                     text-white
//                     transition
//                     hover:bg-zinc-800
//                     sm:h-[47px]
//                     sm:w-[150px]
//                     sm:px-3.5
//                   "
//                 >
//                   <Play
//                     size={18}
//                     fill="currentColor"
//                     strokeWidth={1.5}
//                   />

//                   <span className="text-left leading-none">
//                     <span className="block text-[7px] uppercase tracking-wide">
//                       Get it on
//                     </span>

//                     <span className="mt-0.5 block text-[14px] font-semibold sm:text-[15px]">
//                       Google Play
//                     </span>
//                   </span>
//                 </button>

//                 {/* App Store */}
//                 <button
//                   type="button"
//                   className="
//                     flex
//                     h-[44px]
//                     w-[142px]
//                     items-center
//                     gap-2
//                     rounded-lg
//                     bg-black
//                     px-3
//                     text-white
//                     transition
//                     hover:bg-zinc-800
//                     sm:h-[47px]
//                     sm:w-[150px]
//                     sm:px-3.5
//                   "
//                 >
//                   <Apple
//                     size={19}
//                     fill="currentColor"
//                     strokeWidth={1.5}
//                   />

//                   <span className="text-left leading-none">
//                     <span className="block text-[7px] uppercase tracking-wide">
//                       Download on the
//                     </span>

//                     <span className="mt-0.5 block text-[14px] font-semibold sm:text-[15px]">
//                       App Store
//                     </span>
//                   </span>
//                 </button>
//               </div>

//               <p className="mt-2.5 text-[10px] text-zinc-500">
//                 Mobile app coming soon.
//               </p>
//             </div>

//             {/* =====================================================
//                 PHONE MOCKUP
//             ====================================================== */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 -bottom-[65px]
//                 right-[-8px]
//                 z-20
//                 hidden
//                 h-[245px]
//                 w-[150px]
//                 rotate-[8deg]
//                 rounded-[27px]
//                 border-[5px]
//                 border-zinc-900
//                 bg-white
//                 shadow-xl
//                 sm:block
//                 sm:right-[18px]
//                 lg:right-[25px]
//               "
//             >
//               {/* Dynamic Island */}
//               <div className="absolute left-1/2 top-[8px] h-[16px] w-[58px] -translate-x-1/2 rounded-full bg-zinc-900" />

//               {/* Phone Screen */}
//               <div className="h-full overflow-hidden rounded-[21px] bg-white px-[11px] pt-[34px]">
//                 {/* Welcome */}
//                 <p className="text-[5px] font-medium uppercase tracking-[0.12em] text-agro-green">
//                   Welcome to
//                 </p>

//                 {/* Logo */}
//                 <div className="mt-1 flex items-center justify-between">
//                   <div className="w-[91px]">
//                     <Image
//                       src="/images/logo/agrozyro-logo.svg"
//                       alt="AgroZyro"
//                       width={180}
//                       height={55}
//                       className="h-auto w-full"
//                     />
//                   </div>

//                   <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-agro-green text-[10px] font-bold text-white">
//                     A
//                   </div>
//                 </div>

//                 {/* Search */}
//                 <div className="mt-[15px] flex h-[31px] items-center rounded-lg border border-zinc-200 px-2 text-[5px] text-zinc-400">
//                   Search agricultural products...
//                 </div>

//                 {/* Market Snapshot */}
//                 <div className="mt-4 rounded-lg bg-agro-green p-3 text-white">
//                   <p className="text-[5px] uppercase tracking-wide">
//                     Today&apos;s Market
//                   </p>

//                   <p className="mt-2 text-[11px] font-semibold">
//                     Mustard
//                   </p>

//                   <div className="mt-1 flex items-baseline gap-1">
//                     <span className="text-[15px] font-bold">
//                       ₹5,850
//                     </span>

//                     <span className="text-[5px]">
//                       / Quintal
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }