# Configurações do Projeto

Versão: 1.0.0

---

# Objetivo

Este documento reúne todas as configurações técnicas do projeto.

Seu objetivo é centralizar informações necessárias para desenvolvimento, integrações, rastreamento, publicação e manutenção.

As instruções detalhadas de implementação pertencem aos módulos e playbooks do May OS.

---

# 1. Informações Gerais

Nome do projeto:
Landing Page Espaço Som

Cliente:
Espaço Som / Rodrigo Moraes

Ambiente:

☑ Desenvolvimento

☐ Homologação

☐ Produção

Observação: ambiente atual do projeto é planejamento/desenvolvimento. Homologação e produção ainda não foram configuradas.

---

# 2. Tipo de Projeto

☑ Landing Page

☐ Site Institucional

☐ Página de Captura

☐ Página de Vendas

☐ Dashboard

☐ Aplicação Web

☐ Outro

---

# 3. Tecnologias

Quais tecnologias serão utilizadas?

Frontend:
Observação: tecnologia frontend ainda não definida.

Backend:
Não previsto neste momento.

Banco de Dados:
Não previsto neste momento.

Framework:
Observação: framework ainda não definido.

Hospedagem:
Observação: hospedagem ainda não definida.

CDN:
Observação: CDN ainda não definida.

---

# 4. Plataforma

Onde o projeto será publicado?

☐ Cloudflare Pages

☐ Vercel

☐ Netlify

☐ Servidor próprio

☐ Outro

Domínio:
Observação: domínio ainda não informado.

Subdomínio:
Observação: subdomínio ainda não informado.

---

# 5. Formulários

Existe formulário?

☐ Sim

☑ Não

Campos:
Não se aplica neste momento.

Destino dos dados:
WhatsApp.

Ferramenta utilizada:
Botões e links diretos para WhatsApp.

Observações:
Neste momento, a landing page não terá formulário. A conversão será feita por CTA para WhatsApp: https://wa.me/5547996330890.

---

# 6. Integrações

Marque todas as integrações utilizadas.

## Marketing

☑ Google Tag Manager

☑ Google Analytics 4

☑ Meta Pixel

☑ Google Ads

☐ TikTok Pixel

☐ LinkedIn Insight

☐ Microsoft Clarity

Observação: IDs das ferramentas ainda precisam ser informados na etapa de implementação.

---

## CRM / Automação

☐ ActiveCampaign

☐ Mailchimp

☐ Brevo

☐ MailerLite

☐ ConvertKit

☐ HubSpot

☐ Make

☐ Zapier

☐ Outro

Observação: não há CRM ou automação definidos neste momento.

---

## Checkout

☐ Hotmart

☐ Kiwify

☐ Eduzz

☐ CartPanda

☐ Stripe

☐ Outro

Observação: não há checkout previsto. A conversão indicada é via WhatsApp e aula experimental.

---

# 7. Eventos

Quais eventos deverão ser rastreados?

☑ Page View

☑ Scroll

☑ Clique em CTA

☐ Envio de Formulário

☐ Início de Checkout

☐ Compra

☑ Outro

Observações:
Eventos recomendados: page_view, scroll, click_cta_whatsapp, click_cta_hero, click_cta_final, click_whatsapp_float, view_offer e view_methodology. Como não há formulário nem checkout, não rastrear envio de formulário, início de checkout ou compra nesta versão.

---

# 8. SEO

Título da página:
Aulas de Guitarra e Violão em Joinville | Espaço Som

Meta Description:
Aprenda guitarra e violão com foco em evolução real, criatividade e desenvolvimento musical. Agende uma aula experimental no Espaço Som em Joinville.

Indexação:

☑ Sim

☐ Não

Canonical:
Observação: definir após confirmação do domínio final.

Open Graph:
Título: Aulas de Guitarra e Violão em Joinville | Espaço Som

Descrição: Aulas com técnica, didática e Metodologia Triangular para quem quer evoluir de verdade na música.

Imagem: pendente de logo/foto ou imagem oficial.

Favicon:
Pendente. Depende de logo ou identidade visual final.

---

# 9. Performance

Objetivo PageSpeed:
Meta recomendada: 90+ em mobile e desktop.

Core Web Vitals:
LCP abaixo de 2,5s; INP abaixo de 200ms; CLS abaixo de 0,1.

Observações:
Priorizar página leve, imagens otimizadas, carregamento assíncrono de scripts de marketing quando possível e evitar animações pesadas. Como a página terá integrações de tracking, monitorar impacto de GTM, GA4, Meta Pixel e Google Ads.

---

# 10. Segurança

Existe alguma necessidade específica?

Exemplos:

- CAPTCHA

- Rate Limit

- Proteção de formulário

- Cloudflare Turnstile

Não há formulário, login, checkout ou coleta direta de dados pela página neste momento. CAPTCHA, rate limit e proteção de formulário não se aplicam nesta versão.

---

# 11. Acessibilidade

Existe algum requisito adicional?

Requisitos:
- contraste adequado entre texto e fundo;
- navegação clara por teclado;
- estados de foco visíveis;
- textos alternativos para imagens;
- botões com área de clique confortável em mobile;
- respeitar redução de movimento quando possível;
- evitar texto sobre imagem sem camada de contraste.

---

# 12. Navegadores

Compatibilidade desejada.

☑ Chrome

☑ Edge

☑ Firefox

☑ Safari

☑ Mobile

---

# 13. Responsividade

Prioridade.

☑ Mobile

☑ Desktop

☑ Tablet

Observação:
Prioridade mobile first, pois o tráfego previsto inclui Instagram, YouTube, Google Meu Negócio e anúncios.

---

# 14. Idiomas

Idioma principal:
Português do Brasil.

Outros idiomas:
Não previstos.

---

# 15. LGPD

Existe coleta de dados pessoais?

☑ Sim

☐ Não

Necessita:

☑ Consentimento

☑ Política de Privacidade

☐ Termos de Uso

☑ Banner de Cookies

Observações:
A página não terá formulário, mas usará ferramentas de rastreamento e mídia como Google Analytics 4, Google Tag Manager, Meta Pixel e Google Ads. O contato do usuário será feito via WhatsApp. Recomenda-se política de privacidade e banner de cookies/consentimento para rastreamento.

---

# 16. Publicação

URL de produção:
Pendente. Domínio ainda não informado.

Data prevista:
31/07/2026.

Responsável:
Mayara.

---

# 17. Manutenção

Quem ficará responsável após a entrega?
Observação: responsável pela manutenção após a entrega ainda não definido.

Existe monitoramento?
Sim. Google Analytics 4, Google Tag Manager, Meta Pixel e Google Ads.

Existe documentação adicional?
Sim. Briefing, copy, direção visual e configurações do projeto.

---

# 18. Observações Técnicas

Informações adicionais relacionadas ao projeto.

Pendências técnicas antes do desenvolvimento/publicação:
- definir tecnologia frontend e framework;
- definir hospedagem;
- confirmar domínio ou subdomínio;
- informar IDs do Google Tag Manager, Google Analytics 4, Meta Pixel e Google Ads;
- enviar logo, favicon e imagens oficiais quando disponíveis;
- confirmar se haverá vídeos e depoimentos;
- preparar política de privacidade e banner de cookies/consentimento;
- configurar todos os CTAs para WhatsApp: https://wa.me/5547996330890.

---

# Status

☐ Não iniciado

☐ Em desenvolvimento

☑ Configurado

☐ Validado

---

# Aprovação

Responsável:
Mayara

Data:

Versão:
1.0.0
