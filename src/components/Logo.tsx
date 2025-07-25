import logo from "../assets/svg/logo.svg";

export default function Logo({ size = 40 }: { size?: number }) {
  return <img src={logo} alt="Logo" style={{ width: size, height: size }} />;
}
