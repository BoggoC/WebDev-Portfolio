import { useState, useEffect } from "react";
import client from "../client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const useFetchData = () => {
  const [loading, setLoading] = useState(true);
  const [hero, setHero] = useState([]);
  const [socialLink, setSocialLink] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "hero" });

      const hero = response.items.map((item) => {
        const { heroImage, heroText, socials } = item.fields;
        const heroId = item.sys.id;
        const heroImg = heroImage?.fields?.file?.url;
        const heroTxt = documentToReactComponents(heroText);

        const socialLink = socials.map((item) => {
          const { socialTitle, socialImage, socialUrl } = item.fields;
          const socialId = item.sys.id;
          const socialImg = socialImage?.fields?.file?.url;
          return {
            socialId,
            socialTitle,
            socialImg,
            socialUrl,
          };
        });
        // console.log(socialLink);

        return { heroId, heroImg, heroTxt, socialLink };
      });
      // console.log(hero);
      console.log(response);
      setHero(hero);
      setSocialLink(socialLink);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, socialLink, hero };
};
