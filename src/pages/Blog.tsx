import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: "קלודינה - המדריך המלא",
    content: "כיצד קלודינה יכולה לעזור לעסק שלך לצמוח ולהתפתח בעידן הדיגיטלי",
    createdAt: "2024-03-10"
  },
  {
    id: '2',
    title: "טיפים לניהול עסק מצליח",
    content: "חמשת הטיפים החשובים ביותר לניהול עסק מצליח בשנת 2024",
    createdAt: "2024-03-09"
  }
];

const Blog = () => {
  const { t } = useTranslation();
  const { data: posts, isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      // This is a mock implementation - will be replaced with real API call
      return mockPosts;
    }
  });

  if (isLoading) {
    return <div className="flex justify-center p-8">{t('blog.loading')}</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">{t('blog.title')}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{post.title}</CardTitle>
              <p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{post.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;