import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => (
  <section className="py-24 bg-gray-900">
    <div className="container px-4 mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 text-white">שירותי החברה</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-white/95 overflow-hidden border-0 shadow-lg">
          <div className="h-48 overflow-hidden">
            <img 
              src="/lovable-uploads/50835bd6-aab0-43a9-a708-7f9cd1138e87.png" 
              alt="Process Optimization" 
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">ייעול תהליכים</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">מאבחון המצב הקיים וזיהוי חסמים, דרך תכנון והתאמת פתרונות טכנולוגיים, ועד הטמעה מקצועית הכוללת ליווי אישי</p>
          </CardContent>
        </Card>

        <Card className="bg-white/95 overflow-hidden border-0 shadow-lg">
          <div className="h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
              alt="Product Management" 
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">ניהול מוצר</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">מאפיון ותיעוד צרכים, דרך ניתוח נתונים וניהול מפת דרכים, ועד זיהוי הזדמנויות צמיחה, פיתוח שותפויות ויצירת חומרי מכירה מותאמים</p>
          </CardContent>
        </Card>

        <Card className="bg-white/95 overflow-hidden border-0 shadow-lg">
          <div className="h-48 overflow-hidden">
            <img 
              src="/lovable-uploads/da9003fb-92a7-48b8-99e4-e7c1fe88c48b.png" 
              alt="Strategic Planning" 
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">תכנון אסטרטגי</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">הגדרת חזון מוצר, ניתוח השוק, המוצרים המתחרים, מציאת מוצרים להשראה ויצירת אסטרטגיה עסקית ביחד עם הלקוח</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default Services;