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
] as const;

export default function Dashboard() {
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
              <GoalEntity goal={goal} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

enum GoalEntityStatus {
  Incomplete,
  Form,
  Complete,
}

function GoalEntity({
  goal,
}: {
  goal: { title: string; validationMethod: "photo" | "timelapse" | "writing" };
}) {
  const [entityStatus, setEntityStatus] = useState(GoalEntityStatus.Incomplete);

  const Uploader = {
    photo: PhotoUploader,
    timelapse: TimelapseUploader,
    writing: WritingUploader,
  }[goal.validationMethod];

  return (
    <>
      <div className="font-medium">{goal.title}</div>

      {entityStatus === GoalEntityStatus.Complete ? (
        <div className="rounded-lg border-2 border-green-600 px-3 py-1 text-sm text-green-600">
          완료 🎉
        </div>
      ) : (
        <button
          type="button"
          className="rounded-lg border-2 border-sky-400 px-3 py-1 text-sm text-sky-400"
          onClick={() => {
            setEntityStatus(GoalEntityStatus.Form);
          }}
        >
          인증하기
        </button>
      )}

      {entityStatus === GoalEntityStatus.Form ? (
        <div
          className="fixed top-0 left-0 h-full w-full bg-gray-700/50"
          onClick={() => {
            setEntityStatus(GoalEntityStatus.Incomplete);
          }}
        >
          <dialog
            open
            className="absolute top-1/2 left-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 transform rounded-lg border shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <header className="mb-4">
              <span className="text-lg font-bold">목표 달성 인증하기</span>

              <button
                type="button"
                className="float-right rounded border px-3 py-1"
                onClick={() => {
                  setEntityStatus(GoalEntityStatus.Incomplete);
                }}
              >
                닫기
              </button>
            </header>

            <Uploader
              onSubmit={() => {
                setEntityStatus(GoalEntityStatus.Complete);
              }}
            />
          </dialog>
        </div>
      ) : null}
    </>
  );
}

function PhotoUploader({ onSubmit }: { onSubmit: () => void }) {
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  return (
    <>
      <div className="flex space-x-4 overflow-auto">
        <label className="flex h-40 w-40 flex-none cursor-pointer items-center justify-center rounded-xl border text-gray-300">
          <input
            type="file"
            className="hidden"
            accept="image/*"
            multiple
            onChange={(e) => {
              const files = e.currentTarget.files;
              if (files === null) {
                return;
              }
              for (let i = 0; i < files.length; i++) {
                const file = files.item(i);

                if (file === null) {
                  continue;
                }

                setImageFiles((prev) => prev.concat(file));
              }
            }}
          />
          새로운 사진 추가
        </label>

        {imageFiles.map((imageFile) => (
          <img
            key={imageFile.name}
            src={URL.createObjectURL(imageFile)}
            className="h-40 w-40 flex-none rounded-xl border"
          />
        ))}
      </div>

      <button
        className="mt-4 w-full rounded-lg bg-sky-500 px-4 py-2 text-white"
        onClick={onSubmit}
      >
        제출하기
      </button>
    </>
  );
}

function TimelapseUploader({ onSubmit }: { onSubmit: () => void }) {
  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        className="mb-2 h-20 w-20 rounded-full border-4 bg-red-700"
        onClick={onSubmit}
      ></button>

      <p className="text-sm font-bold">새로운 타임랩스 촬영</p>
    </div>
  );
}

function WritingUploader({ onSubmit }: { onSubmit: () => void }) {
  const [paragraph, setParagraph] = useState("");

  return (
    <>
      <div className="relative h-40 overflow-hidden rounded-lg border before:absolute before:top-0 before:left-0 before:h-2 before:w-full before:bg-gradient-to-b before:from-white after:absolute after:bottom-0 after:left-0 after:h-4 after:w-full after:bg-gradient-to-t after:from-white">
        <textarea
          className="h-full w-full resize-none px-2"
          value={paragraph}
          onChange={(e) => {
            setParagraph(e.currentTarget.value);
          }}
        />

        <span className="absolute bottom-2 right-2 z-10 select-none text-xs text-gray-500">
          {paragraph.length}
        </span>
      </div>

      <button
        type="button"
        className="mt-4 w-full rounded-lg bg-sky-500 px-4 py-2 text-white"
        onClick={onSubmit}
      >
        제출하기
      </button>
    </>
  );
}
