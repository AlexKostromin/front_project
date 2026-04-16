# Landing Spec — front-inspire

Референс: https://www.inspire-se.co/en/ (Inspira — AI для юристов, BR рынок).
Мы делаем **свой аналог лендинга** по мотивам структуры и ощущения референса — не клон. Контент-плейсхолдеры заменяем позже.

Документ — источник правды для реализации. Меняется вместе с решениями по ходу работы.

---

## 1. Цели лендинга

1. Объяснить ценность продукта за один скролл.
2. Продемонстрировать возможности через блоки «решения» + «преимущества».
3. Социальное доказательство (клиенты, кейсы, награды).
4. Конверсия: одна основная CTA «Связаться» + подписка на рассылку.

Основная CTA-цель: клик на «Связаться» (открывает форму/чат).
Вторичная: email-подписка.

---

## 2. Информационная архитектура

### 2.1. Главный роут `/` (landing)

Порядок секций сверху вниз:

1. **Header (sticky)** — логотип, навигация, переключатель языка, переключатель темы, CTA `Связаться`, ссылка `Войти`.
2. **Hero** — крупный заголовок + подзаголовок + первичная CTA + иллюстрация/абстрактная графика.
3. **Solutions** — 5 карточек продукта (сетка/слайдер): иконка, заголовок, короткое описание, ссылка «Узнать больше».
4. **Benefits / Numbers** — 3–4 статистических плашки (напр. `+40% экономии времени`, `75M+ документов`, `75 судов`, `LGPD/ISO`).
5. **Clients / Cases** — горизонтальный карусель-слайдер с логотипами клиентов + карточками-цитатами (testimonials).
6. **About / Partners & Awards** — короткий абзац про миссию + ряд логотипов партнёров/наград.
7. **FAQ** — accordion на 5–7 вопросов.
8. **CTA-section** — финальный призыв + крупная кнопка.
9. **Blog teaser** — 3 последних поста (заглушка, статичный массив на первом этапе).
10. **Newsletter** — форма подписки (email + submit).
11. **Footer** — колонки ссылок (Продукт / Ресурсы / Компания / Правовое), соцсети, реквизиты, copyright.

### 2.2. Дополнительные роуты (заглушки, stage 2)

- `/solutions/[slug]` — страница отдельного решения.
- `/blog` + `/blog/[slug]` — список и пост.
- `/legal/privacy`, `/legal/terms`, `/legal/security`.
- `/contact` — при необходимости отдельная страница с формой (на MVP можно модалкой).

Всё, кроме `/`, на MVP — опционально (stub + 404 можно позже).

---

## 3. Технологическая карта

| Слой          | Реализация                                                                                                                                                                                                           |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Роутинг / SSR | Next.js 16 App Router. `app/page.tsx` — серверный, секции — отдельные компоненты. `"use client"` только там, где нужен стейт (theme toggle, accordion, форма, слайдер).                                              |
| UI-kit        | Ant Design 6 (`Typography`, `Button`, `Card`, `Flex`, `Row/Col`, `Collapse`, `Carousel`, `Form`, `Input`, `Space`, `Divider`). Кастом-стили — через AntD-токены в `@/shared/config/theme.ts`.                        |
| Тема          | `next-themes` (уже настроен), переключатель в хедере.                                                                                                                                                                |
| Формы         | React Hook Form + Zod (`@hookform/resolvers`) для newsletter и contact-формы.                                                                                                                                        |
| Данные        | Для MVP контент — статичные TS-модули в `src/shared/content/`. TanStack Query зарезервирован под будущий CMS/API.                                                                                                    |
| i18n          | MVP: только `en` + `ru` через простой объект-словарь в `src/shared/i18n/` (без тяжёлых библиотек). Переключатель в хедере меняет локаль в URL-сегменте `/[lang]` — **после MVP**; на первом шаге — одна локаль `en`. |
| SEO           | `generateMetadata` в `app/page.tsx`, OG-теги, `sitemap.ts`, `robots.ts`.                                                                                                                                             |
| Аналитика     | Точка расширения — `shared/lib/analytics.ts`, на MVP — no-op.                                                                                                                                                        |

---

## 4. Структура файлов

```
src/
  app/
    layout.tsx                        # уже есть
    page.tsx                          # композиция секций
    (marketing)/                      # опционально — группа роутов для лендинга
  widgets/                            # новый слой: крупные блоки страниц
    header/
      ui/Header.tsx
      ui/NavLinks.tsx
      ui/LangSwitcher.tsx
      ui/ThemeToggle.tsx
    footer/
      ui/Footer.tsx
    landing/
      hero/ui/Hero.tsx
      solutions/ui/Solutions.tsx
      solutions/ui/SolutionCard.tsx
      benefits/ui/Benefits.tsx
      cases/ui/Cases.tsx              # carousel + testimonial
      about/ui/About.tsx
      faq/ui/Faq.tsx                  # Collapse
      cta/ui/FinalCta.tsx
      blog/ui/BlogTeaser.tsx
      newsletter/ui/Newsletter.tsx    # RHF + Zod
  features/
    newsletter-subscribe/
      model/schema.ts                 # zod
      api/subscribe.ts                # stub → console.log
      ui/NewsletterForm.tsx
    theme-toggle/
      ui/ThemeToggle.tsx              # (либо оставить в widgets/header)
  entities/
    solution/model/types.ts
    case/model/types.ts
    post/model/types.ts
  shared/
    content/
      solutions.ts
      benefits.ts
      cases.ts
      faq.ts
      posts.ts
      partners.ts
      nav.ts
    ui/
      Section.tsx                     # обёртка с паддингами/контейнером
      Container.tsx
      SectionHeading.tsx
    config/
      theme.ts                        # уже есть — расширить токены
      site.ts                         # название, описание, соцсети, контакты
    i18n/
      en.ts
      (ru.ts позже)
      t.ts                            # простой t(key)
    lib/
      query-client.ts                 # уже есть
      analytics.ts                    # no-op
    store/
      ui-store.ts                     # уже есть
    providers/                        # уже есть
```

Слои `widgets/`, `features/`, `entities/` заводим по мере появления — не создавать пустых папок заранее.

---

## 5. Модели данных (MVP — статичные)

```ts
// entities/solution/model/types.ts
export type Solution = {
  slug: string;
  title: string;
  description: string;
  icon: string; // имя иконки из @ant-design/icons
  href?: string; // ссылка на подробную страницу (опц.)
};

// entities/case/model/types.ts
export type Case = {
  company: string;
  logo?: string; // путь из /public
  quote: string;
  author: { name: string; role: string };
};

// entities/post/model/types.ts
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  cover?: string;
};

// shared/content/benefits.ts
export type Benefit = { value: string; label: string; hint?: string };

// shared/content/faq.ts
export type FaqItem = { q: string; a: string };
```

---

## 6. Дизайн-система

- **Цвета:** основная палитра — нейтральная (slate/graphite) + акцент `colorPrimary` из AntD (подобрать под бренд позже; дефолт `#1677ff`). Тёмная и светлая темы — обе обязательны.
- **Типографика:** дефолтный стек AntD + увеличенная шкала для hero (`fontSize` tokens). Заголовок hero — `clamp(40px, 6vw, 72px)`.
- **Сетка:** контейнер `max-width: 1200px`, горизонтальный паддинг `24px` моб. / `48px` десктоп.
- **Радиус:** `borderRadius: 12` (обновить в `theme.ts`).
- **Отступы между секциями:** `padding-block: clamp(64px, 10vw, 128px)`.
- **Иконки:** `@ant-design/icons`.
- **Иллюстрации/фото:** на MVP — placeholder-блоки и градиенты. Картинки из `/public` подставляем позже.
- **Адаптив:** breakpoint sm/md/lg по AntD (`<= 576`, `<= 768`, `<= 992`, `<= 1200`).

---

## 7. Интерактив и состояния

| Блок        | Интерактив                                                                   |
| ----------- | ---------------------------------------------------------------------------- |
| Header      | sticky + прозрачность→solid при скролле; бургер-меню на mobile.              |
| ThemeToggle | `useTheme()` из next-themes.                                                 |
| Solutions   | на десктопе — сетка 3×2 / 2×3; на mobile — `Carousel` (AntD).                |
| Cases       | `Carousel` с автопрокруткой, пауза на hover, кнопки prev/next.               |
| FAQ         | AntD `Collapse`, accordion mode.                                             |
| Newsletter  | RHF + Zod; стейт loading/success/error, AntD `message` через `App.useApp()`. |
| Анимации    | лёгкий fade-in секций по `IntersectionObserver` (позже, не блокер MVP).      |

---

## 8. Доступность и качество

- Семантика: `<header>`, `<main>`, `<section>` с `aria-labelledby`, `<footer>`.
- Фокус-стили из AntD не ломать.
- Alt-тексты на всех `<Image>`.
- Lighthouse цель: Perf ≥ 90, A11y ≥ 95.
- Покрытие тестами:
  - Vitest: рендер каждой секции с моками контента; валидация Zod-схемы newsletter.
  - Playwright: smoke `/` (уже есть), + сценарий заполнения newsletter, + раскрытие FAQ, + переключение темы.

---

## 9. План реализации (итерации)

**Stage 0 — фундамент**

- `shared/ui/Section.tsx`, `Container.tsx`, `SectionHeading.tsx`.
- `shared/config/site.ts` (название, описание, соцсети).
- Расширить `theme.ts` (радиус, типографика, цвета под тёмную/светлую).
- `Header` + `Footer` (без всех ссылок, но с каркасом).
- Smoke: страница продолжает открываться, обе темы работают.

**Stage 1 — core-секции**

- Hero, Solutions, Benefits, FinalCta — со статичным контентом из `shared/content/`.
- Адаптив ≥ `md`.
- Vitest на рендер.

**Stage 2 — социальное доказательство**

- Cases (carousel), About/Partners, FAQ.
- Адаптив mobile.

**Stage 3 — конверсия и контент**

- Newsletter (RHF+Zod, stub-handler), BlogTeaser.
- Playwright e2e: форма, accordion, тема.

**Stage 4 — полировка**

- SEO (`generateMetadata`, OG, sitemap, robots).
- Анимации на scroll.
- Замена плейсхолдеров на финальный контент/ассеты.
- Lighthouse-проход.

**Stage 5 — i18n и подстраницы (опц.)**

- Префикс `/[lang]`, словари.
- `/legal/*` страницы-заглушки.
- `/solutions/[slug]` детальная.

---

## 10. Решения по старту

1. **Бренд** — рабочее «front-inspire», меняем позже.
2. **Ниша** — та же, что у референса: AI для юристов (legal-tech, RU-рынок).
3. **Языки** — только `ru` на MVP (без префикса `/[lang]`, i18n-слой не поднимаем).
4. **Contact / newsletter** — stub-обработчик (console.log + success-состояние). Интеграцию подключим позже.
5. **Блог** — статичный массив в `shared/content/posts.ts`.
6. **Фирменный стиль** — подбираем сами. Направление: строгий, спокойный, «юридический», с мягким акцентом. Палитра: глубокий индиго/графит + акцент тёплый (янтарь/охра) для CTA. Типографика: системный sans для UI + один выразительный serif для hero (через `next/font`). Радиус 12, плотные отступы.

---

## 11. Backlog (Stage 6 — по сравнению с референсом inspire-se.co)

Разобрано после прохода Stage 0–5. Идём сверху вниз: каждый блок — отдельная задача, можно брать независимо. Когда пользователь говорит «продолжи» — берём следующий непомеченный пункт.

### Высокий приоритет

- [x] **Hero-визуал.** `widgets/landing/hero/ui/HeroMock.tsx` — window-фрейм с поисковой строкой, 3 моковыми результатами (дело, сниппет, match%) и блоком «Ответ ИИ». Подложка с размытым градиентным хало. Скрыт на `xs/md` через `Col xs={0} lg={11}`.
- [x] **Секция «Как это работает».** `widgets/landing/how-it-works` + `shared/content/how-it-works.ts` — 3 шага (Загружаете → ИИ анализирует → Ответ со ссылками) с номерами, иконками и описаниями. Встроена между Solutions и Benefits.
- [x] **Детализация Benefits.** Поле `breakdown?: string[]` в `Benefit`, рендерится мелкой строкой через `·` разделитель.
- [x] **Compliance-бейдж-стрип.** `widgets/landing/compliance` + `shared/content/compliance.ts` — 5 бейджей (152-ФЗ, серверы РФ, AES-256/TLS 1.3, ISO 27001, Сколково) в адаптивной CSS-grid плашке с тонким фоном.
- [x] **OG-картинка.** `app/opengraph-image.tsx` через `next/og ImageResponse` — 1200×630 с лого, eyebrow, display-заголовком, описанием и тёплым градиентом. `metadata.openGraph.images` и `twitter.images` ссылаются на `/opengraph-image`.
- [x] **Cookie-banner.** `widgets/cookie-banner/ui/CookieBanner.tsx` — фиксированная плашка снизу, флаг в `localStorage` (`inspire-cookie-accepted`), ссылка на политику конфиденциальности. Подключён в `app/layout.tsx` внутри `Providers`.

### Средний приоритет

- [x] **Полноценная contact-форма.** Модалка или отдельная `/contact`-страница: имя, компания, email, краткое описание задачи. RHF + Zod (есть стек). CTA на главной открывает модалку вместо mailto. Файлы: `features/contact/{model,api,ui}/*`, `widgets/landing/cta/ui/FinalCta.tsx` обновить.
- [x] **Блок «Inspire vs. обычные ИИ».** Сравнительная таблица (2 колонки): строки — «Галлюцинации», «Ссылки на источники», «Изоляция данных», «Калибровка юристами», «152-ФЗ». Ячейки — пиктограммы ✓/✗ + короткие подписи. Место: после About, перед FAQ. Файлы: `widgets/landing/comparison/ui/Comparison.tsx` + `shared/content/comparison.ts`.
- [x] **Страница `/pricing`.** Три тарифа-плейсхолдера: Старт / Команда / Enterprise — по 4–5 буллитов каждый, для Enterprise — «Свяжитесь с нами». Файл: `app/pricing/page.tsx` + `shared/content/pricing.ts`. Добавить в `primaryNav` и footer.
- [x] **Кастомный `not-found.tsx`.** Брендированная 404: крупный серифный заголовок, короткий текст, кнопка «На главную». Файл: `app/not-found.tsx`.
- [x] **Floating «Задать вопрос».** Фиксированная круглая кнопка в правом-нижнем углу с иконкой чата — открывает ссылку на Telegram (или в будущем чат-виджет). Файл: `widgets/floating-chat/ui/FloatingChat.tsx`.

### Низкий приоритет / опционально

- [ ] **Press-strip.** Ряд логотипов СМИ «О нас писали» перед About или после Cases. Статичный массив в `shared/content/press.ts`.
- [ ] **Hover-подсветка Solution-карточек.** Акцентный бордер/тень при наведении (сейчас `hoverable`, но эффект незаметен). Обновить `widgets/landing/solutions/ui/SolutionCard.tsx`.
- [ ] **«Команда»** на `/about`. Отдельная страница с фото и ролями ключевых людей. Файлы: `app/about/page.tsx` + `shared/content/team.ts`.
- [ ] **Sticky CTA-полоса.** Появляется при скролле ниже hero: тонкая фиксированная полоса снизу с кнопкой «Связаться». IntersectionObserver по Hero, `position: fixed`. Файл: `widgets/sticky-cta/ui/StickyCta.tsx`.
- [ ] **Анимированный счётчик** в Benefits. Цифры «тикают» от 0 до значения при появлении в viewport. Расширить `Reveal` или отдельный `CountUp`.
