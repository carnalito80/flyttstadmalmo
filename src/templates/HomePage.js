import React from 'react'
import { graphql } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll';
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Parallax from '../components/Parallax'
import Stars from '../components/Stars'
import { Link } from 'gatsby'
import Boka from '../components/Boka'

import Image from '../components/Image'
import '../components/PostCard.css'
import '../components/PostSection.css'


// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, offertknapp, body }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
      offertknapp={offertknapp}
    />

    <section className="section">
      <div className="container introjk">
        <h3 >Är du i behov av flyttstädning i Malmö?</h3>
       <p>Flyttstädning Malmö utför flyttstädningar varje dag i Malmö. Vi arbetar noggrant samtidigt som vi håller låga priser. <br />
      <strong>Gör som 100-tals andra och boka oss redan idag!</strong>
        
        </p>
        <div  onClick={() => scrollTo('#priser')} className="Button">Priser</div>
      </div>
    </section>
<section className="section">
  <div className="container">
    <div className="PostSection">
      <div className="PostSection--Grid">
      <Link to="#bokaoss" className="PostCard">
        
      <div className="PostCard--ImageJK relative">
        <img  src="/images/icon-1.png" alt="Hink med skurborste" className="Content-Image"></img>
        </div>
        
          <div className="PostCard--Content">
          <h3 className="PostCard--Title">BOKA STÄDNING</h3>
          
          <div className="PostCard--Excerpt"><em>Klicka här för att boka direkt eller få offert</em></div>
          </div>
        </Link>
        <Link to="/om-oss-pa-flyttstadning-malmo" className="PostCard">
        
        <div className="PostCard--ImageJK relative">
        <img  src="/images/icon-2.png" alt="En mopp" className="Content-Image"></img>
        </div>

      <div className="PostCard--Content">
      <h3 className="PostCard--Title">PÅLITLIG PERSONAL</h3>
        
        <div className="PostCard--Excerpt"><em>Ni är trygga med oss, gör som 100-tals andra och boka oss idag</em></div>
      </div>
      </Link>
      <Link to="/vanliga-fragor" className="PostCard">
        
        <div className="PostCard--ImageJK relative">
        <img  src="/images/icon-7.png" alt="En galge med kläder" className="Content-Image"></img>
        
        </div>

      <div className="PostCard--Content">
      <h3 className="PostCard--Title">LÄS MER OM OSS</h3>
        
        <div className="PostCard--Excerpt"><em>Mer om oss</em></div>
      </div>
      </Link>
      </div>
    </div>

  </div>
    
</section>
<section className="section">
  <div className="container">
    <div className="PostSection">
      <div className="PostSection--GridJK">
      <div className="PostCard--HomeP PostCard--Image-Hide relative"><Image background title="Ett rent och fint hem" src="/images/flyttstad-malmo-stadare.jpg" alt="Ett rent och fint hem" /></div>
      
      <div>
     <h3>Vad ingår i flyttstädning Malmös tjänster</h3>

      <ul >
        <li className="bullet-jk">Dammsugning och våttorkning av golv.</li>
        <li className="bullet-jk">Dörrkarmar, dörrhandtag, trösklar och dörrar torkas av.</li>
        <li className="bullet-jk">Fönsterputsning, in- och utvändigt.</li>
        <li className="bullet-jk">Rengöring av fönsterkarmar.</li>
        <li className="bullet-jk">Fönsterputsning, in- och utvändigt samt mellan inner- och ytterglas.</li>
        <li className="bullet-jk">Avtorkning av garderober och skåp – och in- och utvändigt (samt ovanpå).</li>
        <li className="bullet-jk">Element rengörs på och bakom (vi skruvar ej av elementen) samt mellan (om åtkomligt).</li>
        <li className="bullet-jk">Fast belysning torkas av.</li>
        <li className="bullet-jk">.. och mycket mer!</li>
      </ul>
      <Link to="/detta-ingar-i-flyttstadningen/"><div className="Button">Mer som ingår</div></Link>
      </div>
         
      </div>
    </div>
  </div>
</section>    
<section className="section">
  <div className="container">
    <div className="PostSection">
      <div className="PostSection--GridJK">
      <div>
     <h3>Flyttstädning Malmö</h3>

<p>Går du tankar i att flytta? Att flytta kan vara både spännande stressande och väldigt omtumlande.<br></br><br></br>

Vi  hjälper er gärna med den stressiga och jobbiga biten.<br></br><br></br>

Ni kan istället fokusera på det roliga bitarna och göra ert framtida hem till ett personligt och vackert hem.<br></br><br></br>

När ni anlitar oss, så är det väldigt mycket som ingår.
Ni kan självklart utnyttja RUT-avdraget. <br></br>
Vi har lång erfarenhet av flyttstäd av olika slag, vi garanterar ett rent hem för de nya bostadsägarna eller hyresgästerna.</p>
      </div>
      <div className="PostCard--HomeP relative"><Image background title="En städare" src="/images/service-6.jpg" alt="Flyttstädning Malmö hjälper Er med flyttstädning" /></div>
         
      </div>
    </div>
  </div>
</section>
<section className="section">
  <div className="container">
    <div className="PostSection">
      <div className="PostSection--GridJK">
      <div className="PostCard--HomeP PostCard--Image-Hide relative"><Image background title="Flyttstädning Malmöresultat" src="/images/bra-flyttstadning.jpg" alt="Flyttstädning Malmös resultat" /></div>
      
      <div>
     <h3>Flyttstädning Malmö tar ansvaret</h3>
     <p>Livet är fyllt av jobbiga och stressiga moment. Stress för också med sig tråkiga saker såsom tjafs och bråk. Att städa boendet inför en flytt kan vara en sådan sak.
      Varför inte slippa den onödiga stressen och ge oss  fullt ansvar över städningen?<br></br><br></br>

      Att utföra ett flyttstäd i en bostad kan ta lång tid och för att det nya ägarna av bostaden ska få ett bra första intryck av bostaden är det bra ett ta hjälp av proffs.<br></br>
      Vi hjälper er med hela projektet, så att du kan fokusera på annat.</p>
      </div>
         
      </div>
    </div>
  </div>
</section>
<section className="section">
  <div className="container">
    <div className="PostSection">
      <div className="PostSection--GridJK">
      <div>
     <h3>Flyttstädning Malmö Garanti</h3>

<p>Vi  lämnar alltid garanti på våra flyttstädningar.
Garantin gäller för både köparen och säljaren av bostaden.

Vissa saker måste ni som kund se till att ordna innan flyttstädningen, såsom:</p>
<ul>
<li>Tillgång till vatten</li>
<li>Tillgång till el</li>
</ul>
<p>
Om det det ska rengöras bakom tvättmaskin, diskmanskiner eller torktumlare behövs dessa vara framdragna.
</p>
<Link to="/vanliga-fragor">   <div className="Button">Mer om våran garanti</div></Link>
      </div>
      <div className="PostCard--HomeP relative"><Image background title="Flyttstädning Malmö städar din bostad" src="/images/flyttstadning-malmo-bra.jpg" alt="Flyttstädning Malmö städar din bostad" /></div>
         
      </div>
    </div>
  </div>
</section>
<div id="priser" style={{marginBottom:'100px'}}></div>
<Parallax />
<Stars />
<div id="bokaoss" style={{marginBottom:'60px'}}></div>
<section className="section">
<div className="container" >
<h2>Boka Oss På Flyttstädning Malmö</h2>
<p>Fyll i formuläret nedan för att boka en flyttstädning. Alternativt ring <strong><a href="tel:073 637 99 08">073 637 99 08</a></strong>.</p>
</div>
<div className="container  Contact--Section1--Container">
<Boka name="Flyttstädning Malmö Bokning" />
<div>
<h5>Varför vill ni veta mitt personnummer?</h5>
<p>
Vi behöver ha ditt personnummer om du bokar en flyttstädning med oss och vill utnyttja RUT-avdraget. Vi kan nämligen inte ansöka om utbetalning för din räkning från Skatteverket om vi inte har ditt personnummer. 
Det är Skatteverket som kräver den uppgiften – inte vi.<br></br><br></br>

Dessutom sker betalning mot faktura och då gör det faktureringsbolag som vi anlitar en kreditprövning av våra kunder.</p>

<h5>Vad avses med övriga städytor?</h5>
<p>
Exempel på övriga städytor som du vill ha städat eller få prisuppgift på är balkong, vind, förråd, garage och dylikt – det vill säga ytor som inte ingår i själva boytan.</p>

<h5>Vilken övrig info kan vara värt att fylla i?</h5>
<p>Det kan röra sig om portkod, upplysningar om när överlåtelsen ska ske av huset / lägenheten, om möbler ska finnas kvar när vi städar, om vissa ytor inte behöver rengöras  till exempel.</p>

</div>
</div>
</section>
    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
     
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}
          title= "test"
  >
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        offertknapp
      }
    }
  }
`
