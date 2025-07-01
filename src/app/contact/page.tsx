import { Metadata } from 'next';
import { ContactForm } from '@/components/contact/ContactForm';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

export const metadata: Metadata = {
  title: '연락하기 | Wd-70 포트폴리오',
  description: 'Wd-70에게 연락하실 수 있는 페이지입니다. 궁금한 점이 있으시면 언제든지 문의해주세요!',
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Contact Me
        </h1>
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">연락처 정보</h2>
              <p className="mb-6">
                궁금한 점이 있으시면 언제든지 연락주세요. 최대한 빠르게 답변드리겠습니다.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <FiMail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">이메일</p>
                    <p>kjk7052@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white/20 p-2 rounded-full mr-4">
                    <FiGithub className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-100">GitHub</p>
                    <a 
                      href="https://github.com/Wd-70" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      github.com/Wd-70
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4">소셜 미디어</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Wd-70" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub className="h-5 w-5" />
                  </a>
                  {/* <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin className="h-5 w-5" />
                  </a> */}
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                메시지 보내기
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
