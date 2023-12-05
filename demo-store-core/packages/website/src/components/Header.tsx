import type { Props as NavigationProps } from "#components/Navigation";
import { FirstSubHeader } from "./FirstSubHeader";
import { SecondSubHeader } from "./SecondSubHeader";
import { ThirdSubHeader } from "./ThirdSubHeader";

export type HeaderProps = Partial<NavigationProps>;


export const Header: React.FC<HeaderProps> = ({ navigation }) => {

  return (
    <header className="sticky top-0 bg-green-800 z-50">
      <FirstSubHeader />
      <SecondSubHeader navigation={navigation} />
      <ThirdSubHeader navigation={navigation}/>
    </header>
  );
};
