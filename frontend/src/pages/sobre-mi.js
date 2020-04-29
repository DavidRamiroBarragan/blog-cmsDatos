import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from '@emotion/styled';
import ListadoRedesSociales from '../components/ListadoRedesSociales';
import BackgroundImage from 'gatsby-background-image';

const ContenedorBlog = styled.div`
  margin-top: 6rem;
  text-align: left;
  width: 100%;
  margin-bottom: 2rem;
`;

const AticuloTitle = styled.h1`
  color: #0092db;
  font-weight: 900;
  font-size: 4rem;
  font-family: 'Montserrat', sans-serif;
`;
const DateParrafo = styled.p`
  font-size: 1.35rem;
  line-height: 1.75rem;
  display: block;
  margin-bottom: 1.75rem;
  margin-top: -1.4rem;
`;
const ContenedorRedesSociales = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ImageBackground = styled(BackgroundImage)`
  height: 675px;
`;

const SobreMi = ({location}) => {
  const {puente, sentado} = useStaticQuery(graphql`
    query {
      puente: file(relativePath: {eq: "puente.jpg"}) {
        relativePath
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      sentado: file(relativePath: {eq: "yo-sentado.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  console.log(puente);

  return (
    <Layout location={location}>
      <SEO title="Inicio" />
      <ContenedorBlog>
        <AticuloTitle>Sobre mi</AticuloTitle>
        <DateParrafo>29 de Abril de 2020</DateParrafo>
        <Image fluid={sentado.childImageSharp.fluid} fadeIn="soft" />
        <p>
          Hola de nuevo, Terminé mis estudios de **Desarrollador de aplicaciones
          web** allá por el 2018. Antes ya había hecho algún que otro curso
          sobre la materia, pero no me lo había planteado de manera profesional,
          simplemente era una pasión con la que disfrutaba en mis ratos libres.
          Gracias{' '}
          <a
            href="https://www.linkedin.com/in/miguelangellopezharillo/"
            target="_blanck"
            title="Bio Miguel Lopez"
          >
            Miguel
          </a>{' '}
          por animarme a reconducir mi carrera.
        </p>
        <p>
          Cuando termine mis estudios comencé a trabajar para una empresa
          francesa. Mi primer proyecto se desarrollaba en un framework Java
          creado por la empresa y donde conocí a mi gran mentor{' '}
          <a
            href="https://www.linkedin.com/in/vicente-mart%C3%ADn-mart%C3%ADn-402022175/"
            target="_blanck"
            title="Bio Vicente Martín"
          >
            Vicente
          </a>
          .
        </p>
        <p>
          Después de aquella experiencia, me ofrecieron participar en una
          aplicación interna para la gestión de valoraciones, había que
          desarrollarlo desde 0 con FrontEnd en Angular 7, parte de la que me
          ocupé, y backend en SpringBoot. Aproveché aquella oportunidad para
          volver a retomar el contacto con JavaScript y aprender lo máximo de{' '}
          <a
            href="https://angular.io/"
            target="_blanck"
            title="Web Angular Framework"
          >
            Angular
          </a>
          ,{' '}
          <a
            href="https://www.typescriptlang.org/"
            target="_blanck"
            title="Web TypeScript"
          >
            TypeScript
          </a>
          ,{' '}
          <a
            href="https://rxjs-dev.firebaseapp.com/"
            target="_blanck"
            title="Web Rxjs"
          >
            Rxjs
          </a>
          , entre otras. Desde aquel proyecto he centrado mi carrera en mi amado
          JavaScript lo que me ha llevado a trabajar con{' '}
          <a href="https://reactjs.org/" target="_blanck" title="Web ReactJs">
            ReactJs
          </a>{' '}
          y Angular. Siempre tratando de mejorar mi conocimientos.
        </p>
        <p>
          Tras el último proyecto en el que participé, ando más centrado en
          ReactJs que evoluciona de la mano de Facebook. Como en todo tiene sus
          contras, pero sus pros son mayores.
        </p>
        <p>
          Soy de los que piensan, que nunca sabemos lo suficiente y todos los
          días se puede aprender algo nuevo en el camino que elegimos. Mi camino
          como desarrollador JavaScript acaba de comenzar y espero no perder las
          ganas que me hacen profundizar más y más en este precioso lenguaje.
        </p>
        <Image
          fluid={puente.childImageSharp.fluid}
          alt="Betws-y-Coed, Gales"
          fadeIn="soft"
        />
        <p>
          Ahora ando centrado en mejorar mis habilidades técnicas, estudiando
          mucho y comenzando a realizar proyectos personales, como este blog
          desarrollado en Gatsby. Me he marcado como meta aprender NodeJs y
          convertirme en desarrollador fullstack.
        </p>
        <ContenedorRedesSociales>
          <ListadoRedesSociales />
        </ContenedorRedesSociales>
      </ContenedorBlog>
    </Layout>
  );
};

export default SobreMi;
