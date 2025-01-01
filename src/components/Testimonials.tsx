import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => (
  <section className="py-24 bg-gray-900">
    <div className="container px-4 mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 text-white">מה לקוחות אומרים עלינו</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-white/95 backdrop-blur border-0 shadow-lg">
          <CardContent className="pt-8">
            <div className="flex flex-col items-center mb-6">
              <h3 className="font-semibold text-xl text-gray-900">גיא</h3>
              <p className="text-sm text-gray-700 mt-1">מנהל מערכות מידע</p>
            </div>
            <p className="text-center text-gray-700 leading-relaxed">נדהמתי לגלות כמה מידע חשוב עלה בראיון העומק שערכו איתי. המומחה ידע בדיוק איזה שאלות לשאול כדי להבין את הצרכים האמיתיים שלנו.</p>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur border-0 shadow-lg">
          <CardContent className="pt-8">
            <div className="flex flex-col items-center mb-6">
              <h3 className="font-semibold text-xl text-gray-800">מורן</h3>
              <p className="text-sm text-gray-600 mt-1">מנהלת מחלקה</p>
            </div>
            <p className="text-center text-gray-600 leading-relaxed">כמנהלת עסק, הזמן שלי מוקדש לליבה העסקית. לא היה לי מושג איך טכנולוגיה יכולה לייעל את העבודה שלנו.</p>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur border-0 shadow-lg">
          <CardContent className="pt-8">
            <div className="flex flex-col items-center mb-6">
              <h3 className="font-semibold text-xl text-gray-800">אסתר</h3>
              <p className="text-sm text-gray-600 mt-1">עו״ד בכירה</p>
            </div>
            <p className="text-center text-gray-600 leading-relaxed">הדבר החשוב ביותר בשבילי הוא הזמן עם הלקוחות שלי, ולא היה לי רגע פנוי לחפש פתרונות טכנולוגיים.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default Testimonials;