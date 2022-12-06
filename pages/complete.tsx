import { useState } from "react";

enum AccountInfoStatus {
  Empty,
  Filled,
  Sent,
}

export default function Complete() {
  const [accuntInfoStatus, setAccountInfoStatus] = useState(
    AccountInfoStatus.Empty
  );

  return (
    <main className="space-y-4 p-8 text-gray-900">
      <h1 className="text-2xl font-bold">챌린지 완주! 👏</h1>

      <p>
        총점 15점 중 <strong>10점</strong>을 획득하셨습니다.
        <br />
        10명 중 4등입니다.
      </p>

      <section className="rounded-lg border p-4 shadow-md">
        {accuntInfoStatus === AccountInfoStatus.Empty ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setAccountInfoStatus(AccountInfoStatus.Filled);
            }}
          >
            <h2 className="mb-3 text-lg font-bold">계좌 정보 입력하기</h2>

            <div className="space-y-2">
              <label className="block space-x-2">
                <span>계좌번호</span>
                <input
                  className="rounded border px-1 py-0.5"
                  type="text"
                  name="account-address"
                  placeholder="계좌번호 입력..."
                />
              </label>

              <label className="block space-x-2">
                <span>예금주</span>
                <input
                  className="rounded border px-1 py-0.5"
                  type="text"
                  name="account-holder"
                  placeholder="예금주 입력..."
                />
              </label>

              <label className="block space-x-2">
                <span>은행</span>
                <input
                  className="rounded border px-1 py-0.5"
                  type="text"
                  name="bank"
                  placeholder="은행 입력..."
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-sky-500 px-4 py-2 text-white"
            >
              입력
            </button>
          </form>
        ) : null}

        {accuntInfoStatus === AccountInfoStatus.Filled ? (
          <>
            [[등록된 계좌 정보]]
            <button
              type="button"
              className="mt-4 w-full rounded-lg bg-sky-500 px-4 py-2 text-white"
              onClick={() => {
                setAccountInfoStatus(AccountInfoStatus.Sent);
              }}
            >
              환급 및 보상 받기
            </button>
          </>
        ) : null}

        {accuntInfoStatus === AccountInfoStatus.Sent ? (
          <>
            <p className="text-xl font-bold">
              💸 참가비 환급과 보상 지급이 완료되었습니다.
            </p>
          </>
        ) : null}
      </section>
    </main>
  );
}
