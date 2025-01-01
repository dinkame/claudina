import { useEffect } from 'react';

export const useTracking = () => {
  useEffect(() => {
    // Track scroll events
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      // Track at 25%, 50%, 75%, and 100% scroll depth
      if (scrollPercentage === 25 || scrollPercentage === 50 || 
          scrollPercentage === 75 || scrollPercentage === 100) {
        window.dataLayer?.push({
          event: 'scroll_depth',
          scroll_percentage: scrollPercentage
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export const trackClick = (element: string, action: string = 'click') => {
  window.dataLayer?.push({
    event: 'element_click',
    element_type: element,
    element_action: action
  });
};