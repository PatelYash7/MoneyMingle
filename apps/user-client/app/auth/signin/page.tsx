export default function () {
  return (
    <div className="container px-4 mx-auto">
      <div className="max-w-lg mx-auto">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">Sign in</h2>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-extrabold" htmlFor="">
            Email
          </label>

          <input
            className="inline-block w-full p-4 text-lg font-extrabold leading-6 placeholder-indigo-900 bg-white border-2 border-indigo-900 rounded shadow"
            type="email"
            placeholder="email"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-extrabold" htmlFor="">
            Password
          </label>
          <input
            className="inline-block w-full p-4 text-lg font-extrabold leading-6 placeholder-indigo-900 bg-white border-2 border-indigo-900 rounded shadow"
            type="password"
            placeholder="**********"
          />
        </div>
        <div className="flex flex-wrap items-center justify-between mb-6 -mx-4">
          <div className="w-full px-4 mb-4 lg:w-auto lg:mb-0">
            <label htmlFor="">
              <input type="checkbox" />
              <span className="ml-1 font-extrabold">Remember me</span>
            </label>
          </div>
          <div className="w-full px-4 lg:w-auto">
            <a className="inline-block font-extrabold hover:underline" href="#">
              Forgot your password?
            </a>
          </div>
        </div>
        <button className="inline-block w-full px-6 py-4 mb-6 text-lg font-extrabold leading-6 text-center text-white transition duration-200 bg-indigo-800 border-indigo-900 rounded shadow hover:bg-indigo-900 border-3">
          Sign in
        </button>
      </div>
    </div>
  );
}
