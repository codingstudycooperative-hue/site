export interface Equipment {
  slug: string;
  name: string;
  category: string;
  target: string;
  maxHeadcount: number;
  description: string;
  emoji: string;
  images?: string[];
}

export const equipment: Equipment[] = [
  {
    slug: "microbit-extension-pack",
    name: "마이크로비트 & 확장팩",
    category: "피지컬 컴퓨팅",
    target: "초등 3학년~중학교",
    maxHeadcount: 25,
    description:
      "마이크로비트는 작고 강력한 컴퓨터로, 블록 기반 프로그래밍을 통해 LED, 버튼, 센서를 제어할 수 있습니다. 확장팩을 활용하면 다양한 전자부품을 연결하여 창의적인 프로젝트를 만들 수 있습니다.",
    emoji: "🔲",
    images: ["/assets/teachingtools/001.webp"],
  },
  {
    slug: "microbit-genius-kit",
    name: "마이크로비트 지니어스 키트",
    category: "피지컬 컴퓨팅",
    target: "초등 4학년~중학교",
    maxHeadcount: 25,
    description:
      "마이크로비트 지니어스 키트는 초급부터 심화까지 단계적 학습을 가능하게 하는 풍부 센서와 액추에이터를 포함합니다. 실생활 문제 해결 프로젝트에 최적화되어 있습니다.",
    emoji: "🧩",
    images: ["/assets/teachingtools/002.webp"],
  },
  {
    slug: "microbit-retro-arcade",
    name: "마이크로비트 레트로 아케이드",
    category: "피지컬 컴퓨팅",
    target: "초등 3학년~중학교",
    maxHeadcount: 25,
    description:
      "추억의 아케이드 게임 기계 형태의 마이크로비트 키트입니다. 직관적인 조이스틱과 버튼으로 게임을 만들고 즐기며, 프로그래밍의 재미를 경험할 수 있습니다.",
    emoji: "🕹️",
    images: ["/assets/teachingtools/003.webp"],
  },
  {
    slug: "kamibot",
    name: "카미봇",
    category: "로봇",
    target: "초등 1~6학년",
    maxHeadcount: 30,
    description:
      "귀여운 고양이 모양의 카미봇은 저학년부터 시작할 수 있는 로봇입니다. 앱 기반 프로그래밍으로 미로 탈출, 그림 그리기 등 다양한 활동을 할 수 있습니다.",
    emoji: "🤖",
    images: ["/assets/teachingtools/004.webp"],
  },
  {
    slug: "pingpong-robot",
    name: "핑퐁로봇",
    category: "로봇",
    target: "초등 3학년~중학교",
    maxHeadcount: 25,
    description:
      "탁구공 크기의 작고 귀여운 로봇으로, 프로그래밍을 통해 경로를 따라 움직이거나 장애물을 피하며 이동합니다. 경량이라 어디서나 쉽게 사용할 수 있습니다.",
    emoji: "🏓",
    images: ["/assets/teachingtools/005.webp"],
  },
  {
    slug: "tambot-robot",
    name: "팀보로봇",
    category: "로봇",
    target: "초등 3학년~중학교",
    maxHeadcount: 25,
    description:
      "팀 기반 활동이 가능한 로봇으로, 복수의 로봇이 협력하는 프로그래밍을 배울 수 있습니다. 협력과 경쟁의 재미를 동시에 경험할 수 있습니다.",
    emoji: "🔵",
    images: ["/assets/teachingtools/006.webp"],
  },
  {
    slug: "ione-robot",
    name: "아이온 로봇",
    category: "로봇",
    target: "초등 4학년~중학교",
    maxHeadcount: 25,
    description:
      "높은 수준의 센서와 제어 기능을 갖춘 휴머노이드 로봇입니다. 블록과 텍스트 프로그래밍을 통해 복잡한 동작과 인공지능 기반 상호작용을 구현할 수 있습니다.",
    emoji: "🔧",
    images: ["/assets/teachingtools/007.webp"],
  },
  {
    slug: "lego-spike-prime",
    name: "레고 스파이크 프라임",
    category: "로봇",
    target: "중학교",
    maxHeadcount: 20,
    description:
      "LEGO와 Spike의 결합으로, 창의적인 로봇 조립과 고급 프로그래밍을 동시에 경험할 수 있습니다. STEAM 교육의 이상적인 도구로 널리 사용됩니다.",
    emoji: "🧱",
    images: ["/assets/teachingtools/008.webp"],
  },
  {
    slug: "educational-drone",
    name: "교육용 드론",
    category: "드론",
    target: "초등 5학년~중학교",
    maxHeadcount: 20,
    description:
      "안전한 실내 비행을 위한 보호대를 갖춘 소형 드론입니다. 프로그래밍으로 자율 비행 경로를 설정하고, 3D 공간에 대한 이해를 높일 수 있습니다.",
    emoji: "🚁",
    images: ["/assets/teachingtools/009.webp"],
  },
  {
    slug: "3d-pen",
    name: "3D 펜",
    category: "3D",
    target: "초등 4학년~성인",
    maxHeadcount: 30,
    description:
      "손으로 직접 입체 도형을 그려내는 3D 펜입니다. 창의성과 공간 감각을 동시에 발달시키며, 자신의 아이디어를 실제 물체로 만드는 경험을 제공합니다.",
    emoji: "✏️",
    images: ["/assets/teachingtools/010.webp"],
  },
  {
    slug: "3d-printer",
    name: "3D 프린터",
    category: "3D",
    target: "초등 5학년~성인",
    maxHeadcount: 15,
    description:
      "3D 모델링 소프트웨어로 설계한 물체를 실제로 인쇄할 수 있습니다. 디지털 설계부터 물리적 완성까지의 전체 과정을 경험하며 고급 창의력을 배양합니다.",
    emoji: "🖨️",
    images: ["/assets/teachingtools/011.webp"],
  },
  {
    slug: "esp32-kit",
    name: "ESP32 키트",
    category: "IoT",
    target: "중학교~고등학교",
    maxHeadcount: 20,
    description:
      "WiFi와 블루투스 기능을 갖춘 마이크로컨트롤러로, 인터넷 연결 기반의 IoT 프로젝트를 구현할 수 있습니다. 센서와 액추에이터를 통합하는 고급 프로그래밍을 경험합니다.",
    emoji: "📡",
    images: ["/assets/teachingtools/012.webp"],
  },
  {
    slug: "raspberry-pi-kit",
    name: "파이파이 키트",
    category: "IoT",
    target: "중학교~고등학교",
    maxHeadcount: 20,
    description:
      "완전한 컴퓨터 성능을 가진 초소형 싱글보드 컴퓨터입니다. Linux 기반의 프로그래밍으로 웹 서버, 데이터베이스 등 현실의 IT 기술을 배울 수 있습니다.",
    emoji: "🐍",
    images: ["/assets/teachingtools/013.webp"],
  },
  {
    slug: "practice-laptop",
    name: "실습용 노트북",
    category: "IT 기기",
    target: "초등 3학년~성인",
    maxHeadcount: 25,
    description:
      "코딩 및 프로그래밍 학습에 최적화된 실습 환경을 제공하는 노트북입니다. 다양한 개발 도구와 IDE가 사전 설치되어 있어 효율적인 학습을 지원합니다.",
    emoji: "💻",
    images: ["/assets/teachingtools/014.webp"],
  },
  {
    slug: "unplugged-kit",
    name: "언플러그드 교구",
    category: "언플러그드",
    target: "초등 1학년~중학교",
    maxHeadcount: 35,
    description:
      "컴퓨터 없이 종이, 보드, 카드 등을 활용하여 컴퓨팅의 기본 개념(알고리즘, 데이터, 논리)을 배웁니다. 저학년도 참여 가능하며 협력 활동에 최적입니다.",
    emoji: "📚",
    images: [
      "/assets/teachingtools/015.webp",
      "/assets/teachingtools/016.webp",
    ],
  },
  {
    slug: "ozobot",
    name: "오조봇 (Ozobot)",
    category: "로봇",
    target: "유치원~초등학생",
    maxHeadcount: 30,
    description:
      "선을 따라 움직이는 아주 작은 코딩 교육용 로봇입니다. 컬러 코드를 인식해 다양한 액션을 수행하며, 어린 학생들도 쉽게 코딩의 논리를 이해할 수 있습니다.",
    emoji: "⏺️",
    images: ["/assets/teachingtools/017.webp"],
  },
  {
    slug: "sphero",
    name: "스피로 볼 (Sphero)",
    category: "로봇",
    target: "초등학생~중학생",
    maxHeadcount: 20,
    description:
      "모션 인식과 앱 제어가 가능한 구형(공 모양) 로봇 코딩 교구입니다. 놀이와 레이싱을 융합하여 활동적인 코딩 수업이 가능합니다.",
    emoji: "⚽",
    images: ["/assets/teachingtools/018.webp"],
  },
  {
    slug: "arduino",
    name: "아두이노 센서 키트",
    category: "IoT",
    target: "중학교~고등학교",
    maxHeadcount: 20,
    description:
      "기초적인 전자회로와 코딩을 융합하여 다양한 센서를 제어하는 메이커 교육의 핵심 교구입니다. 빛, 온도, 소음 등 각종 데이터를 측정하며 실험적인 프로젝트를 돕습니다.",
    emoji: "🔌",
    images: ["/assets/teachingtools/019.webp"],
  },
  {
    slug: "vr-meta",
    name: "메타 퀘스트 (Meta Quest)",
    category: "VR",
    target: "초등 고학년~성인",
    maxHeadcount: 10,
    description:
      "코스페이시스(CoSpaces) 등의 플랫폼과 연계하여, 학생들이 직접 프로그래밍한 3D 가상 공간을 최고 사양의 무선 VR 헤드셋으로 생생히 체험하게 됩니다.",
    emoji: "🥽",
    images: ["/assets/teachingtools/020.webp"],
  },
  {
    slug: "makeymakey",
    name: "메이키메이키 (Makey Makey)",
    category: "메이커",
    target: "초등학생~중학생",
    maxHeadcount: 25,
    description:
      "과일, 찰흙, 연필깎이 가루 등 전기가 통하는 일상 사물을 키보드 대신 컴퓨터에 연결해 입력 장치로 활용하는 창의 발명 코딩 교구입니다.",
    emoji: "🍌",
    images: ["/assets/teachingtools/021.webp"],
  },
];
