'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import { toast } from 'sonner';
import { contactSchema } from '@/lib/validations/contact';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      await response.json();

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '메시지 전송에 실패했습니다.');
      }

      toast.success('메시지가 성공적으로 전송되었습니다!');
      reset();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message || '메시지 전송 중 오류가 발생했습니다.');
      } else {
        toast.error('알 수 없는 오류가 발생했습니다.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            이름
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiUser className="h-5 w-5 text-gray-400 group-hover:text-brand-primary transition-colors" />
            </div>
            <Input
              placeholder="닉네임을 입력해주세요"
              className="pl-12 h-12 bg-white/80 dark:bg-gray-700/80 border-gray-200 dark:border-gray-600 focus:border-brand-primary dark:focus:border-brand-primary focus:ring-brand-primary/20 transition-all duration-200"
              disabled={isSubmitting}
              {...register('name')}
            />
          </div>
          {errors.name && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-500 flex items-center gap-1"
            >
              <span>⚠️</span>
              {errors.name.message}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            이메일
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiMail className="h-5 w-5 text-gray-400 group-hover:text-brand-secondary transition-colors" />
            </div>
            <Input
              type="email"
              placeholder="이메일 주소를 입력해주세요"
              className="pl-12 h-12 bg-white/80 dark:bg-gray-700/80 border-gray-200 dark:border-gray-600 focus:border-brand-secondary dark:focus:border-brand-secondary focus:ring-brand-secondary/20 transition-all duration-200"
              disabled={isSubmitting}
              {...register('email')}
            />
          </div>
          {errors.email && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-500 flex items-center gap-1"
            >
              <span>⚠️</span>
              {errors.email.message}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            메시지
          </label>
          <div className="relative group">
            <div className="absolute top-4 left-4">
              <FiMessageSquare className="h-5 w-5 text-gray-400 group-hover:text-brand-accent transition-colors" />
            </div>
            <Textarea
              placeholder="프로젝트에 대한 아이디어나 협업 제안을 자유롭게 공유해주세요..."
              className="min-h-[150px] pl-12 pt-4 bg-white/80 dark:bg-gray-700/80 border-gray-200 dark:border-gray-600 focus:border-brand-accent dark:focus:border-brand-accent focus:ring-brand-accent/20 transition-all duration-200 resize-none"
              disabled={isSubmitting}
              {...register('message')}
            />
          </div>
          {errors.message && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-500 flex items-center gap-1"
            >
              <span>⚠️</span>
              {errors.message.message}
            </motion.p>
          )}
        </motion.div>

        <motion.div 
          className="pt-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 gap-3 group relative overflow-hidden"
          >
            {/* 배경 애니메이션 */}
            <motion.div
              className="absolute inset-0 bg-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
            />
            
            <div className="relative z-10 flex items-center gap-3">
              {isSubmitting ? (
                <>
                  <motion.svg
                    className="h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </motion.svg>
                  전송 중...
                </>
              ) : (
                <>
                  <FiSend className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  메시지 보내기
                </>
              )}
            </div>
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
}
