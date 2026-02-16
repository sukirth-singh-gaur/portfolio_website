## Portfolio Website 

A high-performance dual-mode portfolio built with Next.js 15, featuring a seamless transition between a modern aesthetic GUI and an authentic interactive Terminal interface.

![Terminal Portfolio Demo](https://img.shields.io/badge/Status-Live-brightgreen)
![NextJs](https://img.shields.io/badge/NextJS-16.1.1-blue)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![FramerMotion](https://img.shields.io/badge/FramerMotion-12.24.12-blue)


## AI Assistant (Shadow)

This portfolio features an integrated AI assistant named **Shadow** powered by Google Gemini models. Shadow answers user questions, provides portfolio information, and responds in a friendly, sometimes witty manner.

### AI Features

- **Conversational AI**: Shadow can answer questions about Sukirth, the portfolio, and general topics (with restrictions).
- **Persona**: Shadow introduces itself and responds as your digital guide.
- **Knowledge Base Restriction**: For questions about Sukirth, Shadow only uses information from a curated knowledge base (`src/lib/knowledge.json`).
- **Help Command**: Shadow always suggests using the `help` command or lists available actions when greeted or when the user seems lost.
- **Model Selection**: You can choose between different Gemini models (e.g., `gemini-2.5-flash`, `gemini-2.5-flash-lite`, `gemini-2.5-pro`) for a balance of speed, cost, and capability. The model is set in `src/lib/llm.tsx`.
- **Response Length Control**: The AI's response length is limited using the `maxOutputTokens` parameter for concise answers and efficient API usage.


## Tech Stack

### Framework and Core

Next.js 15 App Router: Utilizing Server Components for performance and Client Components for interactivity.
TypeScript: Full type safety across the GUI components and CLI command logic.
Framer Motion: Powering the smooth transitions between the GUI and CLI layers using AnimatePresence.

## Available Commands

| Command    | Description                                |
| ---------- | ------------------------------------------ |
| `help`     | Show all available commands                |
| `about`    | Learn about Utkarsh and his goals          |
| `projects` | View portfolio projects with descriptions  |
| `skills`   | Display technical skills and technologies  |
| `contact`  | Get contact information and social links   |
| `clear`    | Clear the terminal screen                  |
| `ls`       | List all available commands                |
| `pwd`      | Show current directory                     |
| `date`     | Display current date and time              |
| `whoami`   | Show current user                          |
| `theme`    | Switch between light/dark themes           |
| `matrix`   | Cool matrix rain effect (easter egg)       |
| `fortune`  | Get random programming quotes              |
| `neofetch` | Display system information                 |
| `demo`     | Run interactive demo with typing animation |

## Installation and Setup

### Prerequisites

Node.js 18.18 or higher
npm or pnpm

### Local Development

1. Clone and Install

```bash
git clone https://github.com/sukirth-singh-gaur/portfolio_website.git
cd portfolio_website
npm install 

```

2. Environment Variables
Create a .env.local file:

```text
NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here

```

3. Run

```bash
npm run dev

```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Star this repository if you liked it or found it helpful!**
