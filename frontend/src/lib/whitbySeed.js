// Whitby SBD 5-week template (week 1 structure). Seeded on first empty boot.
export const WHITBY_PLAN = {
  name: "Angus Whitby · SBD 5 semanas",
  week: { 1: "r-seg", 2: "r-ter", 3: "r-qua", 5: "r-sex", 6: "r-sab" },
  routines: [
    { id: "r-seg", name: "Segunda · Terra + Supino", emoji: "🏋️", ex: [
      { id: "wb-00", sets: 1, reps: 3, note: "1×3 · RPE 6 · top" },
      { id: "wb-00", sets: 2, reps: 4, note: "2×4 · 90% do top" },
      { id: "wb-00", sets: 2, reps: 5, note: "2×5 · 85% do top" },
      { id: "wb-01", sets: 4, reps: 3, note: "1×3 top + 3×3 · 95%" },
      { id: "wb-02", sets: 3, reps: 8, note: "3×8–10 · RPE 9–10" },
      { id: "wb-03", sets: 3, reps: 10, note: "3×10–12 · RPE 9–10" },
      { id: "wb-04", sets: 3, reps: 10, note: "3×10–12 · RPE 9–10" },
      { id: "wb-05", sets: 3, reps: 8, note: "3×8–10 · RPE 9–10" },
      { id: "wb-06", sets: 3, reps: 12, note: "3×12–15 · RPE Falha de técnica" }
    ]},
    { id: "r-ter", name: "Terça · Ombro + braços", emoji: "💪", ex: [
      { id: "wb-07", sets: 3, reps: 8, note: "1×8–10 RPE 7–8 + 2×8–10 RPE 9–10" },
      { id: "wb-08", sets: 3, reps: 6, note: "3×6–8 · RPE 7" },
      { id: "wb-09", sets: 3, reps: 12, note: "3×12–15 · RPE 9–10" },
      { id: "wb-10", sets: 1, reps: 10, note: "1×10–12 · RPE 7–8" },
      { id: "wb-10", sets: 2, reps: null, note: "2×Myo-reps · RPE 10" },
      { id: "wb-11", sets: 3, reps: null, note: "3×Myo-reps · RPE 10" },
      { id: "wb-12", sets: 3, reps: 10, note: "3×10–12 · RPE 9–10" },
      { id: "wb-13", sets: 3, reps: null, note: "3×Falha · RPE 10 · bi-set" }
    ]},
    { id: "r-qua", name: "Quarta · Agachamento / pernas", emoji: "🦵", ex: [
      { id: "wb-14", sets: 4, reps: 4, note: "1×4 top + 3×4 · 92%" },
      { id: "wb-15", sets: 3, reps: 10, note: "3×10–12 · RPE 9–10" },
      { id: "wb-16", sets: 3, reps: 12, note: "3×12–15 · RPE 9–10" },
      { id: "wb-17", sets: 1, reps: 12, note: "1×12–15 · RPE 9–10" },
      { id: "wb-17", sets: 2, reps: null, note: "2×Myo-reps · RPE 10" },
      { id: "wb-18", sets: 3, reps: 15, note: "3×15–20 · RPE 9–10" },
      { id: "wb-19", sets: 3, reps: 15, note: "3×15–20 · RPE 9–10" }
    ]},
    { id: "r-sex", name: "Sexta · Terra pausado + supino", emoji: "⬆️", ex: [
      { id: "wb-20", sets: 1, reps: 3, note: "1×3 · RPE 5.5 · top" },
      { id: "wb-20", sets: 3, reps: 4, note: "3×4 · 90% do top" },
      { id: "wb-21", sets: 1, reps: 4, note: "1×4 · RPE 6 · top · 0-1-0" },
      { id: "wb-21", sets: 3, reps: 5, note: "3×5 · 92% do top · 0-1-0" },
      { id: "wb-22", sets: 3, reps: 10, note: "3×10–12 · RPE 7–8" },
      { id: "wb-23", sets: 2, reps: null, note: "2×Myo-reps · RPE 10" },
      { id: "wb-24", sets: 2, reps: null, note: "2×Myo-reps · RPE 10" },
      { id: "wb-25", sets: 2, reps: null, note: "2×Falha · RPE 10 · bi-set" },
      { id: "wb-26", sets: 2, reps: null, note: "2×Falha · RPE 10 · bi-set" }
    ]},
    { id: "r-sab", name: "Sábado · Agachamento + pin press", emoji: "🏃", ex: [
      { id: "wb-27", sets: 1, reps: 3, note: "1×3 · RPE 6 · top" },
      { id: "wb-27", sets: 3, reps: 4, note: "3×4 · 92% do top" },
      { id: "wb-27", sets: 1, reps: 4, note: "1×4 · 85% do top" },
      { id: "wb-28", sets: 4, reps: 5, note: "4×5 · RPE 7–8 · 0-1-0" },
      { id: "wb-19", sets: 3, reps: 15, note: "3×15–20 · RPE 9–10 · Segura 1s" },
      { id: "wb-17", sets: 3, reps: 12, note: "3×12–15 · RPE 9–10 · Segura 1s" },
      { id: "wb-16", sets: 3, reps: null, note: "3×Falha · RPE 10" },
      { id: "wb-29", sets: 2, reps: 10, note: "2×10–12 · RPE 7–8" },
      { id: "wb-29", sets: 1, reps: null, note: "1×Falha · RPE 10" }
    ]}
  ],
  customEx: [
    { id: "wb-00", n: "Levantamento terra", bp: "back" },
    { id: "wb-01", n: "Supino reto", bp: "chest" },
    { id: "wb-02", n: "Supino inclinado com halteres", bp: "chest" },
    { id: "wb-03", n: "Peck deck", bp: "chest" },
    { id: "wb-04", n: "Supino inclinado sentado (máquina)", bp: "chest" },
    { id: "wb-05", n: "Puxada com pega D (duas mãos)", bp: "back" },
    { id: "wb-06", n: "Puxada ajoelhada com pega D", bp: "back" },
    { id: "wb-07", n: "Desenvolvimento com halteres", bp: "shoulders" },
    { id: "wb-08", n: "Paralelas com peso", bp: "chest" },
    { id: "wb-09", n: "Rosca inclinada no cabo", bp: "biceps" },
    { id: "wb-10", n: "Rosca scott", bp: "biceps" },
    { id: "wb-11", n: "Elevação lateral deitado no cabo", bp: "shoulders" },
    { id: "wb-12", n: "Extensão de tríceps no pulley", bp: "triceps" },
    { id: "wb-13", n: "Extensão de tríceps acima da cabeça × Rosca à escolha", bp: "arms" },
    { id: "wb-14", n: "Agachamento nos pinos", bp: "legs" },
    { id: "wb-15", n: "Leg press", bp: "legs" },
    { id: "wb-16", n: "Mesa flexora", bp: "legs" },
    { id: "wb-17", n: "Cadeira extensora", bp: "legs" },
    { id: "wb-18", n: "Panturrilha em pé", bp: "legs" },
    { id: "wb-19", n: "Panturrilha sentado", bp: "legs" },
    { id: "wb-20", n: "Terra com pausa", bp: "back" },
    { id: "wb-21", n: "Supino de competição", bp: "chest" },
    { id: "wb-22", n: "Remada (à escolha)", bp: "back" },
    { id: "wb-23", n: "Pullover", bp: "back" },
    { id: "wb-24", n: "Supino sentado no cabo", bp: "chest" },
    { id: "wb-25", n: "Elevação lateral × Rosca inclinada", bp: "arms" },
    { id: "wb-26", n: "Flexão de braço × Paralelas", bp: "chest" },
    { id: "wb-27", n: "Agachamento", bp: "legs" },
    { id: "wb-28", n: "Supino nos pinos", bp: "chest" },
    { id: "wb-29", n: "Afundo búlgaro", bp: "legs" }
  ]
};
