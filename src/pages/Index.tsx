import { useState } from "react";

const slides = [
  {
    id: 0,
    bg: "#FFF9C4",
    accent: "#F9A825",
    num: "01",
    title: "Роль труда людей в экономике",
    subtitle: "Урок для 3 класса",
    type: "cover",
  },
  {
    id: 1,
    bg: "#FDE68A",
    accent: "#D97706",
    num: "02",
    title: "Что такое труд?",
    type: "text",
    points: [
      { num: "А", text: "Труд — это работа, которую человек делает с усилием" },
      { num: "Б", text: "Умственный труд: учиться, думать, придумывать" },
      { num: "В", text: "Физический труд: строить, готовить, убирать" },
      { num: "Г", text: "Даже уборка комнаты — это тоже труд!" },
    ],
  },
  {
    id: 2,
    bg: "#DCFCE7",
    accent: "#16A34A",
    num: "03",
    title: "Зачем нужен труд?",
    type: "text",
    points: [
      { num: "А", text: "Чтобы было что есть и надевать" },
      { num: "Б", text: "Чтобы строить дома и города" },
      { num: "В", text: "Чтобы зарабатывать деньги" },
      { num: "Г", text: "Чтобы чувствовать себя нужным" },
    ],
  },
  {
    id: 3,
    bg: "#DBEAFE",
    accent: "#2563EB",
    num: "04",
    title: "Кто трудится?",
    type: "grid",
    items: [
      "Врач",
      "Учитель",
      "Повар",
      "Фермер",
      "Механик",
      "Полицейский",
      "Пожарный",
      "Программист",
    ],
    note: "Трудятся все! У каждого своя важная работа.",
  },
  {
    id: 4,
    bg: "#FED7AA",
    accent: "#EA580C",
    num: "05",
    title: "Труд и экономика",
    type: "chain",
    steps: [
      "Человек трудится",
      "Получает зарплату",
      "Покупает товары",
      "Деньги идут другим людям",
    ],
    note: "Чем больше людей трудятся — тем богаче страна!",
  },
  {
    id: 5,
    bg: "#E9D5FF",
    accent: "#7C3AED",
    num: "06",
    title: "Результат труда",
    type: "text",
    points: [
      { num: "А", text: "Товары — хлеб, одежда, машины, игрушки" },
      { num: "Б", text: "Услуги — лечение, обучение, перевозка" },
      { num: "В", text: "Творчество — книги, музыка, картины" },
      { num: "Г", text: "Всё вокруг нас — результат чьего-то труда!" },
    ],
  },
  {
    id: 6,
    bg: "#FECDD3",
    accent: "#E11D48",
    num: "07",
    title: "Почему труд важен?",
    type: "text",
    points: [
      { num: "А", text: "Ты можешь помогать семье и стране" },
      { num: "Б", text: "Труд делает тебя умелее и сильнее" },
      { num: "В", text: "За хороший труд тебя будут уважать" },
      { num: "Г", text: "Труд помогает мечтам стать реальностью" },
    ],
  },
  {
    id: 7,
    bg: "#FFF9C4",
    accent: "#F9A825",
    num: "08",
    title: "Запомни главное!",
    type: "final",
    points: [
      "Труд — основа экономики",
      "Каждый человек важен",
      "Любой труд полезен",
      "Вместе мы делаем мир лучше!",
    ],
    quote: "«Без труда не вытащишь и рыбку из пруда»",
  },
];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];
  const total = slides.length;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(total - 1, c + 1));

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4"
      style={{ background: "#EFEFEA", fontFamily: "'Golos Text', sans-serif" }}
    >
      <div
        className="w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden transition-all duration-300"
        style={{ background: slide.bg, border: `4px solid ${slide.accent}`, minHeight: 500 }}
      >
        {/* Header */}
        <div className="px-8 pt-8 pb-5 flex items-start gap-5">
          <div
            className="rounded-2xl flex items-center justify-center font-black shrink-0"
            style={{
              background: slide.accent,
              color: "#fff",
              width: 64,
              height: 64,
              fontSize: 22,
              letterSpacing: "-1px",
            }}
          >
            {slide.num}
          </div>
          <div>
            <div
              className="text-xs font-bold uppercase tracking-widest mb-1"
              style={{ color: slide.accent }}
            >
              Слайд {current + 1} из {total}
            </div>
            <h1
              className="font-black leading-tight"
              style={{ color: "#1C1917", fontSize: slide.type === "cover" ? 32 : 26 }}
            >
              {slide.title}
            </h1>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 pb-8">

          {/* COVER */}
          {slide.type === "cover" && (
            <div className="text-center py-6">
              <p className="text-2xl font-semibold text-gray-600 mb-8">{slide.subtitle}</p>
              <div className="flex justify-center gap-4">
                {["Труд", "Деньги", "Экономика", "Страна"].map((word) => (
                  <div
                    key={word}
                    className="rounded-2xl px-4 py-2 font-bold text-sm"
                    style={{ background: "rgba(255,255,255,0.7)", color: slide.accent }}
                  >
                    {word}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-gray-500 text-lg font-medium">
                Нажми «Вперёд», чтобы начать
              </p>
            </div>
          )}

          {/* TEXT */}
          {slide.type === "text" && (
            <div className="flex flex-col gap-3">
              {(slide.points ?? []).map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-2xl px-4 py-3"
                  style={{ background: "rgba(255,255,255,0.6)" }}
                >
                  <div
                    className="rounded-xl flex items-center justify-center font-black shrink-0 text-white"
                    style={{ background: slide.accent, width: 36, height: 36, fontSize: 14 }}
                  >
                    {(p as { num: string; text: string }).num}
                  </div>
                  <span className="text-lg font-semibold" style={{ color: "#1C1917" }}>
                    {(p as { num: string; text: string }).text}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* GRID */}
          {slide.type === "grid" && (
            <>
              <div className="grid grid-cols-4 gap-3">
                {(slide.items ?? []).map((label, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center rounded-2xl py-4 px-2 text-center font-bold text-sm"
                    style={{ background: "rgba(255,255,255,0.6)", color: "#1C1917", minHeight: 64 }}
                  >
                    {label}
                  </div>
                ))}
              </div>
              {slide.note && (
                <p className="mt-4 text-center text-lg font-bold" style={{ color: slide.accent }}>
                  {slide.note}
                </p>
              )}
            </>
          )}

          {/* CHAIN */}
          {slide.type === "chain" && (
            <>
              <div className="flex flex-col gap-2">
                {(slide.steps ?? []).map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white shrink-0"
                      style={{ background: slide.accent, fontSize: 16 }}
                    >
                      {i + 1}
                    </div>
                    <div
                      className="flex-1 rounded-2xl px-4 py-3 font-semibold text-lg"
                      style={{ background: "rgba(255,255,255,0.6)", color: "#1C1917" }}
                    >
                      {step}
                    </div>
                  </div>
                ))}
              </div>
              {slide.note && (
                <div
                  className="mt-4 rounded-2xl px-4 py-3 text-center text-lg font-bold"
                  style={{ background: "rgba(255,255,255,0.6)", color: slide.accent }}
                >
                  {slide.note}
                </div>
              )}
            </>
          )}

          {/* FINAL */}
          {slide.type === "final" && (
            <div className="flex flex-col gap-3">
              {(slide.points as string[]).map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-2xl px-4 py-3"
                  style={{ background: "rgba(255,255,255,0.6)" }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-white shrink-0"
                    style={{ background: slide.accent, fontSize: 14 }}
                  >
                    {i + 1}
                  </div>
                  <span className="text-lg font-bold" style={{ color: "#1C1917" }}>{p}</span>
                </div>
              ))}
              {slide.quote && (
                <div
                  className="mt-2 rounded-2xl px-5 py-4 text-center text-base font-semibold"
                  style={{ background: "rgba(255,255,255,0.5)", color: "#78350F", fontStyle: "italic" }}
                >
                  {slide.quote}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-5 mt-6">
        <button
          onClick={prev}
          disabled={current === 0}
          className="rounded-2xl px-7 py-3 text-base font-bold transition-all"
          style={{
            background: current === 0 ? "#E5E7EB" : slide.accent,
            color: current === 0 ? "#9CA3AF" : "#fff",
            cursor: current === 0 ? "not-allowed" : "pointer",
            border: "none",
          }}
        >
          Назад
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 28 : 10,
                height: 10,
                borderRadius: 99,
                background: i === current ? slide.accent : "#D1D5DB",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
                padding: 0,
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={current === total - 1}
          className="rounded-2xl px-7 py-3 text-base font-bold transition-all"
          style={{
            background: current === total - 1 ? "#E5E7EB" : slide.accent,
            color: current === total - 1 ? "#9CA3AF" : "#fff",
            cursor: current === total - 1 ? "not-allowed" : "pointer",
            border: "none",
          }}
        >
          Вперёд
        </button>
      </div>
    </div>
  );
}
