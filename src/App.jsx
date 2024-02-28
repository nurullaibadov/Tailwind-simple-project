import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

export default function App() {
  return (
    <main
      className="bg-no-repeat  flex p-36 "
      style={{
        backgroundImage: "url('/src/assets/bg-img.png')",
        backgroundSize: "100% 100%",
        width: "100%",
        height: "737px",
        opacity: "0.7",
      }}
    >
      <aside className=" ml-36 mt-20">
        <div className="logo flex mb-28">
          <img
            src="/src/assets/Path_1929.png"
            alt="logo"
            className="bg-black-100"
          />
          <p className=" text-white  text-3xl font-bold m-4">HighBridge</p>
        </div>

        <p className="text-white capitalize text-4xl font-bold mb-3">
          Building the Future...
        </p>
        <p className="text-white  w-9/12 leading-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </aside>
      <section
        className="w-1.4/4 bg-white mr-24  p-10 rounded-xl relative bottom-12"
        style={{ height: "613px" }}
      >
        <p className="uppercase text-sm mb-3">Welcome Back</p>
        <p className="capitalize text-xl font-bold mb-2">
          Log In to your Account
        </p>
        <input
          type="text"
          placeholder="johnsondoe@nomail.com"
          className="border-solid  border-black border-2 p-3 rounded-xl pr-36 mb-5"
        />
        <input
          type="password"
          placeholder="***************"
          className="border-solid  border-black border-2 p-3 rounded-xl pr-36"
        />
        <br />
        <div className="forget flex justify-between mt-4 mb-4">
          <div className="idk">
            <input type="checkbox" name="box" id="check" />
            <label htmlFor="check" className="ml-2">
              Remember Me
            </label>
          </div>
          <p>Forgot Password?</p>
        </div>
        <button
          type="button"
          className=" bg-black text-white text-center w-96  h-12 rounded-xl"
        >
          CONTINUE
        </button>
        <p className="text-center text-xl capitalize mt-3 mb-3 font-black">
          or
        </p>
        <div className="box-1 flex w-96 border-solid  border-gray border-2 h-12  pt-4 pl-6 mb-4 rounded-xl">
          <FaGoogle />
          <p style={{ margin: "-5px  0 0 20% " }}>Log In with Google</p>
        </div>
        <div className="box-2 flex w-96 border-solid  border-gray border-2 h-12  pt-4 pl-6 mb-4 rounded-xl">
          <FaFacebook />
          <p style={{ margin: "-5px  0 0 20% " }}>Log In with Facebook</p>
        </div>
        <div className="box-3 flex w-96 border-solid  border-gray border-2  h-12  pt-4 pl-6 mb-4 rounded-xl">
          <FaApple />
          <p style={{ margin: "-5px  0 0 20% " }}>Log In with Apple</p>
        </div>
      </section>
    </main>
  );
}
