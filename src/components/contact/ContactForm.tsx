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

      const result = await response.json();

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
      transition={{ duration: 0.1 }}
      className="w-full max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        연락하기
      </h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiUser className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              placeholder="닉네임"
              className="pl-10"
              disabled={isSubmitting}
              {...register('name')}
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiMail className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="email"
              placeholder="이메일"
              className="pl-10"
              disabled={isSubmitting}
              {...register('email')}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <div className="relative">
            <div className="absolute top-3 left-3">
              <FiMessageSquare className="h-5 w-5 text-gray-400" />
            </div>
            <Textarea
              placeholder="메시지를 입력해 주세요"
              className="min-h-[150px] pl-10"
              disabled={isSubmitting}
              {...register('message')}
            />
          </div>
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="gap-2"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
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
                </svg>
                전송 중...
              </>
            ) : (
              <>
                <FiSend className="h-4 w-4" />
                메시지 보내기
              </>
            )}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
