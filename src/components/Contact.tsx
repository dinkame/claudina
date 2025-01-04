import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Linkedin, Twitter, Facebook } from "lucide-react";
import { trackClick } from "../hooks/useTracking";

const Contact = () => (
  <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
    <div className="container px-4 mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">צור קשר</h2>
          <p className="text-gray-400 text-lg">נשמח לעמוד לרשותכם בכל שאלה</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Email Section */}
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-blue-500/10 rounded-full">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">דוא״ל</h3>
              <a 
                href="mailto:dina@claudina.co.il" 
                className="text-blue-400 hover:text-blue-300 transition-colors hover:underline"
                onClick={() => trackClick('email_link')}
              >
                dina@claudina.co.il
              </a>
            </div>
          </div>

          {/* WhatsApp Section */}
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-green-500/50 transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-green-500/10 rounded-full">
                <MessageCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">הודעה מיידית</h3>
              <Button
                variant="default"
                className="bg-green-600 hover:bg-green-500 transition-colors"
                onClick={() => {
                  trackClick('whatsapp_button');
                  window.open('https://wa.me/972547341867', '_blank');
                }}
              >
                <MessageCircle className="mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <h3 className="text-xl font-semibold text-white">רשתות חברתיות</h3>
              <div className="flex justify-center gap-6">
                <a 
                  href="https://www.linkedin.com/in/dinaneishtadt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClick('linkedin_link')}
                  className="p-3 bg-gray-700/50 rounded-full hover:bg-blue-500/20 transition-colors group"
                >
                  <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />
                </a>
                <a 
                  href="https://x.com/DinkaMe"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClick('twitter_link')}
                  className="p-3 bg-gray-700/50 rounded-full hover:bg-blue-500/20 transition-colors group"
                >
                  <Twitter className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61571270376286"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClick('facebook_link')}
                  className="p-3 bg-gray-700/50 rounded-full hover:bg-blue-500/20 transition-colors group"
                >
                  <Facebook className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;