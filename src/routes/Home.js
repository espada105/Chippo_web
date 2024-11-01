import React, { useState, useEffect } from 'react';
import { Search, BookOpen, Users, Briefcase, Eye, ChevronRight, ArrowRight, Lightbulb, Globe, Award } from "lucide-react";
import chippoLogo from '../assets/chippo_logo.png';  //

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <header className={`sticky top-0 z-50 px-4 lg:px-6 h-16 flex items-center transition-all duration-200 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : ''}`}>
        <a href="/" className="flex items-center justify-center">
          <img src={chippoLogo} alt="학생포트폴리오" className="w-[210px] h-auto object-contain" />
        </a>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <a href="/" className="text-sm font-medium hover:text-primary transition-colors">홈</a>
          <a href="/portfolio" className="text-sm font-medium hover:text-primary transition-colors">포트폴리오</a>
          <a href="/upload" className="text-sm font-medium hover:text-primary transition-colors">업로드</a>
          <a href="/login" className="text-sm font-medium hover:text-primary transition-colors">로그인</a>
          <button className="text-sm font-medium h-9 px-4 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">회원가입</button>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-50 via-white to-blue-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                  당신의 재능을 세상에 보여주세요
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  대학생들의 창의적인 작품과 프로젝트를 공유하고 발견하는 플랫폼입니다.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="포트폴리오 검색..." type="text" />
                  <button type="submit" className="px-3 py-2 bg-[#343434] text-white rounded-md hover:bg-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#343434] focus:ring-offset-2">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">검색</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">주요 서비스</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Users, title: "네트워킹", description: "다른 학생들과 연결하고 협업 기회를 찾아보세요." },
                { icon: BookOpen, title: "학습", description: "다양한 포트폴리오를 통해 새로운 아이디어와 기술을 배우세요." },
                { icon: Briefcase, title: "취업 기회", description: "기업들과 연결되어 인턴십이나 취업 기회를 잡으세요." },
                { icon: Lightbulb, title: "아이디어 공유", description: "창의적인 아이디어를 공유하고 피드백을 받아보세요." },
                { icon: Globe, title: "글로벌 네트워크", description: "전 세계 학생들과 소통하며 시야를 넓혀보세요." },
                { icon: Award, title: "성과 인증", description: "프로젝트 완료와 기술 습득을 인증받고 표시하세요." }
              ].map((service, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">최근 포트폴리오</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={`https://picsum.photos/400/225?random=${i}`}
                      alt={`Portfolio preview ${i}`}
                      className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-4 font-semibold">자세히 보기</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 hover:text-purple-600 transition-colors duration-300">포트폴리오 제목 {i}</h3>
                    <p className="text-sm text-gray-500 mb-2">작성자: 학생 {i}</p>
                    <div className="flex justify-between items-center">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full hover:bg-purple-200 transition-colors duration-300">디자인</span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Eye className="h-4 w-4 mr-1" />
                        {Math.floor(Math.random() * 1000) + 100}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <button className="px-6 py-3 bg-[#343434] text-white rounded-md hover:bg-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#343434] focus:ring-offset-2 transition-all duration-300 transform hover:scale-105">
                더 많은 포트폴리오 보기
                <ChevronRight className="ml-2 h-4 w-4 inline" />
              </button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">카테고리별 탐색</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { name: "디자인", icon: "🎨" },
                { name: "개발", icon: "💻" },
                { name: "마케팅", icon: "📊" },
                { name: "비즈니스", icon: "💼" },
                { name: "예술", icon: "🎭" },
                { name: "공학", icon: "🔧" },
                { name: "과학", icon: "🔬" },
                { name: "기타", icon: "🌟" }
              ].map((category) => (
                <button key={category.name} className="h-24 flex flex-col items-center justify-center text-center border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md">
                  <span className="text-3xl mb-2 transition-transform duration-300 transform group-hover:scale-110">{category.icon}</span>
                  <span className="font-medium text-gray-800 group-hover:text-purple-600 transition-colors duration-300">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-100 to-blue-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">지금 시작하세요</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  여러분의 재능을 세상에 보여줄 준비가 되셨나요? 지금 바로 포트폴리오를 업로드하고 새로운 기회를 만나보세요.
                </p>
              </div>
              <button className="h-11 px-8 bg-[#343434] text-white rounded-md hover:bg-[#4a4a4a] focus:outline-none focus:ring-2 focus:ring-[#343434] focus:ring-offset-2 transition-all duration-300 transform hover:scale-105">
                포트폴리오 업로드
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-gray-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <p className="text-xs text-gray-500">© 2024 학생포트폴리오. 모든 권리 보유.</p>
            <nav  className="sm:ml-auto flex gap-4 sm:gap-6">
              <a href="/terms" className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-gray-900">
                이용약관
              </a>
              <a href="/privacy" className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-gray-900">
                개인정보처리방침
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;