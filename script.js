const mainScreen = document.getElementById("main-screen");
const labScreen = document.getElementById("lab-screen");

const startButton = document.getElementById("start-button");
const labButton = document.getElementById("lab-button");
const aboutButton = document.getElementById("about-button");

const backButton = document.getElementById("back-button");

const simulationButton = document.getElementById("simulation-button");

const molecule = document.getElementById("molecule");
const moleculeLocation = document.getElementById("molecule-location");


/* =========================
   OPEN LAB
========================= */

function openLab() {

    mainScreen.style.display = "none";

    labScreen.style.display = "block";

}


/* =========================
   GO BACK
========================= */

function goBack() {

    labScreen.style.display = "none";

    mainScreen.style.display = "flex";

    // O₂ 위치 초기화
    molecule.style.top = "18%";

    // 위치 정보 초기화
    moleculeLocation.textContent = "OUTSIDE";

    // 시뮬레이션 버튼 활성화
    simulationButton.disabled = false;

}


/* =========================
   BUTTON EVENTS
========================= */

startButton.addEventListener("click", openLab);

labButton.addEventListener("click", openLab);

backButton.addEventListener("click", goBack);


/* =========================
   ABOUT
========================= */

aboutButton.addEventListener("click", function () {

    alert(
        "MEMBRANE\n\n" +
        "A Virtual Cell Membrane Laboratory\n\n" +
        "Explore how molecules cross the cell membrane."
    );

});


/* =========================
   MOLECULE SIMULATION
========================= */

simulationButton.addEventListener("click", function () {

    // 버튼 잠그기
    simulationButton.disabled = true;

    // 분자 상태 변경
    moleculeLocation.textContent = "MOVING";


    // 시작 위치와 도착 위치
    const startPosition = 18;
    const endPosition = 72;

    // 이동 시간: 2.5초
    const duration = 2500;

    let startTime = null;


    function moveMolecule(currentTime) {

        // 애니메이션 시작 시간 저장
        if (startTime === null) {

            startTime = currentTime;

        }


        // 현재까지 걸린 시간
        const elapsedTime = currentTime - startTime;


        // 진행률 계산
        // 0 = 시작
        // 1 = 완료
        const progress = Math.min(
            elapsedTime / duration,
            1
        );


        // 현재 O₂ 위치 계산
        const currentPosition =
            startPosition +
            (endPosition - startPosition) * progress;


        // 실제 화면에서 O₂ 이동
        molecule.style.top = currentPosition + "%";


        // 아직 이동 중이라면 계속 실행
        if (progress < 1) {

            requestAnimationFrame(moveMolecule);

        } 
        
        // 이동이 끝났다면
        else {

            moleculeLocation.textContent = "INSIDE";

            simulationButton.disabled = false;

        }

    }


    // 애니메이션 시작
    requestAnimationFrame(moveMolecule);

});
