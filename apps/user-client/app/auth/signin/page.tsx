// import type {
//   GetServerSidePropsContext,
//   InferGetServerSidePropsType,
// } from "next";
// import { getCsrfToken } from "next-auth/react";
// import Link from "next/link";
// import { Label } from "../../../component/ui/label";
// import { Input } from "../../../component/ui/input";
// import { Button } from "../../../component/ui/button";

// export default function SignIn({
//   csrfToken,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   return (
//     <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
//       <div className="w-full max-w-md mx-auto space-y-8">
//         <div>
//           <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-foreground">
//             Sign in to your account
//           </h2>
//           <p className="mt-2 text-sm text-center text-muted-foreground">Or </p>
//         </div>
//         <form
//           className="space-y-6"
//           method="post"
//           action="/api/auth/callback/credentials"
//         >
//           <div>
//             <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
//             <Label
//               htmlFor="email"
//               className="block text-sm font-medium text-muted-foreground"
//             >
//               Email address
//             </Label>
//             <div className="mt-1">
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 className="block w-full px-3 py-2 border rounded-md shadow-sm appearance-none border-input bg-background placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
//                 placeholder="you@example.com"
//               />
//             </div>
//           </div>
//           <div>
//             <Label
//               htmlFor="phone"
//               className="block text-sm font-medium text-muted-foreground"
//             >
//               Phone number
//             </Label>
//             <div className="mt-1">
//               <Input
//                 id="phone"
//                 name="phone"
//                 type="tel"
//                 autoComplete="tel"
//                 required
//                 className="block w-full px-3 py-2 border rounded-md shadow-sm appearance-none border-input bg-background placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
//                 placeholder="number..."
//               />
//             </div>
//           </div>
//           <div>
//             <Label
//               htmlFor="password"
//               className="block text-sm font-medium text-muted-foreground"
//             >
//               Password
//             </Label>
//             <div className="mt-1">
//               <Input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 className="block w-full px-3 py-2 border rounded-md shadow-sm appearance-none border-input bg-background placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
//                 placeholder="Password"
//               />
//             </div>
//           </div>
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <Label
//                 htmlFor="remember-me"
//                 className="block ml-2 text-sm text-muted-foreground"
//               >
//                 Remember me
//               </Label>
//             </div>
//             <div className="text-sm">
//               <Link
//                 href="#"
//                 className="font-medium text-primary hover:text-primary/90"
//                 prefetch={false}
//               >
//                 Forgot your password?
//               </Link>
//             </div>
//           </div>
//           <div>
//             <Button
//               type="submit"
//               className="flex justify-center w-full px-3 py-2 text-sm font-semibold rounded-md shadow-sm bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
//             >
//               Sign in
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   return {
//     props: {
//       csrfToken: await getCsrfToken(context),
//     },
//   };
// }
