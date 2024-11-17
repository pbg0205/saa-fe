export default function Home() {
  return (
    <>
      <h2 className="text-2xl font-bold">Menu</h2>
      <h3 className="text-xl font-bold">KO - 한국어 문제</h3>
      <li className="text-lg">
        한국어 버전의 문제를 풀이해 볼 수 있는 메뉴입니다.
      </li>
      <li className="text-lg">
        지문을 클릭하고 정답을 클릭하면 정답 여부를 확인할 수 있습니다.
      </li>
      <br />
      <h3 className="text-xl font-bold">EN - 영어 문제</h3>
      <li className="text-lg">
        영어 버전의 문제를 풀이해 볼 수 있는 메뉴입니다.
      </li>
      <li className="text-lg">
        지문을 클릭하고 정답을 클릭하면 정답 여부를 확인할 수 있습니다.
      </li>
      <br />
      <h3 className="text-xl font-bold">ANSWER - 정답</h3>
      <li className="text-lg">문제 정답을 한번에 확인할 수 있는 메뉴입니다.</li>
      <br />
      <h3 className="text-xl font-bold">RANDOM - 랜덤 문제</h3>
      <li className="text-lg">랜덤 문제를 풀이해 볼 수 있는 메뉴입니다.</li>
      <br />
      <h3 className="text-xl font-bold">EXAM - 시험 모드</h3>
      <li className="text-lg">시험 모드를 풀이해 볼 수 있는 메뉴입니다.</li>
      <li className="text-lg">
        시험 모드는 10분의 시험 시간동안 문제를 푸는 기능입니다.
      </li>
      <li className="text-lg">
        제출 버튼 클릭 시, 제출한 답안을 확인할 수 있습니다.
      </li>
    </>
  );
}
