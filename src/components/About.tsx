import React from 'react';
import { Linkedin } from "lucide-react";
import { trackClick } from "../hooks/useTracking";

const About = () => (
  <section className="py-24 bg-gray-900">
    <div className="container px-4 mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 text-white">על המקימה</h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3">
          <img 
            src="/lovable-uploads/350ce322-233d-4767-ad46-c75c6692ffd8.png" 
            alt="Black and white portrait in subway station" 
            className="rounded-lg shadow-xl w-full h-auto"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="md:w-2/3">
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <a href="https://www.linkedin.com/in/dinaneishtadt/" 
               target="_blank"
               rel="noopener noreferrer"
               onClick={() => trackClick('linkedin_link')}
               className="hover:text-blue-300 transition-colors inline-flex items-center gap-3 text-white">
              דינה ניישטאט (Dina Neishtadt)
              <Linkedin className="inline h-6 w-6" />
            </a>
          </h3>
          <p className="text-gray-200 leading-relaxed text-lg">
            היא מובילת מוצר ויועצת אסטרטגית המשלבת חשיבה רב-תחומית עם ראייה גלובלית. עם ניסיון של למעלה מ-15 שנים בתחומי הטכנולוגיה, עיצוב ובינה מלאכותית, היא מתמחה בהפיכת רעיונות מורכבים למוצרים חדשניים ממוקדי משתמש. הרקע המגוון שלה, הכולל פיתוח תוכנה, ניהול מוצר, עיצוב תעשייתי והנדסת פרומפטים, מעניק לה פרספקטיבה ייחודית ביצירת פתרונות בעלי השפעה. ניסיונה הבינלאומי, שנצבר בישראל, אירופה וניו יורק, כולל עבודה עם לקוחות מהמערב ומאסיה, והובלת מוצרים המשרתים מיליוני משתמשים ב-190+ מדינות.
          </p>
          <p className="text-gray-200 leading-relaxed text-lg mt-4">
            גישתה הייחודית משלבת מומחיות טכנית, חשיבה יצירתית וראייה עסקית, תוך שימת דגש על למידה מתמדת ושיתוף ידע.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;