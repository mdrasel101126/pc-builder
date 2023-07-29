import RootLayout from "@/components/Layouts/RootLayout";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div className="h-80 flex flex-row justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold ">Please Login</h1>
        <button
          onClick={() =>
            signIn("github", { callbackUrl: "http://localhost:3000" })
          }
          className="btn btn-primary w-28 mt-6"
        >
          Github
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
