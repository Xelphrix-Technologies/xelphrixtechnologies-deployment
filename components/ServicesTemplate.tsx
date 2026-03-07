"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Cloud,
  Cpu,
  ShieldCheck,
  Workflow,
  Sparkles,
  LineChart,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface DetailedServiceProps {
  title: string;
  description: string;
  points: string[];
  reverse: boolean;
  image: string;
}

interface ProcessStepProps {
  step: string;
  title: string;
  detail: string;
}

export default function ServicesTemplate() {
  return (
    <div className="bg-[#EAEFEF]">
      <section className="relative overflow-hidden bg-[#25343F] px-6 py-36 text-center">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#FF9B51]/15 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#FFF9B5]/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <span className="inline-flex items-center rounded-full border border-[#BFC9D1]/30 bg-[#2F3A44]/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#BFC9D1]">
            Enterprise Engineering Services
          </span>

          <h1 className="mt-8 text-5xl font-bold text-[#EAEFEF] md:text-6xl">
            Premium Digital Engineering
            <span className="block text-[#FF9B51]">Built for Scale and Trust</span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg text-[#BFC9D1] md:text-xl">
            We design high-performance systems across cloud, SaaS, and automation with a focus
            on reliability, security, and measurable business outcomes.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            <StatPill title="99.9%" subtitle="Uptime-led architecture" />
            <StatPill title="Cloud Native" subtitle="Modern AWS delivery" />
            <StatPill title="Enterprise" subtitle="Security-first engineering" />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FF9B51] px-8 py-3 font-semibold text-[#25343F] transition hover:bg-[#FFF9B5]"
            >
              Schedule Consultation
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/products"
              className="rounded-xl border border-[#BFC9D1]/40 px-8 py-3 font-semibold text-[#EAEFEF] transition hover:bg-[#2F3A44]"
            >
              View Product Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-[#25343F] md:text-4xl">What We Deliver</h2>
          <p className="mx-auto mt-5 max-w-2xl text-[#596A78]">
            End-to-end capabilities across architecture, engineering, automation, and digital growth.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <ServiceCard
              icon={<Cpu size={22} />}
              title="Custom Software Engineering"
              desc="Scalable web applications, internal tools, and enterprise systems with clean architecture and maintainable codebases."
            />
            <ServiceCard
              icon={<Cloud size={22} />}
              title="Cloud Architecture and Migration"
              desc="High-availability cloud foundations, migration planning, and performance optimization for business-critical workloads."
            />
            <ServiceCard
              icon={<Workflow size={22} />}
              title="DevOps and Delivery Automation"
              desc="CI/CD, infrastructure as code, observability, and release automation that accelerate delivery without sacrificing quality."
            />
            <ServiceCard
              icon={<ShieldCheck size={22} />}
              title="Security and Compliance"
              desc="Identity controls, secure configurations, and governance practices to protect systems and reduce operational risk."
            />
            <ServiceCard
              icon={<LineChart size={22} />}
              title="Data and Analytics"
              desc="Executive dashboards, operational reporting, and analytics pipelines that support faster business decisions."
            />
            <ServiceCard
              icon={<Sparkles size={22} />}
              title="Digital Experience and Brand"
              desc="Premium interfaces and cohesive visual systems designed to increase trust, engagement, and conversion."
            />
          </div>
        </div>
      </section>

      <DetailedService
        title="Cloud Architecture and Migration"
        description="We engineer cloud foundations that are resilient, cost-aware, and ready for enterprise-scale growth from day one."
        points={[
          "Multi-region high availability design",
          "VPC, compute, and data-layer architecture",
          "Security controls and compliance guardrails",
          "Cost monitoring and optimization strategy",
        ]}
        reverse={false}
        image="/images/cloud-migration.png"
      />

      <DetailedService
        title="Custom SaaS Development"
        description="From MVP to mature product, we build SaaS platforms with strong domain models, reliable APIs, and clear scalability paths."
        points={[
          "Scalable backend and API architecture",
          "Multi-tenant capabilities and isolation",
          "Role-based access and governance",
          "Usage analytics and reporting systems",
        ]}
        reverse={true}
        image="/images/saas.jpg"
      />

      <DetailedService
        title="DevOps and CI/CD Automation"
        description="We streamline software delivery with practical automation, measurable release safety, and production-grade observability."
        points={[
          "Automated build, test, and deploy pipelines",
          "Containerization and environment parity",
          "Monitoring, alerts, and incident readiness",
          "Secure release management workflows",
        ]}
        reverse={false}
        image="/images/devops.png"
      />

      <section className="bg-white px-6 py-28 text-center">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#25343F] md:text-4xl">Our Delivery Framework</h2>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            <ProcessStep
              step="01"
              title="Discovery"
              detail="Business context, technical baseline, and success metrics."
            />
            <ProcessStep
              step="02"
              title="Architecture"
              detail="Scalable blueprint, risk controls, and implementation plan."
            />
            <ProcessStep
              step="03"
              title="Execution"
              detail="Incremental delivery with quality checks and visibility."
            />
            <ProcessStep
              step="04"
              title="Scale"
              detail="Optimization, governance, and long-term performance tuning."
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-28 text-center">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#BFC9D1]/40 bg-white p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-[#25343F]">Why Teams Choose Xelphrix</h2>
          <p className="mt-5 text-[#596A78]">
            We combine architecture discipline with product thinking, so every engagement improves
            speed, reliability, and confidence in your digital platform.
          </p>
          <div className="mt-8 grid gap-3 text-left sm:grid-cols-2">
            <CheckLine text="Architecture decisions tied to business outcomes" />
            <CheckLine text="Reliable execution with transparent delivery" />
            <CheckLine text="Security and scalability built in from the start" />
            <CheckLine text="Long-term support for continuous improvement" />
          </div>
        </div>
      </section>

      <section className="bg-[#25343F] px-6 py-32 text-center">
        <h2 className="text-3xl font-bold text-[#EAEFEF]">
          Ready to Build a Premium Digital Platform?
        </h2>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#FF9B51] px-8 py-3 font-semibold text-[#25343F] transition hover:bg-[#FFF9B5]"
        >
          Book a Strategy Call
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}

function StatPill({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-2xl border border-[#BFC9D1]/20 bg-[#2F3A44]/60 px-4 py-4 backdrop-blur">
      <p className="text-lg font-bold text-[#EAEFEF]">{title}</p>
      <p className="mt-1 text-xs text-[#BFC9D1]">{subtitle}</p>
    </div>
  );
}

function ServiceCard({ title, desc, icon }: ServiceCardProps) {
  return (
    <div className="group rounded-2xl border border-[#BFC9D1]/40 bg-white p-8 text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl hover:border-[#FF9B51]/70">
      <div className="mb-5 inline-flex rounded-xl bg-[#FF9B51]/10 p-3 text-[#FF9B51]">{icon}</div>
      <h3 className="text-xl font-semibold text-[#25343F]">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[#596A78]">{desc}</p>
    </div>
  );
}

function DetailedService({ title, description, points, reverse, image }: DetailedServiceProps) {
  return (
    <section className={`px-6 py-24 ${reverse ? "bg-white" : "bg-[#EAEFEF]"}`}>
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <div className={reverse ? "md:order-2" : ""}>
          <h2 className="text-3xl font-bold text-[#25343F]">{title}</h2>
          <p className="mt-5 text-[#596A78]">{description}</p>

          <ul className="mt-8 space-y-3">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-[#596A78]">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#FF9B51]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`relative h-80 w-full overflow-hidden rounded-3xl border border-[#BFC9D1]/30 shadow-xl ${reverse ? "md:order-1" : ""}`}>
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, title, detail }: ProcessStepProps) {
  return (
    <div className="rounded-2xl border border-[#BFC9D1]/40 bg-[#EAEFEF] p-7 text-left">
      <p className="text-sm font-bold tracking-wider text-[#FF9B51]">STEP {step}</p>
      <h3 className="mt-2 text-xl font-semibold text-[#25343F]">{title}</h3>
      <p className="mt-3 text-sm text-[#596A78]">{detail}</p>
    </div>
  );
}

function CheckLine({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 rounded-lg bg-[#EAEFEF] px-3 py-2 text-sm text-[#25343F]">
      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#FF9B51]" />
      <span>{text}</span>
    </div>
  );
}
