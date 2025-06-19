"use client";
import React, { useEffect, useState, useRef } from "react";
import { Loader } from "../loader";

interface InfiniteScrollerProps {
  loadMore: () => Promise<void>; // Функция для загрузки новых данных
  hasMore: boolean; // Есть ли еще данные для загрузки
  scrollParent?: HTMLElement | null; // Родительский элемент для скролла
  children: React.ReactNode; // Дочерние элементы
  className?: string;
}

const InfiniteScroller: React.FC<InfiniteScrollerProps> = ({
  loadMore,
  hasMore,
  scrollParent,
  children,
  className = "",
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasMore || isLoading) return;

    const options = {
      root: scrollParent || null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && !isLoading) {
        setIsLoading(true);
        loadMore().finally(() => setIsLoading(false));
      }
    };

    observer.current = new IntersectionObserver(handleObserver, options);

    if (loaderRef.current) {
      observer.current.observe(loaderRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [hasMore, isLoading, scrollParent, loadMore]);

  return (
    <div className={className}>
      {children}
      {hasMore && (
        <div className="text-center h-5 col-span-full my-2" ref={loaderRef}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default InfiniteScroller;
