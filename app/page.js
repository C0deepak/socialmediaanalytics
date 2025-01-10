import { Button } from "@/components/ui/button";
import { ArrowRight, Stars } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="pt-28 lg:pt-32 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover">
      <div className="mx-auto max-w-7xl px-4 md:px-16 relative text-center">
        <div className="border border-primary p-1 w-fit mx-auto rounded-full flex items-center justify-between mb-4">
          <span className="font-inter text-xs font-medium text-foreground ml-3">
            Insights that drive engagement.
          </span>
          <span
            href="javascript:;"
            className="w-8 h-8 rounded-full flex justify-center items-center bg-primary ml-2"
          >
            <ArrowRight size={16} className="text-white" />
          </span>
        </div>
        <h1 className="max-w-3xl mx-auto text-center font-bold text-4xl text-foreground mb-5 md:text-5xl leading-[50px]">
          Transform Your Social Media Data into
          <span className="text-primary"> Actionable Insights</span>
        </h1>
        <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-muted-foreground mb-9">
          Unveiling insights from your posts—track performance, compare trends,
          and optimize for success.
        </p>
        <Button asChild className='rounded-full mb-14'>
          <Link href="/analyze">
            Analyze
            <Stars size={16} className="ml-2" />
          </Link>
        </Button>
        <div className="flex justify-center">
          <img
            src="https://pagedone.io/asset/uploads/1691054543.png"
            alt="Dashboard image"
          />
        </div>
      </div>
    </section>
  );
}
