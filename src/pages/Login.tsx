import React, {
  useState,
  useEffect,
  ChangeEventHandler,
  VoidFunctionComponent,
} from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getToken } from "../utils/jwtHelpers";
import { login } from "../app/store/slices/authThunk";
import history from "../utils/history";

const Login: VoidFunctionComponent = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  // const { token, loading } = useSelector((state) => state.auth);

  const handleChange: (input: string) => ChangeEventHandler<HTMLInputElement> =
    (input) => (e) => {
      setFormData({
        ...formData,
        [input]: e.target.value,
      });
    };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div className="w-full sm:max-w-md p-5 mx-auto">
        <h2 className="mb-12 text-center text-5xl font-extrabold">
          Bienvenido
        </h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Correo Electrónico"
              onChange={handleChange("email")}
              className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="********"
              onChange={handleChange("password")}
              className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <button className="w-80 inline-flex items-center justify-center px-4 py-2 bg-sky-400 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-sky-500 active:bg-sky-500 focus:outline-none focus:border-sky-500 focus:ring focus:ring-sky-200 disabled:opacity-25 transition">
              Acceder
            </button>
          </div>
          <div className="mt-6 text-center">
            <NavLink to="/register">
              ¿No tiene una cuanta? ¡Registrese aquí!
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
