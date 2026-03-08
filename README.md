

# 🌞 Lumina - Accessible Productivity Platform

<p>
Lumina is a modern web application focused on accessibility, productivity, and inclusion. Built with Angular, TypeScript, and SCSS, it helps users organize tasks, leverage Pomodoro techniques, and provides an accessible experience for everyone.
</p>

<!-- Stack Badges -->
<p>
	<img src="https://img.shields.io/badge/Angular-21.1.x-red?logo=angular" />
	<img src="https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript" />
	<img src="https://img.shields.io/badge/SCSS--%20-pink?logo=sass" />
	<img src="https://img.shields.io/badge/Node.js-18%2F20-green?logo=node.js" />
	<img src="https://img.shields.io/badge/Vitest-4.x-yellow?logo=vitest" />
	<img src="https://img.shields.io/badge/ESLint-9.x-purple?logo=eslint" />
	<img src="https://img.shields.io/badge/Prettier-3.x-orange?logo=prettier" />
	<img src="https://img.shields.io/badge/GitHub%20Actions--%20-blue?logo=github" />
</p>

---

---

## 📖 About

Lumina was created for the FIAP Inclusive Hackathon, with a strong emphasis on accessibility for neurodiverse users (ADHD, Autism, etc.), productivity, and inclusive design. The app enables task management, focus mode, and Pomodoro timer, all accessible via keyboard navigation.

### 🎯 Project Goals

- 🔧 Accessibility-first: Keyboard navigation, ARIA labels, and high-contrast modes
- 🎨 Customization: Configurable settings for font size, color, and modes
- 📦 Productivity: Task board, Pomodoro timer, and focus mode
- 🚀 Performance: Modern Angular, optimized for speed
- 📱 Responsiveness: Works on all devices

---

## 🛠️ Technology Stack


| Technology      | Version    | Purpose                |
| --------------- | ---------- | ---------------------- |
| Angular         | 21.1.x     | UI Framework           |
| TypeScript      | 5.x        | Type Safety            |
| SCSS            | -          | Styling                |
| Node.js         | 18/20      | Runtime                |
| Vitest          | 4.x        | Testing                |
| ESLint          | 9.x        | Code Quality           |
| Prettier        | 3.x        | Code Formatting        |
| GitHub Actions  | -          | CI/CD Pipeline         |

### 📦 Stack Features

- ⚡ Modern Angular signals for reactivity
- 🧩 Modular architecture (presentation, domain, model, services)
- ♿ Accessibility-first (keyboard navigation, ARIA, high contrast)
- ⏰ Pomodoro timer integration
- 🗂️ Task board with columns and cards
- 🛠️ Configurable settings (font size, dark mode, focus mode)
- 🧪 Unit tests with Vitest
- 🚀 CI/CD with GitHub Actions
- 🧹 Linting and formatting with ESLint and Prettier

---

## 🚀 Installation and Setup

### ✅ Prerequisites

- Node.js (v18 or v20)
- npm (v10)
- Git (latest)

### ⚙️ Initial Setup

1️⃣ Clone the repository:

```bash
git clone https://github.com/jguerradasilva/lumina.git
cd lumina/lumina-work
```

2️⃣ Install dependencies:

```bash
npm install
```

3️⃣ Start the development server:

```bash
npm start
```

4️⃣ Open [http://localhost:4200](http://localhost:4200) in your browser.

---

## 📁 Project Structure

```
lumina-work/
├── src/
│   ├── app/
│   │   ├── presentation/
│   │   │   ├── components/
│   │   │   ├── features/
│   │   ├── domain/
│   │   ├── model/
│   │   └── services/
│   ├── index.html
│   └── main.ts
├── public/
├── angular.json
├── package.json
└── ...
```

---

## ♿ Accessibility

Lumina is built for accessibility:

- All buttons, modals, and panels use `tabindex` and `aria-label`.
- Actions can be triggered with Enter or Space.
- Main flows (onboarding, dashboard, modals, settings panel) are fully keyboard accessible.
- Overlay and panels use proper roles and keyboard navigation.
- High contrast and dark mode options.
- Font size customization.

---

## 💻 Development Workflow

1. Create features/components using Angular CLI
2. Implement logic and styles
3. Test with Vitest
4. Lint and format code
5. Build for production
6. Deploy via GitHub Actions

### Available Commands

- `npm start` — Start development server
- `npm test` — Run unit tests
- `npm run lint` — Run linter
- `npm run lint:fix` — Auto-fix lint issues
- `npm run build` — Build for production

---

## 🧪 Testing

Unit tests are written with [Vitest](https://vitest.dev/). To run tests:

```bash
npm test
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the project
2. Create a branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to your branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the license specified in the `LICENSE` file.

---

## 👤 Author & Contact

Developed by: [@jguerradasilva](https://github.com/jguerradasilva)

- GitHub: [@jguerradasilva](https://github.com/jguerradasilva)
- LinkedIn: [jguerradasilva](https://www.linkedin.com/in/jguerradasilva/)
- Email: [jguerradasilva@hotmail.com](mailto:jguerradasilva@hotmail.com)

---

## 📊 Project Status

Version: 1.0.0 | Last Update: March 2026

If you found this project useful, please consider giving it a star!

Essas melhorias garantem uma experiência inclusiva, sem dependência do mouse.

## Contribuição
Pull requests são bem-vindos. Para contribuir, siga as práticas de Git Flow e mantenha a cobertura de testes.

## Contato
Para dúvidas ou sugestões, abra uma issue no repositório.
