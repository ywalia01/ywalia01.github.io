function Footer() {
  return (
    <footer className="flex flex-row justify-between align-items-center min-w-full mt-auto mb-8">
      {/* <div className="flex flex-row justify-between"> */}
      <div className="flex flex-row justify-center items-center">
        <a href="/" className="mt-2 hover:underline">
          {"github"}
        </a>
        <p className="mt-2 mx-2">{" / "}</p>
        <a href="/" className="text-sm mt-2 hover:underline">
          {"twitter"}
        </a>
        <p className="text-sm mt-2 mx-2">{" / "}</p>
        <a href="/" className="mt-2 hover:underline">
          {"linkedin"}
        </a>
      </div>
      <p>{"🌱"}</p>
      {/* </div> */}
    </footer>
  );
}

export default Footer;
