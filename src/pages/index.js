import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Section from "../components/globals/section/Section"
import ThirdColumn from "../components/globals/section/ThirdColumn"
import Button from "../components/globals/button/Button"
import Background from "../components/background"
import ServiceColumn from "../components/serviceColumn"
import CTA from "../components/CTA"
import Footer from "../components/globals/footer/Footer"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Full Service Agency Offering Production, Design, & Marketing`,
      author: `@meshsharisaiki"
      keywords={[
        `Interior Design`,
        `Commercial Interior Design`,
        `Residential Interior Design`,
        `Interior Design and Consulting`,
      ]}
    />
    <HeaderIndex>
      <div
        style={{
          width: "250px",
          height: "auto",
          float: "right",
          paddingTop: "60px",
        }}
      ></div>
      <Section>
        <Banner
          subtitle="
          We continue to offer our exclusive concierge service during this time. We will
          provide samples, pricing as well as delivery options saving you time and a visit.
          Explore exceptional introductions with our up to date showroom tour then send us
          a message to get more information."
        >
          <Link to="/contact">
            <Button
              style={{
                marginLeft: "2rem",
                background: "var(--darkGray)",
                border: "var(--darkGray)",
                fontSize: "1rem",
              }}
            >
              CONTACT
            </Button>
          </Link>
        </Banner>
      </Section>
    </HeaderIndex>
    <Section id="agency" style={{ width: "100vw" }}>
      <Section style={{ paddingBottom: "3rem" }}>
        <ThirdColumn>
          <ServiceColumn
            business="AMERICAN LEATHER"
            description="Founded by engineers in 1990, American Leather was created on the
            belief that three months is too long to ever wait for a piece of
            customized furniture."
            link="https://www.americanleather.com/"
            linkName="WWW.AMERICANLEATHER.COM"
          />
          <ServiceColumn
            business="ARTERIORS HOME"
            description="Arteriors is a leader in sophisticated lighting, furniture, wall
            d cor, and accessories, beloved by discerning interior designer and
            retailers worldwide."
            link="https://www.arteriorshome.com/"
            linkName="WWW.ARTERIORSHOME.COM"
          />
          <ServiceColumn
            business="BONTEMPI"
            description="We are still determined in proposing our philosophy: experiencing the
            beauty together with functionality and comfort, always innovating our
            choices."
            link="http://www.bontempius.com/"
            linkName="WWW.BONTEMPIUS.COM"
          />
          <ServiceColumn
            business="DELLA ROBBIA"
            description="DELLAROBBIA’s critical eye for European craftsmanship and recognition
            of timeless modern designs, sustain our reputation of unflagging
            determination to build the best product inside out, here in the
            States."
            link="https://www.dellarobbia.com/"
            linkName="WWW.DELLAROBBIAUS.COM"
          />
          <ServiceColumn
            business="FOCUS ONE HOME"
            description="Our Collections evoke a classic – meets – a contemporary sense of
            timelessness, sophistication, and style."
            link="http://www.focusonehome.com/"
            linkName="WWW.FOCUSONEHOME.COM"
          />
          <ServiceColumn
            business="ETHNICRAFT"
            description="Ethnicraft creates beautiful furniture and decorative objects that are
            the foundation for people’s homes, to inspire the stories of their
            lives. As it is incredibly strong and ages well with time, we believe
            wood is what makes our furniture the solid and dependable foundation
            of a home."
            link="https://www.ethnicraft.com/us/en/"
            linkName="WWW.ETHNICRAFT.COM"
          />
        </ThirdColumn>
        <ThirdColumn>
          <ServiceColumn
            business="FOUR HANDS"
            description="We believe there is no end to what furniture can do for space. We are
            compelled to do more than design and discover furniture. At Four
            Hands, we furnish style."
            link="https://fourhands.com/"
            linkName="WWW.FOURHANDS.COM"
          />
          <ServiceColumn
            business="GAMMA"
            description="Innovation and time-honored skills make up the essence of our ability
            to offer the best products, with their distinctive personality and
            elegance in each and every detail."
            link="https://www.gammarr.com/"
            linkName="WWW.GAMMARR.COM"
          />
          <ServiceColumn
            business="HUPPE"
            description="Hupp products offer quality and style to rival the leading European manufacturers. Our timeless, contemporary, and high-end collections can be found throughout North America and around the world."
            link="https://www.huppe.net/"
            linkName="WWW.HUPPE.NET"
          />
          <ServiceColumn
            business="INDO PURI"
            description="Indo Puri designs and brings to you a collection of contemporary and handcrafted furniture. Indoor and Outdoor."
            link="http://www.indopuri.com/"
            linkName="WWW.INDOPURI.COM"
          />
          <ServiceColumn
            business="LEXINGTON"
            description="Lexington Home Brands product assortment is presented and marketed by lifestyle collections, offering products for every room of the home, including bedroom, dining room, living room, home office, media room and outdoor living spaces."
            link="https://www.lexington.com/"
            linkName="WWW.LEXINGTON.COM"
          />
          <ServiceColumn
            business="MARIA YEE"
            description="Utilizing a modernized joinery system based on ancient Chinese tradition, Maria Yee has developed construction techniques that require no nails or screws."
            link="https://www.mariayee.com/"
            linkName="WWW.MARIAYEE.COM"
          />
        </ThirdColumn>
        <ThirdColumn>
          <ServiceColumn
            business="NATHAN ANTHONY"
            description="Nathan Anthony is also a family-owned business, known for its
            leadership in lean manufacturing principles used to produce sustainable and custom bench-made furnishings at its Los Angelesbased factory."
            link="https://www.nafurniture.com/"
            linkName="WWW.NAFURNITURE.COM"
          />
          <ServiceColumn
            business="NOIR"
            description="15 years later, Noir has established itself with a hand-crafted line
            of over 1500 products that is consistent, available, and affordable."
            link="https://www.noirfurniturela.com/"
            linkName="WWW.NOIRFURNITURELA.COM"
          />
          <ServiceColumn
            business="PHILLIPS COLLECTION"
            description="From its beginnings in art and artifacts to its present incarnation as
            a source for innovative, award-winning contemporary design, Phillips
            Collection has always occupied a unique niche."
            link="https://www.phillipscollection.com/"
            linkName="WWW.PHILLIPSCOLLECTION.COM"
          />
          <ServiceColumn
            business="ROBERTA SCHILLING"
            description="Her impeccable taste helps her play the role of a curator, handpicking
            unique and bold contemporary pieces and mixing them with her
            first inspiration – fine Brazilian colonial antiques."
            link="https://www.rscollection.com/#/home"
            linkName="WWW.RSCOLLECTION.COM"
          />
          <ServiceColumn
            business="SONDER LIVING"
            description="Our diverse brand delivers a curated and well-rounded furnishings
            experience conveyed across varied ranges of styles tailored to our
            customers’ tastes."
            link="https://us.sonderliving.com/"
            linkName="WWW.SONDERLIVING.COM"
          />
          <h3 style={{ textAlign: "center" }}>Home Decor</h3>
          <ul className="decor-list">
            <li>ACCENT DECOR | WWW.ACCENTDECOR.COM</li>
            <li>CYAN DESIGN | WWW.CYAN.DESIGN</li>
            <li>GLOBALVIEWS | WWW.GLOBALVIEWS.COM</li>
            <li>GOLDLEAF DESIGN GROUP | WWW.GOLDLEAFDESIGNGROUP.COM</li>
            <li>REGINA ANDREW | WWW.REGINAANDREW.COM</li>
          </ul>
          <h3 style={{ textAlign: "center" }}>Rugs</h3>
          <ul className="decor-list">
            <li>JAIPUR LIVING | WWW.JAIPURLIVING.COM</li>
            <li>SURYA | WWW.SURYA.COM</li>
          </ul>
        </ThirdColumn>
      </Section>
    </Section>

    <Section style={{ width: "100vw" }}>
      <Background>
        <CTA
          copy="
        We specialize in both small and large-scale projects ranging from
        urban/condominium living, single-family dwellings, and multifamily
        residences to luxury estate properties.
      "
        />
      </Background>
    </Section>
    <Section style={{ width: "100vw" }}>
      <Footer />
    </Section>
  </Layout>
)

export default IndexPage
