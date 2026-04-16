<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Workflow

- Не переспрашивать разрешения на правки файлов в этом репозитории — после запроса пользователя сразу вносить изменения. Уточнять только при реально неоднозначной постановке задачи или перед необратимыми/деструктивными действиями (force-push, reset --hard, удаление веток/файлов с несохранённой работой и т. п.).

# Project conventions

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript strict.
- UI: Ant Design 6 через `@ant-design/nextjs-registry`. Темизация через `next-themes` (class-стратегия) + `ConfigProvider` пресетами из `@/shared/config/theme.ts`.
- Данные: TanStack Query 5 (фабрика `makeQueryClient` в `@/shared/lib/query-client.ts`).
- Локальный UI-стейт: Zustand.
- Формы: React Hook Form + Zod (через `@hookform/resolvers`).
- Даты: dayjs.

## Структура

- Алиас `@/*` → `./src/*`.
- Слои по FSD-подобной схеме внутри `src/`:
  - `app/` — только Next.js роутинг/лейауты. Никакой бизнес-логики.
  - `shared/` — переиспользуемые примитивы (`api`, `ui`, `lib`, `config`, `store`, `providers`).
  - Новые слои (`entities`, `features`, `widgets`) заводить по мере необходимости — не городить преждевременно.
- Клиентский код помечать `"use client"` только там, где нужны хуки/интерактив. По умолчанию компонент — серверный.

## Стиль кода

- Никаких лишних комментариев: только там, где нужен непонятный из кода «почему».
- Не добавлять обёртки/абстракции «на будущее». Три похожих строки лучше преждевременной абстракции.
- Не плодить error-handling для невозможных случаев. Валидация — на границах (вход пользователя, внешние API) через Zod.
- AntD-компоненты использовать через `App`-контекст (уже подключён в `AntdProvider`) — для `message`/`notification`/`modal` брать хуки `App.useApp()`, не статические API.
- Темы не хардкодить в компонентах — расширять токены/алгоритмы в `@/shared/config/theme.ts`.

## Тестирование

- Unit: Vitest + Testing Library (`jsdom`). Файлы `*.test.ts(x)` рядом с модулем. Запуск: `npm test` / `npm run test:run`.
- E2E: Playwright, `tests/e2e/*.spec.ts`. Запуск: `npm run e2e` (перед первым запуском — `npm run e2e:install`).
- Для UI-фичей писать smoke-тест на отрисовку и хотя бы один сценарий взаимодействия.

## Git / процесс

- Husky + lint-staged: на `pre-commit` прогоняется ESLint/Prettier по staged-файлам. Не ломать хуки флагом `--no-verify`.
- Коммит-сообщения — Conventional Commits (`commitlint.config.cjs`, `@commitlint/config-conventional`). Примеры: `feat: …`, `fix: …`, `chore: …`, `refactor: …`.
- Перед коммитом убедиться, что `npm run lint` и `npm run test:run` проходят.

## Команды

- `npm run dev` — dev-сервер.
- `npm run build` / `npm start` — прод-сборка и запуск.
- `npm run lint` / `npm run format` — ESLint / Prettier.
- `npm test` / `npm run test:run` — Vitest (watch / однократный).
- `npm run e2e` — Playwright.
