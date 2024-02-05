export const LoginForm: React.FC<{
  loginWindow: string;
  setLoginWindow: Function;
}> = ({ loginWindow, setLoginWindow }) => {
  return (
    <div
      className={loginWindow}
      onMouseLeave={() =>
        setLoginWindow(
          "hidden"
        )
      }
    >
      <form>
        <div className="flex justify-between mb-1">
          <span className="font-bold">SIGN IN</span>
          <span className="text-xs text-red-800 cursor-pointer hover:underline">Create an Account</span>
        </div>
        <div className="border-t mb-3"></div>
        <div className="flex flex-col mb-3">
          <label className="text-sm mb-1" htmlFor="username">
            Username or email
          </label>
          <input type="text" id="username" name="username" className="border p-1.5"/>
        </div>
        <div className="flex flex-col mb-3">
          <label className="text-sm mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border p-1.5"
          />
        </div>
        <button className="bg-red-800 text-white text-xs font-bold w-full p-2.5 mb-3">LOGIN</button>
        <div className="flex justify-between mb-3">
          <div className="flex align-middle">
            <input type="checkbox" id="vehicle1" name="vehicle1" className="mr-2" />
            <label htmlFor="vehicle1" className="text-xs">
              Remember me
            </label>
          </div>
          <span className="text-xs text-red-800 cursor-pointer hover:underline">Lost your password?</span>
        </div>
      </form>
    </div>
  );
};
