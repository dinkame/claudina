import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div dir="rtl" className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-purple-50 to-white">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            קלודינה
          </h1>
          <p className="text-2xl mb-4">תומכת בעסקים של מחר</p>
          <p className="text-xl text-muted-foreground">
            ליווי המסע שלכם אל העתיד, יד ביד עם האנשים בדרך
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">שירותי החברה</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>ייעול תהליכים</CardTitle>
              </CardHeader>
              <CardContent>
                <p>מאבחון המצב הקיים וזיהוי חסמים, דרך תכנון והתאמת פתרונות טכנולוגיים, ועד הטמעה מקצועית הכוללת ליווי אישי</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>ניהול מוצר</CardTitle>
              </CardHeader>
              <CardContent>
                <p>מאפיון ותיעוד צרכים, דרך ניתוח נתונים וניהול מפת דרכים, ועד זיהוי הזדמנויות צמיחה, פיתוח שותפויות ויצירת חומרי מכירה מותאמים</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">מה לקוחות אומרים עלינו</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <Avatar className="w-16 h-16 mb-4">
                    <AvatarFallback>גיא</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold">גיא</h3>
                  <p className="text-sm text-muted-foreground">מנהל מערכות מידע</p>
                </div>
                <p className="text-center">נדהמתי לגלות כמה מידע חשוב עלה בראיון העומק שערכו איתי. המומחה ידע בדיוק איזה שאלות לשאול כדי להבין את הצרכים האמיתיים שלנו.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <Avatar className="w-16 h-16 mb-4">
                    <AvatarFallback>מורן</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold">מורן</h3>
                  <p className="text-sm text-muted-foreground">מנהלת מחלקה</p>
                </div>
                <p className="text-center">כמנהלת עסק, הזמן שלי מוקדש לליבה העסקית. לא היה לי מושג איך טכנולוגיה יכולה לייעל את העבודה שלנו.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <Avatar className="w-16 h-16 mb-4">
                    <AvatarFallback>אסתר</AvatarFallback>
                  </Avatar>
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
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">על המקימה</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <Avatar className="w-48 h-48 mx-auto">
                <AvatarFallback>דינה</AvatarFallback>
              </Avatar>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">דינה ניישטאט</h3>
              <p className="mb-4">
                מובילת מוצר ויועצת אסטרטגית המשלבת חשיבה רב-תחומית עם ראייה גלובלית. עם ניסיון של למעלה מ-15 שנים בתחומי הטכנולוגיה, עיצוב ובינה מלאכותית.
              </p>
              <Button variant="outline" className="mt-4">
                צור קשר
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">צור קשר</h2>
          <p className="text-xl mb-8">dinkan@gmail.com</p>
          <Button size="lg">
            שלח הודעה
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;