import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';
import {useLocation} from '@reach/router';

function SEO({description, lang, title, image}) {
  const location = useLocation();
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              name
            }
            image
            twitterUsername
            siteUrl
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const imagen = image || site.siteMetadata.image;
  const canonical = `${site.siteMetadata.siteUrl}${location.pathname}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical,
              },
              {
                rel: 'stylesheet',
                href:
                  'https://fonts.googleapis.com/css2?family=Merriweather:ital@0;1&family=Montserrat:ital,wght@0,700;0,900;1,900&display=swap',
              },
              {
                rel: 'stylesheet',
                href:
                  'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css',
              },
            ]
          : [
              {
                rel: 'stylesheet',
                href:
                  'https://fonts.googleapis.com/css2?family=Merriweather:ital@0;1&family=Montserrat:ital,wght@0,700;0,900;1,900&display=swap',
              },
              {
                rel: 'stylesheet',
                href:
                  'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css',
              },
            ]
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: canonical,
        },
        {
          property: 'og:image',
          content: imagen.src,
        },
        {
          property: 'og:image:width',
          content: imagen.width,
        },
        {
          property: 'og:image:height',
          content: imagen.height,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author.name,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: imagen.src,
        },
      ]}
    />
  );
}

SEO.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
};

export default SEO;
