import { useState } from "react";

const slides = [
  {
    id: 0,
    bg: "#FFF9C4",
    accent: "#F9A825",
    emoji: "🏗️",
    title: "Роль труда людей в экономике",
    subtitle: "Урок для 3 класса",
    type: "cover",
  },
  {
    id: 1,
    bg: "#FDE68A",
    accent: "#F59E0B",
    emoji: "💪",
    title: "Что такое труд?",
    type: "text",
    points: [
      { icon: "👨‍🔧", text: "Труд — это работа, которую человек делает с усилием" },
      { icon: "🧠", text: "Умственный труд: учиться, думать, придумывать" },
      { icon: "🔨", text: "Физический труд: строить, готовить, убирать" },
      { icon: "🙋", text: "Даже уборка комнаты — это тоже труд!" },
    ],
  },
  {
    id: 2,
    bg: "#DCFCE7",
    accent: "#22C55E",
    emoji: "🌍",
    title: "Зачем нужен труд?",
    type: "text",
    points: [
      { icon: "🥖", text: "Чтобы было что есть и надевать" },
      { icon: "🏠", text: "Чтобы строить дома и города" },
      { icon: "💰", text: "Чтобы зарабатывать деньги" },
      { icon: "😊", text: "Чтобы чувствовать себя нужным" },
    ],
  },
  {
    id: 3,
    bg: "#DBEAFE",
    accent: "#3B82F6",
    emoji: "👷",
    title: "Кто трудится?",
    type: "grid",
    items: [
      { icon: "👨‍⚕️", label: "Врач" },
      { icon: "👩‍🏫", label: "Учитель" },
      { icon: "👨‍🍳", label: "Повар" },
      { icon: "👩‍🌾", label: "Фермер" },
      { icon: "👨‍🔧", label: "Механик" },
      { icon: "👮", label: "Полицейский" },
      { icon: "🧑‍🚒", label: "Пожарный" },
      { icon: "👩‍💻", label: "Программист" },
    ],
    note: "Трудятся все! У каждого своя важная работа.",
  },
  {
    id: 4,
    bg: "#FED7AA",
    accent: "#F97316",
    emoji: "🏦",
    title: "Труд и экономика",
    type: "chain",
    steps: [
      { icon: "👩‍🔬", text: "Человек трудится" },
      { icon: "💵", text: "Получает зарплату" },
      { icon: "🛒", text: "Покупает товары" },
      { icon: "🔄", text: "Деньги идут другим" },
    ],
    note: "Чем больше людей трудятся — тем богаче страна!",
  },
  {
    id: 5,
    bg: "#E9D5FF",
    accent: "#A855F7",
    emoji: "🎁",
    title: "Результат труда",
    type: "text",
    points: [
      { icon: "🏭", text: "Товары — хлеб, одежда, машины, игрушки" },
      { icon: "🎓", text: "Услуги — лечение, обучение, перевозка" },
      { icon: "🎨", text: "Творчество — книги, музыка, картины" },
      { icon: "🌟", text: "Всё вокруг нас — результат чьего-то труда!" },
    ],
  },
  {
    id: 6,
    bg: "#FECDD3",
    accent: "#F43F5E",
    emoji: "⭐",
    title: "Почему труд важен?",
    type: "text",
    points: [
      { icon: "🙌", text: "Ты можешь помогать семье и стране" },
      { icon: "📈", text: "Труд делает тебя умелее и сильнее" },
      { icon: "💛", text: "За хороший труд тебя будут уважать" },
      { icon: "🚀", text: "Труд помогает мечтам стать реальностью" },
    ],
  },
  {
    id: 7,
    bg: "#FFF9C4",
    accent: "#F9A825",
    emoji: "🌈",
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
      style={{ background: "#f5f5f0", fontFamily: "'Golos Text', sans-serif" }}
    >
      <div
        className="w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden"
        style={{ background: slide.bg, border: `4px solid ${slide.accent}`, minHeight: 480 }}
        key={slide.id}
      >
        {/* Slide header */}
        <div
          className="px-8 pt-8 pb-4 flex items-center gap-4"
        >
          <span style={{ fontSize: 56 }}>{slide.emoji}</span>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: slide.accent }}>
              Слайд {current + 1} из {total}
            </div>
            <h1
              className="font-black leading-tight"
              style={{ color: "#1C1917", fontSize: slide.type === "cover" ? 34 : 28 }}
            >
              {slide.title}
            </h1>
          </div>
        </div>

        {/* Slide body */}
        <div className="px-8 pb-8">

          {/* COVER */}
          {slide.type === "cover" && (
            <div className="text-center py-8">
              <p className="text-2xl font-semibold text-gray-600 mb-6">{slide.subtitle}</p>
              <div className="flex justify-center gap-3 flex-wrap">
                {["💪", "🏦", "🌍", "🎁"].map((e) => (
                  <span key={e} style={{ fontSize: 48 }}>{e}</span>
                ))}
              </div>
              <p className="mt-6 text-gray-500 text-lg">Нажми «Вперёд» чтобы начать</p>
            </div>
          )}

          {/* TEXT with points */}
          {slide.type === "text" && (
            <div className="flex flex-col gap-3 mt-2">
              {(slide.points ?? []).map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-2xl px-4 py-3"
                  style={{ background: "rgba(255,255,255,0.6)" }}
                >
                  <span style={{ fontSize: 36 }}>{p.icon}</span>
                  <span className="text-lg font-semibold" style={{ color: "#1C1917" }}>{p.text}</span>
                </div>
              ))}
            </div>
          )}

          {/* GRID of professions */}
          {slide.type === "grid" && (
            <>
              <div className="grid grid-cols-4 gap-3 mt-2">
                {(slide.items ?? []).map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center rounded-2xl py-3 px-2"
                    style={{ background: "rgba(255,255,255,0.6)" }}
                  >
                    <span style={{ fontSize: 40 }}>{item.icon}</span>
                    <span className="text-sm font-bold mt-1 text-center" style={{ color: "#1C1917" }}>{item.label}</span>
                  </div>
                ))}
              </div>
              {slide.note && (
                <p className="mt-4 text-center text-lg font-bold" style={{ color: slide.accent }}>{slide.note}</p>
              )}
            </>
          )}

          {/* CHAIN steps */}
          {slide.type === "chain" && (
            <>
              <div className="flex flex-col gap-2 mt-2">
                {(slide.steps ?? []).map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center font-black text-white shrink-0"
                      style={{ background: slide.accent, fontSize: 16 }}
                    >
                      {i + 1}
                    </div>
                    <span style={{ fontSize: 32 }}>{step.icon}</span>
                    <span className="text-lg font-semibold" style={{ color: "#1C1917" }}>{step.text}</span>
                    {i < (slide.steps ?? []).length - 1 && (
                      <span className="ml-auto text-2xl">↓</span>
                    )}
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
            <div className="flex flex-col gap-3 mt-2">
              {(slide.points as string[]).map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3"
                  style={{ background: "rgba(255,255,255,0.6)" }}
                >
                  <span style={{ fontSize: 28 }}>{"⭐"}</span>
                  <span className="text-lg font-bold" style={{ color: "#1C1917" }}>{p}</span>
                </div>
              ))}
              {slide.quote && (
                <div
                  className="mt-2 rounded-2xl px-4 py-3 text-center text-base font-semibold"
                  style={{ background: "rgba(255,255,255,0.5)", color: "#78350F" }}
                >
                  {slide.quote}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-6 mt-6">
        <button
          onClick={prev}
          disabled={current === 0}
          className="rounded-2xl px-6 py-3 text-lg font-bold transition-all"
          style={{
            background: current === 0 ? "#e5e7eb" : slide.accent,
            color: current === 0 ? "#9ca3af" : "#fff",
            cursor: current === 0 ? "not-allowed" : "pointer",
            border: "none",
          }}
        >
          ← Назад
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 28 : 10,
                height: 10,
                borderRadius: 99,
                background: i === current ? slide.accent : "#d1d5db",
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
          className="rounded-2xl px-6 py-3 text-lg font-bold transition-all"
          style={{
            background: current === total - 1 ? "#e5e7eb" : slide.accent,
            color: current === total - 1 ? "#9ca3af" : "#fff",
            cursor: current === total - 1 ? "not-allowed" : "pointer",
            border: "none",
          }}
        >
          Вперёд →
        </button>
      </div>
    </div>
  );
}
