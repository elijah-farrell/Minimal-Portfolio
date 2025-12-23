"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function BlogSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-8 pb-10 border-t border-[#f5f5f5] dark:border-[#1f1f1f] bg-white dark:bg-[#171717] section-with-inset-shadow">
      <TextGenerateEffect words="Latest Thoughts" asHeading={true} staggerDelay={0.15} />

      {/* List: two most recent posts in simple stacked layout, both clickable */}
      <div className="space-y-6 mb-10">
        {/* Transitioning from Frontend to Full-Stack */}
        <Link href="/blog/transitioning-from-frontend-to-fullstack" className="group block">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                Transitioning from Frontend to Full-Stack
              </h3>
              <p className="text-sm text-[#737373] dark:text-[#737373] mb-2 leading-relaxed">
                My journey from focusing solely on frontend development to becoming a full-stack engineer. Tips and resources that helped along the way.
              </p>
              <div className="flex items-center gap-4 text-xs text-[#737373] dark:text-[#737373]">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>Aug 15, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>6 min read</span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* My Development Workflow Setup */}
        <Link href="/blog/my-development-workflow-setup" className="group block">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                My Development Workflow Setup
              </h3>
              <p className="text-sm text-[#737373] dark:text-[#737373] mb-2 leading-relaxed">
                A detailed look at the tools, extensions, and configurations that make up my daily development workflow in 2023.
              </p>
              <div className="flex items-center gap-4 text-xs text-[#737373] dark:text-[#737373]">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>Aug 5, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>10 min read</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* View All Posts Button */}
      <div className="text-center mt-10">
        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 mx-auto">
          View all posts
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}




