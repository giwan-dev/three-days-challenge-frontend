import { useRouter } from "next/router";
import { useState } from "react";
import {
  CHALLENGE_DAY_COUNT,
  ENROLL_FEE,
  GOALS,
  GOAL_COUNT_CONDITION,
  VALIDATION_METHOD_LABELS,
} from "../constants";

export default function EnrollForm() {
  const { push } = useRouter();

  return (
    <main className="text-gray-900">
      <form
        className="space-y-5 p-8"
        onSubmit={(e) => {
          e.preventDefault();
          push("/");
        }}
      >
        <h1 className="text-2xl font-bold">새로운 챌린지 도전하기</h1>

        <p>
          {CHALLENGE_DAY_COUNT}일 간 자신이 고른 {GOAL_COUNT_CONDITION}가지
          목표를 수행하며 다른 도전자와 경쟁하는 챌린지입니다.
        </p>

        <label className="mb-4 block">
          <span className="text-lg font-bold">
            챌린지에서 사용할 닉네임을 입력해 주세요.
          </span>

          <input
            name="nickname"
            className="block rounded border-b-2 border-gray-400"
            placeholder="닉네임을 입력하세요..."
          />
        </label>

        <label className="mb-4 block">
          <span className="text-lg font-bold">
            다른 참가자에게 전하고 싶은 말을 입력해 주세요.
          </span>

          <textarea
            name="message"
            className="block w-full resize-none rounded border-b-2 border-gray-400"
            placeholder="전할 말을 입력하세요..."
          />
        </label>

        <GoalSelect />

        <p>
          참가비를 입금하여야 신청이 완료됩니다. 다음 계좌번호로 참가비{" "}
          {ENROLL_FEE}을 납부해주세요.
          <br />
          [[계좌번호]]
          <br />
          참가비 납부를 확인한 이후 챌린지를 배정해 드립니다.
        </p>

        <button
          type="submit"
          className="w-full rounded-lg bg-sky-500 px-4 py-2 text-white"
        >
          도전하기
        </button>
      </form>
    </main>
  );
}

function GoalSelect() {
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  const selectCount = Object.values(selected).filter(Boolean).length;

  const selectedGoals = GOALS.filter((goal) => selected[goal.title]);

  return (
    <div className="space-y-2">
      <span className="text-lg font-bold">목표를 선택하세요.</span>

      {selectCount !== GOAL_COUNT_CONDITION ? (
        <p className="text-sm text-red-400">
          {GOAL_COUNT_CONDITION}개의 목표를 골라주세요.
        </p>
      ) : null}

      <ul className="grid gap-4 md:grid-cols-2">
        {(selectCount === GOAL_COUNT_CONDITION ? selectedGoals : GOALS).map(
          (goal) => (
            <li key={goal.title}>
              <label className="cursor-pointer space-y-1">
                <div className="flex flex-wrap items-center space-x-1">
                  <input
                    type="checkbox"
                    name={`goal-${goal.title}`}
                    className="peer checked:bg-sky-500"
                    checked={!!selected[goal.title]}
                    onChange={(e) => {
                      const checked = e.currentTarget.checked;

                      setSelected((prev) => ({
                        ...prev,
                        [goal.title]: checked,
                      }));
                    }}
                  />

                  <span className="font-medium peer-checked:text-sky-500 ">
                    {goal.title}
                  </span>

                  <span className="rounded-lg border border-slate-400 px-1 py-0.5 text-xs text-slate-400 peer-checked:border-sky-500 peer-checked:text-sky-500">
                    {goal.category}
                  </span>
                </div>

                <div className="space-x-1 text-sm text-slate-400">
                  <span>{VALIDATION_METHOD_LABELS[goal.validationMethod]}</span>
                </div>
              </label>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
