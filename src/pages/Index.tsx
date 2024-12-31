import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div dir="rtl" className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/42772dbd-10db-4b1d-8c7a-74a4b0050243.png" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20 scale-105 transform transition-transform duration-[30s] hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-purple-900/40 to-blue-950/70"></div>
        <div className="container px-4 mx-auto text-center relative z-10">
          <div className="animate-fade-in space-y-6">
            <h1 className="text-6xl font-bold mb-6 text-white drop-shadow-lg">
              קלודינה
            </h1>
            <p className="text-3xl mb-4 text-white font-light" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              תומכת בעסקים של מחר
            </p>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              ליווי המסע שלכם אל העתיד, יד ביד עם האנשים בדרך
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white via-purple-50/30 to-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">שירותי החברה</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50/50 overflow-hidden border-0 shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/50835bd6-aab0-43a9-a708-7f9cd1138e87.png" 
                  alt="Process Optimization" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">ייעול תהליכים</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">מאבחון המצב הקיים וזיהוי חסמים, דרך תכנון והתאמת פתרונות טכנולוגיים, ועד הטמעה מקצועית הכוללת ליווי אישי</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50/50 overflow-hidden border-0 shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                  alt="Product Management" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">ניהול מוצר</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">מאפיון ותיעוד צרכים, דרך ניתוח נתונים וניהול מפת דרכים, ועד זיהוי הזדמנויות צמיחה, פיתוח שותפויות ויצירת חומרי מכירה מותאמים</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-pink-50/50 overflow-hidden border-0 shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/da9003fb-92a7-48b8-99e4-e7c1fe88c48b.png" 
                  alt="Strategic Planning" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">תכנון אסטרטגי</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">הגדרת חזון מוצר, ניתוח השוק, המוצרים המתחרים, מציאת מוצרים להשראה ויצירת אסטרטגיה עסקית ביחד עם הלקוח</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-white via-purple-50/30 to-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">מה לקוחות אומרים עלינו</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="flex flex-col items-center mb-6">
                  <h3 className="font-semibold text-xl text-gray-800">גיא</h3>
                  <p className="text-sm text-gray-600 mt-1">מנהל מערכות מידע</p>
                </div>
                <p className="text-center text-gray-600 leading-relaxed">נדהמתי לגלות כמה מידע חשוב עלה בראיון העומק שערכו איתי. המומחה ידע בדיוק איזה שאלות לשאול כדי להבין את הצרכים האמיתיים שלנו.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="flex flex-col items-center mb-6">
                  <h3 className="font-semibold text-xl text-gray-800">מורן</h3>
                  <p className="text-sm text-gray-600 mt-1">מנהלת מחלקה</p>
                </div>
                <p className="text-center text-gray-600 leading-relaxed">כמנהלת עסק, הזמן שלי מוקדש לליבה העסקית. לא היה לי מושג איך טכנולוגיה יכולה לייעל את העבודה שלנו.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur border-0 shadow-lg">
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

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-white via-purple-50/30 to-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">על המקימה</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <img 
                src="/lovable-uploads/350ce322-233d-4767-ad46-c75c6692ffd8.png" 
                alt="Black and white portrait in subway station" 
                className="rounded-lg shadow-xl w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <a href="https://www.linkedin.com/in/dinaneishtadt/" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover:text-blue-600 transition-colors inline-flex items-center gap-3 text-gray-800">
                  דינה ניישטאט (Dina Neishtadt)
                  <Linkedin className="inline h-6 w-6" />
                </a>
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                מובילת מוצר ויועצת אסטרטגית המשלבת חשיבה רב-תחומית עם ראייה גלובלית. עם ניסיון של למעלה מ-15 שנים בתחומי הטכנולוגיה, עיצוב ובינה מלאכותית.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-t from-purple-50/50 to-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">צור קשר</h2>
          <p className="text-xl mb-8">
            <a href="mailto:dinkan@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors hover:underline">
              dinkan@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;