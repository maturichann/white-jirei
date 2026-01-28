export interface CaseImage {
  date: string;
  path: string;
}

export interface AreaImages {
  area: string;
  areaKey: string;
  images: CaseImage[];
}

export interface CaseData {
  id: number;
  age: number;
  gender: "女性";
  reason: string;
  teethCondition: string;
  treatment: string[];
  beforeImages: string[];
  areaImages: AreaImages[];
  testimonial: {
    whyChose: string;
    experience: string;
  };
}

export interface FAQ {
  question: string;
  answer: string;
}

export const cases: CaseData[] = [
  {
    id: 1,
    age: 28,
    gender: "女性",
    reason: "結婚式を控えており、写真映えする白い歯にしたいと思い来店しました。普段からコーヒーや紅茶をよく飲むため、着色汚れが気になっていました。",
    teethCondition: "全体的に黄ばみがあり、特に前歯の着色が目立つ状態。エナメル質は健康で、知覚過敏などの症状はなし。",
    treatment: [
      "ホワイトニング（回数券）",
      "オプション：エナメラート",
    ],
    beforeImages: ["/images/case1/before1.jpg"],
    areaImages: [
      {
        area: "正面",
        areaKey: "front",
        images: [
          { date: "2025/06/01", path: "/images/case1/front_2025-06-01.jpg" },
          { date: "2025/07/01", path: "/images/case1/front_2025-07-01.jpg" },
        ],
      },
    ],
    testimonial: {
      whyChose: "友人がこちらでホワイトニングを受けてとても綺麗になっていたので、紹介してもらいました。カウンセリングが丁寧で、施術の流れや効果について詳しく説明してくださったのが決め手です。",
      experience: "初回の施術後から明らかにトーンアップしたのがわかり、鏡を見るのが楽しくなりました。3回目が終わる頃には友人や家族からも「歯が白くなったね！」と言われるようになり、結婚式の写真も自信を持って笑顔で撮ることができました。痛みもほとんどなく、安心して通えました。",
    },
  },
  {
    id: 2,
    age: 32,
    gender: "女性",
    reason: "接客業をしており、笑顔に自信を持ちたいと思い来店しました。日頃からワインやコーヒーを好んで飲むため、歯の黄ばみが気になっていました。",
    teethCondition: "飲食物による着色が全体的に見られ、特に前歯の表面にステインが付着している状態。エナメル質の状態は良好。",
    treatment: [
      "ホワイトニング（回数券）",
      "オプション：シロケシ",
    ],
    beforeImages: ["/images/case2/before2.jpg"],
    areaImages: [
      {
        area: "正面",
        areaKey: "front",
        images: [
          { date: "2025/09/15", path: "/images/case2/front_2025-09-15.jpg" },
        ],
      },
    ],
    testimonial: {
      whyChose: "ネットで口コミを見て、スタッフの方の対応が丁寧だと評判だったので選びました。実際に行ってみると清潔感のある店内で、カウンセリングも親身に対応してくれたのが決め手です。",
      experience: "1回目の施術後から目に見えて白くなり感動しました。接客中にお客様から「笑顔が素敵ですね」と言っていただけるようになり、自信に繋がっています。施術中も痛みがなく、リラックスして受けられたのが良かったです。",
    },
  },
];

export const faqData: FAQ[] = [
  {
    question: "ホワイトニングは痛みがありますか？",
    answer: "施術中にしみることがありますが、一時的なもので通常は数時間以内に治まります。当サロンでは刺激の少ない薬剤を使用し、痛みを最小限に抑えています。",
  },
  {
    question: "効果はどのくらい持続しますか？",
    answer: "個人差はありますが、一般的に3〜6ヶ月程度持続します。飲食習慣や喫煙の有無により異なりますが、定期的なメンテナンスで白さを長く保つことができます。",
  },
  {
    question: "施術時間はどのくらいですか？",
    answer: "1回の施術は約60分程度です。初回はカウンセリングを含むため、少しお時間をいただいております。",
  },
  {
    question: "虫歯があってもホワイトニングはできますか？",
    answer: "虫歯がある場合は、先に治療をお勧めしております。軽度の場合は施術可能な場合もありますので、まずはカウンセリングでご相談ください。",
  },
  {
    question: "どのくらいの頻度で通えばいいですか？",
    answer: "回数券をご利用いただき、定期的に通っていただくことで効果を持続できます。メンテナンスの頻度はカウンセリング時にご相談ください。",
  },
];
