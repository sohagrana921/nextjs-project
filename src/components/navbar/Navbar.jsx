import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-2xl font-bold">Logo</h1>
      </div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
