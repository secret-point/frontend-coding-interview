import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo";
import { useAuth } from "../../hooks/useAuth";
import { cn } from "../../utils/classnames";
import Container from "../Container";

type Props = {
  className?: string;
};

export default function Header({ className }: Props) {
  const { authed, signOut } = useAuth();
  const navigate = useNavigate();
  const handleClickSignOut = () => {
    signOut();
    navigate("/signin");
  };
  return (
    <header
      className={cn(
        "flex items-center justify-between px-4 py-3 border-b border-gray-100",
        className
      )}
    >
      <Container>
        <div className="flex items-center gap-3 w-full">
          <Link
            to={authed ? "/photos" : "/signin"}
            className="flex items-center"
          >
            <Logo size={75} />
          </Link>
        </div>
        {authed && (
          <button
            onClick={handleClickSignOut}
            className="text-sm text-gray-500 hover:text-gray-700 shrink-0 hover:cursor-pointer"
          >
            Sign out
          </button>
        )}
      </Container>
    </header>
  );
}
