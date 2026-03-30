"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SplitAbout from '@/components/sections/about/SplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeLargeTitles"
        background="grid"
        cardStyle="gradient-radial"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Início",          id: "hero"},
        {
          name: "Diferenciais",          id: "diferenciais"},
        {
          name: "Serviços",          id: "servicos"},
        {
          name: "Sobre",          id: "sobre"},
        {
          name: "Contato",          id: "contato"},
      ]}
      brandName="Ki Jóia Ótica"
      button={{ text: "Agendar", href: "#contato" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars"}}
      title="Sua visão merece o brilho de uma joia."
      description="Tecnologia de ponta e curadoria exclusiva de armações no coração de Dois Irmãos. Enxergue o mundo com nitidez e estilo."
      testimonials={[
        {
          name: "Mariana S.",          handle: "@kijoia",          testimonial: "Atendimento humano e atencioso.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cup-portrait-job-technology-person_1157-4199.jpg"},
        {
          name: "Lucas P.",          handle: "@kijoia",          testimonial: "Acessibilidade total no centro!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cup-portrait-job-technology-person_1157-4199.jpg"},
        {
          name: "Carla M.",          handle: "@kijoia",          testimonial: "Conveniência e ótimos modelos.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cup-portrait-job-technology-person_1157-4199.jpg"},
        {
          name: "Roberto F.",          handle: "@kijoia",          testimonial: "Expertise técnica diferenciada.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cup-portrait-job-technology-person_1157-4199.jpg"},
        {
          name: "Juliana V.",          handle: "@kijoia",          testimonial: "Melhor atendimento da região, recomendo!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cup-portrait-job-technology-person_1157-4199.jpg"},
      ]}
      buttons={[
        {
          text: "Agendar Exame",          href: "#contato"},
        {
          text: "Ver Catálogo",          href: "https://wa.me/5551999232984"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/cup-portrait-job-technology-person_1157-4199.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/cup-portrait-job-technology-person_1157-4199.jpg",          alt: "Cliente 1"},
        {
          src: "http://img.b2bpic.net/free-photo/cup-portrait-job-technology-person_1157-4199.jpg",          alt: "Cliente 2"},
        {
          src: "http://img.b2bpic.net/free-photo/cup-portrait-job-technology-person_1157-4199.jpg",          alt: "Cliente 3"},
        {
          src: "http://img.b2bpic.net/free-photo/cup-portrait-job-technology-person_1157-4199.jpg",          alt: "Cliente 4"},
        {
          src: "http://img.b2bpic.net/free-photo/cup-portrait-job-technology-person_1157-4199.jpg",          alt: "Cliente 5"},
      ]}
      avatarText="Mais de 500+ clientes satisfeitos em Dois Irmãos"
      marqueeItems={[
        {
          type: "text",          text: "Curadoria Premium"},
        {
          type: "text",          text: "Tecnologia de Ponta"},
        {
          type: "text",          text: "Atendimento Humanizado"},
        {
          type: "text",          text: "Localização Central"},
        {
          type: "text",          text: "Saúde Visual"},
      ]}
    />
  </div>

  <div id="diferenciais" data-section="diferenciais">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          tag: "Centro",          title: "Localização Privilegiada",          subtitle: "Av. São Miguel, 749",          description: "No centro de Dois Irmãos, com fácil acesso.",          imageSrc: "http://img.b2bpic.net/free-vector/collection-geometric-watercolor-pointers_23-2147577979.jpg"},
        {
          id: 2,
          tag: "Inclusão",          title: "Acessibilidade Plena",          subtitle: "Para todos",          description: "Estrutura 100% pensada para cadeirantes e pessoas com mobilidade reduzida.",          imageSrc: "http://img.b2bpic.net/free-photo/wheelchair-sign-road-city_23-2149338546.jpg"},
        {
          id: 3,
          tag: "Especialista",          title: "Expertise Técnica",          subtitle: "Consultoria",          description: "Consultoria personalizada para escolher a lente perfeita para o seu rosto.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-brunette-woman-holding-digital-tablet-reading-with-glasses-smiling_1258-202065.jpg"},
      ]}
      title="Por que a Ki Jóia?"
      description="Cuidado e precisão em cada detalhe da sua saúde visual."
    />
  </div>

  <div id="servicos" data-section="servicos">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          brand: "Exames",          name: "Exames de Precisão",          price: "Agendar",          rating: 5,
          reviewCount: "100+",          imageSrc: "http://img.b2bpic.net/free-photo/cup-portrait-job-technology-person_1157-4199.jpg"},
        {
          id: "p2",          brand: "Armações",          name: "Curadoria de Marcas",          price: "Ver Catálogo",          rating: 5,
          reviewCount: "50+",          imageSrc: "http://img.b2bpic.net/free-photo/cup-portrait-job-technology-person_1157-4199.jpg"},
        {
          id: "p3",          brand: "Manutenção",          name: "Ajuste e Cuidado",          price: "Vitalício",          rating: 5,
          reviewCount: "80+",          imageSrc: "http://img.b2bpic.net/free-photo/cup-portrait-job-technology-person_1157-4199.jpg"},
      ]}
      title="Nossos Serviços"
      description="Soluções completas para sua visão."
    />
  </div>

  <div id="sobre" data-section="sobre">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Mais que uma ótica, um olhar de cuidado sobre você."
      description="Focamos na tradição local em Dois Irmãos e no compromisso com a saúde visual da comunidade. Entre em contato: (51) 99923-2984."
      bulletPoints={[
        {
          title: "Tradição",          description: "Anos cuidando de famílias na região."},
        {
          title: "Atendimento",          description: "Humano e personalizado em cada visita."},
        {
          title: "WhatsApp",          description: "Praticidade total no (51) 99923-2984."},
      ]}
      imageSrc="http://img.b2bpic.net/free-vector/new-fashion-collection-template-social-media-banner_53876-116219.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contato" data-section="contato">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Agende seu horário"
      description="Estamos prontos para lhe atender em nossa unidade."
      inputs={[
        {
          name: "nome",          type: "text",          placeholder: "Seu Nome",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Seu E-mail",          required: true,
        },
      ]}
      textarea={{
        name: "msg",        placeholder: "Como podemos ajudar?",        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-vector/new-fashion-collection-template-social-media-banner_53876-116219.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/cup-portrait-job-technology-person_1157-4199.jpg"
      columns={[
        {
          title: "Ki Jóia Ótica",          items: [
            {
              label: "Av. São Miguel, 749",              href: "#"},
            {
              label: "WhatsApp: (51) 99923-2984",              href: "https://wa.me/5551999232984"},
          ],
        },
        {
          title: "Horários",          items: [
            {
              label: "Seg-Sex: 09:00 - 18:30",              href: "#"},
            {
              label: "Sáb: Atendimento Especial",              href: "#"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
