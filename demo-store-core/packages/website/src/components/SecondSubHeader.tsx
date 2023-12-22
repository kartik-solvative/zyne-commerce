import { ShoppingBagOpen } from "#assets/icons";
import { Logo } from "#components/Logo";
import type { Props as NavigationProps } from "#components/Navigation";
import { Search } from "#components/Search";
import { useAuthContext } from "#contexts/AuthContext";
import { useSettingsContext } from "#contexts/SettingsContext";
import { Link } from "#i18n/Link";
import { LineItemsCount } from "@commercelayer/react-components";
import { useEffect, useState } from "react";

export type HeaderProps = Partial<NavigationProps>;

const CartQuantity: React.FC<{ quantity: number }> = ({
  quantity: propQuantity,
}) => {
  const [quantity, setQuantity] = useState<number>(-1);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const animation = "animate-[ping_1s_cubic-bezier(0,0,0.2,1)_1]";
  const isVisible = propQuantity > 0;

  useEffect(() => {
    if (propQuantity > 0) {
      setQuantity(propQuantity);
    }

    if (propQuantity !== quantity && quantity > 0) {
      setIsAnimating(true);
    }
  }, [propQuantity, quantity]);

  return (
    <div
      className={`absolute bottom-0 translate-x-1/3 right-0 w-4 h-4 transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <span
        className={`${
          isAnimating ? animation : ""
        } absolute inline-flex h-full w-full rounded-full bg-red-800 opacity-75`}
        onAnimationEnd={() => setIsAnimating(false)}
      ></span>
      <div className="absolute h-full w-full text-white bg-red-800 rounded-full text-xxs flex items-center justify-center">
        {quantity}
      </div>
    </div>
  );
};

export const SecondSubHeader: React.FC<HeaderProps> = () => {
  const auth = useAuthContext();
  const settings = useSettingsContext();

  return (
    <header className="border-b-gray-200 border-b sticky top-0 bg-pageBackground z-50">
      <nav className="flex items-center justify-between  border-red-400 flex-wrap mb-4">
        <div className="flex items-center flex-no-shrink text-black mr-6 ">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className=" w-1/2">
          <Search className="order-1 grow lg:grow-0 w-full" />
        </div>
        {/* <div className="font-bold text-sm">LOGIN / REGISTER</div> */}

        <div className="flex items-center justify-end ">
          {settings.locale?.isShoppable && auth.accessToken && (
            <Link href="/cart" className="block lg:inline-block relative">
              <ShoppingBagOpen />
              <LineItemsCount className="bg-red-800">{CartQuantity}</LineItemsCount>
            </Link>
          )}
          {/* <div className="font-bold text-sm">$0.00</div> */}
        </div>
      </nav>
    </header>
  );
};
