import type { Props as NavigationProps } from "#components/Navigation";
import { Navigation } from "#components/Navigation";

export type HeaderProps = Partial<NavigationProps>;

export const ThirdSubHeader: React.FC<HeaderProps> = ({ navigation }) => {
  return (
    <header className="border-b-gray-200 border-b pt-3 pb-3 flex items-center top-0 bg-pageBackground z-50">
      <div className="flex items-center justify-between flex-wrap gap-4 relative">
        {navigation && (
          <Navigation navigation={navigation} className="order-2 lg:order-1" />
        )}
      </div>
    </header>
  );
};
