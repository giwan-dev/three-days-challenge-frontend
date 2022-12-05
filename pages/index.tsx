import { useState } from "react";

const selectedGoals = [
  {
    title: "30분 이상 땀흘리며 운동하기",
    validationMethod: "timelapse",
  },
  {
    title: "아침 8시에 일어나기",
    validationMethod: "photo",
  },
  {
    title: "전공 공부 한 시간 하기",
    validationMethod: "timelapse",
  },
  {
    title: "일기 500자 이상 쓰기",
    validationMethod: "writing",
  },
  {
    title: "영화 한 편 보고 리뷰 50자 이상 쓰기",
    validationMethod: "writing",
  },
];

export default function Dashboard() {
  const [confirmed, setConfirmed] = useState<Record<string, boolean>>({});

  return (
    <main className="space-y-6 p-8 text-gray-900">
      <h1 className="text-2xl font-bold">나의 챌린지</h1>

      <section className="rounded-lg border p-4 shadow-md">
        <h2 className="mb-3 text-lg font-bold">오늘의 현황</h2>

        <ul className="divide-y">
          {selectedGoals.map((goal) => (
            <li
              key={goal.title}
              className="flex items-center justify-between p-2"
            >
              <div className="font-medium">{goal.title}</div>

              {confirmed[goal.title] ? (
                <div className="rounded-lg border-2 border-green-600 px-3 py-1 text-sm text-green-600">
                  완료 🎉
                </div>
              ) : (
                <button
                  type="button"
                  className="rounded-lg border-2 border-sky-400 px-3 py-1 text-sm text-sky-400"
                  onClick={() => {
                    // TODO
                    setConfirmed((prev) => ({ ...prev, [goal.title]: true }));
                  }}
                >
                  인증하기
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
