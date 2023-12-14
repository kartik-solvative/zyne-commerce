import { Logo } from "#components/Logo";
import type { Props as NavigationProps } from "#components/Navigation";
import { Navigation } from "#components/Navigation";
import { Search } from "#components/Search";
import { Link } from "#i18n/Link";
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
import jsonData from "../../../../../data/json/k.json";

export type HeaderProps = Partial<NavigationProps>;

export const ThirdSubHeader: React.FC<HeaderProps> = ({ navigation }) => {
  const api = new WooCommerceRestApi({
    url: "https://triplepoint.com.au/",
    consumerKey: "ck_13c3c80635047fa0ec1f71aea3b61d5a363b163b",
    consumerSecret: "cs_9cc3e4e262494df5efd1b586b82b3a34832aa3d3",
    version: "wc/v3",
    queryStringAuth: true,
  });
  const createData = (jsonData:any) => {
    const inputArr: any[] = [];
    jsonData.map((data:any) => {
      return inputArr.push(data.sku + `,20`+`\n`);
    })
    // console.log(inputArr)
    // const jsonFormat = {
    //     products: inputArr,
    //   };

    //   console.log(
    //     "Transformed Data in JSON Format:",
    //     JSON.stringify(jsonFormat, null, 2)
    //   );

  }
  createData(jsonData);

  // List products
  api
    .get("products", {
      page: 15,
      per_page: 100, // 20 products per page
    })
    .then((response: any) => {
      // Successful request
      const transformedData = response.data.map((product: any) => {

        return {
          productCode: `${product.id}`,
          variantCode: product.id + "v",
          sku: product.sku,
          slug: "/" + product.slug + "/" + product.sku,
          name: {
            en: product.name,
            it: product.name,
          },
          description: {
            en: "This well-loved sweatshirt is the perfect addition to any man's wardrobe. It has a crew neck, and it's made from air-jet spun yarn and quarter-turned fabric, which eliminates a center crease, reduces pilling, and gives the sweatshirt a soft, comfortable feel.",
            it: "This well-loved sweatshirt is the perfect addition to any man's wardrobe. It has a crew neck, and it's made from air-jet spun yarn and quarter-turned fabric, which eliminates a center crease, reduces pilling, and gives the sweatshirt a soft, comfortable feel.",
          },
          images: [product.images[0].src],
          color: "#000000",
        };
      });
      // const jsonFormat = {
      //   products: transformedData,
      // };

      // console.log(
      //   "Transformed Data in JSON Format:",
      //   JSON.stringify(jsonFormat, null, 2)
      // );
    })
    .catch((error: any) => {
      // Invalid request, for 4xx and 5xx statuses
      // console.log("Response Status:", error.response.status);
      // console.log("Response Headers:", error.response.headers);
      // console.log("Response Data:", error.response.data);
    })
    .finally(() => {
      // Always executed.
    });

  api
    .get("products", {
      page: 15,
      per_page: 100, // 20 products per page
    })
    .then((response: any) => {
      // Successful request

      const transformedDataSKU = response.data.map((product: any) => {
        return {
          reference: "price_1",
          sku_code: product.sku,
          amount_cents: product.price,
          compare_at_amount_cents: product.regular_price,
          price_list: "price_list_1",
        };
      });
      // const jsonFormat = {
      //   products: transformedDataSKU,
      // };
      // console.log(
      //   "Transformed Data in JSON Format:",
      //   JSON.stringify(jsonFormat, null, 2)
      // );
    })
    .catch((error: any) => {
      // Invalid request, for 4xx and 5xx statuses
      // console.log("Response Status:", error.response.status);
      // console.log("Response Headers:", error.response.headers);
      // console.log("Response Data:", error.response.data);
    })
    .finally(() => {
      // Always executed.
    });



  // api
  //   .get("products/categories")
  //   .then((response: any) => {
  //     console.log(response,"category");
  //   })
  //   .catch((error: any) => {
  //     console.log(error.response.data);
  //   });



  return (
    <header className="border-b-gray-200 border-b pt-3 pb-3 flex items-center sticky top-0 bg-pageBackground z-50">
      <div className="flex items-center justify-between flex-wrap gap-4 relative">
        {navigation && (
          <Navigation navigation={navigation} className="order-2 lg:order-1" />
        )}
      </div>
    </header>
  );
};


