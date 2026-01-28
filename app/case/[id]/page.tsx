import { cases } from "../../data/cases";
import Link from "next/link";
import { notFound } from "next/navigation";
import CaseImage from "../../components/CaseImage";

export function generateStaticParams() {
  return cases.map((caseItem) => ({
    id: caseItem.id.toString(),
  }));
}

export default async function CaseDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const caseData = cases.find((c) => c.id === parseInt(id));

  if (!caseData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="gradient-bg text-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            事例一覧に戻る
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">
            事例{caseData.id} {caseData.age}歳 / {caseData.gender}
          </h1>
          <div className="w-12 h-1 bg-white mt-4"></div>
        </div>
      </header>

      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-4">施術前の状態</h2>
          <div className="max-w-sm mx-auto">
            {caseData.beforeImages.map((imgPath, index) => (
              <CaseImage key={index} src={imgPath} alt={"施術前写真" + (index + 1)} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-1 h-6 bg-[#7BAFB8] mr-3 rounded-full"></span>
            基本情報
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 card-shadow border-l-4 border-[#7BAFB8]">
              <h3 className="font-bold text-[#7BAFB8] mb-2">来店理由</h3>
              <p className="text-gray-700 leading-relaxed">{caseData.reason}</p>
            </div>
            <div className="bg-white rounded-xl p-5 card-shadow border-l-4 border-[#7BAFB8]">
              <h3 className="font-bold text-[#7BAFB8] mb-2">歯の状態</h3>
              <p className="text-gray-700 leading-relaxed">{caseData.teethCondition}</p>
            </div>
            <div className="bg-white rounded-xl p-5 card-shadow border-l-4 border-[#7BAFB8]">
              <h3 className="font-bold text-[#7BAFB8] mb-2">施術内容</h3>
              <ul className="text-gray-700">
                {caseData.treatment.map((t, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#7BAFB8] rounded-full mr-2"></span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-gradient-to-b from-white to-[#C5E0E4]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-1 h-6 bg-[#7BAFB8] mr-3 rounded-full"></span>
            Before After
          </h2>
          {caseData.areaImages.map((areaData) => (
            <div key={areaData.area} className="mb-8">
              <h3 className="font-bold text-gray-700 mb-4 text-center bg-gray-100 py-2 rounded-lg">{areaData.area}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {areaData.images.map((img, index) => (
                  <div key={index} className="relative">
                    <div className="absolute top-2 left-2 bg-[#7BAFB8] text-white text-xs px-2 py-1 rounded-md font-medium z-10">{img.date}</div>
                    <CaseImage src={img.path} alt={areaData.area + " " + (index + 1) + "回目"} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-1 h-6 bg-[#7BAFB8] mr-3 rounded-full"></span>
            お客様の声
          </h2>
          <div className="space-y-4">
            <div className="bg-[#fffde7] rounded-xl p-5 card-shadow border-l-4 border-[#ffc107]">
              <h3 className="font-bold text-gray-800 mb-3">当サロンを選んだ決め手はなんですか？</h3>
              <p className="text-gray-700 leading-relaxed">{caseData.testimonial.whyChose}</p>
            </div>
            <div className="bg-[#e8f5e9] rounded-xl p-5 card-shadow border-l-4 border-[#4caf50]">
              <h3 className="font-bold text-gray-800 mb-3">施術を始めたきっかけと、体感した変化を教えてください</h3>
              <p className="text-gray-700 leading-relaxed">{caseData.testimonial.experience}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto flex justify-between">
          {caseData.id > 1 && (
            <Link href={"/case/" + (caseData.id - 1)} className="flex items-center text-[#7BAFB8] font-medium hover:underline">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              前の事例
            </Link>
          )}
          <div className="flex-1"></div>
          {caseData.id < cases.length && (
            <Link href={"/case/" + (caseData.id + 1)} className="flex items-center text-[#7BAFB8] font-medium hover:underline">
              次の事例
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
