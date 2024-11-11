import chippoLogo from '../assets/chippo_logo.png';  
import { useState, useEffect } from 'react';

function HeadNav() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
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
    )
}

export default HeadNav;