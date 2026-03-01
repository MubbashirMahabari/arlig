import { MetadataRoute } from "next";
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://arligtechnologies.com";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/",
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
