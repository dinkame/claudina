import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div dir="rtl" className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-purple-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
            alt="Background" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(102.3deg,rgba(147,39,143,1)_5.9%,rgba(234,172,232,1)_64%,rgba(246,219,245,1)_89%)] opacity-10"></div>
        <div className="container px-4 mx-auto text-center relative animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            קלודינה
          </h1>
          <p className="text-2xl mb-4 animate-fade-in" style={{ animationDelay: "200ms" }}>תומכת בעסקים של מחר</p>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "400ms" }}>
            ליווי המסע שלכם אל העתיד, יד ביד עם האנשים בדרך
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">שירותי החברה</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-purple-50 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Process Optimization" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>ייעול תהליכים</CardTitle>
              </CardHeader>
              <CardContent>
                <p>מאבחון המצב הקיים וזיהוי חסמים, דרך תכנון והתאמת פתרונות טכנולוגיים, ועד הטמעה מקצועית הכוללת ליווי אישי</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                  alt="Product Management" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>ניהול מוצר</CardTitle>
              </CardHeader>
              <CardContent>
                <p>מאפיון ותיעוד צרכים, דרך ניתוח נתונים וניהול מפת דרכים, ועד זיהוי הזדמנויות צמיחה, פיתוח שותפויות ויצירת חומרי מכירה מותאמים</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-pink-50 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Strategic Planning" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>תכנון אסטרטגי</CardTitle>
              </CardHeader>
              <CardContent>
                <p>הגדרת חזון מוצר, ניתוח השוק, המוצרים המתחרים, מציאת מוצרים להשראה ויצירת אסטרטגיה עסקית ביחד עם הלקוח</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">מה לקוחות אומרים עלינו</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <h3 className="font-semibold">גיא</h3>
                  <p className="text-sm text-muted-foreground">מנהל מערכות מידע</p>
                </div>
                <p className="text-center">נדהמתי לגלות כמה מידע חשוב עלה בראיון העומק שערכו איתי. המומחה ידע בדיוק איזה שאלות לשאול כדי להבין את הצרכים האמיתיים שלנו.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <h3 className="font-semibold">מורן</h3>
                  <p className="text-sm text-muted-foreground">מנהלת מחלקה</p>
                </div>
                <p className="text-center">כמנהלת עסק, הזמן שלי מוקדש לליבה העסקית. לא היה לי מושג איך טכנולוגיה יכולה לייעל את העבודה שלנו.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <h3 className="font-semibold">אסתר</h3>
                  <p className="text-sm text-muted-foreground">עו״ד בכירה</p>
                </div>
                <p className="text-center">הדבר החשוב ביותר בשבילי הוא הזמן עם הלקוחות שלי, ולא היה לי רגע פנוי לחפש פתרונות טכנולוגיים.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-white via-purple-50 to-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">על המקימה</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img 
                src="/lovable-uploads/350ce322-233d-4767-ad46-c75c6692ffd8.png" 
                alt="Black and white portrait in subway station" 
                className="rounded-lg shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <a href="https://www.linkedin.com/in/dinaneishtadt/" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover:text-blue-600 transition-colors inline-flex items-center gap-2">
                  דינה ניישטאט (Dina Neishtadt)
                  <Linkedin className="inline h-5 w-5" />
                </a>
              </h3>
              <p className="mb-4">
                מובילת מוצר ויועצת אסטרטגית המשלבת חשיבה רב-תחומית עם ראייה גלובלית. עם ניסיון של למעלה מ-15 שנים בתחומי הטכנולוגיה, עיצוב ובינה מלאכותית.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-t from-purple-50 to-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">צור קשר</h2>
          <p className="text-xl mb-8">
            <a href="mailto:dinkan@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">
              dinkan@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
