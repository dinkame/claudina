import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Linkedin, Twitter, Facebook } from "lucide-react";
import { trackClick } from "../hooks/useTracking";

const Contact = () => (
  <section className="relative min-h-screen py-24 overflow-hidden">
    {/* Background with gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></div>
    </div>

    <div className="container relative px-4 mx-auto">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 animate-fade-in">צור קשר</h2>
          <p className="text-gray-300 text-lg animate-fade-in delay-100">נשמח לעמוד לרשותכם בכל שאלה</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Email Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
            <div className="relative h-full p-8 rounded-2xl backdrop-blur-md border border-white/10 bg-white/10 transition-all duration-300 group-hover:bg-white/20">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">דוא״ל</h3>
                <a 
                  href="mailto:dina@claudina.co.il" 
                  className="text-blue-300 hover:text-blue-200 transition-colors hover:underline"
                  onClick={() => trackClick('email_link')}
                >
                  dina@claudina.co.il
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
            <div className="relative h-full p-8 rounded-2xl backdrop-blur-md border border-white/10 bg-white/10 transition-all duration-300 group-hover:bg-white/20">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-green-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">הודעה מיידית</h3>
                <Button
                  variant="default"
                  className="bg-green-500/80 hover:bg-green-400/80 transition-all duration-300 backdrop-blur-sm"
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
          </div>

          {/* Social Media Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
            <div className="relative h-full p-8 rounded-2xl backdrop-blur-md border border-white/10 bg-white/10 transition-all duration-300 group-hover:bg-white/20">
              <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-semibold text-white">רשתות חברתיות</h3>
                <div className="flex justify-center gap-6">
                  <a 
                    href="https://www.linkedin.com/in/dinaneishtadt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClick('linkedin_link')}
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 group/icon hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6 text-blue-300 group-hover/icon:text-blue-200" />
                  </a>
                  <a 
                    href="https://x.com/DinkaMe"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClick('twitter_link')}
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 group/icon hover:scale-110"
                  >
                    <Twitter className="w-6 h-6 text-blue-300 group-hover/icon:text-blue-200" />
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61571270376286"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClick('facebook_link')}
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 group/icon hover:scale-110"
                  >
                    <Facebook className="w-6 h-6 text-blue-300 group-hover/icon:text-blue-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;