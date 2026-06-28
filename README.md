# JK Auto Truck — Landing Page

Landing page para JK Auto Truck, Jacinto Machado - SC.
Desenvolvida com React + TypeScript + Tailwind CSS + Vite.

## Como rodar localmente

```bash
npm install
npm run dev
```

## Como adicionar a logo

1. Coloca o arquivo da logo em `src/assets/logo.png`
2. Abre `src/components/Hero.tsx`
3. Adiciona no topo: `import logo from '../assets/logo.png'`
4. Substitui o `<div>` placeholder por: `<img src={logo} alt="JK Auto Truck" className="w-52 object-contain mx-auto mb-5" />`

## Como publicar no Netlify

1. Sobe o projeto no GitHub
2. Acesse [netlify.com](https://netlify.com)
3. New project → Import from GitHub
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

## Estrutura

```
src/
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── Services.tsx
│   ├── Why.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── assets/        ← coloque a logo aqui
├── App.tsx
├── main.tsx
└── index.css
```
