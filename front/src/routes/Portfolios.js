import React, { useState } from 'react';
import { Eye, ThumbsUp, MessageCircle, Search, Menu } from 'lucide-react';
import chippoLogo from '../assets/chippo_logo.png';  
import HeadNav from '../components/HeadNav';

const categories = [
  "전체", "디자인", "개발", "마케팅", "비즈니스", "예술", "공학", "과학", "기타"
];

const portfolios = [
  { id: 1, title: "모바일 앱 UI/UX 디자인", author: "김디자인", category: "디자인", views: 1500, likes: 120, comments: 25, image: "https://picsum.photos/id/1/300/200", createdAt: "2023-06-01" },
  { id: 2, title: "React Native 쇼핑몰 앱", author: "이개발", category: "개발", views: 1200, likes: 95, comments: 18, image: "https://picsum.photos/id/2/300/200", createdAt: "2023-06-02" },
  { id: 3, title: "브랜드 아이덴티티 디자인", author: "박마케팅", category: "마케팅", views: 1000, likes: 88, comments: 15, image: "https://picsum.photos/id/3/300/200", createdAt: "2023-06-03" },
  { id: 4, title: "AI 기반 데이터 분석 프로젝트", author: "최과학", category: "과학", views: 950, likes: 76, comments: 22, image: "https://picsum.photos/id/4/300/200", createdAt: "2023-06-04" },
  { id: 5, title: "지속 가능한 건축 디자인", author: "정공학", category: "공학", views: 850, likes: 67, comments: 13, image: "https://picsum.photos/id/5/300/200", createdAt: "2023-06-05" },
  { id: 6, title: "현대 미술 전시회 기획", author: "한예술", category: "예술", views: 800, likes: 72, comments: 20, image: "https://picsum.photos/id/6/300/200", createdAt: "2023-06-06" },
  { id: 7, title: "스타트업 비즈니스 모델", author: "유비즈니스", category: "비즈니스", views: 750, likes: 58, comments: 17, image: "https://picsum.photos/id/7/300/200", createdAt: "2023-06-07" },
  { id: 8, title: "오픈소스 라이브러리 개발", author: "송개발", category: "개발", views: 700, likes: 85, comments: 30, image: "https://picsum.photos/id/8/300/200", createdAt: "2023-06-08" },
];

function MainPortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredPortfolios = selectedCategory === "전체"
    ? portfolios
    : portfolios.filter(portfolio => portfolio.category === selectedCategory);

  const popularPortfolios = [...filteredPortfolios].sort((a, b) => b.views - a.views).slice(0, 3);
  const recentPortfolios = [...filteredPortfolios].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <HeadNav />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* 검색 바 */}
          <div className="px-4 py-6 sm:px-0">
            <div className="flex items-center bg-white rounded-lg shadow-sm">
              <input
                type="text"
                placeholder="포트폴리오 검색..."
                className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 focus:outline-none">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* 카테고리 네비게이션 */}
          <div className="px-4 py-6 sm:px-0">
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* 인기 포트폴리오 섹션 */}
          <section className="px-4 py-6 sm:px-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">인기 포트폴리오</h2>
            {popularPortfolios.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularPortfolios.map((portfolio) => (
                  <div key={portfolio.id} className="bg-white overflow-hidden shadow-sm rounded-lg">
                    <img className="h-48 w-full object-cover" src={portfolio.image} alt={portfolio.title} />
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-900">{portfolio.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{portfolio.author}</p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          {portfolio.category}
                        </span>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {portfolio.views}
                          </span>
                          <span className="flex items-center">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            {portfolio.likes}
                          </span>
                          <span className="flex items-center">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {portfolio.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center">현재 표시할 인기 포트폴리오가 없습니다.</p>
            )}
          </section>

          {/* 최근 포트폴리오 섹션 */}
          <section className="px-4 py-6 sm:px-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">최근 포트폴리오</h2>
            {recentPortfolios.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentPortfolios.map((portfolio) => (
                  <div key={portfolio.id} className="bg-white overflow-hidden shadow-sm rounded-lg">
                    <img className="h-48 w-full object-cover" src={portfolio.image} alt={portfolio.title} />
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-900">{portfolio.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{portfolio.author}</p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          {portfolio.category}
                        </span>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {portfolio.views}
                          </span>
                          <span className="flex items-center">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            {portfolio.likes}
                          </span>
                          <span className="flex items-center">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {portfolio.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center">현재 표시할 최근 포트폴리오가 없습니다.</p>
            )}
          </section>
        </div>
      </main>

      <footer className="bg-white shadow-md mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© 2023 포트폴리오 갤러리. 모든 권리 보유.</p>
            <nav className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">이용약관</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">개인정보처리방침</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">문의하기</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainPortfolioPage;