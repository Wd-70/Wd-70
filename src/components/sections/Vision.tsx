// components/sections/Vision.tsx
'use client';

export default function Vision() {
    return (
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">앞으로의 비전</h2>
          
          <div className="space-y-8">
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">AI와 함께하는 개발</h3>
              <p className="text-gray-700 dark:text-gray-300">
                바이브 코딩의 시대에 발맞춰, AI를 활용한 직관적이고 효율적인 개발 방식을 추구합니다.
                AI가 단순한 도구를 넘어 개발의 동반자로 자리매김할 수 있도록 노력하고 있습니다.
              </p>
            </div>
            
            <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">사용자 중심의 서비스</h3>
              <p className="text-gray-700 dark:text-gray-300">
                사용자가 겪을 수 있는 불편함을 사전에 예측하고 해결하는 서비스를 만들고자 합니다.
                기술의 발전이 더 나은 사용자 경험으로 이어질 수 있도록 노력하겠습니다.
              </p>
            </div>
            
            <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">지속 가능한 개발</h3>
              <p className="text-gray-700 dark:text-gray-300">
                단기적인 성과보다는 장기적으로 지속 가능한 개발을 지향합니다.
                깔끔한 코드와 체계적인 문서화를 통해 유지보수가 용이한 프로젝트를 만들고자 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }