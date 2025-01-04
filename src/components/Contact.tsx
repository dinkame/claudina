import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Facebook, Linkedin, Twitter } from "lucide-react";
import { trackClick } from "../hooks/useTracking";

const Contact = () => (
  <section className="py-24 bg-gray-900">
    <div className="container px-4 mx-auto">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">צור קשר</h2>
        
        <div className="grid gap-8">
          {/* Email Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white mb-4">דוא״ל</h3>
            <p className="text-xl">
              <a 
                href="mailto:dina@claudina.co.il" 
                className="text-blue-300 hover:text-blue-400 transition-colors hover:underline"
                onClick={() => trackClick('email_link')}
              >
                dina@claudina.co.il
              </a>
            </p>
          </div>

          {/* WhatsApp Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white mb-4">הודעה מיידית</h3>
            <Button
              variant="default"
              className="bg-green-600 hover:bg-green-700 transition-colors"
              onClick={() => {
                trackClick('whatsapp_button');
                window.open('https://wa.me/972547341867', '_blank');
              }}
            >
              <MessageCircle className="mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white mb-4">רשתות חברתיות</h3>
            <div className="flex justify-center gap-6">
              <a 
                href="https://www.linkedin.com/in/dinaneishtadt/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick('linkedin_link')}
                className="text-blue-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={32} />
              </a>
              <a 
                href="https://x.com/DinkaMe"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick('twitter_link')}
                className="text-blue-300 hover:text-blue-400 transition-colors"
              >
                <Twitter size={32} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61571270376286"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick('facebook_link')}
                className="text-blue-300 hover:text-blue-400 transition-colors"
              >
                <Facebook size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;