import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div
        className="hidden lg:flex items-center justify-center w-1/2 px-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/auth_pic.png')" }}
      >
        <div className="max-w-md space-y-6 text-center text-white bg-black/50 p-6 rounded-md">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome to FashionBay: ECommerce Shopping
          </h1>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
