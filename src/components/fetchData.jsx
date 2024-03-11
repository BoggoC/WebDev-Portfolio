import { useState, useEffect } from "react";
import client from "../client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const useFetchData = () => {
  const [loading, setLoading] = useState(true);
  const [homePage, setHomePage] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "homePage",
        limit: 1,
        include: 10,
      });

      const homePage = response.items.map((item) => {
        const { heroSection, techStackSection, projectsSection } = item.fields;

        const { heroImage, heroText, socials } = heroSection.fields;

        const heroId = item.sys.id;
        const heroImg = heroImage?.fields?.file?.url;
        const heroTxt = documentToReactComponents(heroText);

        const { techStackTitle, techStackComponent } = techStackSection.fields;
        const techStackId = item.sys.id;

        const { projectsTitle, projectsComponent } = projectsSection.fields;
        const projectsId = item.sys.id;

        const projectsCard = projectsComponent.map((item) => {
          const {
            projectCardImage,
            projectCardText,
            projectCardTitle,
            projectCardUrl,
          } = item.fields;
          const projectCardId = item.sys.id;
          const projectCardImg = projectCardImage?.fields?.file?.url;

          return {
            projectCardId,
            projectCardImg,
            projectCardTitle,
            projectCardText,
            projectCardUrl,
          };
        });

        const techStackCard = techStackComponent.map((item) => {
          const { techStackCardImage, techStackCardTitle, techStackCardText } =
            item.fields;
          const techStackCardId = item.sys.id;
          const techStackCardImg = techStackCardImage?.fields?.file?.url;

          return {
            techStackCardId,
            techStackCardImg,
            techStackCardTitle,
            techStackCardText,
          };
        });

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

        return {
          heroId,
          heroImg,
          heroTxt,
          socialLink,
          techStackCard,
          techStackTitle,
          techStackId,
          projectsCard,
          projectsTitle,
          projectsId,
        };
      });

      setHomePage(homePage);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, homePage };
};
