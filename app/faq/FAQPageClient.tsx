"use client";

import { useState, useMemo } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { FAQS, FAQ_CATEGORIES } from "@/lib/data/faqs";
import Link from "next/link";

export default function FAQPageClient() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return FAQS;
    return FAQS.filter(
      (f) =>
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q) ||
        f.category.toLowerCase().includes(q)
    );
  }, [search]);

  const grouped = useMemo(() => {
    return FAQ_CATEGORIES.map((cat) => ({
      category: cat,
      items: filtered.filter((f) => f.category === cat),
    })).filter((g) => g.items.length > 0);
  }, [filtered]);

  return (
    <>
      {/* Search */}
      <div className="relative max-w-xl mx-auto mb-12">
        <svg
          viewBox="0 0 24 24"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 stroke-gray-400 fill-none stroke-2 pointer-events-none"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          id="faq-search"
          type="text"
          placeholder="Search questions…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#0E7490] focus:ring-2 focus:ring-[#0E7490]/20 text-sm transition-colors bg-white shadow-sm"
          aria-label="Search FAQ questions"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      {grouped.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg">No results for &ldquo;{search}&rdquo;</p>
          <p className="text-sm mt-2">Try a different search term.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          {grouped.map((group) => (
            <div key={group.category}>
              <h2 className="text-xl font-bold text-[#0D2D4E] mb-4 pb-2 border-b border-gray-200">
                {group.category}
              </h2>
              <Accordion.Root type="multiple" className="flex flex-col gap-3">
                {group.items.map((faq) => (
                  <Accordion.Item
                    key={faq.id}
                    value={faq.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger
                        id={`faq-trigger-${faq.id}`}
                        className="group flex w-full items-center justify-between px-6 py-4 text-left text-sm font-semibold text-[#0D2D4E] hover:text-[#0E7490] transition-colors"
                      >
                        <span>{faq.question}</span>
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4 flex-shrink-0 stroke-current fill-none stroke-2 transition-transform duration-200 group-data-[state=open]:rotate-180 ml-4"
                          aria-hidden="true"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-none">
                      <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        <p>{faq.answer}</p>
                        {faq.cta && (
                          <div className="mt-3">
                            {faq.cta.href.startsWith("http") || faq.cta.href.startsWith("tel:") ? (
                              <a
                                href={faq.cta.href}
                                target={faq.cta.href.startsWith("http") ? "_blank" : undefined}
                                rel={faq.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="text-[#0E7490] font-medium hover:underline"
                              >
                                {faq.cta.label}
                              </a>
                            ) : (
                              <Link href={faq.cta.href} className="text-[#0E7490] font-medium hover:underline">
                                {faq.cta.label}
                              </Link>
                            )}
                          </div>
                        )}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
