import { Frame, Navigation } from "@shopify/polaris";
import { HomeMinor, ProductsMinor, CategoriesMajor, ChecklistMajor} from "@shopify/polaris-icons";

export function NavbarComponent() {
    return(
        <Frame>
            <Navigation location="/">
                <Navigation.Section
                    items={[
                        {
                            url: "/",
                            label: "Home",
                            icon: HomeMinor,
                        },
                        {
                            url: "/locations",
                            label: "Locations",
                            icon: CategoriesMajor,
                        },
                        {
                            url: "/products",
                            label: "Products",
                            icon: ProductsMinor,
                        },
                        {
                            url: "/picklists",
                            label: "Picklists",
                            icon: ChecklistMajor,
                        },
                    ]}
                />
            </Navigation>
        </Frame>
    )
}
