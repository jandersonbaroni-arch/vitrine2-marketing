# 🚀 Como Publicar no Vercel e Conectar ao vitrine2marketing.com.br

## Pré-requisitos
- Conta GitHub (gratuita) — github.com
- Conta Vercel (gratuita) — vercel.com
- Domínio vitrine2marketing.com.br no registro.br

---

## PASSO 1 — Subir o código no GitHub

1. Acesse github.com e crie uma conta (se não tiver)
2. Clique em **New repository**
3. Nome: `vitrine2-marketing`
4. Visibilidade: **Private**
5. Clique em **Create repository**
6. Faça upload dos arquivos deste ZIP (ou use GitHub Desktop — desktop.github.com)

---

## PASSO 2 — Criar conta no Vercel

1. Acesse vercel.com
2. Clique em **Sign Up**
3. Escolha **Continue with GitHub**
4. Autorize o Vercel a acessar seu GitHub

---

## PASSO 3 — Fazer o deploy

1. No Vercel, clique em **Add New > Project**
2. Selecione o repositório `vitrine2-marketing`
3. O Vercel detecta automaticamente que é Next.js
4. Clique em **Deploy**
5. Aguarde ~2 minutos
6. Seu site estará no ar em um endereço como `vitrine2-marketing.vercel.app`

---

## PASSO 4 — Conectar o domínio vitrine2marketing.com.br

### No Vercel:
1. Vá em **Settings > Domains**
2. Digite: `vitrine2marketing.com.br`
3. Clique em **Add**
4. O Vercel vai exibir dois registros DNS para configurar

### No registro.br:
1. Acesse registro.br e faça login
2. Clique no domínio `vitrine2marketing.com.br`
3. Vá em **DNS** (ou **Configurar DNS**)
4. Adicione os registros que o Vercel indicou:

**Registro A (para o domínio raiz):**
```
Tipo: A
Nome: @
Valor: 76.76.19.19
```

**Registro CNAME (para www):**
```
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

5. Salve e aguarde até 48h (geralmente menos de 1h)
6. O Vercel ativa HTTPS automaticamente ✅

---

## PASSO 5 — Configurar Google Tag Manager (rastreamento de conversões)

1. Acesse tagmanager.google.com
2. Crie uma conta com o nome "Vitrine 2 Marketing"
3. Copie o ID (formato: GTM-XXXXXXX)
4. No arquivo `app/layout.tsx`, descomente as linhas do GTM e substitua `GTM-XXXXXXX` pelo seu ID
5. Faça push no GitHub — o Vercel atualiza automaticamente

---

## PASSO 6 — Adicionar imagens próprias (IMPORTANTE)

As imagens da seção Hero vêm de um CDN externo (Manus) que pode ser desativado.

**Para substituir:**
1. Baixe as imagens de: `https://d2xsxph8kpxj0f.cloudfront.net/...`
2. Coloque na pasta `public/` do projeto
3. No arquivo `components/HeroSection.tsx`, substitua a URL pelo caminho local:
   ```
   backgroundImage: `url('/hero-bg.png')`
   ```

**Imagem OG (compartilhamento social):**
- Crie uma imagem 1200x630px com: logo + "Vitrine 2 Marketing" + "Agência Digital em Lagoa Santa-MG"
- Salve como `public/og-image.png`

**Favicon:**
- Salve o logo como `public/favicon.ico` (formato ICO) e `public/icon.png` (PNG 512x512)
- Salve também como `public/apple-touch-icon.png` (PNG 180x180)

---

## Estrutura de URLs após o deploy

| URL | Conteúdo |
|-----|----------|
| vitrine2marketing.com.br | Homepage completa |
| vitrine2marketing.com.br/google-ads | Landing page Google Ads |
| vitrine2marketing.com.br/meta-ads | Landing page Meta Ads |
| vitrine2marketing.com.br/google-meu-negocio | Landing page GMB |
| vitrine2marketing.com.br/criacao-de-sites | Landing page Sites |
| vitrine2marketing.com.br/midia-exterior | Landing page Mídia Exterior |
| vitrine2marketing.com.br/sitemap.xml | Sitemap automático |
| vitrine2marketing.com.br/robots.txt | Robots automático |

---

## Dúvidas frequentes

**"Preciso saber programar para atualizar o site?"**
Não. Para textos e conteúdo, edite os arquivos `.tsx` diretamente no GitHub (clique no arquivo > ícone de lápis). O Vercel atualiza automaticamente em ~2 minutos.

**"Quanto custa?"**
- GitHub: gratuito
- Vercel: gratuito para projetos pessoais/pequenos (hobby plan)
- Registro.br: você já paga (é só o domínio)

**"Como enviar o site para meus clientes analisarem?"**
Mande o link `vitrine2-marketing.vercel.app` antes de conectar o domínio. O Vercel gera esse link de preview automaticamente.
