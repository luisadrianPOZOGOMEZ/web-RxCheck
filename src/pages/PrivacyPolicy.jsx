import React from "react";
import styled from "styled-components";
import Navbar from "../components/organism/Navbar";

const Wrapper = styled.div`
  background-color: #647be1;
  min-height: 100vh;
  padding: 100px 0 50px;
  color: #ffffff;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 60px 0 rgba(0, 0, 0, 0.15);
  color: #333;
`;

const Title = styled.h1`
  font-family: Poppins, var(--default-font-family);
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #647be1;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-family: Poppins, var(--default-font-family);
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #647be1;
`;

const Paragraph = styled.p`
  font-family: "Plus Jakarta Sans", var(--default-font-family);
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const Link = styled.a`
  color: #647be1;
  text-decoration: underline;
  &:hover {
    color: #4a5db3;
  }
`;

const Signature = styled.p`
  font-family: "Plus Jakarta Sans", var(--default-font-family);
  font-style: italic;
  text-align: right;
  margin-top: 30px;
  font-weight: 600;
`;

const Privacy = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Container>
          <Title>AVISO DE PRIVACIDAD</Title>
          
          <Section>
            <Paragraph>
              Al usar esta aplicación y cualquiera de sus servicios, usted acepta la recopilación, uso, transferencia y 
              almacenamiento de su información personal conforme a lo establecido en este aviso de privacidad.
            </Paragraph>
            
            <Paragraph>
              De conformidad con lo dispuesto en los Artículos 6, 8, 15 y 16 de la Ley de Protección de Datos Personales 
              en Posesión de Particulares (la "Ley"), se emite el presente Aviso de Privacidad conforme a lo siguiente. 
              Usted puede acceder al contenido de la Ley a través de los portales que el Gobierno Federal, por conducto de 
              la Secretaría de Gobernación, y la Cámara de Diputados del H. Congreso de la Unión tienen en Internet y cuyas 
              direcciones son: <Link href="http://www.ordenjuridico.gob.mx" target="_blank">www.ordenjuridico.gob.mx</Link> y 
              <Link href="http://www.diputados.gob.mx" target="_blank"> www.diputados.gob.mx</Link>. En virtud de lo antes 
              expuesto, le informamos que en cumplimiento a nuestro Programa de Privacidad y a la Ley, los datos personales 
              que obtengamos en virtud de las operaciones que usted realice en RxCheck serán tratados de manera confidencial 
              a través de los sistemas provistos para tales efectos.
            </Paragraph>
          </Section>
          
          <Section>
            <SectionTitle>DOMICILIO DE RXCHECK</SectionTitle>
            <Paragraph>
              Para efectos del presente aviso de privacidad, RxCheck señala como su domicilio el ubicado en 
              Blvd. Ejemplo 221, Local 112 Edificio T2, Col. El Rábano, Tuxtla Gutiérrez, Chiapas, C.P. 29300.
            </Paragraph>
          </Section>
          
          <Section>
            <SectionTitle>DATOS PERSONALES QUE PUEDEN RECABARSE</SectionTitle>
            <Paragraph>
              RxCheck recabará los datos personales, así como los que la Ley considera sensibles y que son necesarios 
              para la formalización del expediente general de cada usuario y/o para llevar a cabo procedimientos administrativos; 
              de manera enunciativa, más no limitativa, RxCheck podrá recabar su nombre; domicilio; fecha de nacimiento; 
              ocupación, profesión, números telefónicos; clave única de registro de población; clave del registro federal de 
              contribuyentes, entre otros.
            </Paragraph>
          </Section>
          
          <Section>
            <SectionTitle>USO DE COOKIES</SectionTitle>
            <Paragraph>
              Las cookies son archivos de texto que son descargados automáticamente y almacenados en el disco duro del equipo 
              de cómputo del usuario al navegar en una página de Internet específica, que permiten recordar al servidor de 
              Internet algunos datos sobre este usuario, entre ellos, sus preferencias para la visualización de las páginas 
              en ese servidor, nombre y contraseña.
            </Paragraph>
            <Paragraph>
              Estas cookies y otras tecnologías pueden ser deshabilitadas. Para conocer cómo hacerlo, consulte el siguiente 
              vínculo o dirección electrónica: <Link href="http://ayuda.bligoo.com/content/view/1296969/Como-borrar-las-cookies.html" target="_blank">
              ayuda.bligoo.com/content/view/1296969/Como-borrar-las-cookies.html</Link>
            </Paragraph>
          </Section>
          
          <Section>
            <SectionTitle>FINALIDADES DEL TRATAMIENTO DE SUS DATOS PERSONALES</SectionTitle>
            <Paragraph>
              Los datos personales que RxCheck recabe serán usados para la identificación, tecnologías de la información, 
              operación, administración, y otros fines análogos y lícitos conforme a lo dispuesto por la Ley, que se derivan 
              de los servicios contratados por usted y otras obligaciones que se originan por la relación jurídica entre usted 
              como titular de datos personales y RxCheck.
            </Paragraph>
          </Section>
          
          <Section>
            <SectionTitle>TRANSFERENCIA DE DATOS PERSONALES</SectionTitle>
            <Paragraph>
              RxCheck podrá transferir sus datos personales a terceros mexicanos o extranjeros que le provean de servicios 
              necesarios para su debida operación, bases de datos, servidores, etc. En dichos supuestos, le informamos que 
              RxCheck adoptará las medidas necesarias para que las personas que tengan acceso a sus datos personales cumplan 
              con la política de privacidad de RxCheck, así como con los principios de protección de datos personales 
              establecidos en la Ley.
            </Paragraph>
          </Section>
          
          <Section>
            <SectionTitle>DERECHOS ARCO</SectionTitle>
            <Paragraph>
              Usted o su representante legal debidamente acreditado podrán limitar el uso o divulgación de sus datos personales; 
              asimismo, a partir del 6 de enero de 2012 podrá ejercer, cuando procedan, los derechos de acceso, rectificación, 
              cancelación u oposición que la Ley prevé mediante solicitud presentada en el domicilio arriba señalado; es 
              importante mencionar que el ejercicio de cualquiera de dichos derechos no es requisito previo ni impide el 
              ejercicio de otro derecho.
            </Paragraph>
            <Paragraph>
              Así también, le informamos que usted tiene derecho a iniciar un Procedimiento de Protección de Datos ante el 
              Instituto Federal de Acceso a la Información y Protección de Datos (<Link href="https://www.inai.org.mx" target="_blank">www.inai.org.mx</Link>) 
              dentro de los 15 días siguientes a la fecha en que reciba la respuesta de RxCheck o a partir de que concluya el 
              plazo de 20 días contados a partir de la fecha de recepción de su solicitud de ejercicio de derechos.
            </Paragraph>
          </Section>
          
          <Section>
            <SectionTitle>MODIFICACIONES AL AVISO DE PRIVACIDAD</SectionTitle>
            <Paragraph>
              Cualquier modificación al presente aviso le será notificada a través de cualquiera de los siguientes medios: 
              un mensaje enviado a su correo electrónico o un mensaje dado a conocer a través del mismo enlace desde donde 
              consulta este documento o de cualquier medio electrónico que utilice para celebrar operaciones con RxCheck.
            </Paragraph>
          </Section>
          
          <Signature>Atentamente: Dirección General</Signature>
        </Container>
      </Wrapper>
    </>
  );
};

export default Privacy;