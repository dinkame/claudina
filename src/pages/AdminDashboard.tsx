import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useTranslation } from 'react-i18next';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useTranslation();
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a mock implementation - will be replaced with real API call
    toast({
      title: t('admin.dashboard.newPost.success'),
    });
    setTitle('');
    setContent('');
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/admin/login');
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{t('admin.dashboard.title')}</h1>
        <Button variant="outline" onClick={handleLogout}>{t('admin.dashboard.logout')}</Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>{t('admin.dashboard.newPost.title')}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder={t('admin.dashboard.newPost.titlePlaceholder')}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <Textarea
                placeholder={t('admin.dashboard.newPost.contentPlaceholder')}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[200px]"
              />
            </div>
            <Button type="submit">{t('admin.dashboard.newPost.submit')}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;