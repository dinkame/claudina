import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useTranslation } from 'react-i18next';

const AdminLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useTranslation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a mock implementation - will be replaced with real authentication
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('isAdminLoggedIn', 'true');
      toast({
        title: t('admin.login.success'),
      });
      navigate('/admin/dashboard');
    } else {
      toast({
        title: t('admin.login.error'),
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">{t('admin.login.title')}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder={t('admin.login.username')}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder={t('admin.login.password')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">{t('admin.login.submit')}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;