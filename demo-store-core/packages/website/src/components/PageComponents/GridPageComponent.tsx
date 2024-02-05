import { Link } from "#i18n/Link";
import type { GridPageComponent as GridPageComponentType } from "#utils/pages";

export const GridPageComponent: React.FC<{
  component: GridPageComponentType;
}> = ({ component }) => {
  return (
    <>
      <div className="text-2xl font-bold mt-3 mb-3 text-center">
        TRIPLEPOINT CALIBRATIONS DIFFERENCE
      </div>

      <div
        key={component.id}
        data-testid="grid-page-component"
        className="flex flex-wrap gap-4"
      >
        {component.items.map((item, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden h-80 xl:h-96 grow shrink basis-[250px]"
          >
            
            <div className="absolute inset-0 bg-gradient-to-b"></div>
            <div className="absolute top-1/2 -translate-y-1/2 w-4/5 left-1/2 -translate-x-1/2 text-center p-2">
              <div className="text-xl mb-4">{item.title}</div>
              <div className="leading-snug text-sm mb-4">{item.description}</div>

              {item.linkLabel !== ""?<Link
                href={item.linkHref}
                className="py-1 px-4 inline-block font-bold border-2 border-red-800 text-red-800 text-sm"
              >
                {item.linkLabel}
              </Link>:null}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
