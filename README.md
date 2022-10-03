# IN8 Dev | Estágio

Aplicação feita para cadastrar candidatos a estágio da IN8.

## Sumário

- [Observações preliminares](#observações-preliminares)

- [Como executar localmente](#como-executar-localmente)

- [Próximos passos](#próximo-passos)

- [Tecnologias](#tecnologias)

## Observações preliminares

- Foi construído o layout desktop. A resposividade poderá ser trabalhada mais tarde para mobile e tablet.

## Como executar localmente

- Clone o repositório

```sh
$ git clone git@github.com:caleb-freitas/in8.git && cd in8
```

- Adicione os seguintes `datasource` e `generator` em seu arquivo [schema.prisma](/prisma/schema.prisma):

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
```

- Renomeie o arquivo [.example.env](./.example.env) para `.env`

- Execute `npx prisma db push` para aplicar o model `Registration` no banco de dados

- Execute `npm run dev` para iniciar a aplicação

## Próximo passos

- [ ] Adicionar responsividade para mobile e tablet

- [ ] Fazer cache da query `infiniteRegistrations`

- [ ] Adicionar validação de input com Zod e regexp

- [ ] Criar máscaras para os inputs (data, telefone e data de nasc.)

## Tecnologias

- [TypeScript](https://www.typescriptlang.org/)

- [tRPC](https://trpc.io)

- [Prisma](https://prisma.io)

- [PlanetScale](https://planetscale.com/)

- [Next.js](https://nextjs.org/)

- [Vercel](https://vercel.com/)

- [TailwindCSS](https://tailwindcss.com)
