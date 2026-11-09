# 🔍 Olhômetro

> **Em tempos de crise, o olho precisa ser mais rápido que o preço.**

---

## 🧐 O que é isso?

Em tempos de crise, onde o **tamanho dos objetos começa a encolher**, o peso some, o volume diminui e a quantidade encolhe sem o preço acompanhar… alguém precisa ficar de olho.

Isso tem nome: **reduflação** (*shrinkflation*) — a arte silenciosa de entregar **menos produto pelo mesmo preço**. E ela acelera quando o custo de produção sobe, como acontece com o **preço do petróleo**, que encarece embalagens plásticas, transporte e toda a cadeia produtiva.

O **Olhômetro** é um userscript para **Shopee** e **AliExpress** que coloca uma placa de alerta na tela lembrando você de conferir o que realmente importa **antes de clicar em "Comprar"**.

Uma placa amarela no canto inferior esquerdo. Simples. Teimosa. Necessária.

```
┌──────────────────────────────┐
│  ✕                           │
│  OLHE ANTES DE COMPRAR!      │
│  ⚠ OLHE O TAMANHO            │
│  ⚠ OLHE O PESO               │
│  ⚠ OLHE O VOLUME             │
│  ⚠ OLHE A QUANTIDADE         │
│  ⚠ OLHE A ESPESSURA          │
└──────────────────────────────┘
```

---

## 🚨 Por que isso existe?

Porque a **reduflação** é silenciosa por design:

- 🧴 O frasco tem o **mesmo formato**, mas rende 20% menos.
- 🍫 A barra de chocolate tem **mesmo preço**, mas 10g a menos.
- 📦 A caixa parece igual, mas o **volume** caiu.
- 🧻 O rolo de papel tem **menos folhas** e ainda fica mais fino.
- 🧽 A esponja de aço ficou **mais leve** — você percebe na mão, não na etiqueta.

E quando o **petróleo** sobe, o efeito cascata chega em embalagens, plásticos, tecidos sintéticos e no frete. O consumidor paga o mesmo e leva menos.

O Olhômetro não resolve o problema do mundo. Mas impede que você esqueça de olhar.

---

## ✨ Funcionalidades

- 🟡 **Placa de alerta fixa** no canto inferior esquerdo com os 5 lembretes essenciais
- ✕ **Botão fechar** para esconder quando quiser
- 🖱️ **Arrastável** — mova a placa para onde fizer sentido
- 📱 **Responsiva** — se ajusta em telas pequenas (mobile)
- 🌐 Funciona **na Shopee (`shopee.com.br`)** e **no AliExpress (`aliexpress.com`)**
- 🎯 **Z-index máximo** e `position: fixed` — não é afetada pelo layout das lojas
- 🚀 Leve, sem dependências, sem coleta de dados

---

## 📦 Instalação

### 1. Instale um gerenciador de userscripts

| Navegador | Extensão |
| :--- | :--- |
| Chrome / Edge / Brave / Opera | [Tampermonkey](https://www.tampermonkey.net/) |
| Firefox | [Tampermonkey](https://addons.mozilla.org/firefox/addon/tampermonkey/) ou [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/) |
| Safari | [Userscripts](https://apps.apple.com/app/userscripts/id1463298887) |

### 2. Instale o Olhômetro

**Opção A — via arquivo `.user.js`**

1. Baixe o arquivo **`olhometro.user.js`**
2. Abra-o no navegador — o Tampermonkey vai oferecer a instalação
3. Confirme em **"Instalar"**

**Opção B — manualmente (copiar e colar)**

1. Clique no ícone do Tampermonkey → **"Criar novo script"**
2. Apague o conteúdo padrão
3. Cole o código do Olhômetro
4. `Ctrl + S` para salvar

### 3. Pronto

Acesse **shopee.com.br** ou **aliexpress.com** — a placa aparece automaticamente no canto inferior esquerdo. ✅

---

## 🖱️ Como usar

1. Navegue normalmente pela loja.
2. Quando for comprar, **leia a placa**:
   - **OLHE O TAMANHO** — em cm, não em "grande/médio"
   - **OLHE O PESO** — em g ou kg
   - **OLHE O VOLUME** — em ml, L ou cm³
   - **OLHE A QUANTIDADE** — unidades, folhas, unidades por pacote
   - **OLHE A ESPESSURA** — mm, g/m², ou "camadas"
3. Não quer a placa ali? **Arraste** para outro canto ou clique em **✕** para fechar.

---

## 🌐 Compatibilidade

| Site | Status |
| :--- | :--- |
| `shopee.com.br` | ✅ Suportado |
| `aliexpress.com` | ✅ Suportado |

Testado em Chrome e Firefox com Tampermonkey. Funciona com Greasemonkey e extensões compatíveis.

---

## 🛠️ Como funciona

O script é intencionalmente **minimalista**:

- Injeta um `<style>` com as regras visuais da placa.
- Cria um `<div id="alerta-compra-placa">` com os 5 lembretes.
- Anexa ao `document.body` com `position: fixed` e `z-index` máximo.
- Botão **✕** remove a placa da página.
- **Arrastar** reescreve `left`/`top` em tempo real.

Nada de `MutationObserver`, nada de mexer no DOM das lojas, nada de rastrear cliques. Só uma placa teimosa lembrando você de olhar.

---

## 🧠 Sobre reduflação (para entender por que isso importa)

**Reduflação** é quando o fabricante reduz a **quantidade ou o tamanho** do produto mantendo o preço (ou aumentando). O objetivo é mascarar a inflação real: em vez de subir o preço, você paga o mesmo por menos.

Ela **acelera** quando:

- O **petróleo** sobe (encarece plástico, transporte, energia).
- A **matéria-prima** escasseia (aço, papel, algodão).
- O **câmbio** desvaloriza (importados ficam mais caros).
- O **frete** encarece (peso e volume passam a contar ainda mais).

O consumidor só percebe quando a embalagem "encolheu" no armário. O Olhômetro existe para te lembrar de **olhar a etiqueta**, não a embalagem.

---

## 🤝 Contribuindo

Sugestões, correções e ideias de novos lembretes são bem-vindos. Abra uma *issue* ou envie um *pull request*.

---

## 📜 Licença

MIT — use, copie, adapte e compartilhe. Só não me responsabilize se você comprar mesmo assim. 😉

---

## 👀 Um recado final

> **A etiqueta mente. O tamanho não.**
>
> Olhe o tamanho. Olhe o peso. Olhe o volume. Olhe a quantidade. Olhe a espessura. **Olhe antes de comprar.**

Feito com 🟡 amarelo e teimosia.
