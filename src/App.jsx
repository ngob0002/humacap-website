import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Users, CheckCircle, ArrowRight, ArrowLeft, Stethoscope, Pill, Play, CreditCard, Lock, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Briefcase, GraduationCap, Activity, TrendingUp, Globe, AlertCircle, Wrench, Percent, PieChart, Video, MessageCircle, HelpCircle, ArrowDown, Utensils, Heart, FileText } from 'lucide-react';
import './App.css';

// --- DATA ---
const COURSES_DATA = [
  { id: 'pharm-osce', title: "Pharmacist Qualifying Exam Part II (OSCE)", price: 1195, features: ["50+ Case Scenarios", "Live 1-on-1 Feedback", "Standardized Patient Videos"], popular: true, stripeUrl: 'https://buy.stripe.com/00w3cv4Kr7G09LW4bl57W00' },
  { id: 'tech-osce', title: "Pharmacy Technician Qualifying Exam", price: 950, features: ["Focused topic review", "Mock exams", "Flashcards"], stripeUrl: 'https://buy.stripe.com/eVq3cv90HaScaQ08rB57W01' },
  { id: 'pharm-math', title: "Pharmacy Math Course", price: 299, features: ["Calculations masterclass", "Practice problems", "Formula sheets"], stripeUrl: 'https://buy.stripe.com/test_9B6aEQ9L6eYa0KU6sR9AA00' },
  { id: 'free-resources', title: "Free Resources", price: 0, features: ["Exam Guide 2026", "Sample Lectures", "Jurisprudence Quiz"], isFree: true }
];

// --- PAGES ---

// 1. CORPORATE LANDING PAGE
const HomePage = ({ navigate }) => (
  <div className="corporate-landing">
    {/* Corporate Hero */}
    <section className="corporate-hero section">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="pill-badge">Humacap Training Solutions</span>
          <h1 className="corporate-title">Expert Training & Strategic Coaching for <span className="text-teal">Professionals and Growing Businesses</span></h1>

          <div className="max-w-4xl mx-auto mt-8 mb-10 text-left md:text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In complex environments, success depends on clarity — clarity in knowledge, decisions, and execution.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We provide expert-led training and advisory services that help professionals pass critical exams and businesses grow with structure and confidence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              Our approach combines clinical expertise, executive strategy, and practical education to deliver measurable outcomes across two core areas.
            </p>
          </div>

          <div className="flex gap-4 justify-center mt-8">
            <button className="btn btn-primary large" onClick={() => document.getElementById('expertise').scrollIntoView({ behavior: 'smooth' })}>Explore Our Services</button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Three Pillars - Core Services */}
    <section id="expertise" className="section bg-white border-t border-gray-100">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Column 1: PEBC Coaching */}
          <motion.div className="pillar-card glass-card flex flex-col" whileHover={{ y: -10 }} style={{ height: '100%' }}>
            <div className="icon-box teal mb-6"><BookOpen size={32} /></div>
            <h3 className="text-xl font-bold text-navy mb-4">Professional Exam Mastery</h3>
            <p className="text-gray-600 mb-6 flex-1">Structured PEBC&reg; OSCE coaching for pharmacists and pharmacy technicians designed to build confidence, sharpen clinical reasoning, and ensure exam readiness.</p>
            <button className="btn btn-text text-teal mt-auto" onClick={() => navigate('pharmacy')}>Explore PEBC Coaching &rarr;</button>
          </motion.div>

          {/* Health Optimization logic removed */}

          {/* Column 3: Business Consulting */}
          <motion.div className="pillar-card glass-card flex flex-col" whileHover={{ y: -10 }} style={{ height: '100%' }}>
            <div className="icon-box teal mb-6"><TrendingUp size={32} /></div>
            <h3 className="text-xl font-bold text-navy mb-4">Business Training and Advisory</h3>
            <p className="text-gray-600 mb-6 flex-1">Strategic coaching for small and medium enterprises seeking operational clarity, scalable systems, and sustainable growth.</p>
            <button className="btn btn-text text-teal mt-auto" onClick={() => navigate('business-consulting')}>Explore Business Advisory &rarr;</button>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Authority Section */}
    <section className="section bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-1 bg-teal mx-auto mb-8"></div>
          <h2 className="text-3xl font-bold text-navy mb-6">Expert-Led Authority</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Led by an experienced pharmacist, educator, and executive strategist, our programs are grounded in real-world expertise and structured frameworks designed to produce practical results.
          </p>
          <p className="text-lg font-medium text-navy">
            We believe informed decisions create better outcomes — in careers and business.
          </p>
        </div>
      </div>
    </section>

  </div>
);



// 3. BUSINESS CONSULTING PATH
const BusinessConsultingPath = ({ navigate }) => (
  <div className="corporate-landing">
    {/* Hero Section */}
    <section className="section bg-white text-navy" style={{ padding: '6rem 2rem' }}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="pill-badge bg-teal text-white mb-4 inline-block">Boutique Executive Consultancy</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy">Strategic Clarity for Growing Businesses</h1>
            <p className="text-xl text-gray-600 mb-8">
              We help pharmacy owners and healthcare executives escape the "growth trap" — moving from chaotic operations to scalable, data-driven systems.
            </p>
            <div className="flex gap-4">
              <button className="btn btn-primary large shadow-lg" onClick={() => document.getElementById('framework').scrollIntoView({ behavior: 'smooth' })}>Explore Our Framework</button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden md:block">
            {/* Abstract Graphic */}
            <div className="glass-card p-8 bg-gray-50 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <TrendingUp size={48} className="text-teal" />
                <div>
                  <h3 className="font-bold text-xl text-navy">Growth Velocity</h3>
                  <p className="text-sm text-gray-500">Sustainable scaling strategies</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-2 bg-gray-200 rounded full-width relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full bg-teal w-3/4"></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Operational Efficiency</span>
                  <span className="text-teal font-bold">+45%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* The Problem: Growth Trap */}
    <section className="section bg-white border-y border-gray-100">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-6">The "Growth Trap"</h2>
            <p className="text-lg text-gray-600 mb-6">Most service-based businesses hit a ceiling. You've grown through hard work, but now you're stuck in daily operations, putting out fires instead of building strategy.</p>
            <ul className="space-y-4 no-bullets">
              {[
                "Revenue has plateaued despite working harder",
                "Team dependency on the founder for every decision",
                "Lack of clear, repeatable systems",
                "Unpredictable growth metrics"
              ].map((issue, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <AlertCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{issue}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card border-l-4 border-navy">
            <h3 className="text-xl font-bold text-navy mb-4">The Solution: Strategic Alignment</h3>
            <p className="mb-4">We don't just give advice; we build the infrastructure for your next stage of growth.</p>
            <ul className="space-y-4 no-bullets">
              <li className="flex gap-3">
                <CheckCircle className="text-teal flex-shrink-0" size={20} />
                <div>
                  <strong className="block text-navy">Operational Systems</strong>
                  <span className="text-sm text-gray-600">Documented workflows that reduce dependency on you.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-teal flex-shrink-0" size={20} />
                <div>
                  <strong className="block text-navy">Financial Clarity</strong>
                  <span className="text-sm text-gray-600">Profit-first models and KPI dashboards.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-teal flex-shrink-0" size={20} />
                <div>
                  <strong className="block text-navy">Leadership Development</strong>
                  <span className="text-sm text-gray-600">Training your team to think like owners.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Framework / Timeline */}
    <section className="section" id="framework">
      <div className="container">
        <div className="section-header">
          <h2>Our Advisory Framework</h2>
          <p>A proven three-phase approach to business transformation.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Diagnosis & Insight", icon: <Activity />, desc: "We audit your current operations, financials, and team structure to identify bottlenecks." },
            { title: "Strategic Design", icon: <MapPin />, desc: "We build a custom roadmap, defining the systems, roles, and metrics needed for scale." },
            { title: "Execution & Optimization", icon: <TrendingUp />, desc: "We work alongside you to implement changes, train your team, and refine the model." }
          ].map((step, i) => (
            <div key={i} className="glass-card hover-lift relative overflow-hidden">
              <div className="text-teal flex items-center gap-3 mb-4">
                {React.cloneElement(step.icon, { size: 32 })}
                <span className="font-bold text-2xl opacity-40">{i + 1}</span>
              </div>
              <h3 className="font-bold text-xl text-navy mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Authority */}
    <section className="section bg-white text-navy border-t border-gray-100">
      <div className="container">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-navy">Consulting with Real-World Experience</h2>
            <p className="text-lg text-gray-600 mb-6">
              Uche Isiuwe brings over 25 years of executive leadership, pharmacy management, and business strategy experience.
            </p>
            <p className="text-gray-500 mb-6 italic">
              "I've sat in the manager's chair. I know the pressure of payroll, regulatory compliance, and patient care. My consulting isn't academic — it's built on decades of operational reality."
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="font-bold text-3xl text-teal">25+</div>
                <div className="text-xs uppercase tracking-wider text-gray-400">Years Exp.</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-3xl text-teal">MBA</div>
                <div className="text-xs uppercase tracking-wider text-gray-400">Strategic Mgmt</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA - Moved Up */}
    <section className="section text-center" id="pricing">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-navy mb-6">Ready to Scale with Clarity?</h2>
        <p className="text-lg text-gray-600 mb-8">Stop guessing. Start building a business that works for you.</p>
        <button className="btn btn-primary large" onClick={() => navigate('contact')}>Book a Discovery Call</button>
      </div>
    </section>


  </div>
);

// HEALTH OPTIMIZATION PATH REMOVED

const CourseDetailPage = ({ course, navigate, goToCheckout }) => {
  if (!course) return <div className="container text-center" style={{ paddingTop: '4rem' }}><p>Course not found.</p><button className="btn btn-primary" onClick={() => navigate('courses')}>Back to Courses</button></div>;

  // Content for Pharmacy Technician OSCE
  const TechOSCEContent = () => (
    <div className="course-detail-content">
      {/* Hero Section */}
      <div className="md:flex gap-8 mb-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-navy mb-4">PEBC® OSCE Coaching for Pharmacy Technicians</h2>
          <p className="text-lg text-gray-600 mb-6">
            Tailored coaching to help pharmacy technicians pass the PEBC® OSCE with confidence. Practice real-world scenarios, improve communication, and master exam performance.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary large" onClick={() => goToCheckout(course)}>Enroll in Technician OSCE Course &rarr;</button>
          </div>
        </div>
      </div>

      {/* Who This Course Is For */}
      <div className="section mb-12">
        <h3 className="text-2xl font-bold text-navy mb-6 text-center">Who This Course Is For</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {["Pharmacy technicians preparing for certification", "Candidates seeking structured coaching for consistent exam performance"].map((item, i) => (
            <div key={i} className="flex items-center gap-2 p-3 bg-white rounded shadow-sm border border-gray-100">
              <CheckCircle className="text-teal flex-shrink-0" size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Course Outcomes */}
      <div className="section mb-12 glass-card border-l-4 border-navy">
        <h3 className="text-2xl font-bold text-navy mb-6">Course Outcomes</h3>
        <p className="mb-4">Participants will be able to:</p>
        <ul className="space-y-3">
          {[
            "Navigate OSCE stations efficiently",
            "Apply structured frameworks for patient interviews",
            "Deliver clear, safe, and professional recommendations",
            "Build confidence under timed conditions"
          ].map((outcome, i) => (
            <li key={i} className="flex gap-3">
              <div className="mt-1"><CheckCircle size={18} className="text-teal" /></div>
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Curriculum Overview */}
      <div className="section mb-12">
        <h3 className="text-2xl font-bold text-navy mb-8 text-center">Curriculum Overview</h3>
        <div className="space-y-6">
          {[
            { module: "Module 1", title: "Station Frameworks", items: ["Efficient patient interaction templates", "Time management strategies"] },
            { module: "Module 2", title: "Clinical Reasoning", items: ["Rapid problem identification", "Key intervention prioritization"] },
            { module: "Module 3", title: "Communication Excellence", items: ["Counseling techniques for technicians", "Professional language and empathy"] },
            { module: "Module 4", title: "Simulation Practice", items: ["Realistic OSCE stations", "Timed scenario practice with feedback"] },
            { module: "Module 5", title: "Exam Strategy & Confidence", items: ["Stress management", "Performance consistency"] }
          ].map((mod, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-lg text-teal mb-2">{mod.module} — {mod.title}</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {mod.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Course Format */}
      <div className="section mb-12 glass-card">
        <h3 className="text-2xl font-bold text-navy mb-6">Course Format</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3 no-bullets">
            <li className="flex gap-2"><CheckCircle className="text-teal" size={20} /> Live virtual coaching sessions</li>
            <li className="flex gap-2"><CheckCircle className="text-teal" size={20} /> Small group or one-on-one options</li>
          </ul>
          <ul className="space-y-3 no-bullets">
            <li className="flex gap-2"><CheckCircle className="text-teal" size={20} /> Personalized feedback</li>
            <li className="flex gap-2"><CheckCircle className="text-teal" size={20} /> Structured performance frameworks</li>
          </ul>
        </div>
      </div>

      {/* Pricing & Packages */}
      <div className="section mb-12">
        <h3 className="text-2xl font-bold text-navy mb-8 text-center">Pricing & Packages</h3>
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md border-t-4 border-teal flex flex-col">
          <h4 className="text-xl font-bold text-navy mb-4">Advanced</h4>
          <div className="text-4xl font-bold text-teal mb-6">$950 <span className="text-sm font-normal text-gray-500">CAD</span></div>
          <ul className="space-y-3 mb-6 no-bullets">
            <li className="flex gap-2"><CheckCircle size={18} className="text-teal" /> 8 sessions</li>
            <li className="flex gap-2"><CheckCircle size={18} className="text-teal" /> Advanced simulations</li>
            <li className="flex gap-2"><CheckCircle size={18} className="text-teal" /> Personalized assessment</li>
            <li className="flex gap-2"><CheckCircle size={18} className="text-teal" /> Priority feedback</li>
          </ul>
          <div className="text-xl font-bold text-teal mb-4">Custom</div>
          <ul className="space-y-3 mb-8 flex-1 text-gray-700 no-bullets">
            <li className="flex gap-2"><CheckCircle size={18} className="text-teal" /> Fully personalized coaching</li>
            <li className="flex gap-2"><CheckCircle size={18} className="text-teal" /> Flexible schedule</li>
            <li className="flex gap-2"><CheckCircle size={18} className="text-teal" /> Ongoing support</li>
          </ul>
          <button className="btn btn-primary full-width" onClick={() => goToCheckout({ ...course, price: 950, title: 'Technician OSCE - Advanced' })}>Enroll Now &rarr;</button>
        </div>
      </div>

      {/* FAQ */}
      <div className="section mb-12 glass-card">
        <h3 className="text-2xl font-bold text-navy mb-6">FAQ</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-teal mb-1">Is this course suitable for international graduates?</h4>
            <p>Yes, coaching is designed to support diverse training backgrounds.</p>
          </div>
          <div>
            <h4 className="font-bold text-teal mb-1">Do you provide practice materials?</h4>
            <p>Yes, you will receive simulation cases and structured frameworks.</p>
          </div>
          <div>
            <h4 className="font-bold text-teal mb-1">Are sessions recorded?</h4>
            <p>Yes, recordings are available where appropriate.</p>
          </div>
        </div>
      </div>

      {/* Faculty Section - Reused */}
      <div className="glass-card mb-12 border-l-4 border-teal">
        <h3 className="text-xl font-bold text-navy mb-4">Meet Our Faculty: Uche Isiuwe</h3>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <p className="mb-4">Her diverse career trajectory spans various sectors of the pharmaceutical industry, providing her with invaluable insights and expertise in different facets of pharmacy practice. She spent five years honing her skills in hospital pharmacy, followed by eight years as a successful medical sales representative.</p>
            <p>The majority of her career has been dedicated to community pharmacy practice, where she has served as a trusted healthcare provider and advocate for patient wellness. With extensive experience in retail pharmacy and long-term care pharmacy settings, she has developed a comprehensive understanding of medication management, patient counseling, and medication therapy optimization.</p>
          </div>
        </div>
      </div>

    </div>
  );

  const PharmOSCEContent = () => (
    <div className="course-detail-content">
      {/* Hero Section */}
      <div className="md:flex gap-8 mb-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-navy mb-4">PEBC® OSCE Coaching for Pharmacists: Take control of your PEBC® OSCE preparation!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Structured coaching to help pharmacists pass the PEBC® OSCE confidently. Build clinical reasoning, master patient communication, and perform under pressure.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary large" onClick={() => goToCheckout(course)}>Enroll in Pharmacist OSCE Course &rarr;</button>
          </div>
        </div>
      </div>

      {/* Who This Course Is For */}
      <div className="section mb-12">
        <h3 className="text-2xl font-bold text-navy mb-6 text-center">Who This Course Is For</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {["Pharmacists preparing for the PEBC® OSCE", "International pharmacy graduates seeking exam readiness", "Candidates retaking the OSCE who want structured coaching", "Professionals looking to translate knowledge into confident performance"].map((item, i) => (
            <div key={i} className="flex items-center gap-2 p-3 bg-white rounded shadow-sm border border-gray-100">
              <CheckCircle className="text-teal flex-shrink-0" size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Program Outcomes */}
      <div className="section mb-12 glass-card border-l-4 border-navy">
        <h3 className="text-2xl font-bold text-navy mb-6">Program Outcomes</h3>
        <p className="mb-4">After completing this coaching program, you will be able to:</p>
        <ul className="space-y-3 no-bullets">
          {[
            "Approach every OSCE station with a clear structure",
            "Conduct efficient, patient-centered interviews",
            "Identify key clinical issues quickly",
            "Deliver organized recommendations",
            "Manage time and exam pressure confidently"
          ].map((outcome, i) => (
            <li key={i} className="flex gap-3">
              <div className="mt-1"><CheckCircle size={18} className="text-teal" /></div>
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 italic font-medium text-navy">The goal is consistent performance, not guesswork.</p>
      </div>

      {/* Curriculum Overview */}
      <div className="section mb-12">
        <h3 className="text-2xl font-bold text-navy mb-8 text-center">Curriculum Overview</h3>
        <div className="space-y-6">
          {[
            { module: "Module 1", title: "OSCE Framework Mastery", items: ["Structured station approach", "Time management systems"] },
            { module: "Module 2", title: "Clinical Reasoning Under Pressure", items: ["Rapid problem identification", "Safe decision frameworks"] },
            { module: "Module 3", title: "Communication Excellence", items: ["Counseling techniques", "Empathy and professionalism"] },
            { module: "Module 4", title: "Simulation Practice", items: ["Realistic OSCE cases", "Timed station simulations with feedback"] },
            { module: "Module 5", title: "Exam Strategy & Confidence", items: ["Stress management", "Performance consistency"] }
          ].map((mod, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-lg text-teal mb-2">{mod.module} — {mod.title}</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {mod.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Course Format */}
      <div className="section mb-12 glass-card">
        <h3 className="text-2xl font-bold text-navy mb-6">Course Format</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3 no-bullets">
            <li className="flex gap-2"><CheckCircle className="text-teal" size={20} /> 10 weeks of live virtual coaching sessions</li>
            <li className="flex gap-2"><CheckCircle className="text-teal" size={20} /> Small group or one-on-one options</li>
            <li className="flex gap-2"><CheckCircle className="text-teal" size={20} /> Interactive and non-interactive OSCE case simulations</li>
          </ul>
          <ul className="space-y-3 no-bullets">
            <li className="flex gap-2"><CheckCircle className="text-teal" size={20} /> Personalized instructor feedback and performance review</li>
            <li className="flex gap-2"><CheckCircle className="text-teal" size={20} /> Practical frameworks and study materials</li>
          </ul>
        </div>
      </div>

      {/* Pricing & Packages */}
      <div className="section mb-12">
        <h3 className="text-2xl font-bold text-navy mb-8 text-center">Pricing & Packages</h3>
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md border-t-4 border-teal flex flex-col">
          <h4 className="text-xl font-bold text-navy mb-4">Take control of your PEBC® OSCE preparation!</h4>
          <div className="text-3xl font-bold text-teal mb-6">$1,195 <span className="text-sm font-normal text-gray-500">CAD</span></div>
          <ul className="space-y-3 mb-6 no-bullets">
            <li className="flex gap-2"><CheckCircle size={18} className="text-teal" /> 10 live sessions</li>
            <li className="flex gap-2"><CheckCircle size={18} className="text-teal" /> Advanced simulations</li>
            <li className="flex gap-2"><CheckCircle size={18} className="text-teal" /> Personalized assessment</li>
            <li className="flex gap-2"><CheckCircle size={18} className="text-teal" /> Priority feedback</li>
          </ul>
          <div className="text-xl font-bold text-teal mb-4">Custom</div>
          <ul className="space-y-3 mb-8 flex-1 text-gray-700 no-bullets">
            <li className="flex gap-2"><CheckCircle size={18} className="text-teal" /> Fully personalized coaching</li>
            <li className="flex gap-2"><CheckCircle size={18} className="text-teal" /> Flexible schedule</li>
            <li className="flex gap-2"><CheckCircle size={18} className="text-teal" /> Ongoing support</li>
          </ul>
          <button className="btn btn-primary full-width" onClick={() => goToCheckout({ ...course, price: 1195, title: 'Pharmacist OSCE - Advanced' })}>Enroll Now &rarr;</button>
        </div>
      </div>

      {/* FAQ */}
      <div className="section mb-12 glass-card">
        <h3 className="text-2xl font-bold text-navy mb-6">FAQ</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-teal mb-1">How long should I prepare?</h4>
            <p>Most candidates benefit from several weeks of structured simulation practice.</p>
          </div>
          <div>
            <h4 className="font-bold text-teal mb-1">Are sessions recorded?</h4>
            <p>Yes, recordings are available where appropriate.</p>
          </div>
          <div>
            <h4 className="font-bold text-teal mb-1">Do you provide study materials?</h4>
            <p>Yes. You’ll receive frameworks, guides, and simulation cases.</p>
          </div>
          <div>
            <h4 className="font-bold text-teal mb-1">Is this coaching suitable for international graduates?</h4>
            <p>Absolutely. Our program supports diverse training backgrounds.</p>
          </div>
        </div>
      </div>

      {/* Faculty Section - Keeping as reused component */}
      <div className="glass-card mb-12 border-l-4 border-teal">
        <h3 className="text-xl font-bold text-navy mb-4">Meet Our Faculty: Uche Isiuwe</h3>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <p className="mb-4">Her diverse career trajectory spans various sectors of the pharmaceutical industry, providing her with invaluable insights and expertise in different facets of pharmacy practice. She spent five years honing her skills in hospital pharmacy, followed by eight years as a successful medical sales representative.</p>
            <p>The majority of her career has been dedicated to community pharmacy practice, where she has served as a trusted healthcare provider and advocate for patient wellness. With extensive experience in retail pharmacy and long-term care pharmacy settings, she has developed a comprehensive understanding of medication management, patient counseling, and medication therapy optimization.</p>
          </div>
        </div>
      </div>

    </div>
  );

  const PharmMathContent = () => (
    <div className="course-detail-content">
      {/* Hero Section */}
      <div className="md:flex gap-8 mb-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-navy mb-4">PEBC® Exam Math Prep — Accurate Calculations Under Pressure</h2>
          <p className="text-lg text-gray-600 mb-6">
            Focused math training to help candidates perform calculations confidently on the PEBC exam.
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary large" onClick={() => goToCheckout(course)}>Enroll in Math Prep Course &rarr;</button>
          </div>
        </div>
      </div>

      {/* Who This Course Is For */}
      <div className="section mb-12">
        <h3 className="text-2xl font-bold text-navy mb-6 text-center">Who This Course Is For</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {["Candidates struggling with exam calculations", "Pharmacists and pharmacy technicians seeking accuracy under time pressure", "International graduates preparing for the PEBC"].map((item, i) => (
            <div key={i} className="flex items-center gap-2 p-3 bg-white rounded shadow-sm border border-gray-100">
              <CheckCircle className="text-teal flex-shrink-0" size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Course Outcomes */}
      <div className="section mb-12 glass-card border-l-4 border-navy">
        <h3 className="text-2xl font-bold text-navy mb-6">Course Outcomes</h3>
        <p className="mb-4">After completing this course, participants will be able to:</p>
        <ul className="space-y-3 no-bullets">
          {[
            "Solve PEBC®-relevant calculations efficiently",
            "Apply repeatable calculation frameworks",
            "Avoid common exam mistakes",
            "Build confidence under timed conditions"
          ].map((outcome, i) => (
            <li key={i} className="flex gap-3">
              <div className="mt-1"><CheckCircle size={18} className="text-teal" /></div>
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Curriculum Overview */}
      <div className="section mb-12">
        <h3 className="text-2xl font-bold text-navy mb-8 text-center">Curriculum Overview</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { module: "Module 1", title: "Foundational Calculations", items: ["Dose calculations", "Conversions and ratios"] },
            { module: "Module 2", title: "Timed Practice Exercises", items: ["Realistic PEBC®-style problems", "Speed and accuracy under pressure"] },
            { module: "Module 3", title: "Error Prevention Strategies", items: ["Checklists for common mistakes", "Mental math shortcuts"] },
            { module: "Module 4", title: "Mock Exam Simulation", items: ["Timed math practice exams", "Personalized feedback"] }
          ].map((mod, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-lg text-teal mb-2">{mod.module} — {mod.title}</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {mod.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Course Format */}
      <div className="section mb-12 glass-card">
        <h3 className="text-2xl font-bold text-navy mb-6">Course Format</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3 no-bullets">
            <li className="flex gap-2"><CheckCircle className="text-teal" size={20} /> Live online sessions</li>
            <li className="flex gap-2"><CheckCircle className="text-teal" size={20} /> Small group or one-on-one options</li>
          </ul>
          <ul className="space-y-3 no-bullets">
            <li className="flex gap-2"><CheckCircle className="text-teal" size={20} /> Personalized feedback</li>
            <li className="flex gap-2"><CheckCircle className="text-teal" size={20} /> Practice exercises and templates</li>
          </ul>
        </div>
      </div>

      {/* Pricing */}
      <div className="section mb-12">
        <h3 className="text-2xl font-bold text-navy mb-8 text-center">Pricing</h3>
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md border-t-4 border-teal flex flex-col text-center">
          <h4 className="text-xl font-bold text-navy mb-4">Intensive Math Prep</h4>
          <div className="text-4xl font-bold text-teal mb-6">$299 <span className="text-sm font-normal text-gray-500">CAD</span></div>
          <ul className="space-y-3 mb-8 text-left no-bullets">
            <li className="flex gap-2"><CheckCircle size={18} className="text-teal" /> 4 live sessions</li>
            <li className="flex gap-2"><CheckCircle size={18} className="text-teal" /> Timed exercises</li>
            <li className="flex gap-2"><CheckCircle size={18} className="text-teal" /> Practice exams</li>
            <li className="flex gap-2"><CheckCircle size={18} className="text-teal" /> Personalized feedback</li>
          </ul>
          <button className="btn btn-primary full-width" onClick={() => goToCheckout(course)}>Enroll in Math Prep Course &rarr;</button>
        </div>
      </div>

      {/* FAQ */}
      <div className="section mb-12 glass-card">
        <h3 className="text-2xl font-bold text-navy mb-6">FAQ</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-teal mb-1">Do I need prior math experience?</h4>
            <p>No. The course starts with foundational concepts and builds to exam-level problems.</p>
          </div>
          <div>
            <h4 className="font-bold text-teal mb-1">Are sessions recorded?</h4>
            <p>Yes, recordings are available for review.</p>
          </div>
          <div>
            <h4 className="font-bold text-teal mb-1">Will I get practice materials?</h4>
            <p>Yes. Practice exercises, frameworks, and mock exams are included.</p>
          </div>
        </div>
      </div>

    </div>
  );

  return (
    <div className="page-container container">
      <button className="btn-back" onClick={() => navigate('courses')}>&larr; Back to Courses</button>
      {course.id === 'tech-osce' && <TechOSCEContent />}
      {course.id === 'pharm-osce' && <PharmOSCEContent />}
      {course.id === 'pharm-math' && <PharmMathContent />}
      {!['tech-osce', 'pharm-osce', 'pharm-math'].includes(course.id) && (
        <div className="text-center py-12">
          <h2>{course.title}</h2>
          <p className="lead">Detailed syllabus coming soon.</p>
          <button className="btn btn-primary mt-4" onClick={() => goToCheckout(course)}>Enroll Now - ${course.price}</button>
        </div>
      )}
    </div>
  );

};

// --- PHARMACY PATH (PEBC Landing Page) ---
const PharmacyPath = ({ viewCourse, navigate }) => {
  const courses = {
    pharm: COURSES_DATA.find(c => c.id === 'pharm-osce'),
    tech: COURSES_DATA.find(c => c.id === 'tech-osce'),
    math: COURSES_DATA.find(c => c.id === 'pharm-math')
  };

  return (
    <div className="corporate-landing">
      {/* Hero Section */}
      <section className="section bg-white text-navy text-center border-b border-gray-100" style={{ padding: '6rem 2rem' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-bold mb-6 text-navy">Pass the PEBC&reg; Exam with Confidence and Expert Guidance</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert-led, structured coaching for pharmacists, pharmacy technicians, and international pharmacy graduates.
              <br className="hidden md:block" />
              The PEBC&reg; Exam is not just about what you know — it’s about how you perform under pressure.
            </p>
            <button className="btn btn-primary large" onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}>Choose Your Course &rarr;</button>
          </motion.div>
        </div>
      </section>

      {/* Emotional Hook */}
      <section className="section bg-white border-b border-gray-100">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Why Candidates Struggle with the PEBC® Exam</h2>
              <p className="text-lg text-gray-600 mb-6">Passing the PEBC exam isn’t just about knowledge — it’s about how you perform under pressure. Even capable candidates often struggle with:</p>
              <ul className="space-y-3 no-bullets">
                {[
                  "Organizing thoughts under strict time limits",
                  "Communicating clearly and professionally",
                  "Applying consistent clinical frameworks",
                  "Delivering safe, confident recommendations"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card border-l-4 border-teal">
              <h3 className="text-xl font-bold text-navy mb-4">Our coaching bridges that gap</h3>
              <p className="mb-4">At Humacap, we offer specialized coaching to help candidates:</p>
              <ul className="space-y-2 mb-6 no-bullets">
                <li className="flex gap-2"><CheckCircle className="text-teal" size={20} /> Master OSCE performance</li>
                <li className="flex gap-2"><CheckCircle className="text-teal" size={20} /> Strengthen math skills</li>
                <li className="flex gap-2"><CheckCircle className="text-teal" size={20} /> Gain confidence through simulations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Course Selection */}
      <section className="section" id="courses">
        <div className="container">
          <div className="section-header">
            <h2>Pick the Course That Fits Your Goal</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Pharmacist */}
            <div className="glass-card hover-lift flex flex-col">
              <div className="mb-4 text-teal"><Briefcase size={32} /></div>
              <h3 className="font-bold text-xl text-navy mb-2">PEBC® Qualifying Exam 2 (OSCE)</h3>
              <p className="text-sm text-gray-600 mb-4 flex-1">Structured simulation, communication mastery, medical reasoning, repeatable frameworks.</p>
              <button className="btn btn-outline full-width" onClick={() => viewCourse(courses.pharm)}>View Pharmacist Course &rarr;</button>
            </div>
            {/* Technician */}
            <div className="glass-card hover-lift flex flex-col">
              <div className="mb-4 text-teal"><Wrench size={32} /></div>
              <h3 className="font-bold text-xl text-navy mb-2">PEBC® Qualifying Exam 2 (OSPE)</h3>
              <p className="text-sm text-gray-600 mb-4 flex-1">Practical OSCE simulations, performance feedback, confident station navigation.</p>
              <button className="btn btn-outline full-width" onClick={() => viewCourse(courses.tech)}>View Technician Course &rarr;</button>
            </div>
            {/* Math */}
            <div className="glass-card hover-lift flex flex-col">
              <div className="mb-4 text-teal"><Percent size={32} /></div>
              <h3 className="font-bold text-xl text-navy mb-2">PEBC® Math Prep</h3>
              <p className="text-sm text-gray-600 mb-4 flex-1">Accurate, timed practice, exam strategies, confidence under pressure.</p>
              <button className="btn btn-outline full-width" onClick={() => viewCourse(courses.math)}>View Math Prep &rarr;</button>
            </div>
          </div>
          <p className="text-center mt-8 text-gray-500 italic">Each course is live, interactive, and led by Uche Isiuwe with 25+ years of experience.</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white border-y border-gray-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Why Choose Our Coaching?</h2>
            <p className="text-lg">Our goal: predictable, confident exam performance — not guesswork.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-teal mb-4">By the end of your course, you will</h3>
              <ul className="space-y-3 no-bullets">
                {[
                  "Approach every OSCE station with clarity and structure",
                  "Conduct patient interviews efficiently",
                  "Identify key clinical issues quickly",
                  "Deliver organized, professional recommendations",
                  "Manage exam stress and perform consistently"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="text-teal flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-navy mb-4">How the Courses Work</h3>
              <ul className="space-y-3 no-bullets">
                <li className="flex gap-3"><Video size={20} className="text-teal" /> Live virtual coaching sessions</li>
                <li className="flex gap-3"><Users size={20} className="text-teal" /> Small group or one-on-one options</li>
                <li className="flex gap-3"><Activity size={20} className="text-teal" /> Interactive OSCE simulations</li>
                <li className="flex gap-3"><MessageCircle size={20} className="text-teal" /> Personalized feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Authority */}
      <section className="section">
        <div className="container">
          <div className="glass-card border-l-4 border-navy max-w-4xl mx-auto">
            <div className="md:flex gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-navy mb-2">Expert-Led OSCE Coaching</h3>
                <p className="text-teal font-bold mb-4">Uche Isiuwe, BPharm, MPH, MBA, RPh</p>
                <p className="mb-4">Led by a licensed pharmacist, Pharmacy Manager, and Program Lead Instructor with over 25 years of clinical and teaching experience.</p>
                <p>Her coaching combines real-world clinical expertise with structured educational methodology, helping candidates translate knowledge into confident exam performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="section bg-gray-50 text-navy text-center border-y border-gray-100">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4 text-navy">Free PEBC&reg; OSCE Readiness Checklist</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">Download our step-by-step guide to exam prep, high-yield strategies, and common mistakes to avoid.</p>
          <button className="btn btn-primary large font-bold" onClick={() => navigate('download-success')}>Download Free Checklist</button>
        </div>
      </section>

    </div>
  );
};

const CheckoutPage = ({ course, navigate }) => {
  const [selectedPayment, setSelectedPayment] = useState('credit');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!course) return <div className="container text-center" style={{ paddingTop: '4rem' }}><p>No course selected.</p><button className="btn btn-primary" onClick={() => navigate('courses')}>Browse Courses</button></div>;

  const backRoute = 'courses';
  const headerText = 'Secure Enrollment';
  const submitText = 'Pay & Enroll Now';

  if (isSuccess) {
    return (
      <div className="page-container container text-center" style={{ padding: '6rem 2rem' }}>
        <div className="glass-card max-w-2xl mx-auto py-12">
          <div className="w-20 h-20 bg-teal text-white rounded-full flex items-center justify-center text-4xl mx-auto mb-8">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold text-navy mb-4">Payment Successful!</h2>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your payment. You will receive an email receipt and a welcome message from Humacap shortly.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn btn-primary" onClick={() => navigate('home')}>Return Home</button>
            <button className="btn btn-outline" onClick={() => navigate('courses')}>View More Courses</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container container">
      <div className="checkout-header">
        <button className="btn-back" onClick={() => navigate(backRoute)}>&larr; Back to Courses</button>
        <h2>{headerText}</h2>
      </div>
      <div className="checkout-grid">
        <div className="checkout-form glass-card">
          <h3>Billing Details</h3>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" className="form-input" />
          </div>
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="you@example.com" className="form-input" />
          </div>
          <div className="input-group">
            <label>Payment Method</label>
            <div className="grid grid-cols-3 gap-3 mb-6">
              <label className={`flex flex-col items-center gap-2 cursor-pointer p-3 border rounded-lg transition-all ${selectedPayment === 'credit' ? 'border-teal bg-teal/5 text-teal' : 'border-gray-200 hover:bg-gray-50'}`}>
                <input type="radio" name="payment" className="hidden" onChange={() => setSelectedPayment('credit')} checked={selectedPayment === 'credit'} />
                <CreditCard size={20} />
                <span className="text-xs font-bold">Credit</span>
              </label>
              <label className={`flex flex-col items-center gap-2 cursor-pointer p-3 border rounded-lg transition-all ${selectedPayment === 'debit' ? 'border-teal bg-teal/5 text-teal' : 'border-gray-200 hover:bg-gray-50'}`}>
                <input type="radio" name="payment" className="hidden" onChange={() => setSelectedPayment('debit')} checked={selectedPayment === 'debit'} />
                <CreditCard size={20} />
                <span className="text-xs font-bold">Debit</span>
              </label>
              <label className={`flex flex-col items-center gap-2 cursor-pointer p-3 border rounded-lg transition-all ${selectedPayment === 'interac' ? 'border-teal bg-teal/5 text-teal' : 'border-gray-200 hover:bg-gray-50'}`}>
                <input type="radio" name="payment" className="hidden" onChange={() => setSelectedPayment('interac')} checked={selectedPayment === 'interac'} />
                <div className="font-bold text-xs">Interac</div>
                <span className="text-xs font-bold">e-Transfer</span>
              </label>
            </div>

            {(selectedPayment === 'credit' || selectedPayment === 'debit') && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                <label>Card Information</label>
                <div className="card-input-wrapper mb-3">
                  <CreditCard className="card-icon" size={20} />
                  <input type="text" placeholder="0000 0000 0000 0000" className="form-input with-icon" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="MM/YY" className="form-input" />
                  <input type="text" placeholder="CVC" className="form-input" />
                </div>
              </motion.div>
            )}

            {selectedPayment === 'interac' && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-700 mb-2 font-medium">Instructions:</p>
                <p className="text-xs text-gray-600 leading-relaxed mb-1">
                  Please send <strong>${(course.price * 1.13).toFixed(2)} CAD</strong> via Interac e-Transfer to:
                </p>
                <p className="text-sm font-bold text-navy select-all mb-2">payments@humacap.com</p>
                <p className="text-xs text-gray-500 italic">
                  Include your email address in the message field.
                </p>
              </motion.div>
            )}
          </div>
          <button className="btn btn-primary full-width large mt-6" onClick={() => setIsSuccess(true)}>{submitText}</button>
          <p className="secure-badge mt-4 text-center text-xs text-gray-400"><Lock size={12} /> 256-bit SSL Encrypted Payment</p>
        </div>

        <div className="order-summary glass-card h-fit">
          <h3 className="section-title text-navy font-bold mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">{course.title}</span>
            <span className="font-bold text-navy">${course.price}.00</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Tax (Estimated 13%)</span>
            <span className="font-bold text-navy">${(course.price * 0.13).toFixed(2)}</span>
          </div>
          <hr className="border-gray-100 mb-4" />
          <div className="flex justify-between mb-6">
            <span className="text-xl font-bold text-navy">Total</span>
            <span className="text-xl font-bold text-teal">${(course.price * 1.13).toFixed(2)}</span>
          </div>
          <div className="bg-teal/5 p-4 rounded-lg flex gap-3 items-start">
            <CheckCircle size={18} className="text-teal flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong>100% Satisfaction Guarantee</strong><br />
              7-day money back guarantee if you are not satisfied.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Removed LoginPage and SignUpPage as requested

// Keep Roadmap & Testimonials simple
const Roadmap = () => (
  <section className="roadmap-section section bg-white">
    <div className="container">
      <div className="section-header">
        <h2>Your Journey to Licensure</h2>
        <p>We guide you through every step of the PEBC® process.</p>
      </div>
      <div className="roadmap-container">
        {[
          { step: 1, title: 'Gateway Access', desc: 'Register with Pharmacists Gateway Canada.' },
          { step: 2, title: 'Evaluation', desc: 'Submit documents for PEBC® evaluation.' },
          { step: 3, title: 'Evaluating Exam', desc: 'Pass the EE (International Grads only).' },
          { step: 4, title: 'Qualifying Exam', desc: 'Pass MCQ and OSCE/OSPE exams.' },
        ].map((item, index, arr) => (
          <React.Fragment key={index}>
            <div className="roadmap-step">
              <div className="step-number">{item.step}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
            {index < arr.length - 1 && (
              <div className="roadmap-arrow hidden-mobile">
                <ArrowRight size={24} className="text-gray-300" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="testimonials-section section bg-white border-t border-gray-100">
    <div className="container">
      <div className="section-header">
        <h2>Student Success Stories</h2>
        <p>Join hundreds of pharmacists who passed their exams with Humacap.</p>
      </div>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="stars">
            {[1, 2, 3, 4, 5].map(i => <span key={i} style={{ color: '#F59E0B' }}>★</span>)}
          </div>
          <p className="quote">"The OSCE mock stations were incredibly realistic. I felt completely prepared for the real exam day. The feedback was specific and actionable."</p>
          <div className="user-info">
            <div className="avatar">JD</div>
            <div>
              <h5>Jane D.</h5>
              <span>Licensed Pharmacist</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="stars">
            {[1, 2, 3, 4, 5].map(i => <span key={i} style={{ color: '#F59E0B' }}>★</span>)}
          </div>
          <p className="quote">"I struggled with the Evaluating Exam until I took the Humacap refresher course. The notes are concise and the videos explain complex topics simply."</p>
          <div className="user-info">
            <div className="avatar">AM</div>
            <div>
              <h5>Ahmed M.</h5>
              <span>Pharmacy Student</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="stars">
            {[1, 2, 3, 4, 5].map(i => <span key={i} style={{ color: '#F59E0B' }}>★</span>)}
          </div>
          <p className="quote">"Worth every penny. The technician pathway materials are spot on for the PEBC® requirements. I passed on my first attempt!"</p>
          <div className="user-info">
            <div className="avatar">SL</div>
            <div>
              <h5>Sarah L.</h5>
              <span>Registered Technician</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- MAIN COMPONENTS ---

const Navbar = ({ setPage, currentPage }) => (
  <nav className="navbar">
    <div className="container nav-content">
      <div className="logo cursor-pointer" onClick={() => setPage('home')}>
        <img src="/logo.jpg" alt="Humacap Logo" className="header-logo-img" />
      </div>
      <div className="nav-links">
        <button onClick={() => setPage('home')} className={currentPage === 'home' ? 'active' : ''}>Home</button>
        <button onClick={() => setPage('pharmacy')} className={currentPage === 'pharmacy' ? 'active' : ''}>Pharmacy</button>
        <button onClick={() => setPage('business-consulting')} className={currentPage === 'business-consulting' ? 'active' : ''}>Business</button>
        <button onClick={() => setPage('about')} className={currentPage === 'about' ? 'active' : ''}>About</button>
      </div>
    </div>
  </nav>
);

const Footer = ({ navigate }) => (
  <footer className="footer bg-navy">
    <div className="container footer-content">
      <div className="footer-col">
        <div className="logo white" style={{ color: 'white', marginBottom: '1rem' }}>
          <Pill size={24} />
          <span>Humacap</span>
        </div>
        <p style={{ opacity: 0.8 }}>Empowering pharmacy professionals to achieve their Canadian licensure goals.</p>
        <div className="social-links" style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
          <a href="https://www.facebook.com/humacap.ca/" target="_blank" rel="noopener noreferrer">
            <Facebook size={20} color="white" />
          </a>
          <a href="https://www.instagram.com/humacap.ca" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} color="white" />
          </a>
          <a href="https://www.linkedin.com/company/humacap-ca/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} color="white" />
          </a>
        </div>
      </div>
      <div className="footer-col">
        <h4 style={{ color: 'white' }}>Program</h4>
        <a onClick={() => navigate('pharmacy')}>Professional</a>
        <a onClick={() => navigate('business-consulting')}>Growing Business</a>
      </div>
      <div className="footer-col">
        <h4 style={{ color: 'white' }}>Company</h4>
        <a onClick={() => navigate('about')}>About Us</a>
        <a onClick={() => navigate('about')}>Contact</a>
        <a onClick={() => navigate('resources')}>Free Resources</a>
      </div>
    </div>
    <div className="footer-bottom container">
      <div style={{ maxWidth: '800px', margin: '0 auto 2rem', opacity: 0.7, fontSize: '0.85rem' }}>
        <p><strong>Disclaimer:</strong> We are not affiliated with the PEBC and cannot guarantee the outcome of the PEBC exams, however, we will try our best to help you accomplish your goal of passing the PEBC® exams.</p>
      </div>
      <p>&copy; 2026 Humacap. All rights reserved.</p>
    </div>
  </footer>
);

const Hero = ({ navigate }) => (
  <section className="hero-section">
    <div className="container hero-grid">
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Pass Your Pharmacy Exams with <span className="text-teal">Confidence</span>.</h1>
        <p>Comprehensive study tools, expert-led courses, and realistic practice assessments for aspiring pharmacists and technicians in Canada.</p>
        <div className="hero-buttons">
          <button className="btn btn-primary large" onClick={() => navigate('courses')}>View Courses</button>
          <button className="btn btn-glass large" onClick={() => navigate('resources')}>Free Assessment</button>
        </div>
      </motion.div>

      <motion.div
        className="hero-image-container"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src="/new-hero.jpg"
          alt="Pharmacy Student"
          className="hero-main-img"
        />
        {/* Floating cards */}
        <div className="hero-float-card bottom-left glass-card">
          <Users className="icon-teal" size={20} />
          <div>
            <strong>Pharmacist</strong>
            <span>Path</span>
          </div>
        </div>
        <div className="hero-float-card top-right glass-card">
          <CheckCircle className="icon-teal" size={20} />
          <div>
            <strong>Technician</strong>
            <span>Path</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// 7. HEALTH FAQ PAGE (New)
const HealthFAQPage = ({ navigate }) => (
  <div className="page-container container">
    <button className="btn-back" onClick={() => navigate('health-optimization')}>
      <ArrowLeft size={20} /> Back to Health Optimization
    </button>

    <div className="text-center max-w-3xl mx-auto mb-12">
      <h1 className="text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h1>
      <p className="text-lg text-gray-600">Common questions about medication optimization and our clinical pharmacist-led services.</p>
    </div>

    <div className="max-w-4xl mx-auto space-y-6 mb-16">
      {[
        { q: "Do I really need all these medications?", a: "Many patients are on medications that were started years ago and may no longer be necessary or optimal for their current health status. We review everything to ensure every medication has a clear, current purpose." },
        { q: "Are my medications interacting with each other?", a: "Polypharmacy increases the risk of drug-drug and drug-disease interactions. We perform a deep analysis of your entire regimen, including supplements, to identify and resolve these risks." },
        { q: "Could my symptoms be side effects?", a: "Often, new symptoms are actually side effects of existing medications (prescribing cascades). We help differentiate between a new medical condition and a drug-induced issue." },
        { q: "Are there safer or more effective options?", a: "Clinical pharmacy moves fast. We evaluate if there are newer, safer, or more effective alternatives that might better match your recovery or longevity goals." },
        { q: "How do diet and lifestyle affect my condition?", a: "Medication is only one part of the health equation. We provide science-based guidance on how nutrition and lifestyle changes can work synergistically with (or sometimes reduce the need for) medications." },
        { q: "What do my lab results actually mean?", a: "We translate complex laboratory values into plain language, explaining how they relate to your specific medications and overall health trends." }
      ].map((item, i) => (
        <div key={i} className="glass-card">
          <h3 className="text-xl font-bold text-navy mb-3 flex gap-3">
            <HelpCircle className="text-teal flex-shrink-0" size={24} />
            {item.q}
          </h3>
          <p className="text-gray-600 leading-relaxed">{item.a}</p>
        </div>
      ))}
    </div>
  </div>
);

// 8. BOOKING PAGE (New)
const BookingPage = ({ navigate }) => (
  <div className="page-container container">
    <button className="btn-back" onClick={() => navigate('health-optimization')}>&larr; Back to Health Optimization</button>

    {/* Hero / Headline */}
    <div className="text-center max-w-4xl mx-auto mb-12">
      <h1 className="text-4xl font-bold text-navy mb-4">Schedule Your Medication & Health Optimization Consultation</h1>
      <p className="text-xl text-teal font-medium mb-6">Take the first step toward clearer medication decisions and better health.</p>
      <p className="text-lg text-gray-600">
        This consultation provides personalized, pharmacist-led guidance to help you understand your medications, reduce risks, and build a practical plan for long-term wellbeing.
        <br />All sessions are conducted virtually in a confidential, one-on-one setting.
      </p>
    </div>

    {/* What to Expect */}
    <div className="section glass-card mb-12">
      <h2 className="text-2xl font-bold text-navy mb-6 text-center">What to Expect</h2>
      <p className="text-center mb-6">During Your Initial Consultation You Will Receive:</p>
      <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {[
          "A comprehensive medication and supplement review",
          "Clear explanations in plain language",
          "Identification of safety concerns or optimization opportunities",
          "Personalized recommendations and next steps",
          "A written summary plan after your session"
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <CheckCircle className="text-teal flex-shrink-0" size={20} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Consultation Options */}
    <div className="section mb-12">
      <h2 className="text-2xl font-bold text-navy mb-8 text-center">Consultation Options</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Initial */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-navy flex flex-col">
          <h3 className="font-bold text-lg mb-2">Initial Comprehensive Consultation</h3>
          <div className="text-gray-500 text-sm mb-4">75–90 minutes</div>
          <div className="text-3xl font-bold text-teal mb-4">$295 <span className="text-sm font-normal text-gray-500">CAD</span></div>
          <p className="text-sm text-gray-600 mb-6 flex-1">Best for new clients seeking a full medication and health review.</p>
          <button className="btn btn-primary full-width" onClick={() => navigate('checkout', { title: 'Initial Consultation', price: 295, type: 'health' })}>Book Initial Consultation</button>
        </div>
        {/* Follow Up */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-gray-400 flex flex-col">
          <h3 className="font-bold text-lg mb-2">Follow-Up Consultation</h3>
          <div className="text-gray-500 text-sm mb-4">45 minutes</div>
          <div className="text-3xl font-bold text-teal mb-4">$125 <span className="text-sm font-normal text-gray-500">CAD</span></div>
          <p className="text-sm text-gray-600 mb-6 flex-1">For ongoing guidance, progress review, and plan adjustments.</p>
          <button className="btn btn-outline full-width" onClick={() => navigate('checkout', { title: 'Follow-Up Session', price: 125, type: 'health' })}>Book Follow-Up Session</button>
        </div>
        {/* Package 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-teal flex flex-col transform scale-105 z-10">
          <div className="text-xs font-bold text-white bg-teal px-2 py-1 rounded-full w-fit mb-2">Most Popular</div>
          <h3 className="font-bold text-lg mb-2">Medication Clarity Package</h3>
          <div className="text-3xl font-bold text-teal mb-4">$495 <span className="text-sm font-normal text-gray-500">CAD</span></div>
          <ul className="text-sm space-y-1 mb-6 flex-1">
            <li>• Initial consultation</li>
            <li>• Two follow-up sessions</li>
            <li>• 30 days of email support</li>
          </ul>
          <button className="btn btn-primary full-width" onClick={() => navigate('checkout', { title: 'Medication Clarity Package', price: 299, type: 'health' })}>Choose This Package</button>
        </div>
        {/* Package 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-navy flex flex-col">
          <h3 className="font-bold text-lg mb-2">Comprehensive Health Optimization Package</h3>
          <div className="text-3xl font-bold text-teal mb-4">$895 <span className="text-sm font-normal text-gray-500">CAD</span></div>
          <ul className="text-sm space-y-1 mb-6 flex-1">
            <li>• Initial consultation</li>
            <li>• Four follow-up sessions</li>
            <li>• 90 days of support</li>
            <li>• Lifestyle & longevity guidance</li>
          </ul>
          <button className="btn btn-outline full-width" onClick={() => navigate('checkout', { title: 'Comprehensive Health Optimization', price: 599, type: 'health' })}>Choose This Package</button>
        </div>
      </div>
    </div>

    {/* Preparation Instructions */}
    <div className="section mb-12">
      <h2 className="text-2xl font-bold text-navy mb-6 text-center">How to Prepare for Your Session</h2>
      <div className="glass-card max-w-3xl mx-auto">
        <p className="mb-4">After booking, you will receive a checklist to help you prepare. This may include:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>A list of current medications and supplements</li>
          <li>Recent lab results (if available)</li>
          <li>Relevant medical history</li>
          <li>Your health goals and questions</li>
        </ul>
        <p className="text-sm text-gray-500 italic">Preparing in advance helps maximize the value of your consultation.</p>
      </div>
    </div>

    {/* Reassurance & Final CTA */}
    {/* Reassurance & Final CTA */}
    <div className="text-center bg-white border-t border-gray-100 p-12 rounded-xl mb-12">
      <h3 className="text-xl font-bold text-navy mb-4">A Professional, Collaborative Approach</h3>
      <p className="max-w-2xl mx-auto mb-8 text-gray-600">This service is designed to support — not replace — your existing healthcare. All recommendations are evidence-based and intended to be discussed with your prescribing providers. The goal is clarity, safety, and empowerment.</p>

      <h2 className="text-3xl font-bold text-teal mb-6">Ready to Get Started?</h2>
      <p className="text-lg mb-8">Confident decisions begin with clear understanding.</p>
      <button className="btn btn-primary large">Book Your Consultation Now</button>
    </div>
  </div>
);

// 8. RESOURCES PAGE
const ResourcesPage = () => (
  <div className="page-container container">
    <div className="text-center max-w-2xl mx-auto mb-12">
      <h2>Free Resources</h2>
      <p className="lead">Downloadable guides, checklists, and videos to support your journey.</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: "OSCE Study Guide 2026", type: "PDF Guide", desc: "Top 10 High-Yield Stations" },
        { title: "Medication Safety Checklist", type: "Checklist", desc: "For Patients & Caregivers" },
        { title: "Pharmacy Jurisprudence Quiz", type: "Interactive", desc: "Test your legal knowledge" }
      ].map((res, i) => (
        <div key={i} className="glass-card hover-lift">
          <FileText size={32} className="text-teal mb-4" />
          <h3 className="font-bold mb-2">{res.title}</h3>
          <span className="text-xs font-bold bg-navy text-white px-2 py-1 rounded-full uppercase">{res.type}</span>
          <p className="text-sm mt-2 text-gray-600">{res.desc}</p>
          <button className="btn btn-text text-teal mt-4">Download &rarr;</button>
        </div>
      ))}
    </div>
  </div>
);

const ContactPage = ({ navigate }) => (
  <div className="page-container container">
    <button className="btn-back" onClick={() => navigate('business-consulting')}>
      <ArrowLeft size={20} /> Go Back
    </button>
    <div className="text-center max-w-2xl mx-auto mb-12">
      <h1 className="text-4xl font-bold text-navy mb-4">Get in Touch</h1>
      <p className="text-lg text-gray-600 mb-2">Please provide your details below, or email us directly at <a href="mailto:info@humacap.ca" className="text-teal font-bold">info@humacap.ca</a>.</p>
      <p className="text-md text-gray-500">Our team will contact you shortly to discuss your needs.</p>
    </div>
    <div className="max-w-xl mx-auto glass-card">
      <form
        action="https://formsubmit.co/info@humacap.ca"
        method="POST"
      >
        <div className="input-group">
          <label>Full Name</label>
          <input type="text" name="name" className="form-input" placeholder="Your Name" required />
        </div>
        <div className="input-group">
          <label>Email Address</label>
          <input type="email" name="email" className="form-input" placeholder="Your Email" required />
        </div>
        <div className="input-group">
          <label>Business Name (Optional)</label>
          <input type="text" name="business" className="form-input" placeholder="Your Business" />
        </div>
        <div className="input-group">
          <label>How can we help?</label>
          <textarea name="message" className="form-input" style={{ minHeight: '120px', resize: 'vertical' }} placeholder="Tell us about your goals" required></textarea>
        </div>

        {/* Formsubmit Configuration Fields */}
        <input type="hidden" name="_subject" value="New Inquiry from Humacap Website" />
        <input type="hidden" name="_autoresponse" value="Thank you for contacting Humacap! We have received your inquiry and our team will be in touch with you within 3 business days." />
        <input type="hidden" name="_template" value="box" />

        {/* Redirect to a success parameter */}
        <input type="hidden" name="_next" value={window.location.origin + "/?success=contact"} />

        <button type="submit" className="btn btn-primary full-width large">Submit Inquiry</button>
      </form>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="page-container container">
    <div className="section-header">
      <h2>About Humacap</h2>
      <p>Empowering the next generation of pharmacy professionals.</p>
    </div>

    {/* NEW VIDEO SECTION */}
    <div className="about-video-section glass-card" style={{ marginBottom: '3rem', padding: '1rem' }}>
      <div className="video-wrapper">
        {/* Placeholder for actual video - using a poster image for now */}
        <div className="video-placeholder">
          <Play size={64} className="text-white" style={{ opacity: 0.8 }} />
          <span>Meet Uche Isiuwe</span>
        </div>
        {/* 
                  To embed a real video, user would replace the above with:
                  <iframe width="100%" height="100%" src="YOUR_YOUTUBE_URL" ...></iframe>
                */}
      </div>
    </div>

    {/* FACULTY SECTION */}
    <div className="glass-card mb-12 border-l-4 border-teal">
      <h3 className="text-xl font-bold text-navy mb-4">Meet Our Faculty: Uche Isiuwe</h3>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1">
          <p className="mb-4"><strong>Uche Isiuwe, BPharm, MPH, MBA, RPh</strong> is a licensed Ontario pharmacist, senior pharmacy leader, and educator with over 25 years of experience in clinical practice, healthcare management, and professional training. As a Pharmacy Manager and Program Lead Instructor, she specializes in PEBC&reg; OSCE coaching and exam preparation for pharmacists and pharmacy technicians in Canada, using structured frameworks and advanced real-world case simulations to develop clinical judgment, communication mastery, and high-performance exam strategies.</p>
          <p className="mb-4">In addition to professional training, Uche provides strategic business coaching for growing organizations.</p>
          <p>Recognized for a rigorous and results-driven teaching approach, she is committed to advancing professional excellence and empowering people to take control of their success.</p>
        </div>
      </div>
    </div>

    <div className="about-content glass-card" style={{ marginTop: '3rem' }}>
      <p className="lead">Humacap is the leading preparatory provider for Canadian pharmacy exams. We specialize in helping International Pharmacy Graduates (IPGs) and Pharmacy Technicians navigate the complex licensure process.</p>
      <hr className="spacer" />
      <h3>Our Mission</h3>
      <p>To provide accessible, high-quality, and realistic preparation tools that bridge the gap between academic knowledge and Canadian practice standards.</p>
      <div className="contact-grid">
        <div className="contact-item">
          <Mail className="text-teal" /> <span>info@humacap.ca</span>
        </div>
        <div className="contact-item">
          <MapPin className="text-teal" /> <span>Ottawa, ON, Canada</span>
        </div>
      </div>
    </div>
  </div>
);

const Segmentation = ({ navigate, setTargetAudience }) => (
  <section className="segment-section section">
    <div className="container cards-grid cards-grid-overlap">
      <motion.div className="path-card glass-card" whileHover={{ y: -5 }}>
        <div className="icon-box navy"><Stethoscope size={28} /></div>
        <h3>Pharmacist</h3>
        <p>For international graduates (IPGs) and students.</p>
        <button className="btn btn-text" onClick={() => { setTargetAudience('pharmacist'); navigate('courses'); }}>Explore Path &rarr;</button>
      </motion.div>
      <motion.div className="path-card glass-card" whileHover={{ y: -5 }}>
        <div className="icon-box teal"><Pill size={28} /></div>
        <h3>Technician</h3>
        <p>For those pursuing certification as a Technician.</p>
        <button className="btn btn-text text-teal" onClick={() => { setTargetAudience('technician'); navigate('courses'); }}>Explore Path &rarr;</button>
      </motion.div>
      <motion.div className="path-card glass-card" whileHover={{ y: -5 }}>
        <div className="icon-box navy"><BookOpen size={28} /></div>
        <h3>Free Resources</h3>
        <p>Guides, sample lectures, and syllabus breakdowns.</p>
        <button className="btn btn-text" onClick={() => navigate('resources')}>Access Now &rarr;</button>
      </motion.div>
    </div>
  </section>
);

const DownloadSuccess = ({ navigate }) => (
  <div className="page-container container flex flex-col items-center justify-center min-h-[60vh] text-center px-4" style={{ paddingTop: '8rem' }}>
    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-teal max-w-lg w-full">
      <div className="w-20 h-20 bg-teal bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="text-teal" size={40} />
      </div>
      <h2 className="text-3xl font-bold text-navy mb-4">Download Initiated!</h2>
      <p className="text-gray-600 mb-8 leading-relaxed">
        <strong>[PLACEHOLDER]</strong><br /><br />
        In the final version, clicking this button will instantly start downloading the <em>"Step-by-Step Guide to PEBC&reg; Exam Prep, High-Yield Strategies, and Common Mistakes"</em> PDF document to your device.
      </p>
      <button className="btn btn-primary large full-width" onClick={() => navigate('pharmacy')}>Return to Course Information</button>
    </motion.div>
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [targetAudience, setTargetAudience] = useState('pharmacist'); // Default, but toggleable
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showSuccessBanner, setShowSuccessBanner] = useState(window.location.search.includes('success=contact'));

  // Clear query param if present so banner doesn't stick around on refresh
  if (showSuccessBanner && window.history.replaceState) {
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  const goToCheckout = (course) => {
    if (course.stripeUrl) {
      window.location.href = course.stripeUrl;
      return;
    }
    setSelectedCourse(course);
    setCurrentPage('checkout');
    // Scroll to top
    window.scrollTo(0, 0);
  };

  const handleNav = (page, course = null) => {
    if (course) setSelectedCourse(course);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }

  const viewCourse = (course) => {
    setSelectedCourse(course);
    setCurrentPage('course-detail');
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage navigate={handleNav} />;
      case 'pharmacy': return <PharmacyPath viewCourse={viewCourse} navigate={handleNav} />;
      // Mapping old 'courses' redirects to pharmacy path for now, or could share logic
      case 'courses': return <PharmacyPath viewCourse={viewCourse} navigate={handleNav} />;
      case 'business-consulting': return <BusinessConsultingPath navigate={handleNav} />;
      case 'course-detail': return <CourseDetailPage course={selectedCourse} navigate={handleNav} goToCheckout={goToCheckout} />;
      case 'checkout': return <CheckoutPage course={selectedCourse} navigate={handleNav} />;
      case 'booking': return <BookingPage navigate={handleNav} />;
      case 'resources': return <ResourcesPage navigate={handleNav} />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      case 'download-success': return <DownloadSuccess navigate={handleNav} />;
      case 'home':
      default: return <HomePage navigate={handleNav} />;
    }
  };

  return (
    <div className="App">
      {/* SUCCESS BANNER OVERLAY */}
      <AnimatePresence>
        {showSuccessBanner && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-0 left-0 w-full z-50 bg-teal text-white p-4 shadow-lg flex justify-between items-center"
          >
            <div className="container mx-auto flex items-center gap-3">
              <CheckCircle size={24} />
              <div>
                <p className="font-bold text-lg">Inquiry Sent Successfully!</p>
                <p className="text-sm opacity-90">We have sent you a confirmation email. We'll be in touch within 3 business days.</p>
              </div>
            </div>
            <button onClick={() => setShowSuccessBanner(false)} className="text-white hover:text-navy mr-4 transition-colors font-bold text-xl">&times;</button>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar setPage={handleNav} currentPage={currentPage} />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ paddingTop: '80px', minHeight: '80vh' }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
      <Footer navigate={handleNav} />
    </div>
  );
}

export default App;
