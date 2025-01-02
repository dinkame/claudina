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
            <p className="text-center text-gray-700 leading-relaxed">נדהמתי לגלות כמה מידע חשוב עלה בראיון העומק שערכו איתי. בעבר תמיד התחלנו מהפתרונות שחשבנו שאנחנו צריכים, אבל בסוף תמיד גילינו שהם לא מספיק טובים. דינה ידעה בדיוק איזה שאלות לשאול כדי להבין את הצרכים האמיתיים שלנו. במקום שאני אגדיר את התוכנה, הובלה מקצועית של התהליך הניבה פתרון מדויק בדיוק למה שהעסק שלנו צריך.</p>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur border-0 shadow-lg">
          <CardContent className="pt-8">
            <div className="flex flex-col items-center mb-6">
              <h3 className="font-semibold text-xl text-gray-800">מורן</h3>
              <p className="text-sm text-gray-600 mt-1">מנהלת מחלקה</p>
            </div>
            <p className="text-center text-gray-600 leading-relaxed">כמנהלת עסק, הזמן שלי מוקדש לליבה העסקית. העובדים שלנו עבדו עם מספר מערכות דיגיטליות נפרדות, והיו צריכים להזין את אותם הנתונים שוב ושוב במערכות השונות, מה שיצר בזבוז זמן ופתח פתח לטעויות. לא היה לי מושג איך טכנולוגיה יכולה לייעל את העבודה שלנו, עד שהמומחים ראיינו אותי והבינו את התהליכים שלנו. הפתרונות שהם הציעו חסכו למחלקות השונות אצלנו מאות שעות עבודה, ומה שחשוב לא פחות - צמצמו משמעותית את הסיכון לטעויות אנוש שהיו שכיחות בהקלדות החוזרות.</p>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur border-0 shadow-lg">
          <CardContent className="pt-8">
            <div className="flex flex-col items-center mb-6">
              <h3 className="font-semibold text-xl text-gray-800">אסתר</h3>
              <p className="text-sm text-gray-600 mt-1">עו״ד בכירה</p>
            </div>
            <p className="text-center text-gray-600 leading-relaxed">הדבר החשוב ביותר בשבילי הוא הזמן עם הלקוחות שלי, ולא היה לי רגע פנוי לחפש פתרונות טכנולוגיים. בעבר מצאתי את עצמי עובדת עד שעות מאוחרות כדי להשלים משימות מנהלתיות על חשבון זמן המשפחה. ההשקעה במומחה שהבין את הצרכים שלי והטמיע פתרונות שחוסכים זמן לאנשים עסוקים כמוני השתלמה - יש לי יותר זמן עם הילדים, וזה בלי לוותר על רמת השירות ללקוחות או על היקף העסקאות.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default Testimonials;